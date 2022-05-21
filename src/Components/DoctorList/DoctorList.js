import React from 'react';
import "./doctorlist.css"
import { Col, Container, Row, Image } from 'react-bootstrap';
import arrow from "../../images/arrow.svg"

const DoctorList = () => {
    return (
        <div>
             <div className='text-center app-sec'>
                <h1 className='title-all'>Expert & Varified Doctors</h1>
                <p className='font-all'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className='mt-5'>
                <Row className='service-group'>
                    
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>General Physician</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Pediatrics / Child Care</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Gynaecology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Neurology / Brain</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Pulmonology / Lungs</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Herbal medicine</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Gastroenterology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Cardiology / Heart</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Ophthalmology / Eye</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Dentistry / Dental Care</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Endocrinology / Diabetes</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Occupational therapy</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Nephrology / Kidney</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Obstetrics</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>ENT / Ear, Nose and Throat</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Parasitology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Podiatry</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'> Oncology</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className='' lg={3} md={6} sm={12}>
                        <div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Psychiatry</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Rheumatology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Urology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Chiropractic</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Dermatology</h5>
                            </div>
                            <div className='service-list'>
                            <Image className='arrow' src={arrow}></Image>
                            <h5 className='m-0'>Vascular Surgery</h5>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default DoctorList;