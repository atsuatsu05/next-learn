import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

type DetailImageProps = {
    src: string;
    alt: string;
};

export const DetailImage: React.FC<DetailImageProps> = ({ src, alt }) => {
    return (
        <Image
            className={styles.detail}
            src={src}
            width={250}
            height={200}
            alt={alt}
        />
    );
};
