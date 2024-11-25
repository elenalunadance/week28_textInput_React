import React from "react";
import "./card.css";


const Card = (props) => {

return (
    <div className="card" style={{ 
        height: props.type === "Red" ? '26rem' : '25rem', 
        marginTop: props.type === "Red" ? '0' : '0.5rem' 
    }}
    >
        <h4 className="cardTitle" style={{backgroundColor: props.type}}>{props.name}</h4>
        <p className="cardAmount" style={{backgroundColor: props.type}}>{props.amount}<span className="cardCurrency">руб/мес</span></p>
        <p className="cardSpeed">{props.speed}</p>
        <p className="cardFooter">Объем включенного трафика неограничен</p>
    </div>
    );
};

export default Card;