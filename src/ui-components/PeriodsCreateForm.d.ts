/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PeriodsCreateFormInputValues = {
    order?: number;
    title?: string;
};
export declare type PeriodsCreateFormValidationValues = {
    order?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeriodsCreateFormOverridesProps = {
    PeriodsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeriodsCreateFormProps = React.PropsWithChildren<{
    overrides?: PeriodsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PeriodsCreateFormInputValues) => PeriodsCreateFormInputValues;
    onSuccess?: (fields: PeriodsCreateFormInputValues) => void;
    onError?: (fields: PeriodsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeriodsCreateFormInputValues) => PeriodsCreateFormInputValues;
    onValidate?: PeriodsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PeriodsCreateForm(props: PeriodsCreateFormProps): React.ReactElement;
