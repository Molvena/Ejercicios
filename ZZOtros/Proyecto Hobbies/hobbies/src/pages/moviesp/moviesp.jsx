import { Moviesh } from "../../components";
import { Hobbies } from "../../data";

 
 
const movies = Hobbies.movies.map((movie, index)=> ({
    name: movie.name,
    type: movie.type,
    genre: movie.genre,
    vote: movie.vote,
    index:index
}));


export const Moviesp = ()=> {
    return (
      <>
        {movies.map((movie, index) => (
          <Moviesh key={index} Pelicula={movie} index={index} />
        ))}
      </>
    );
  }
