import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const PrivetRouter = ({ children }) => {
    const { user, loading ,dark} = useContext(AuthContext);
    const location = useLocation();

    // loader set

    if (loading) {
        return <button className={`btn loading mx-auto h-screen w-full ${dark ? "" : "bg-primary"}`}>loading</button>
    }
    
    // navigation 

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRouter;