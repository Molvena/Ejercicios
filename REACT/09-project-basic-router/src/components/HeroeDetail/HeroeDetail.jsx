
import React from 'react'
import "./heroeDetail.css"

export const HeroeDetail = ({heroe}) => {
  return (
    <>
    <h1>Name: {heroe.name}</h1>
    <p>Alias: {heroe.alias}</p>
    <p>Age: {heroe.age}</p>
    </>
  )
}















// import "./heroe.css";
// //Este componente recibe por props un heroe y retorna los valores a pintar
// export const Heroe = ({id, name, age, alias }) => {
//   return (
//     <div className="heroe">
//       Heroe

//     </div>
//   )
// }
     // {/* <h1>Name: {heroe.name}</h1>
      //<h4>Age: {heroe.age}</h4>
     // <h4>Alias: {heroe.alias}</h4> */}