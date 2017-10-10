import React, { Component } from 'react';
import '../styles/App.css';
import me from '../images/sh.png'

export default class Home extends Component {
  render() {

    return (
      <div className="home">
      <img src={me} alt="Sara (that's me!)"></img>
      <div className="intro">
        <h1>Sara Harless</h1>
        <p>Designer // Front-End Developer</p>
      </div>
      </div>
    );
  }
}
