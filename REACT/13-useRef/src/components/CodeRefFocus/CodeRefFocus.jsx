import { useEffect, useRef } from 'react'


//en un formulario, le damos focus a un input cuando se renderice el componente por primera vez. 
//Para ello dentro del useEffect realizaremos focus al input, 
//y este useEffect ocurrirá solamente cuando el componente se monte.

export const CodeRefFocus = () => {
    const focusInputRef = useRef(null);
//useRef nos devuelve un objeto mutable con la unica propiedad: current
//A esa propiedad accedemos nombreVble.current y le damos el focus
    useEffect(() => {
        if (focusInputRef.current) focusInputRef.current.focus();
      }, []);
//Al estar el array de dependencias vacio solo se carga en el primer render

  return (
    <div>
    <form>
      <div>
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" placeholder="User" ref={focusInputRef} />
      </div>
      <div>
        <label htmlFor="pass">Constraseña</label>
        <input type="password" id="pass" placeholder="Pass" />
      </div>
    </form>
  </div>
  )
};
