import React from 'react';
import About from './About';
import Faq from './Faq';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import './App.css';


 
const App = () => {
  return (
      <Router>
           <div>
            <ul className="navLink">
              <li>
                <NavLink exact activeClassName = "activeClass" to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink activeClassName = "activeClass" to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink activeClassName = "activeClass" to="/contact">FAQ</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Faq}></Route>
            </Switch>
          </div>
       </Router>
  );
};

export default App;