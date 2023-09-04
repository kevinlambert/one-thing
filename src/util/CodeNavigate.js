import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";

export default () => {
  const navigate = useNavigate();
  const navigateTo = useSelector((state) => state.navigate);

  useEffect(() => {
    navigate(store.getState().navigate);
  }, [navigateTo]);

  return <Outlet />;
};
