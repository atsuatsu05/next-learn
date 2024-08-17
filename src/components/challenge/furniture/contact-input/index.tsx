import React, { forwardRef } from "react";
import styles from "./index.module.scss";

type ContactInputProps = {
    label: string;
    type: string;
};

export const ContactInput = forwardRef<HTMLInputElement, ContactInputProps>(
    ({ type, label }, ref) => {
        return (
            <>
                <label>{label}</label>
                <input className={styles.input} type={type} ref={ref} />
            </>
        );
    },
);

ContactInput.displayName = "ContactInput";
