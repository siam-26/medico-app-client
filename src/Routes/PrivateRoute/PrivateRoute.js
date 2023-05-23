import React, { useContext } from 'react';
import { AuthContext } from '../../Context Api/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ProgressLoading from '../../Components/ProgressLoading/ProgressLoading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <ProgressLoading></ProgressLoading>
    }
    
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace />
};

export default PrivateRoute;