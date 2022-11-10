import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../SharedPages/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext);
    const location = useLocation();
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}}replace></Navigate>
};

export default PrivateRoute;