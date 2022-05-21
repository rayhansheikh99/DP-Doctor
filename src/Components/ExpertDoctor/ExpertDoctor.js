import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import expertdrbg from "../../images/expertdrbg.png"
import expertdr from "../../images/expertdr.png"
import "./expertdoctor.css"

const ExpertDoctor = () => {
    return (
        <div>
            <div className='text-center app-sec'>
                <h1 className='title-all'>Are You a Qualified & Expert Doctor? </h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    
                    <Col className='expartdr-text' lg={6} md={12} sm={12}>
                        <h4 className='tm-title'>Be a Part of TM</h4>
                        <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='signup-btn'>Sign Up Now</button>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    
                    <Image className='expertdrbg' src={expertdrbg}></Image>
                    <Image className='expertdr' src={expertdr}></Image>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExpertDoctor;