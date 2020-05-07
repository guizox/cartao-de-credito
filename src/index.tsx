import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "theme/index";
import App from "App";

const render = (AppComponent: React.FC<{}>) => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <AppComponent />
    </MuiThemeProvider>,

    document.getElementById("root")
  );
};

render(App);
