/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Periods as Periods0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThingCreateFormInputValues = {
    UserId?: string;
    text?: string;
    createdDateTime?: string;
    updatedDateTime?: string;
    Periods?: Periods0;
    period?: string;
};
export declare type ThingCreateFormValidationValues = {
    UserId?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    createdDateTime?: ValidationFunction<string>;
    updatedDateTime?: ValidationFunction<string>;
    Periods?: ValidationFunction<Periods0>;
    period?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThingCreateFormOverridesProps = {
    ThingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserId?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    createdDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    updatedDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    Periods?: PrimitiveOverrideProps<AutocompleteProps>;
    period?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThingCreateFormProps = React.PropsWithChildren<{
    overrides?: ThingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThingCreateFormInputValues) => ThingCreateFormInputValues;
    onSuccess?: (fields: ThingCreateFormInputValues) => void;
    onError?: (fields: ThingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThingCreateFormInputValues) => ThingCreateFormInputValues;
    onValidate?: ThingCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThingCreateForm(props: ThingCreateFormProps): React.ReactElement;
