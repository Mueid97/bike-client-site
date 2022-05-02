import React from 'react';
import Slider from '../../common/Slider/Slider';
import Products from '../Products/Products';
import Section1 from '../Section1/Section1';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Products></Products>
           <Section1></Section1>
        </div>
    );
};

export default Home;