import React, { useState } from "react";
import styles from "./card.module.css";

const Card = ({ name, amount, speed, type, onClick }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onClick && onClick(!selected);
    };

    return (
        <div
            className={`${styles.card} ${selected ? styles.selected : ''}`}
            style={{
                height: type === "Red" ? '26rem' : '25rem',
                marginTop: type === "Red" ? '0' : '0.5rem',
            }}
            onClick={handleClick}
        >
            <h4 className={styles.cardTitle} style={{ backgroundColor: type }}>{name}</h4>
            <p className={styles.cardAmount} style={{ backgroundColor: type }}>
                {amount}<span className={styles.cardCurrency}>руб/мес</span>
            </p>
            <p className={styles.cardSpeed}>{speed}</p>
            <p className={styles.cardFooter}>Объем включенного трафика неограничен</p>
        </div>
    );
};

export default Card;
