import React, { createContext } from 'react';
 const AuthContext = createContext(); 
const AuthProvider = () => {
    return (
        <AuthContext.Provider value={}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;