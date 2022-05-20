import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import easy from "../../images/easy.svg"
import time from "../../images/time.svg"
import doctor1 from "../../images/doctor1.svg"
import trust from "../../images/trust.svg"
import "./tmsection.css"

const TmSection = () => {
    return (
        <div>
            <div className='text-center about-sec'>
                <h1 className='title-all'>Why Choose TM? </h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    
                    <Col className='' lg={3} md={6} sm={6}>
                       <div className='tm-section'>
                       <Image className='easy' src={easy}></Image>
                       <h4 className='tm-title'>Easy to Use</h4>
                       <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                       </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={6}>
                    <div className='tm-section'>
                       <Image className='time' src={time}></Image>
                       <h4 className='tm-title'>24 / 7 Service</h4>
                       <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                       </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={6}>
                    <div className='tm-section'>
                       <Image className='doctor1' src={doctor1}></Image>
                       <h4 className='tm-title-doc'>Expert Doctors</h4>
                       <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                       </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                    <div className='tm-section'>
                       <Image className='trust' src={trust}></Image>
                       <h4 className='tm-title'>Trusted</h4>
                       <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TmSection;