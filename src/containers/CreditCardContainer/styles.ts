import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import palette from "theme/palette";

export default ({ breakpoints }: Theme) =>
  createStyles({
    container: {
      padding: "0",
    },
    root: {
      overflow: "visible",
      [breakpoints.up("lg")]: {
        overflow: "hidden",
      },
    },
    column: {
      display: "flex",
      height: "100vh",
      [breakpoints.down("md")]: {
        height: "100%",
      },
    },
    leftColumn: {
      background: palette.darkRed,
    },
  });
