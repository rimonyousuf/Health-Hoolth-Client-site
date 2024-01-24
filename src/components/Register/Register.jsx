import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, verifyEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [accept, setAccept] = useState(false);
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleAcceptForm = event => {
        setAccept(event.target.checked);
    }

    const handleSubmitForm = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)
        setError('')
        setSuccess('')

        if (password !== confirm) {
            setError("Password didn't match");
            return;
        }
        else if (password.length < 6) {
            setError("Password must be 6 digits long");
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please use at least one uppercase");
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please use at least one digit');
            return;
        }

        createUser(email, password)
            .then(result => {
                const submitUser = result.user;
                console.log(submitUser);
                setSuccess('Account created successfully');
                setError('');
                form.reset();
                emailVerification(result.user);
                navigate(from,{replace: true});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const emailVerification = user => {
        verifyEmail(user)
            .then(() => {
                alert('Please verify your email');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <Container className='bg-light p-4'>
            <h2 className='text-center'>Register</h2>
            <Form onSubmit={handleSubmitForm} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} name='password' placeholder="Password" required />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? <small>Hide Password</small> :
                                <small>Show Password</small>
                        }
                    </p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} name='confirm' placeholder="Confirm Password" required />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? <small>Hide Password</small> :
                                <small>Show Password</small>
                        }
                    </p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAcceptForm}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link className='fs-6 text-decoration-underline text-secondary' to="/terms">terms & conditions</Link></>} />
                </Form.Group>
                <Button
                    variant="success"
                    disabled={!accept}
                    type="submit">
                    Register
                </Button>

                <p className='mt-3'>Already have an account?
                    <Link className='fs-6 text-success' to="/login">Login here</Link>
                </p>
                <Form.Text className="text-danger">{error}</Form.Text>
                <Form.Text className="text-success">{success}</Form.Text>
            </Form>
        </Container>
    );
};

export default Register;