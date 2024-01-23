import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Button, Container, Image, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary-subtle'>
            <Container className='d-flex align-items-center justify-content-between'>
            <Image style={{width:"200px"}} src={logo}></Image>
            <Nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
                <ActiveLink to="/about">Chef</ActiveLink>
            </Nav>
            <div>
                <Link to="/login">
                    <Button variant='primary'>Login</Button>
                </Link>
                <Link to="/register">
                    <Button variant='warning'>Register</Button>
                </Link>
            </div>
        </Container>
        </div>
    );
};

export default Header;