import React from "react";
import "./cards.css";

const Cards = props => {
  return (
    <div className="img-container">
      <img id = "hero_image" alt={props.alt} src={props.src} onClick = {() => props.shuffle(props.id)}/>
    </div>
  )
};

export default Cards;