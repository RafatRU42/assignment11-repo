import React, { createContext } from 'react';
import app from '../../../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

export const authContext = createContext();
const auth = getAuth(app);

const AuthContext = () => {
    
    return (
        <div>
            
        </div>
    );
};

export default AuthContext;