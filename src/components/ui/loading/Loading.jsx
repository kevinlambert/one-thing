import React from "react";
import { useSelector } from "react-redux";
import "./_loading.scss";

export default () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return isLoading ? (
    <div className="loading-container">
      <div>Loading...</div>
    </div>
  ) : null;
};
