import React, { use } from "react";
import { PrivateContext } from "../Context/PrivateContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(PrivateContext);
  const location = useLocation();
  if (loading) {
    return (
      <div
        className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"
        bis_skin_checked="1"
      ></div>
    );
  }
  if (!user) {
    // redirect target page use loaction path name
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
