import React, { Suspense } from "react";
import { Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ROUTES from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin tip="Please wait..." />
        </div>
      }
    >
      <Routes>
        <Route index element={<Login />} />
        <Route path="/protected" element={<ProtectedRoute />}>
          {ROUTES?.dashboard.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                index={route.index}
                element={route.component}
              />
            );
          })}
        </Route>
        <Route path="/protected/customer" element={<ProtectedRoute />}>
          {ROUTES?.customer.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                index={route.index}
                element={route.component}
              />
            );
          })}
        </Route>
        <Route
          path="/protected/submission-product"
          element={<ProtectedRoute />}
        >
          {ROUTES?.submissionproduct.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                index={route.index}
                element={route.component}
              />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
