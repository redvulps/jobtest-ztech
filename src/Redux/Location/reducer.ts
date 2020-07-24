import { Cmd, loop, Loop, LoopReducer } from "redux-loop";
import { LocationState, LocationAction } from "./types";
import {
  LOCATION_FETCH_ADDRESS_FROM_COORDS_INIT,
  LOCATION_FETCH_ADDRESS_FROM_COORDS_SUCCESS,
  LOCATION_FETCH_ADDRESS_FROM_COORDS_ERROR,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_INIT,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_SUCCESS,
  LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_ERROR,
  LOCATION_SUGGESTIONS_RESET,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_INIT,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_SUCCESS,
  LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_ERROR,
} from "./constants";
import {
  fetchAddressFromCoords,
  fetchAddressFromCoordsSuccess,
  fetchAddressFromCoordsError,
  fetchSuggestionsFromQuery,
  fetchSuggestionsFromQuerySuccess,
  fetchSuggestionsFromQueryError,
  fetchAddressFromSuggestion,
  fetchAddressFromSuggestionSuccess,
  fetchAddressFromSuggestionError,
} from "./actions";

const initialState: LocationState = {
  coords: undefined,
  address: undefined,
  suggestions: [],
  fetchSuggestionsFromQueryLoading: false,
  fetchSuggestionsFromQuerySuccess: false,
  fetchSuggestionsFromQueryError: undefined,
  fetchAddressFromSuggestionLoading: false,
  fetchAddressFromSuggestionSuccess: false,
  fetchAddressFromSuggestionError: undefined,
  fetchAddressFromCoordsLoading: false,
  fetchAddressFromCoordsSuccess: false,
  fetchAddressFromCoordsError: undefined,
};

export const locationReducer: LoopReducer<LocationState, LocationAction> = (
  state = initialState,
  action: LocationAction
): Loop<LocationState> | LocationState => {
  switch (action.type) {
    case LOCATION_FETCH_ADDRESS_FROM_COORDS_INIT:
      return loop(
        {
          ...state,
          fetchAddressFromCoordsLoading: true,
          fetchAddressFromCoordsSuccess: false,
          fetchAddressFromCoordsError: undefined,
        },
        Cmd.run(fetchAddressFromCoords, {
          successActionCreator: fetchAddressFromCoordsSuccess,
          failActionCreator: fetchAddressFromCoordsError,
          args: [action.coords],
        })
      );

    case LOCATION_FETCH_ADDRESS_FROM_COORDS_SUCCESS:
      return {
        ...state,
        fetchAddressFromCoordsLoading: false,
        fetchAddressFromCoordsSuccess: true,
        fetchAddressFromCoordsError: undefined,
        coords: action.coords,
        address: action.address,
      };

    case LOCATION_FETCH_ADDRESS_FROM_COORDS_ERROR:
      return {
        ...state,
        fetchAddressFromCoordsLoading: false,
        fetchAddressFromCoordsSuccess: false,
        fetchAddressFromCoordsError: action.error,
      };

    case LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_INIT:
      return loop(
        {
          ...state,
          fetchSuggestionsFromQueryLoading: true,
          fetchSuggestionsFromQuerySuccess: false,
          fetchSuggestionsFromQueryError: undefined,
        },
        Cmd.run(fetchSuggestionsFromQuery, {
          successActionCreator: fetchSuggestionsFromQuerySuccess,
          failActionCreator: fetchSuggestionsFromQueryError,
          args: [action.query],
        })
      );

    case LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_SUCCESS:
      return {
        ...state,
        fetchSuggestionsFromQueryLoading: false,
        fetchSuggestionsFromQuerySuccess: true,
        fetchSuggestionsFromQueryError: undefined,
        suggestions: action.suggestions,
      };

    case LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_ERROR:
      return {
        ...state,
        fetchSuggestionsFromQueryLoading: false,
        fetchSuggestionsFromQuerySuccess: false,
        fetchSuggestionsFromQueryError: action.error,
      };

    case LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_INIT:
      return loop(
        {
          ...state,
          fetchAddressFromSuggestionLoading: true,
          fetchAddressFromSuggestionSuccess: false,
          fetchAddressFromSuggestionError: undefined,
        },
        Cmd.run(fetchAddressFromSuggestion, {
          successActionCreator: fetchAddressFromSuggestionSuccess,
          failActionCreator: fetchAddressFromSuggestionError,
          args: [action.placeId],
        })
      );

    case LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_SUCCESS:
      return {
        ...state,
        fetchAddressFromSuggestionLoading: false,
        fetchAddressFromSuggestionSuccess: true,
        fetchAddressFromSuggestionError: undefined,
        address: action.address,
      };

    case LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_ERROR:
      return {
        ...state,
        fetchAddressFromSuggestionLoading: false,
        fetchAddressFromSuggestionSuccess: false,
        fetchAddressFromSuggestionError: action.error,
      };

    case LOCATION_SUGGESTIONS_RESET:
      return {
        ...state,
        fetchSuggestionsFromQueryLoading: true,
        fetchSuggestionsFromQuerySuccess: false,
        fetchSuggestionsFromQueryError: undefined,
        fetchAddressFromSuggestionLoading: false,
        fetchAddressFromSuggestionSuccess: false,
        fetchAddressFromSuggestionError: undefined,
      };

    default:
      return state;
  }
};
