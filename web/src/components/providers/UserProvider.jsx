import userContext from '../contexts/userContext';

import React, { useState, useEffect } from 'react';

export default function UserProvider(props) {
    const [user, setUser] = useState(undefined);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {props.children}
        </userContext.Provider>
    );
}
