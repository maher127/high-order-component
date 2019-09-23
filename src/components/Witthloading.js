import React from "react";
import Spinner from "./Spinner";

const WithLoading = Component => {
  return props => (props.isLoading ? <Spinner /> : <Component {...props} />);
};
export default WithLoading;
