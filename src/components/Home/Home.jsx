import React from 'react';
import { Container, Image } from 'react-bootstrap';
import home from '../../assets/images/home.jpg'
import { useLoaderData } from 'react-router-dom';
import Foods from '../Foods/Foods';
import useTitle from '../../hooks/useTitle';

const Home = () => {

    useTitle('Home');

    const foods = useLoaderData();
    console.log(foods)

    return (
        <Container>
            <Image style={{ width: "1280px",borderRadius:"10px" }} src={home} />
            <div className='my-4 d-flex'>
                {
                    foods.map(food => <Foods
                        key={food.id}
                        food={food}
                    ></Foods>)
                }
            </div>
        </Container>
    );
};

export default Home;