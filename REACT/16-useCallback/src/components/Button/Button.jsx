import { useCallback, useState } from 'react'


//Un objeto en JavaScript es solo igual a sí mismo
//Puede compartir codigo con otro, tener el mismo código, 
//pero no serían estrictamente iguales
//useCallback te permite guardar la definicion de una función entre renderizados subsecuentes
//useCallback(fn,dependencias)
//fn es la función que deseas guardar en cache

//ponemos primero el ejemplo sin usar useCallback
//Cada vez que le doy al boton se renderiza todo

export const Button = ({handleClick, name}) => {
  console.log(`${name}rendered`)

  return (
    <button onClick={handleClick}>{name}</button>
  )
};

export const Counter = () => {
  console.log('counter rendered')
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    return (
      <>
        {countOne} {countTwo}
        <Button handleClick={() => setCountOne(countOne + 1)} name="button1" />
        <Button handleClick={() => setCountTwo(countTwo + 1)} name="button2" />
      </>
    )
  }
