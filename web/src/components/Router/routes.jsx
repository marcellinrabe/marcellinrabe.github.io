import App, { appLoader } from '../App';

export default [
    {
        path: '/',
        element: <App />,
        loader: appLoader,
    },
];
