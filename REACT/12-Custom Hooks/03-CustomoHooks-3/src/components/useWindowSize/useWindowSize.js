import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize,setWindowsSize] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight
      }));
      
      useEffect (()=> {
        //No está terminado

      })

}