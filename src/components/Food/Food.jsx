import React from 'react';
import './Food.css'
import { Button, Card, Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Food = () => {

    useTitle('Food')

    const food = useLoaderData();
    const { img, name, desc, price, rating } = food

    return (
        <Container>
            <Card className="text-center pb-4">
                <Card.Header className='fs-1'>{name}</Card.Header>
                <Image className='img mx-auto' src={img} />
                <Card.Body>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Text className='fs-1'>${price}</Card.Text>
                <Card.Text className='fs-1'>Ratings: {rating}</Card.Text>
                <Link to="/">
                <Button variant='warning text-white'>See all items</Button>
                </Link>
            </Card>
        </Container>
    );
};

export default Food;