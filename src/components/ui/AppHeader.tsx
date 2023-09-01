import React, { useState } from "react";
import "./_app-header.scss";
import OnetThingText from "./OneThingText";
import { ReactComponent as IconMenu } from "@material-design-icons/svg/outlined/menu.svg";

import IconButton from "./IconButton";
import Menu from "./menu/Menu";

type Props = {
  isHideMenu?: boolean;
};

export default ({ isHideMenu = false }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} onCloseHandler={onClickHandler}></Menu>
      <div className="app-header">
        <div>
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.9em",
              fontWeight: "400",
            }}
          >
            My
          </span>{" "}
          <OnetThingText />
        </div>
        {isHideMenu ? (
          <></>
        ) : (
          <IconButton
            onClick={onClickHandler}
            icon={<IconMenu></IconMenu>}
            label="Menu"
          ></IconButton>
        )}
      </div>
    </>
  );
};
