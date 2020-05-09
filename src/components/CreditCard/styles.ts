import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export default ({ breakpoints }: Theme) =>
  createStyles({
    creditCardContainer: {
      width: "78%",
      position: "absolute",
      [breakpoints.up("lg")]: {
        marginLeft: "3%",
        marginTop: "-255px",
      },
    },
    image: {
      width: "84vw",
      marginTop: 130,
      [breakpoints.up("lg")]: {
        marginTop: 500,
        width: 600,
      },
    },
    creditCardNumber: {
      position: "absolute",
      marginTop: "-119px",
      marginLeft: "2.2rem",
      fontSize: "1.3rem",
      width: "100%",
      letterSpacing: "0.2rem",
      color: "#FFFFFF",
      [breakpoints.up("lg")]: {
        marginTop: "-210px",
        fontSize: "3.2rem",
      },
    },
    cardText: {
      fontSize: "0.8rem",
      fontFamily: "SF Pro Text",
      letterSpacing: "0.2rem",
      color: "#FFFFFF",
      [breakpoints.up("lg")]: {
        fontSize: "1.5rem",
      },
    },
    textContainer: {
      padding: "0px 30px",
      position: "absolute",
      marginTop: -60,
      width: 305,
      [breakpoints.up("lg")]: {
        marginTop: "-110px",
        width: 570,
      },
    },
  });
