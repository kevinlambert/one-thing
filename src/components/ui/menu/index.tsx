import React, { useEffect, MouseEvent } from "react";
import "./_menu.scss";
import { NavLink, useLocation } from "react-router-dom";
import IconButton from "../IconButton";
import { ReactComponent as IconClose } from "@material-design-icons/svg/outlined/close.svg";
import ModalBackground from "../modal";

type Props = {
  isMenuOpen: boolean;
  onCloseHandler: any;
};

export default ({ isMenuOpen, onCloseHandler }: Props) => {
  const linkClickedHander = (e: MouseEvent) => {
    if (e.target instanceof HTMLAnchorElement) {
      onCloseHandler(null);
    }
  };

  return (
    <>
      <ModalBackground
        isShow={isMenuOpen}
        onClick={onCloseHandler}
      ></ModalBackground>
      <div
        className="menu"
        style={isMenuOpen ? { display: "flex" } : { display: "none" }}
      >
        <div className="menu-close-container">
          <IconButton
            icon={<IconClose></IconClose>}
            label="Close"
            onClick={onCloseHandler}
          ></IconButton>
        </div>
        <div className="menu-items" onClick={linkClickedHander}>
          <NavLink to={"/thing/3months"}>Set focus period</NavLink>
          <NavLink to={"/thing/week"}>Subscription</NavLink>
          <NavLink to={"/thing/today"}>Sign out</NavLink>
        </div>
      </div>
    </>
  );
};
