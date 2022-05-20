import React from 'react';
import { Col, Row, Image, Button, Container } from 'react-bootstrap';
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
                <Col sm={6}>
                    <div>
                    <Image className='bgimg' src={bgimg}></Image>
                    </div> 
                   <div className='heading-item'>
                       <h1>Protect and Take <br/> Care of Your Health</h1>
                       <p className='fs-5'>Download Our App and feel free to take <br/>
                        your Health Advice from a Specialist.</p>
                        <Button className='search-btn mb-4 mt-4'>Search for a service</Button>
                        <div>
                        <Image className='apple me-4' src={apple}></Image>
                        <Image className='playstore' src={playstore}></Image>
                        </div>
                   </div>
                </Col>
                <Col className='' sm={6}>
                <Image className='bgimg1' src={bgimg1}></Image>
                <Image className='doctor' src={doctor}></Image>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Header;