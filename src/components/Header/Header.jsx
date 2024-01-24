import React, { useContext, useState } from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Button, Container, Image, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const [error, setError] = useState('');

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='bg-primary-subtle mb-2'>
            <Container className='d-flex align-items-center justify-content-between'>
                <Image style={{ width: "200px" }} src={logo}></Image>
                <Nav>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/blogs">Blogs</ActiveLink>
                    <ActiveLink to="/about">Chef</ActiveLink>
                    {
                        user &&
                        <ActiveLink to="/profile">Profile</ActiveLink>
                    }
                </Nav>
                <div>
                    {
                        user ?
                            <Button onClick={handleLogOut} variant='danger'>Logout</Button>
                            :
                            <>
                                <Link to="/login">
                                    <Button variant='primary'>Login</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant='warning text-white'>Register</Button>
                                </Link>
                            </>
                    }
                </div>
            </Container>
        </div>
    );
};

export default Header;