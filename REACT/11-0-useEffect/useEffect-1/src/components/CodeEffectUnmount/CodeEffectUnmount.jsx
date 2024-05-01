import { useState } from 'react'
import { MessageComponent } from '../MessageComponent/MessageComponent';

export const CodeEffectUnmount = () => {
    //creamos un estado para definir si queremos nuestro componente visible o invisible
    const [visible, setVisible] = useState(false);
    //En nuestro return nos preguntamos si es visible o no paa hacer el renderizado
    //Creamos un boton que cambie el estado para visualizar el contenido
  return (
    <>{visible && <MessageComponent/>}
    <button onClick={() =>setVisible(!visible)}>Soy inevitable</button>
    </>
  )
}
