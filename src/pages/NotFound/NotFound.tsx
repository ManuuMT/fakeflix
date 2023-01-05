import React from "react";
import "./styles/NotFound.scss";
import { useRouteError } from "react-router-dom";
export interface NotFoundInterface {}

type RouteError = {
  statusText?: string;
  message?: string;
};

const NotFound: React.FC<NotFoundInterface> = () => {
  const error = useRouteError() as RouteError;
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
};

export default NotFound;
