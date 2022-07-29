import './App.css';
import React from 'react';
import Home2 from './home2';
import  About from './about';
import Users from './user';
import { createFromIconfontCN } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Sixth_one(){
    return (<>
 <div class="container second">
 <nav class="navbar navbar-expand-lg navbar-light bg-light">

     <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
     <Router>
              <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                <Link class="nav-link"  to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link"  to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link  class="nav-link"  to="/users">Users</Link>
                  </li>
              </ul>
            </div>
          </nav>
          
           <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home2 />
          </Route>
        </Switch>
      </div>
    </Router> 
     </div>
   </nav>
 </div>
 </>
);
}
export default Sixth_one ;