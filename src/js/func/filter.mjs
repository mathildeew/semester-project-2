import { endedFilter } from "./filter/ended.mjs";
import { popular } from "./filter/popular.mjs";
import { showAll } from "./filter/showAll.mjs";

export function filter() {
  popular();
  endedFilter();
  showAll();
}
