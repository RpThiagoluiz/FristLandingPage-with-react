import React from 'react'

import {
   BrowserRouter as Router,
   Link
} from "react-router-dom"




function NavBar() {
   return (
      <Router>

         <nav>
            <ul>
               <li>
                  <Link to="#">Home</Link>
               </li>
               <li>
                  <Link to="#">About</Link>
               </li>
               <li>
                  <Link to="#">Users</Link>
               </li>
            </ul>
         </nav>

      </Router>
   )
}

export default NavBar;

