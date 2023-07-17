import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import { privateRouter, publicRouter } from "../router/router";
import { AuthContext } from "../context/context";
import Loader from "./ui/loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  
  if(isLoading) {
        return <Loader/>
  }
  
  return isAuth ? (
    <Routes>
      {privateRouter.map((route) => (
        <Route
          key={route.path}
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRouter.map((route) => (
        <Route
          key={route.path}
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
