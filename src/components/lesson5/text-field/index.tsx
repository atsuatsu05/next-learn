import React, { forwardRef } from "react";

type TextFieldProps = {
    type: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ type, ...props }, ref) => {
        return <input type={type} ref={ref} {...props} />;
    },
);

TextField.displayName = "TextField";
