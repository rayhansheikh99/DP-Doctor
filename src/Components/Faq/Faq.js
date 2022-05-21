import React from 'react';
import "./faq.css"
import { Col, Container, Row, Image } from 'react-bootstrap';
import faqbg from "../../images/faqbg.png"
import faq from "../../images/faq.png"
const Faq = () => {
    return (
        <div>
             <div className='text-center faq-sec'>
                <h1 className='title-all'>Frequently Asked Questions  </h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>

            <Container className='mt-5'>
                <Row>
                    <Col lg={5} md={12} sm={12}>
                    
                    <Image className='faqbg' src={faqbg}></Image>
                    <Image className='mobile' src={faq}></Image>
                    
                    </Col>
                    <Col className='app-feature' lg={7} md={12} sm={12}>
                        <div className="accordion">
                            <div className="">
                            <div className="accordion-title">
                                <div>What is TM?</div>
                                <div className='open-close'>-</div>
                            </div>
                            <div className="accordion-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
                            </div>
                            <div className="accordion-border">
                            <div className="accordion-title">
                                <div>What do you treat?</div>
                                <div className='open-close'>+</div>
                            </div>
                            </div>
                            <div className="accordion-border">
                            <div className="accordion-title">
                                <div>How does it work?</div>
                                <div className='open-close'>+</div>
                            </div>
                            </div>
                            <div className="accordion-border">
                            <div className="accordion-title">
                                <div>Who provides consultation on TM?</div>
                                <div className='open-close'>+</div>
                            </div>
                            </div>
                            <div className="accordion-border">
                            <div className="accordion-title">
                                <div>Are the registered Doctors varified?</div>
                                <div className='open-close'>+</div>
                            </div>
                            </div>
                        </div>
                        <div className='faq-btn'>
                        <button className='view-btn'>View All FAQ's</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;