import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import useTitle from '../../hooks/useTitle';

const About = () => {

    useTitle('About Chef')

    const chefs = useLoaderData();

    return (
        <Container>
            <div className="chef-display">
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </Container>
    );
};

export default About;