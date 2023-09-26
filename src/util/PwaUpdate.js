import React from "react";
import { useLocation } from "react-router-dom";
import logger from "../logger";

export default () => {
  const location = useLocation();

  React.useEffect(() => {
    // check for PWA update on route change
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.update();
      });
    }

    // Check if update has been found and reload page on next route change
    if (window.swUpdateReady) {
      window.swUpdateReady = false;
      window.stop();
      window.location.reload();
    }
  }, [location]);

  return <></>;
};
