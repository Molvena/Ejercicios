import { Songsheardh } from "../../components";
import { Hobbies } from "../../data";


 
const songsheard = Hobbies.songsHeard.map((song, index)=> ({
    song: song.song,
    artist: song.artist,
    genre: song.genre,
    index:index
}));


export const Songsheardp = ()=> {
    return (
      <>
        {songsheard.map((song, index) => (
          <Songsheardh key={index} Cancion={song} index={index} />
        ))}
      </>
    );
  }
