import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { HeroeDetail } from '../../components/HeroeDetail/HeroeDetail'
import { getHeroes } from '../../data/data'

export const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>

      <div>
        <h1>All heroes 🦸‍♂️🦸‍♀️</h1>
        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}













//import { dataHeroes } from "../../data/data";
// import { Heroe } from "../Heroe/Heroe";
// import "./heroes.css";

// export const Heroes = () => {
//  // const data = dataHeroes;
//   return (
//     <div className="heroes">
//       {/* {data.map((item)=>(
//         <Heroe 
//         key={item.id}  
//         name={item.name} 
//         age={item.age} 
//         alias={item.alias}/> */}
//       ))}
//     </div>
//   )
// }
