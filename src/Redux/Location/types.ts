import { WithDefaultActionHandling } from "redux-loop";

import {
  LOCATION_FETCH_ADDRESS_FROM_COORDS_INIT,
  LOCATION_FETCH_ADDRESS_FROM_COORDS_SUCCESS,
  LOCATION_FETCH_ADDRESS_FROM_COORDS_ERROR,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_INIT,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_SUCCESS,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_ERROR,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_INIT,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_SUCCESS,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_ERROR,
  LOCATION_SUGGESTIONS_RESET,
} from "./constants";

export interface LocationCoords {
  lat: number;
  lng: number;
}

export interface LocationAddress {
  street: string;
  number: string;
  zipcode: string;
  complement: string;
}

export interface LocationSuggestion {
  description: string;
  placeId: string;
}

export interface LocationState {
  coords?: LocationCoords;
  address?: LocationAddress;
  suggestions: LocationSuggestion[];
  fetchSuggestionsFromQueryLoading: boolean;
  fetchSuggestionsFromQuerySuccess: boolean;
  fetchSuggestionsFromQueryError?: Error;
  fetchAddressFromSuggestionLoading: boolean;
  fetchAddressFromSuggestionSuccess: boolean;
  fetchAddressFromSuggestionError?: Error;
  fetchAddressFromCoordsLoading: boolean;
  fetchAddressFromCoordsSuccess: boolean;
  fetchAddressFromCoordsError?: Error;
}

export interface FetchAddressFromCoordsInitAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_COORDS_INIT;
  coords: LocationCoords;
}

export interface FetchAddressFromCoordsSuccessAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_COORDS_SUCCESS;
  coords: LocationCoords;
  address: LocationAddress;
}

export interface FetchAddressFromCoordsErrorAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_COORDS_ERROR;
  error: Error;
}

export interface FetchSuggestionsFromQueryInitAction {
  type: typeof LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_INIT;
  query: string;
}

export interface FetchSuggestionsFromQuerySuccessAction {
  type: typeof LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_SUCCESS;
  suggestions: LocationSuggestion[];
}

export interface FetchSuggestionsFromQueryErrorAction {
  type: typeof LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_ERROR;
  error: Error;
}

export interface FetchAddressFromSuggestionInitAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_INIT;
  placeId: string;
}

export interface FetchAddressFromSuggestionSuccessAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_SUCCESS;
  address: LocationAddress;
}

export interface FetchAddressFromSuggestionErrorAction {
  type: typeof LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_ERROR;
  error: Error;
}

export interface ResetSuggestionAction {
  type: typeof LOCATION_SUGGESTIONS_RESET;
}

export type LocationAction = WithDefaultActionHandling<
  | FetchAddressFromCoordsInitAction
  | FetchAddressFromCoordsSuccessAction
  | FetchAddressFromCoordsErrorAction
  | FetchSuggestionsFromQueryInitAction
  | FetchSuggestionsFromQuerySuccessAction
  | FetchSuggestionsFromQueryErrorAction
  | FetchAddressFromSuggestionInitAction
  | FetchAddressFromSuggestionSuccessAction
  | FetchAddressFromSuggestionErrorAction
  | ResetSuggestionAction
>;
