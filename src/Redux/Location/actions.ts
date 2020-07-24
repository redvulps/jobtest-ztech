import {
  LocationAction,
  LocationAddress,
  LocationCoords,
  LocationSuggestion,
} from "./types";
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

const { GOOGLE_API_KEY } = process.env;

export const fetchAddressFromCoordsInit = (
  coords: LocationCoords
): LocationAction => ({
  type: LOCATION_FETCH_ADDRESS_FROM_COORDS_INIT,
  coords,
});

export const fetchAddressFromCoordsSuccess = ({
  coords,
  address,
}: {
  address: LocationAddress;
  coords: LocationCoords;
}): LocationAction => ({
  type: LOCATION_FETCH_ADDRESS_FROM_COORDS_SUCCESS,
  coords,
  address,
});

export const fetchAddressFromCoordsError = (error: Error): LocationAction => ({
  type: LOCATION_FETCH_ADDRESS_FROM_COORDS_ERROR,
  error,
});

export const fetchAddressFromCoords = (
  coords: LocationCoords
): Promise<{ address: LocationAddress; coords: LocationCoords }> => {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`
  )
    .then((response) => response.json())
    .then((responseJson: any) => {
      const adddressComponents = responseJson.results[0]
        .address_components as any[];

      const number = adddressComponents.find((component: any) => {
        return component.types.indexOf("street_number") !== -1;
      });

      const street = adddressComponents.find((component: any) => {
        return component.types.indexOf("route") !== -1;
      });

      const zipcode = adddressComponents.find((component: any) => {
        return component.types.indexOf("postal_code") !== -1;
      });

      return {
        coords,
        address: {
          number: number ? number.long_name : "",
          street: zipcode ? street.long_name : "",
          zipcode: zipcode ? zipcode.long_name : "",
          complement: "",
        },
      };
    });
};

export const fetchSuggestionsFromQueryInit = (
  query: string
): LocationAction => ({
  type: LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_INIT,
  query,
});

export const fetchSuggestionsFromQuerySuccess = (
  suggestions: LocationSuggestion[]
): LocationAction => ({
  type: LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_SUCCESS,
  suggestions,
});

export const fetchSuggestionsFromQueryError = (
  error: Error
): LocationAction => ({
  type: LOCATION_FETCH_SUGGESTIONS_FROM_QUERY_ERROR,
  error,
});

export const fetchSuggestionsFromQuery = (query: string) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      query
    )}&key=${GOOGLE_API_KEY}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const { predictions } = responseJson;

      return predictions.map((prediction: any) => {
        return {
          description: prediction.description,
          placeId: prediction.place_id,
        };
      });
    });
};

export const fetchAddressFromSuggestionInit = (placeId: string) => ({
  type: LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_INIT,
  placeId,
});

export const fetchAddressFromSuggestionSuccess = (
  address: LocationAddress
): LocationAction => ({
  type: LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_SUCCESS,
  address,
});

export const fetchAddressFromSuggestionError = (
  error: Error
): LocationAction => ({
  type: LOCATION_FETCH_ADDRESS_FROM_SUGGESTION_ERROR,
  error,
});

export const fetchAddressFromSuggestion = (
  placeId: string
): Promise<LocationAddress> => {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const { address_components: adddressComponents } = responseJson.result;
      const number = adddressComponents.find((component: any) => {
        return component.types.indexOf("street_number") !== -1;
      });

      const street = adddressComponents.find((component: any) => {
        return component.types.indexOf("route") !== -1;
      });

      const zipcode = adddressComponents.find((component: any) => {
        return component.types.indexOf("postal_code") !== -1;
      });

      const address = {
        number: number ? number.long_name : "",
        street: street ? street.long_name : "",
        zipcode: zipcode ? zipcode.long_name : "",
        complement: "",
      };

      return address;
    });
};

export const sugesstionsReset = (): LocationAction => ({
  type: LOCATION_SUGGESTIONS_RESET,
});
