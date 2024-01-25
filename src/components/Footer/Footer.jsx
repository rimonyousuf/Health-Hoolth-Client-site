import React from 'react';
import { Container } from 'react-bootstrap';
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='bg-dark py-4'>
            <Container>
                <p className='text-white text-center my-auto'><PiCopyrightThin/> 2024 Copyright.This website is developed by Rimon</p>
            </Container>
        </div>
    );
};

export default Footer;