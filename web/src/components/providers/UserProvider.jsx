import userContext from '../contexts/userContext';

import React, { useState } from 'react';

export default function UserProvider({ children }) {
    const [user, setUser] = useState(undefined);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
}
