/* eslint-disable react/jsx-pascal-case */
// import logo from './logo.png';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import First_one from './first_one';
import Second_one from './Second_one';
import Third_one from './Third_one';
import Fourth_one from './Fourth_one';
import Fifth_one from './Fifth_one';


function App() {
  return (<>
  <First_one/>
  
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
            <Home />
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
function Home() {
  return (
    <>
    <Second_one/>
    <Third_one/>
    <Fourth_one/>
    <Fifth_one/>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;





