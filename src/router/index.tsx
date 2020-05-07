import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("containers/Home"));

const Router = () => {
  return (
    <React.Fragment>
      <div style={{ height: "100vh" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default Router;
