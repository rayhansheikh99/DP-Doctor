import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import mobile from "../../images/mobile.png"
import mobilebg from "../../images/mobilebg.png"
import one from "../../images/one.svg"
import two from "../../images/two.svg"
import three from "../../images/three.svg"

import "./appfollow.css"

const AppFollow = () => {
    return (
        <div>
            <div className='text-center app-sec'>
                <h1 className='title-all'>Only Three Easy Steps to Follow </h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={5} md={12} sm={12}>
                    
                    <Image className='mobilebg' src={mobilebg}></Image>
                    <Image className='mobile' src={mobile}></Image>
                    
                    </Col>
                    <Col className='app-feature' lg={7} md={12} sm={12}>
                        <div className='app-section'>
                            <div>
                            <Image className='one' src={one}></Image>
                            </div>
                            <div>
                                <h4 className='app-title'>Search the Doctor for Appointment</h4>
                                <p className='font-all'>Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.</p>
                            </div>
                        </div>
                        <div className='app-section'>
                            <div>
                            <Image className='two' src={two}></Image>
                            </div>
                            <div>
                                <h4 className='app-title'>Get Doctor Consultation through Video Calling</h4>
                                <p className='font-all'>Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.</p>
                            </div>
                        </div>
                        <div className='app-section'>
                            <div>
                            <Image className='three' src={three}></Image>
                            </div>
                            <div>
                                <h4 className='app-title'>Get Your Prescription</h4>
                                <p className='font-all'>Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppFollow;