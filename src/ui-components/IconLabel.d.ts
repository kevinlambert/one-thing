/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconLabelOverridesProps = {
    IconLabel?: PrimitiveOverrideProps<FlexProps>;
    calendar_month?: PrimitiveOverrideProps<ViewProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IconLabelProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "Default" | "NextTo" | "WithBorder";
} & {
    overrides?: IconLabelOverridesProps | undefined | null;
}>;
export default function IconLabel(props: IconLabelProps): React.ReactElement;
