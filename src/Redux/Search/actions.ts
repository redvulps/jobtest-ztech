import { SearchAction } from "./types";
import { SEARCH_SET_KEYWORD } from "./constants";

export const searchSetKeyword = (keyword: string): SearchAction => ({
  type: SEARCH_SET_KEYWORD,
  keyword,
});
