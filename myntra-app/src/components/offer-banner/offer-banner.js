import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import offerImg from './offerImg.jpg';
import offerImg1 from './offerImg1.jpg';
import './offerBanner.css';

export default class OfferBanner extends Component{
    render(){
        return(
            <div className="offer-banner">
                <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={offerImg}
                            alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={offerImg1}
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                      
                        </Carousel>
            </div>
        );
    }
}