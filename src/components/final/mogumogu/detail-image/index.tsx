import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

type DetailImageProps = {
    children?: React.ReactNode;
    src: string;
    alt: string;
};

export const DetailImage: React.FC<DetailImageProps> = ({
    src,
    alt,
    children,
}) => {
    return (
        <div className={styles.item}>
            <Image
                className={styles.detail}
                src={src}
                width={250}
                height={200}
                alt={alt}
            />
            <p>{children}</p>
        </div>
    );
};
