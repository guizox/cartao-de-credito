import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const CreditCardContainer = lazy(() =>
  import("containers/CreditCardContainer")
);

const Router = () => {
  return (
    <React.Fragment>
      <div style={{ height: "100vh" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={CreditCardContainer} exact />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default Router;
