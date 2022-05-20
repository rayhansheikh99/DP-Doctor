import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Header from '../../Components/Header/Header';
import VideoConsult from '../../Components/VideoConsult/VideoConsult';
import NavMenu from './../../Components/NavMenu/NavMenu';

const Home = () => {
    return (
        <div>
            <NavMenu/>
            <Header/>
            <AboutUs/>
            <VideoConsult/>
        </div>
    );
};

export default Home;