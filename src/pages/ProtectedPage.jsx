import React from "react";
import { useUserContext } from "../Contexts/UserConstext";
import { Navigate, useLocation, Outlet } from "react-router-dom";
const ProtectedPage = () => {
  const { user } = useUserContext();
  const location = useLocation();
  if (!user) {
    <Navigate
      to="/sign in"
      state={{ path: location.pathname }}
      replace={true}
    />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedPage;
