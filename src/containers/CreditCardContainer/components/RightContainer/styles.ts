import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export default ({ breakpoints }: Theme) =>
  createStyles({
    container: {
      padding: "100px 0px",
      [breakpoints.up("md")]: {
        padding: "100px 0px 0px",
      },
    },
    form: {
      [breakpoints.up("md")]: {
        marginTop: -300,
      },
    },
  });
