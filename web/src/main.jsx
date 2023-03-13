import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import AppProvider from './components/providers/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider component={<Router />} />
    </React.StrictMode>
);
