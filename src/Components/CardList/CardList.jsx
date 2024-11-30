import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import data from '../../data.json';
import styles from './cardList.module.css';


function CardList () {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className={styles.cardList}>
            {items.map(item => (
                <Card key={item.id} 
                name={item.name} 
                amount={item.amount} 
                speed={item.speed} 
                type={item.type}/>
     ))}
        </div>
    )
}

export default CardList