import { useState } from 'react'

import './App.css'
import { hobbies } from './data/hobbies';
import { Idiomas } from './components/Idiomas/Idiomas';
import { Peliculas } from './components/Peliculas/Peliculas';
import { Read } from './components/Read/Read';
import { SongsHeard } from './components/SongsHeard/SongsHeard';
import { Sports } from './components/Sports/Sports';

export const App = () => {
 const data = hobbies;

  return (
    <>
    <h1>Mis Hobbies</h1>
      <div>
      <h2>Idiomas</h2>
      {data.languages.map((item) => (
        <Idiomas
        key={item.id}
        idioma={item.language}
        wrlevel={item.wrlevel}
        splevel={item.splevel}
        />
      ))}
      </div>
      <div>
        <h2>Películas</h2>
        {data.movies.map((item) =>(
          <Peliculas
          key={item.name}
          nombre={item.name}
          tipo={item.type}
          genero={item.genre}
          puntuacion={item.vote}
          />
        ))}
      </div>
      <div>
        <h2>Libros</h2>
        {data.read.map((item) =>(
          <Read
          key={item.id}
          titulo={item.title}
          autorN={item.authorName}
          autorS={item.authorSurname}          
          genero={item.genre} 
          fechaP={item.dateOfPublication}
          fechaA={item.authorBirthDate}
          image={item.bookImage}
          />
        ))}
      </div>
      <div>
        <h2>Música</h2>
        {data.songsHeard.map((item) =>(
          <SongsHeard
          key={item.id}
          song={item.song}
          artist={item.artist}
          genre={item.genre}          
          />
        ))}
      </div>
      <div>
        <h2>Deportes</h2>
        {data.sports.map((item) =>(
          <Sports
          key={item.id}
          name={item.name}
          indoor={item.indoor}
          favoriteTeam={item.favoriteTeam}          
          />
        ))}
      </div>


    </>
  )
}


