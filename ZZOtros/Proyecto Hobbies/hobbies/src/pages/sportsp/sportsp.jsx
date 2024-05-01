import { Sportsh } from "../../components";
import { Hobbies } from "../../data";
 
 
const sports = Hobbies.sports.map((sport, index)=> ({
    name: sport.name,
    indoor: sport.indoor,
    favoriteTeam: sport.favoriteTeam,
    index:index
}));


export const Sportsp = ()=> {
    return (
      <>
        {sports.map((sport, index) => (
          <Sportsh key={index} Deporte={sport} index={index} />
        ))}
      </>
    );
  }
