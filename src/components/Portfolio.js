import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import calc from '../images/ghostmath.png';
import bcbc from '../images/bcbc.png';
import obe from '../images/obe.svg';

export default class Portfolio extends Component {
  render() {

    return (
      <div className="portfolio">
      <div className="project">
        <h3>JAVASCRIPT CALCULATOR</h3>
        <img src={calc} alt="calculator made with flat design"></img>
        <h4><strong>The Project</strong></h4>
        <p>This project was created during the third week of a Web Development course at The Iron Yard utilizing HTML, CSS and JavaScript. The goal was to create a calculator that functioned as a basic calculator, tracking numbers and mathmatical symbols as the user hit buttons and upon clicking the equals button, should return the mathematical value of the equation in the input field.</p>
        <h4><strong>The Process</strong></h4>
        <p>As this was my first major project using JavaScript, the main challenge was making sure the logic of the calculator was sound. After successfully setting up the basic functionality, some of the issues I had to troubleshoot were adding a character limit to the input to prevent the user from adding too many numbers causing them to display outside of the input field, limiting decimal points returned to also prevent numbers displaying outside of the input field, and making the calculator responsive.</p>
        <button className="btn"><a href="https://github.com/saraharless/calculate.git" target="_blank">VIEW CODE</a></button>
        <button className="btn"><a href="http://ghost-math.surge.sh/" target="_blank">VIEW LIVE</a></button>
      </div>

      <div className="project">
        <h3>BAT CITY BURN CO</h3>
        <img src={bcbc} alt="shield with a lighter, a bat and the company name"></img>
        <h4><strong>The Project</strong></h4>
        <p>Bat City Burn Co., based in Austin Texas, is a small business specializing in decorative lighters. With themes ranging from Lisa Frank to cats to dancing pills to celebrities, Bat City Burn Company needed branding and a website to showcase samples of their inventory and direct customers to local stores that stock their product.</p>
        <h4><strong>The Process</strong></h4>
        <p>Since Bat City Burn company caters primarily to customers looking for a fun gift or smokers, the vibe of the brand is very laid back yet trendy. I utilized monochromatice colors to allow their colorful product to stand out on the page. I used React to build out this site to maintain a base layout throughout. The biggest challenge of this project was setting up and accessing my data so that the user can sort the product by categories. I added category tags to each data set and made one page to display all products regardless of category.</p>
        <button className="btn"><a href="https://github.com/saraharless/portfolio-react-bat-city-burn-co.git" target="_blank">VIEW CODE</a></button>
        <button className="btn"><a href="http://bright-spring.surge.sh/" target="_blank">VIEW LIVE</a></button>
      </div>

      <div className="project">
        <h3>OUTBOUND ENGINE</h3>
        <img src={obe} alt="shield with a lighter, a bat and the company name"></img>
        <h4><strong>The Project</strong></h4>
        <p>OutboundEngine is a SAAS company in Austin, Texas that provides automated marketing to small businesses. As a designer at OutboundEngine I worked on the marketing team creating collateral for the emails they sent on behalf of their clients, marketing banners and advertisements, landing pages, web design and more.</p>
        <h4><strong>The Process</strong></h4>
        <p>During my time at OutboundEngine I was able to work on a wide scope of products. I was responsible for approving every image that went out on behalf of the company, for developing ideas for advertisements, designing print material for our sales team, and more. I received a Branndy Award during my second year with the company, an award given to outstanding performers during our quarterly meetings, and I was able to help shape the process of updating email templates and work flow within the team.</p>
        <button className="btn"><Link to="./marketingdesign">VIEW WORK</Link></button>

      </div>
      </div>
    );
  }
}
