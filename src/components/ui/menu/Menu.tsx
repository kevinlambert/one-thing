import React, { MouseEvent } from "react";
import "./_menu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { routePathHelper, routePaths } from "../../../AppRoutes";
import IconButton from "../IconButton";
import { ReactComponent as IconClose } from "@material-design-icons/svg/outlined/close.svg";
import ModalBackground from "../modal";
import SignOut from "./SignOut";
import { Divider, useTheme } from "@aws-amplify/ui-react";

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

        <div className="menu-items">
          <NavLink to={routePathHelper.tour({ step: 0 })}>View Tour</NavLink>
        </div>
        {/* <div className="menu-items">
          <NavLink to={routePaths.PLANS}>Plans</NavLink>
        </div>
        <div className="menu-items">
          <NavLink to={routePaths.MANAGEBILLING}>Manage billing</NavLink>
        </div> */}
        <div className="menu-items">
          <a href="mailto:onething@lambert.com.co?subject=Feedback on ONE Thing App&body=">
            Feedback
          </a>
        </div>
        <div className="menu-items" onClick={linkClickedHander}>
          <SignOut></SignOut>
        </div>
      </div>
    </>
  );
};
