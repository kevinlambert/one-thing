/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeadingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DisplayHeaderOverridesProps = {
    DisplayHeader?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Tuesday, 14 June 2023"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DisplayHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    Title?: String;
    Date?: String;
} & {
    overrides?: DisplayHeaderOverridesProps | undefined | null;
}>;
export default function DisplayHeader(props: DisplayHeaderProps): React.ReactElement;
