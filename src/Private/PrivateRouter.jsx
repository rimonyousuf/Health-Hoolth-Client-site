import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(user){
        return children;
    }

    if(loading){
        return <Spinner animation="grow" />
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRouter;