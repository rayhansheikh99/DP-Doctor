import React from 'react';
import "./aboutus.css"
import { Col, Container, Row, Image } from 'react-bootstrap';
import aboutImg from "../../images/aboutImg.png"

const AboutUs = () => {
    return (
        <div id="about">
            <div className='text-center about-sec'>
                <h1 className='title-all'>About Us</h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                    
                    <Image className='aboutImg' src={aboutImg}></Image>

                    </Col>
                    <Col className='' lg={6} md={12} sm={12}>
                        <p className='font-all about-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='about-btn'>Read More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;