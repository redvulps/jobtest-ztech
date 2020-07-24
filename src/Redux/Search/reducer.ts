import { Loop, LoopReducer } from "redux-loop";
import { SearchState, SearchAction } from "./types";
import { SEARCH_SET_KEYWORD } from "./constants";

const initialState: SearchState = {
  keyword: "",
};

export const searchReducer: LoopReducer<SearchState, SearchAction> = (
  state = initialState,
  action: SearchAction
): Loop<SearchState> | SearchState => {
  switch (action.type) {
    case SEARCH_SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
};
