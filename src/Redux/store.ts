import { createStore, compose, applyMiddleware, StoreEnhancer } from "redux";
import {
  install,
  combineReducers,
  StoreCreator,
  Loop,
  LiftedLoopReducer,
  CmdType,
} from "redux-loop";
import { composeWithDevTools } from "redux-devtools-extension";

import { locationReducer } from "./Location/reducer";
import { searchReducer } from "./Search/reducer";

const enhanceStoreCreate = createStore as StoreCreator;

const reducers = {
  locationState: locationReducer,
  searchState: searchReducer,
};

type TypeWithGeneric<T> = T[];
type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : never;

export const rootReducer = combineReducers(reducers);
export type RootReducer = typeof reducers;

export type RootState = {
  [K in keyof RootReducer]: RootReducer[K] extends LiftedLoopReducer<any>
    ? Exclude<ExtractGeneric<ReturnType<RootReducer[K]>>, CmdType>
    : Exclude<ReturnType<RootReducer[K]>, Loop<any>>;
};

type EnhancedStore = StoreEnhancer<RootState, Record<string, unknown>>;

let composedEnhancers: EnhancedStore;

if (process.env.NODE_ENV === "production") {
  composedEnhancers = compose(install());
} else {
  composedEnhancers = composeWithDevTools<RootState, Record<string, unknown>>(
    applyMiddleware() as EnhancedStore,
    install()
  );
}

export const store = enhanceStoreCreate(
  rootReducer,
  undefined,
  composedEnhancers
);

export default store;
