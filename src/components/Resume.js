import React, { Component } from 'react';
import '../styles/App.css';
import resume from '../images/resume.jpg'

export default class Resume extends Component {
  render() {

    return (
      <div className="res">
      <div className="resume">
      <img src={resume} alt="resume"></img>
    </div>
      <button className="btn2"><a href="https://github.com/saraharless/calculate.git">DOWNLOAD PDF</a></button>
      </div>
    );
  }
}
