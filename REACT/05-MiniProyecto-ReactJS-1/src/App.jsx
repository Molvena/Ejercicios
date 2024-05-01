import React from 'react'
import { useState } from 'react'
import './App.css'

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    origin: "Earth (C-137)",      
    },
  
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    origin: "unknown",  
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    origin: "Earth (Replacement Dimension)",  
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    origin: "Earth (Replacement Dimension)",  
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    origin: "Earth (Replacement Dimension)",  
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    origin: "Abadango",  
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    origin: "Earth (Replacement Dimension)",  
  },

  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    origin: "unknown",  
  },
];
 export const App = () => {
  
  const [characterList, setCharacterList] = useState(charactersMock)

  return (
    <>      
        {characterList.map((character)=>(
          <div className="character" key={character.id}>
             {character.status === "Alive" && 
             <figure>
            <img src={character.image} alt={character.name} />            
            <h2>{character.name}</h2>
            <h4>{character.status}</h4>
            <h4>Origin: {character.origin}</h4>
            </figure>
 }
          </div>
        ))}
   
     
     
      
    </>
  )
}


