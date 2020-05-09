import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export default ({ breakpoints }: Theme) =>
  createStyles({
    container: {
      height: "270px",
      padding: "8%",
      [breakpoints.up("md")]: {
        height: "100%",
        padding: "100px 64px",
      },
    },
    textContainer: {
      marginTop: "-80px",
      [breakpoints.up("md")]: {
        marginLeft: 20,
        maxHeight: 30,
        marginTop: "-280px",
      },
    },
    text: {
      [breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
    },
    logoContainer: {
      textAlign: "right",
    },
    logo: {
      width: 50,
      marginRight: 10,
      [breakpoints.up("lg")]: {
        width: 80,
      },
    },
  });
