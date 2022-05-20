import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AppFollow from '../../Components/AppFollow/AppFollow';
import Header from '../../Components/Header/Header';
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
        </div>
    );
};

export default Home;