import React from 'react';
import "./feedback.css"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import sofia from "../../images/sofia.png"
import foisal from "../../images/foisal.png"
import foisal2 from "../../images/foisal2.png"
import nicolas from "../../images/nicolas.png"
import arow from "../../images/arow.png"
import arrow from "../../images/arrow.png"
import { Container, Image } from 'react-bootstrap';
const Feedback = () => {
    return (
        <div>
            <Container>
            <div className='text-center app-sec'>
                <h1 className='title-all'>What Are The Patients Saying About us</h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>

            <div className='feedback-group'>
            <Image className='foisal2' src={foisal2}></Image>
            <div>
            <Image className='icon1' src={icon1}></Image>
            <p className='comment'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled.</p>
            <p className='name'>Foisal Morshed</p>
            <p className='colleg'>Student, CSE, University of Royal</p>
            <Image className='icon2' src={icon2}></Image>
            </div>
            </div>
            <div className='patients'>
            <Image className='foisal' src={foisal}></Image>
            <Image className='sofia' src={sofia}></Image>
            <Image className='nicolas' src={nicolas}></Image>
            </div>
            <div className='arrow-group'>
            <Image className='arrow' src={arrow}></Image>
            <Image className='arow' src={arow}></Image>

            </div>
            </Container>

        </div>
    );
};

export default Feedback;