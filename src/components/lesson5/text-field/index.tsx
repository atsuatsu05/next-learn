import React, { forwardRef } from "react";

type TextFieldProps = {
    type: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ type }, ref) => {
        return <input type={type} ref={ref} />;
    },
);

TextField.displayName = "TextField";
