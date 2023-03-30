import { Button } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const location = useLocation();
  console.log(location);
  const submit = () => {
    sessionStorage.setItem("token", "masuk");
    navigation("/protected", { replace: true });
  };

  if (sessionStorage.getItem("token")) {
    return <Navigate to={"/protected"} replace />;
  }
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Button type="primary" danger onClick={submit}>
        Login
      </Button>
    </div>
  );
};

export default Login;
