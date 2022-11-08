import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <button className="btn loading mx-auto h-screen w-full">loading</button>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{ form: location }} replace>

        </Navigate>
    );
};

export default PrivetRouter;