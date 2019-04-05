import React, {Component} from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import logo from './logo1.png';
import './header.css';


class Header extends Component {
    render() {
        return (
            <div class="header">
            
                <Container >
                    <Row className="header-row">
                        <Col className="test">
                            <a href="">
                                <img src={logo} alt="logo-img" height="56px" width="55px"/>
                            </a>
                            

                            <ul className="header-ul">
                                <li>
                                    <a href="#">Men</a>
                                </li>
                                <li>
                                    <a href="#">Women</a>
                                </li>
                                <li>
                                    <a href="#">Kids</a>
                                </li>
                                <li>
                                    <a href="#">Home & Living</a>
                                </li>
                                <li>
                                    <a href="#">Discover</a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="test">
                            <Form  inline className="search-bar-container">
                                <button className="search-icon"><i class="fas fa-search"></i></button>
                                <FormControl type="text" placeholder="Search for products, brand and more" className="mr-sm-2 search-bar" />   
                            </Form>

                            <div className="links">
                                <ul>
                                    <li>
                                        <div>
                                            <i class="far fa-user"></i>
                                        </div>
                                        <p> <a href="#">Profile</a></p>
                                    </li>
                                    <li>
                                        <div>
                                        <i class="far fa-bookmark"></i>
                                        </div>
                                        <p><a href="#">Wishlist</a></p>
                                    </li>
                                    <li>
                                        <div>
                                        <i class="fas fa-shopping-bag"></i>
                                        </div>
                                        <p><a href="#">Bag</a></p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
           
            </div>
        )
    }   
}


export default Header;