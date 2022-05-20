import React from 'react';
import { Col, Container, Row, Image, Card } from 'react-bootstrap';
import location from "../../images/location.svg"
import "./orderonline.css"

const OrderOnline = () => {
    return (
        <div>
             <div className='text-center about-sec'>
                <h1 className='title-all'>Order Medicine Online from Popular Pharmacy Nearby</h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                    <Card className='card-online'>
                        <Card.Body className='ms-3'>
                            <Card.Title className='pharmacy'>Shahbag Medicine Corner</Card.Title>
                            <div className='medicine'>
                                <Image className='location' src={location}></Image>
                                <p className='font-all'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    
                    </Col>
                    <Col className='' lg={4} md={12} sm={12}>
                    <Card className='card-online'>
                        <Card.Body className='ms-3'>
                            <Card.Title className='pharmacy'>Shahbag Medicine Corner</Card.Title>
                            <div className='medicine'>
                                <Image className='location' src={location}></Image>
                                <p className='font-all'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='' lg={4} md={12} sm={12}>
                    <Card className='card-online'>
                        <Card.Body className='ms-3'>
                            <Card.Title className='pharmacy'>Shahbag Medicine Corner</Card.Title>
                            <div className='medicine'>
                                <Image className='location' src={location}></Image>
                                <p className='font-all'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <div className='online-btn'>
            <button className='view-btn'>View All</button>
            </div>
        </div>
    );
};

export default OrderOnline;