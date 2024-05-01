import { Readh } from "../../components";
import { Hobbies } from "../../data";

 
const read = Hobbies.read.map((book, index)=> ({
    title: book.title,
    genre: book.genre,
    bookImage: book.bookImage,
    index:index
}));


export const Readp = ()=> {
    return (
      <>
        {read.map((book, index) => (
          <Readh key={index} Libro={book} index={index} />
        ))}
      </>
    );
  }
