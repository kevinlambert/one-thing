/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TabBarItemsProps } from "./TabBarItems";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabBarOverridesProps = {
    TabBar?: PrimitiveOverrideProps<FlexProps>;
    TabBarItems?: TabBarItemsProps;
} & EscapeHatchProps;
export declare type TabBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TabBarOverridesProps | undefined | null;
}>;
export default function TabBar(props: TabBarProps): React.ReactElement;
