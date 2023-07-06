import React, { useState } from "react";
import "./_app-header.scss";
import { ReactComponent as IconMenu } from "@material-design-icons/svg/outlined/menu.svg";

import IconButton from "./IconButton";
import Menu from "./menu";

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
        <div>My one thing</div>
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
