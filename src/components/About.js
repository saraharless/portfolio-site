import React, { Component } from 'react';
import '../styles/App.css';

export default class About extends Component {
  render() {

    return (
      <div className="about">
        <h1>Hey Y'all, I'm Sara!</h1>

        <p>Following a lifelong passion for design and problem-solving, I taught myself graphic design as a way to help promote departmental events in college while I was working towards my Creative Writing degree. What began as a need-based hobby soon became a career.</p>

        <p>For five years I worked for startups, SaaS companies, and agencies doing graphic and web design before I decided to add Front-End Development to my skillset.</p>

        <p>After learning HTML and CSS on my own, I applied and was accepted to The iron Yard where I spent 12 weeks in an immersive program learning web development.</p>

        <p>Being able to utilize both development and design has given me the toolset to not only make mockups, but turn them into functioning, intuitive web apps.</p>

        <p>Aside from development and design, I have been fortunate enough to spend time assistant teaching for Creative Mornings, helping companies and individuals develop a brand voice, and volunteering with Austin Bat Cave to teach kids about poetry.</p>

        <p>I love illustration, eating tacos, improving the way a company communicates with their end-user, and listening to ghost stories. </p>

        <div className="skills">
          <h4>Skillset:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Lightroom</li>
            <li>Adobe InDesign</li>
            <li>Illustration</li>
            <li>UX & UI</li>
            <li>Web Design</li>
            <li>Git</li>
          </ul>
        </div>

      </div>
    );
  }
}
