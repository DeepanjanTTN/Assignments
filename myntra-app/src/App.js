import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from './components/card/card';
import Card2 from './components/cards2/cards2';
// import { Button, Navbar, Nav, NavDropdown, Form, FormControl  } from 'react-bootstrap';
import card1 from './components/card/card1.jpg';
import card2 from './components/card/card2.jpg';
import card3 from './components/card/card3.jpg';
import card4 from './components/card/card4.jpg';
import OfferBanner from './components/offer-banner/offer-banner';
import c1 from './components/cards2/c1.jpg';
import c2 from './components/cards2/c2.jpg';
import c3 from './components/cards2/c3.jpg';
import c4 from './components/cards2/c4.jpg';
import c5 from './components/cards2/c5.jpg';
import c6 from './components/cards2/c6.jpg';
import c7 from './components/cards2/c7.jpg';
import c8 from './components/cards2/c8.jpg';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cardImg : [card1, card2, card3, card4],
      cardImg2 : [c1, c2, c3, c4, c5, c6, c7, c8]
    }
  }
  render() {
    return (
      <div className="main-container">
        <div>
          <Header />
          <Banner />
          
          <ul className="cardList">
            {this.state.cardImg.map((item, index) => (
              <li key={index}><Card item={item}/></li>
            ))}
          </ul>  

          <OfferBanner />

          <div className="brand-name">
            <h2>
              Brands in Focus
            </h2>
            <p>
              Show some brand love
            </p>
          </div>

          <ul className="card2-ul">
              {this.state.cardImg2.map((c, index) => (
                <li key={index}><Card2 cardi={c} /></li>
              ))}
          </ul>

          


        </div>
      </div>
    );
  }
}

export default App;
