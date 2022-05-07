import React, { useEffect, useState } from 'react';

const useItems = (productId) => {
    const [product, setProduct] = useState();
    useEffect(() => {
        const url = `https://still-brook-35324.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    return [product, setProduct]
};

export default useItems;