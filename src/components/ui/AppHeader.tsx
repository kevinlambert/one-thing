import * as React from "react";
import "./_app-header.scss";
import { ReactComponent as IconMenu } from "@material-design-icons/svg/outlined/menu.svg";

import IconButton from "./IconButton";

type Props = {
  isHideMenu?: boolean;
};

export default ({ isHideMenu = false }: Props) => (
  <div className="app-header">
    <div>My one thing</div>
    {isHideMenu ? (
      <></>
    ) : (
      <IconButton icon={<IconMenu></IconMenu>} label="Menu"></IconButton>
    )}
  </div>
);
