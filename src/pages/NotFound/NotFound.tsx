import React from "react";
import "./NotFound.scss";
import { Link, useRouteError } from "react-router-dom";
export interface NotFoundInterface {}

type RouteError = {
  statusText?: string;
  message?: string;
};

const NotFound: React.FC<NotFoundInterface> = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="not-found">
      <h1 className="not-found-title">Lost your way?</h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="not-found-button">Netflix Home</div>
      </Link>
      {/* <p>{error?.statusText || error?.message}</p> */}
    </div>
  );
};

export default NotFound;
