import React from 'react';
import Slider from '../../common/Slider/Slider';
import Section1 from '../Section1/Section1';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Services></Services>
           <Section1></Section1>
        </div>
    );
};

export default Home;