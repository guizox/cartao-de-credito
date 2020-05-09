import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export default ({ breakpoints }: Theme) =>
  createStyles({
    check: {
      color: "#DE4B4B",
    },
    numberWrapper: {
      border: "1px solid #DE4B4B",
      borderRadius: "50%",
      height: 20,
      width: 20,
      marginTop: 3,
    },
    number: {
      marginLeft: 6,
      marginTop: 5,
    },
    center: {
      textAlign: "center",
      fontSize: 20,
      marginTop: 3,
    },
  });
