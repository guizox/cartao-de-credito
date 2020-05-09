import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#C9C9C9",
        fontWeight: 100,
      },
    },
    MuiButton: {
      contained: {
        boxShadow:
          "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
        backgroundColor: "#DE4B4B",
        color: "#FFFFFF",
        borderRadius: "10px",
        fontSize: 17,
        height: 51,
        textTransform: "uppercase",
        fontFamily: "SF Pro Text",
      },
    },
    MuiMenuItem: {
      root: {
        color: "black",
      },
    },
  },
});

export default theme;
