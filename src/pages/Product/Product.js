import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,price,image,name,description,quantity, supplierName} = product;
    const navigate = useNavigate();
    
    const updateProduct = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={'200px'} src={image} />
                <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Title>Price:{price}</Card.Title>
                    <Card.Title>Quantity:{quantity}</Card.Title>
                    <Card.Title>supplier Name:{supplierName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={()=> updateProduct(_id)}  variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;