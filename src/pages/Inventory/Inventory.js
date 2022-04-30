import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Inventory.css'
const Inventory = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setProducts(data));
    },[])
    return (
        <div style={{backgroundColor: 'gray'}}>
            <h1 className='text-center'>Inventorys</h1>
            <div className='services' >
            {
                products.map(product => <Service
                product = {product}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Inventory;