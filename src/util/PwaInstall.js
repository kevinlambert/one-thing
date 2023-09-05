import React from "react";
import "@khmyznikov/pwa-install";
import logger from "../logger";

export default () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const pwaInstall = ref.current;

    if (!pwaInstall.isUnderStandaloneMode) pwaInstall.showDialog();

    logger.debug(
      `pwaInstall.isUnderStandaloneMode: ${pwaInstall.isUnderStandaloneMode}`
    );
  }, [ref]);

  return (
    <pwa-install
      ref={ref}
      icon="/icon512.png"
      manifest-url="/manifest.json"
      name="ONE Thing - APP"
      description="In a world of distraction there is ONE Thing you can do."
      install-description="Install the ONE Thing app on your device. Follow the instruction below."
    ></pwa-install>
  );
};
