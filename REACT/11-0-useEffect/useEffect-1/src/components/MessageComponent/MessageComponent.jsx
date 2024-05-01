import { useEffect } from "react";


export const MessageComponent = () => {

    useEffect(() => {
        console.log('Me monto en el DOM');
      
        return () => {
          console.log('Me desmonto del DOM');
        };
      }, []);

  return (
    <div>Soy un Iron Man</div>
  )
}
