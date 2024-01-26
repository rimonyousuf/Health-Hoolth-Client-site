import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login')

    const { signIn, forgetPassword, googleSignIn } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginForm = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
        setSuccess('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please provide an email address");
            return;
        }

        forgetPassword(email)
            .then(() => {
                alert('Please check your email');
                return;
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Container className='bg-light p-4 mb-2'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleLoginForm} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} name='password' placeholder="Password" required />
                    <div className='d-flex justify-content-between'>
                        <p className='cursor-pointer' onClick={() => setShow(!show)}>
                            {
                                show ? <small>Hide Password</small> :
                                    <small>Show Password</small>
                            }
                        </p>
                        <p><small>Forget password?<span className='text-decoration-underline text-warning-emphasis cursor-pointer' onClick={handleForgetPassword}>Reset</span></small></p>
                    </div>
                </Form.Group>
                <Button
                    variant="success"
                    type="submit">
                    Login
                </Button>

                <p className='mt-3'>Don't have an account?
                    <Link className='fs-6 text-success' to="/register">Register here</Link>
                </p>
                <Form.Text className="text-danger">{error}</Form.Text>
                <Form.Text className="text-success">{success}</Form.Text>
            </Form>
            <div className="text-center">
                <p className='text-center fs-4'>Or,</p>
                <button onClick={handleGoogleSignIn} className='btn-google fs-5'><FcGoogle/> Continue with Google</button>
            </div>
        </Container>
    );
};

export default Login;