import React from 'react';
import "./aboutus.css"
import { Col, Container, Row, Image } from 'react-bootstrap';
import aboutImg2 from "../../images/aboutImg2.png"
import aboutImg from "../../images/aboutImg.png"

const AboutUs = () => {
    return (
        <div>
            <div className='text-center about-sec'>
                <h1>About Us</h1>
                <p className='fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col sm={6}>
                    <Image className='aboutImg2' src={aboutImg2}></Image>
                    <Image className='aboutImg' src={aboutImg}></Image>
                    
                    </Col>
                    <Col className='' sm={6}>
                        <p className='font-all about-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='about-btn'>Read More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;