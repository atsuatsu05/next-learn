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
            width={800}
            height={900}
            alt="メインビジュアル"
        />
    );
};
