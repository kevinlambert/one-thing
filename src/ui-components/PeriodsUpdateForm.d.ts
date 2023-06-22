/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Periods } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PeriodsUpdateFormInputValues = {
    order?: number;
    title?: string;
};
export declare type PeriodsUpdateFormValidationValues = {
    order?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeriodsUpdateFormOverridesProps = {
    PeriodsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeriodsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PeriodsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    periods?: Periods;
    onSubmit?: (fields: PeriodsUpdateFormInputValues) => PeriodsUpdateFormInputValues;
    onSuccess?: (fields: PeriodsUpdateFormInputValues) => void;
    onError?: (fields: PeriodsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeriodsUpdateFormInputValues) => PeriodsUpdateFormInputValues;
    onValidate?: PeriodsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PeriodsUpdateForm(props: PeriodsUpdateFormProps): React.ReactElement;
