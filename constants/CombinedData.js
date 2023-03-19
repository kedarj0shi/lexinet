import { abbreviation } from "./AbbreviationData";
import { terms } from "./TermsData";

const Terms = terms.Terms;
export const COMBINEDATA = [...abbreviation, ...Terms];
