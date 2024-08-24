import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

type MainImageProps = {
    src: string;
};

export const MainImage: React.FC<MainImageProps> = ({ src }) => {
    return (
        <Image
            className={styles.main}
            src={src}
            width={1000}
            height={600}
            alt="メインビジュアル"
        />
    );
};
