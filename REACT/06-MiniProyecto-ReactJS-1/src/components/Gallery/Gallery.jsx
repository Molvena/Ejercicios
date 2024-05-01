import React from "react";
import "./gallery.css";
import { dataRicky } from "../../data/ricky.data";
import { CardCharacter } from "../CardCharacter/CardCharacter";

export const Gallery = () => {
    const data = dataRicky.results;
    //console.log(data)
        return (
        <>
        <div className = "galleryContainer">
            {data.map((item) => ( //Aquí pongo paréntesis en vez de llaves
            //{item.status} = "Alive" &&{
            <CardCharacter
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            origin={item.origin.name}           
             />           
         //   }
            ))}
        </div>
        </>
    );
};