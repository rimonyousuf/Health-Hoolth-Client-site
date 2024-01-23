import React from 'react';
import './Food.css'
import { Card, Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Food = () => {

    const food = useLoaderData();
    const { img, name, desc, price, rating } = food

    return (
        <Container>
            <Card className="text-center">
                <Card.Header className='fs-1'>{name}</Card.Header>
                <Image className='img mx-auto' src={img} />
                <Card.Body>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Text>${price}</Card.Text>
                {rating}
            </Card>
        </Container>
    );
};

export default Food;