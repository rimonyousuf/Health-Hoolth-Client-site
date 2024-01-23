import React from 'react';
import './Foods.css'
import { Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {

    const { id, title, img, name, desc } = food

    return (
        <Container>
            <Card className='p-2 bg-body-tertiary'>
                <Image className='food-img mb-4' src={img} />
                <div className='d-flex justify-content-evenly'>
                    <h3 className='title'>{title}</h3>
                    <h4>{name}</h4>
                </div>
                <p>
                    {
                        desc.length < 50 ? <>{desc}</> :
                            <>{desc.slice(0, 50)}...<Link to={`/foods/${id}`}><span className='text-danger'>Read more</span></Link></>
                    }
                </p>
            </Card>
        </Container>
    );
};

export default Foods;