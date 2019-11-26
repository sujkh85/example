import CodeSplittingHOC from "./CodeSplittingHOC";

export const PageFileName = CodeSplittingHOC(() =>
  import(/*webpackChunkName: "PageFileName"*/ "../PageFileName")
);
