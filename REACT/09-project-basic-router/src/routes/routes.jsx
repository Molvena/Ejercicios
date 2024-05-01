import React from 'react'
import { App } from '../App'
import { createBrowserRouter } from 'react-router-dom'
import { Home, About, NotFound, Heroes } from '../pages/index'
import { Heroe } from '../components/index'


export const router = createBrowserRouter([
    //cremos un array de objeto con las páginas
    {
        path: "/",
        element: <App/>,//App es el padre
        children:[
            {path:"/",
             element:<Home/>
            },
            {path:"/heroes",
            element:<Heroes/>
             },
            {path:"/heroe/:id",
            element: <Heroe/>
            },
            {path:"/about",
            element:<About/>
            },
            {path:"/*",
            element:<NotFound/>
            },
        
        ]

    }
])