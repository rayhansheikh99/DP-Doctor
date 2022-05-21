import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import service from "../../images/service.png"
import arrow from "../../images/arrow.svg"
import "./ourservices.css"

const OurServices = () => {
    return (
        <div>
            <div className='text-center app-sec'>
                <h1 className='title-all'>Our Services</h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                    
                    <Image className='service' src={service}></Image>
                    
                    </Col>
                    <Col className='' lg={6} md={12} sm={12}>
                        <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='view-btn'>Read More</button>
                        <div className='service-group'>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0 active'>General Healthcare</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Maternal Healthcare</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Child Healthcare</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Elder Healthcare</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;