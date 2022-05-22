import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import bgimg from "../../images/bgimg.png"
import bgimg1 from "../../images/bgimg1.png"
import doctor from "../../images/doctor.png"
import apple from "../../images/apple.png"
import playstore from "../../images/playstore.png"
import "./header.css"

const Header = () => {
    return (
        <div>
        <Container>
            <Row>
                <Col lg={5} md={12} sm={12}>
                    <div>
                    <Image className='bgimg' src={bgimg}></Image>
                    </div> 
                   <div className='heading-item'>
                       <h1 className='header-text'>Protect and Take <br/> Care of Your Health</h1>
                       <p className='header-font'>Download Our App and feel free to take <br/>
                        your Health Advice from a Specialist.</p>
                        <button className='search-btn mb-4 mt-4'>Search for a Service</button>
                        <div>
                        <Image className='playstore me-4' src={playstore}></Image>
                        <Image className='apple ' src={apple}></Image>
                        
                        </div>
                   </div>
                </Col>
                <Col className='' lg={7} md={12} sm={12}>
                <Image className='bgimg1' src={bgimg1}></Image>
                <Image className='doctor' src={doctor}></Image>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Header;