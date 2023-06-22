/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconLabelProps } from "./IconLabel";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TabBarItemsOverridesProps = {
    TabBarItems?: PrimitiveOverrideProps<FlexProps>;
    IconLabel36732718?: IconLabelProps;
    IconLabel36732722?: IconLabelProps;
    IconLabel36732744?: IconLabelProps;
} & EscapeHatchProps;
export declare type TabBarItemsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TabBarItemsOverridesProps | undefined | null;
}>;
export default function TabBarItems(props: TabBarItemsProps): React.ReactElement;
