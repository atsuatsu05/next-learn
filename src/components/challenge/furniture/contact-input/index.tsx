import React, { forwardRef } from "react";
import styles from "./index.module.scss";

type ContactInputProps = {
    label: string;
    type: string;
};

export const ContactInput = forwardRef<HTMLInputElement, ContactInputProps>(
    ({ label, ...props }, ref) => {
        return (
            <>
                <label className={styles.label}>{label}</label>
                <input className={styles.input} ref={ref} {...props} />
            </>
        );
    },
);

ContactInput.displayName = "ContactInput";
