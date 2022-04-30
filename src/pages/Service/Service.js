import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({product}) => {
    const {price,image,name,description} = product;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={'200px'} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;