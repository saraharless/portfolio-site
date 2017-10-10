import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className="NavBar">
     <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
     </nav>
     </div>
    <div>
    {this.props.children}
    </div>
    <footer>
      <span className="footer-title">Sara Harless | sara.e.harless@gmail.com</span>
    </footer>
    </div>
    )
  }
}
