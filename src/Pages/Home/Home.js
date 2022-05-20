import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AppFollow from '../../Components/AppFollow/AppFollow';
import Header from '../../Components/Header/Header';
import OrderOnline from '../../Components/OrderOnline/OrderOnline';
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
        </div>
    );
};

export default Home;