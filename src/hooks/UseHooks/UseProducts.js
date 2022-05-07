import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-brook-35324.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts]
};

export default UseProducts;