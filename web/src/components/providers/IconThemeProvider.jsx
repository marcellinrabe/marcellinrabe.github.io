import React from 'react';
import { IconContext } from 'react-icons';

const config = {
    size: '2em',
};

export default function IconThemeProvider({ children }) {
    return (
        <IconContext.Provider value={config}>{children}</IconContext.Provider>
    );
}
