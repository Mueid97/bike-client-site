import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
   const {productId} = useParams();
   const [product, setProduct] = useState({});
   useEffect(()=>{
       const url = `http://localhost:5000/product/${productId}`;
       
       fetch(url)
       .then(res => res.json())
       .then(data => setProduct(data));
   },[])
    return (
        <div className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={'200px'} src={product.image} />
                <Card.Body>
                    <Card.Title>Name:{product.name}</Card.Title>
                    <Card.Title>Price:{product.price}</Card.Title>
                    <Card.Title>Quantity:{product.quantity}</Card.Title>
                    <Card.Title>supplier Name:{product.supplierName}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            <Button   variant="primary">Deliver</Button>
        </div>
        </div>
    );
};

export default ProductDetails;