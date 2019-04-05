import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import crs1 from './crs1.jpg';
import crs2 from './crs2.jpg';
import crs3 from './crs3.jpg';
import './banner.css'

class Banner extends Component {
   
    render(){
        return(
            <div className="banner-container">
                <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={crs1}
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
                            src={crs2}
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={crs3}
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        </Carousel>
            </div>
        );
    }
}


export default Banner;