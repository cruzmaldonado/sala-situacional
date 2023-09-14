import React from 'react'
import  "./tailwind.css"
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Home from "../Home"
import MiCuenta from "../MiCuenta"
import VistaPdf from "../VistaPdf"
import SignIn from "../SignIn"
import MapaVenezuela from "../MapaVenezuela"
import NotFound from "../NotFound"
import Ficha from "../Ficha"

const App = () => {

    const AppRoutes=()=>{

        let routes=useRoutes([
    
            {path:'/',element:<Home/>},
            {path:'/mi-cuenta',element:<MiCuenta/>},
            {path:'/vista-pdf',element:<VistaPdf/>},
            {path:'/Sign-in',element:<SignIn/>},
            {path:'/mapa-venezuela',element:<MapaVenezuela/>},
            {path:'/ficha',element:<Ficha/>},
            {path:'/*',element:<NotFound/>},
    
            
        ])
    
    
            return routes
        }

  return (
    
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
   
  )
}

export default App