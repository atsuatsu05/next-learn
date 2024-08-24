"use client";
import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type MapProps = {
    src: string;
    alt: string;
};

export const Map: React.FC<MapProps> = ({ src, alt }) => {
    return (
        <div className={styles.map}>
            <Image
                src={src}
                className={styles.image}
                alt={alt}
                width={600}
                height={300}
            />
        </div>
    );
};
