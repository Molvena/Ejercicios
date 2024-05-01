import { Languagesh } from "../../components";
import { Hobbies } from "../../data";


const languages = Hobbies.languages.map((language, index)=> ({
    language: language.language,
    wrlevel: language.wrlevel,
    splevel: language.splevel,
    index:index
}));


export const Languagesp = ()=> {
    return (
      <>
        {languages.map((language, index) => (
          <Languagesh key={index} Lenguaje={language} index={index} />
        ))}
      </>
    );
  }
