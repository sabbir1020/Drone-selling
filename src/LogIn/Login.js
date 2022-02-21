import { Button } from '@mui/material';
import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const {user,googleSignIn} = useFirebase();
    return (
        <div>
            <Button onClick={googleSignIn} >Google Sign In</Button>
        </div>
    );
};

export default Login;