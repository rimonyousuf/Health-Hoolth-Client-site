import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const About = () => {

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