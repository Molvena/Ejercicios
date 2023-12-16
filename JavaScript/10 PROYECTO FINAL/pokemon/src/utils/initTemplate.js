import {PrintTemplateHeader, PrintTemplateFooter, PrintTemplateMain} from "../Components/Estructura/index";
import { PrintMain } from "../Components/Estructura/Main/Main";
import { PrintFooter } from "../Components/Estructura/Footer/Footer";
import { Listener } from "../Components/Nav/Nav";

export const initTemplate = () =>{
    PrintTemplateHeader()
    PrintTemplateMain() 
    PrintTemplateFooter();
    Listener();
};
