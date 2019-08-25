import React from "react";

import { Loading } from "./styles";

const LoadingComponent = ({ children, active }) => {
  return active ? <Loading data-testid="Loading" /> : children;
};

export default LoadingComponent;
