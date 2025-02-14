// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User object/state
    const [userId, setUserId] = useState(null); // To save userId

    const saveUserIdToContext = (id) => {
        setUserId(id);
        console.log("User ID saved to context:", id);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, userId, saveUserIdToContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);