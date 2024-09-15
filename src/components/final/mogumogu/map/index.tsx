import React from "react";
import styles from "./index.module.scss";

export const Map: React.FC = () => {
    return (
        <div className={styles.mapBox}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100453.07109293433!2d140.4582320581161!3d38.113247475355436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a47e43824e497%3A0x73a204463d8bb9f2!2z44CSOTg5LTA5MTYg5a6u5Z-O55yM5YiI55Sw6YOh6JS1546L55S66YGg5YiI55Sw5rip5rOJ!5e0!3m2!1sja!2sjp!4v1726372005920!5m2!1sja!2sjp"
                width="100%"
                height="450"
                loading="lazy"
                className={styles.map}
            ></iframe>
        </div>
    );
};
