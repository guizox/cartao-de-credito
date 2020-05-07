import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import palette from "theme/palette";

export default ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      overflow: "visible",
      [breakpoints.up("lg")]: {
        overflow: "hidden",
      },
    },
    column: {
      display: "flex",
      alignContent: "center",
      borderRight: `1px solid ${palette.superLightGray}`,
      height: "100vh",
      [breakpoints.down("md")]: {
        height: "100%",
      },
    },
    leftColumn: {
      background: palette.darkRed,
    },
  });
