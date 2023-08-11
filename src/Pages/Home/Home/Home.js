import React from 'react';
import Banner from '../Banner/Banner';
import AboutStudio from '../AboutStudio/AboutStudio';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Achievements from '../Achievements/Achievements';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutStudio></AboutStudio>
            <OurPortfolio></OurPortfolio>
            <Achievements></Achievements>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;