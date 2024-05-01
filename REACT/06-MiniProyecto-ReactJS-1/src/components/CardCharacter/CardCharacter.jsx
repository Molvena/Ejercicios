import React from "react";
import "./cardCharacter.css";

export const CardCharacter = ({id, name, image, status, origin}) => {
    
    return (
       
        <figure>            
            <img src={image} alt={name} />
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h4>{status}</h4>
            <h4>Origen: {origin}</h4>                      
        </figure>
    );
};