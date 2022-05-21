import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AppFollow from '../../Components/AppFollow/AppFollow';
import DoctorList from '../../Components/DoctorList/DoctorList';
import Header from '../../Components/Header/Header';
import OrderOnline from '../../Components/OrderOnline/OrderOnline';
import OurServices from '../../Components/OurServices/OurServices';
import TmSection from '../../Components/TmSection/TmSection';
import VideoConsult from '../../Components/VideoConsult/VideoConsult';
import NavMenu from './../../Components/NavMenu/NavMenu';

const Home = () => {
    return (
        <div>
            <NavMenu/>
            <Header/>
            <AboutUs/>
            <VideoConsult/>
            <TmSection/>
            <AppFollow/>
            <OrderOnline/>
            <OurServices/>
            <DoctorList/>
        </div>
    );
};

export default Home;