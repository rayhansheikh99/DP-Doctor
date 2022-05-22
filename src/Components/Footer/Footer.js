import React from 'react';
import "./footer.css"
import tm from "../../images/TM.png"
import logo from "../../images/logo.png"
import playstore from "../../images/playstore.png"
import apple from "../../images/apple.png"
import footerbg from "../../images/footerbg.png"
import { Col, Container, Image, Row } from 'react-bootstrap';
import arrow from "../../images/arrow.svg"
import address from "../../images/address.svg"
import phone from "../../images/phone.svg"
import mail from "../../images/mail.svg"
import web from "../../images/web.svg"
import fb from "../../images/fb.svg"
import youtube from "../../images/youtube.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"

const Footer = () => {
    return (
        <Container>
            <Image className='footerbg' src={footerbg}></Image>
            <div className='footer-logo'>
            <Image className='logo' src={logo}></Image>
            <Image className='tm' src={tm}></Image>
            </div>
            <Row className='service-group'>
                    
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <p className='font-all'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Doctor</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Services</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Pharmacy Owner</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>About Us</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Blog</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Contact Us</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Terms & Conditions</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Privacy Policy</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>FAQ</h5>
                            </div>
                        </div>
                    </Col>
            </Row>
            <h5 className='contact-us'>Contact Us</h5>
            <Row>
                <Col id='contact' lg={4} md={12} sm={12}>
                    <div className='contact-item'>
                    <Image className='address' src={address}></Image>
                    <p className='mb-0 font-all'>House-20, Road-27, Block-A, Banani, Dhaka.</p>
                    </div>
                    <div className='contact-item'>
                    <Image className='phone' src={phone}></Image>
                    <p className='mb-0 font-all'>+8801234567890, +88058269458</p>
                    </div>
                    <div className='contact-item'>
                    <Image className='mail' src={mail}></Image>
                    <p className='mb-0 font-all'>tmbd@mail.com</p>
                    </div>
                    <div className='contact-item'>
                    <Image className='web' src={web}></Image>
                    <p className='mb-0 font-all'>tmbd.com</p>
                    </div>
                </Col>
                <Col className='' lg={2} md={12} sm={12}>
                    <h5 className='contact-us'>Social Links</h5>
                    <div className='social-icons'>
                    <Image className='fb' src={fb}></Image>
                    <Image className='youtube' src={youtube}></Image>
                    <Image className='twitter' src={twitter}></Image>
                    <Image className='instagram' src={instagram}></Image>
                    <Image className='linkedin' src={linkedin}></Image>
                    </div>
                </Col>
                <Col className='' lg={6} md={12} sm={12}>
                    <div className='download-app'>
                        <h5>Download Our App</h5>
                        <Image className='playstore' src={playstore}></Image>
                        <Image className='apple' src={apple}></Image>
                    </div>
                </Col>
            </Row>
            <p className='footer-text'>&copy; Copyright TM 2021. All rights reserved. Created by Golden Infotech.</p>
        </Container>
    );
};

export default Footer;