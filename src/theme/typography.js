import palette from "./palette";

export default {
  h1: {
    fontFamily: "Museo, serif",
    fontStyle: "normal",
    color: palette.white,
    fontWeight: 900,
    fontSize: "45px",
    letterSpacing: "0px"
  },
  h2: {
    fontFamily: "Museo, serif",
    fontStyle: "normal",
    color: palette.white,
    fontWeight: 900,
    fontSize: "32px",
    letterSpacing: "0px"
  },
  h3: {
    color: palette.mediumGray,
    fontWeight: 300,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "30px",
    letterSpacing: "0px",
    lineHeight: "30px"
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: "-0.06px",
    lineHeight: "24px"
  },
  h5: {
    color: palette.text.primary,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  subtitle1: {
    fontFamily: "Roboto",
    color: palette.black,
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "25px"
  },
  subtitle2: {
    fontFamily: "Roboto",
    color: palette.mainGray,
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "21px"
  },
  body1: {
    fontFamily: "Roboto",
    color: palette.lightGray,
    fontSize: "16px",
    letterSpacing: "0px"
  },
  body2: {
    fontFamily: "Roboto",
    color: palette.text.secondary,
    fontSize: "14px",
    letterSpacing: "-0.04px",
    lineHeight: "18px"
  },
  button: {
    fontFamily: "Roboto",
    color: palette.lightBlue,
    textDecoration: "none",
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: 1.5,
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "11px",
    letterSpacing: "0.33px",
    lineHeight: "13px"
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase"
  }
};
