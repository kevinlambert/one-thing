import * as React from "react";
import './_app-header.scss';
import { ReactComponent as IconMenu } from '@material-design-icons/svg/outlined/menu.svg';

import IconButton from './IconButton';

export default () =>
    <div className="app-header">
        <div>My one thing</div>
        <IconButton
            icon={<IconMenu></IconMenu>} label="Menu"></IconButton>
    </div>
