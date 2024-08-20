import React, { forwardRef } from "react";
import styles from "./index.module.scss";

type ContactTextAreaProps = {
    label: string;
};

export const ContactTextArea = forwardRef<
    HTMLTextAreaElement,
    ContactTextAreaProps
>(({ label }, ref) => {
    return (
        <>
            <label className={styles.label}>{label}</label>
            <textarea className={styles.textarea} ref={ref} />
        </>
    );
});

ContactTextArea.displayName = "ContactTextArea";
