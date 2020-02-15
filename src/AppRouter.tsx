import React, { Suspense } from "react";
import { mount, lazy } from "navi";
import { Router, View } from "react-navi";

import AppLayout from "./layouts/AppLayout";
import getRoute from "./utils/getRoute";

const routes = mount({
  "/": lazy(() => import("./pages/home")),
  "/login": lazy(() => import("./pages/login")),
  "/register": lazy(() => import("./pages/register")),
  "/problems": getRoute(() => import("./pages/problem"), "problems"),
  "/problem": getRoute(() => import("./pages/problem"), "problem")
});

const AppRouter: React.FC = () => {
  return (
    <Router routes={routes}>
      <AppLayout>
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </AppLayout>
    </Router>
  );
};

export default AppRouter;
