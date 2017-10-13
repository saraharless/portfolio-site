import React, { Component } from 'react';
import '../styles/App.css';
import postcard from '../images/postcard.png';
import email from '../images/email.png';
import landing from '../images/landing.png';

export default class MarketingDesign extends Component {
  render() {

    return (
      <div className="oe">
        <div className="port">
          <img src={postcard} alt="front and back view of a postcard for lead generation"></img>
        </div>
        <div className="porttext">
          <h4>Lead Capture Postcard</h4>
          <p>This project was to create a lead capture form for our enterprise sales team.</p>
          <p>This project had a turn-around time of one week including time for the printer to deliver the final product. The resulting postcard is a double sided perforated form printed on card stock. The lead capture form is filled out, then torn from the rest of the card and placed into a box for a raffle. The remaining card, which is small enough to place into a pocket, has information about OutboundEngine including their website and bullet points about the product.</p>
          <p>Upon returning from the conference our sales rep came up to my desk and showed me a bag full of filled out forms and told me it was the most he had ever collected from one event.</p>
        </div>

        <div className="port">
          <img src={email} alt="three emails displaying products for sale"></img>
        </div>
        <div className="porttext">
          <h4>Promotional Emails</h4>
          <p>OutboundEngine uses templates for all of it's clients except those in the promo industry. These are each designed and coded individually.</p>
          <p>Each email was designed in Adobe Illustrator, sliced in Adobe Photoshop and coded in Adobe Dreamweaver before being tested and sent out on behalf of our clients. Each bi-weekly email featured a unique theme, products, and design.</p>
          <p>While at OutboundEngine I adjusted the process of creating promotional emails so that it fit more closely with the typical process for all 12 other verticals. This allowed the content team extra time to review each email before it was sent out, a more streamlined process for chosing products and writing their descriptions, and saved over ten hours a month in production time.</p>
        </div>

        <div className="port">
          <img src={landing} alt="three landing pages"></img>
        </div>
        <div className="porttext">
          <h4>Landing Pages</h4>
          <p>The marketing team used Marketo to reach out to clients for referrals. These landing pages were made to sync up seamlessly with Marketo.</p>
          <p>Each campaign had multiple screens used to collect data. A page to enter referrals, a page to enter a contest and a thank you page once the referrals were submitted. Each campaign had a unique theme and was designed in Adobe Photoshop.</p>
          <p>Once I completed the mockups they were handed off to our Engineering team to complete set up and distribution.</p>
        </div>
      </div>
    );
  }
}
