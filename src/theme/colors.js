import { buildGradient } from "./gradient";

export const superDarkBlue = "rgba(0,118,187)";
export const mediumBlue = "#29a7f0";
export const normalBlue = "#96dafc";
export const superLightBlue = "#cbf0fe";

export const blue = "#357FFA";
export const lightBlue = "#009fd7";
export const highlightBlue = "#CCF0FF";

export const darkBlueGradient = "#16487a";
export const lightBlueGradient = "#2787e6";

export const superLightGray = "#EBEBED";
export const lightGray = "#727272";
export const hoverGray = "#dfe1e0";
export const mainGray = "#6D6D6D";
export const mediumGray = "#515350";
export const darkGray = "#666666";

export const darkRed = "#DE4B4B";
export const lightRed = "#e40021";

export const darkYellow = "#84671b";
export const lightYellow = "#f8c23b";

export const black = "#000000";
export const white = "#ffffff";

export const tv = superLightBlue;
export const landLine = superDarkBlue;
export const mobile = darkRed;

export const patternGreen = "#008f59";
export const patternBlue = "#138496";
export const patternGray = "#515350";

export const success = "#10c978";
export const error = "#B50202";
export const waiting = "#FBBD26";
export const validating = "#009BDB";
export const waitingSigning = "#FF8948";
export const finalizing = "#9974FF";
export const approved = "#098E54";
export const invalid = "#9a9a9a";
export const deleting = "#000F26";
export const finished = "#39C970";
export const charging = "#B502B5";

export const lightOrange = "#fe9e68";

export const lightGreen = "#00b871";

export const lightGreenGradient = "linear-gradient(to right, #00613b, #00b871)";
export const blueGradient = buildGradient(darkBlueGradient, lightBlueGradient);
export const yellowGradient = buildGradient(darkYellow, lightYellow);
export const invertedYellowGradient = buildGradient(lightYellow, darkYellow);
