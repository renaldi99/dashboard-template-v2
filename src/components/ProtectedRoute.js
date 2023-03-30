import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const ProtectedRoute = () => {
  const location = useLocation();
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default ProtectedRoute;
