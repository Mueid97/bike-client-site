import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data));
    },[])
    return (
        <div style={{backgroundColor: 'gray'}}>
            <h1 className='text-center'>Our Services</h1>
            <div className='services' >
            {
                products.slice(0,6).map(product => <Service
                product = {product}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;