import React from 'react';
import engine from '../../images/engine.jpg';
import './Section1.css'
const Section1 = () => {
    return (
        <div>
            <h1 className='text-center' style={{color: 'gray', backgroundColor: 'black', marginBottom: '0px', padding: '10px 0px'}}>Our Visions</h1>
        <div className='section1 d-flex justify-content-evenly bg-dark'>
            <div>
                <img src={engine} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{color:'gray'}}>
                <div>
                <h1 style={{color: 'orange'}} >ENGINE is the Heart of Bike</h1>
                <p>An engine or motor is a machine designed to convert <br /> one or more forms of energy into mechanical energy.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Section1;