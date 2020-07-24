import { WithDefaultActionHandling } from "redux-loop";

import { SEARCH_SET_KEYWORD } from "./constants";

export interface SearchState {
  keyword: string;
}

export interface SetSearchKeywordAction {
  type: typeof SEARCH_SET_KEYWORD;
  keyword: string;
}

export type SearchAction = WithDefaultActionHandling<SetSearchKeywordAction>;
