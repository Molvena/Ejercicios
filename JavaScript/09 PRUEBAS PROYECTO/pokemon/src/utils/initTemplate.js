import { PrintHeader} from "../Components/Estructura/Header/Header";
import { PrintMain } from "../Components/Estructura/Main/Main";
import { PrintFooter } from "../Components/Estructura/Footer/Footer";
import { Listener } from "../Components/Nav/Nav";

export const initTemplate = () =>{
    PrintHeader()
    PrintMain() 
    PrintFooter();
   Listener();
};
