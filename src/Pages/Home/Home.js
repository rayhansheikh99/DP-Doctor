import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Header from '../../Components/Header/Header';
import NavMenu from './../../Components/NavMenu/NavMenu';

const Home = () => {
    return (
        <div>
            <NavMenu/>
            <Header/>
            <AboutUs/>
        </div>
    );
};

export default Home;