import React from 'react'

import {
   BrowserRouter as Router,
   Link,
   Switch,
   Route
} from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Users from "../pages/Users"


import './style.css'


function NavBar() {
   return (
      <Router>
         <div className="container">
            <nav className="navbar">
               <ul>
                  <li><Link className="navbar-Link" to="/">Home</Link></li>
                  <li><Link className="navbar-Link" to="/About">About</Link></li>
                  <li><Link className="navbar-Link" to="/Users">Users</Link></li>   
               </ul>
            </nav>
            {/* Route do React, a doc deve ter estilo ja prontos, olhar isso pra melhorar o codigo. */}
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/About" component={About} />
               <Route path="/Users" component={Users} />
               {/* Precisa do exact pra nao haver um bug no codigo, por todas as rotas comecarem com `/` */}
            </Switch>
         </div>
      </Router>
   )
}

export default NavBar;

