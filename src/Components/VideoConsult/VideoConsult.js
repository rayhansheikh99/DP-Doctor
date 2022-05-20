import React from 'react';
import "./videoconsult.css"
import { Container, Row, Col, Image } from 'react-bootstrap';
import video from "../../images/video.png"
import videocall from "../../images/videocall.png"

const VideoConsult = () => {
    return (
        <div>
            <div className='text-center video-sec'>
                <h1 className='title-all'>Video Consultation from the Best doctors </h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row>
                    
                    <Col className='' lg={6} md={12} sm={12}>
                        <p className='font-all about-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className='about-btn'>Read More</button>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    
                    <Image className='video' src={video}></Image>
                    <Image className='videocall' src={videocall}></Image>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VideoConsult;