import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AppFollow from '../../Components/AppFollow/AppFollow';
import DoctorList from '../../Components/DoctorList/DoctorList';
import ExpertDoctor from '../../Components/ExpertDoctor/ExpertDoctor';
import Faq from '../../Components/Faq/Faq';
import Feedback from '../../Components/Feedback/Feedback';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NewsBlogs from '../../Components/NewsBlogs/NewsBlogs';
import OrderOnline from '../../Components/OrderOnline/OrderOnline';
import OurServices from '../../Components/OurServices/OurServices';
import Slide from '../../Components/Slide/Slide';
import Slider from '../../Components/Slider/Slider';
import TmSection from '../../Components/TmSection/TmSection';
import VideoConsult from '../../Components/VideoConsult/VideoConsult';
import NavMenu from './../../Components/NavMenu/NavMenu';


const Home = () => {
    return (
        <div>
            <NavMenu/>
            <Header/>
            <Slider/>
            
            <AboutUs/>
            <Slide/>
            <VideoConsult/>
            <TmSection/>
            <AppFollow/>
            <OrderOnline/>
            <OurServices/>
            <DoctorList/>
            <ExpertDoctor/>
            <Faq/>
            <Feedback/>
            <NewsBlogs/>
            <Footer/>
            
        </div>
    );
};

export default Home;