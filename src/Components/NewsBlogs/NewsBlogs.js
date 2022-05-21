import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container, Image } from "react-bootstrap";
import news1 from "../../images/news1.png"
import news2 from "../../images/news2.png"
import news3 from "../../images/news3.png"
import news4 from "../../images/news4.png"
import arrow1 from "../../images/arrow1.png"
import arrow2 from "../../images/arrow2.png"
import "./newsblogs.css"
const NewsBlogs = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className='text-center app-sec mb-4'>
                <h1 className='title-all mb-3'>News & Blogs  </h1>
                <p className='font-all mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <Container className="mt-5">
            <div>
            
            <Slider {...settings}>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news1} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Cild care for Winter Season</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news2} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Telemedicine Service</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news3} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Pregnancy Complications</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news4} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Backpain Treatment</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
                
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news2} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Telemedicine Service</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news1} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Cild care for Winter Season</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news4} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Backpain Treatment</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
                
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card className="card-design" style={{ width: '17rem' }}>
            <Card.Img className="card-img" variant="top" src={news3} />
            <Card.Body>
                <p className="card-font">November 5, 2021</p>
                <h5 className="card-title">Pregnancy Complications</h5>
                <p className="font-all">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="card-group">
                    <p className="card-font mt-3" >Dr. Saifur Rahman</p>
                    <button className="card-btn">Read More</button>
                </div>
            </Card.Body>
            </Card>
            </div>
            </Slider>
            <div className="indigator">
            <Image className='arrow1' src={arrow1}></Image>
            <Image className='arrow2' src={arrow2}></Image>
            </div>
        </div>
        <hr/>
        </Container>
        
        </div>
    );
};

export default NewsBlogs;