import App, { dataLoader } from '../App';

export default [
    {
        path: '/Portfolio',
        element: <App />,
        loader: dataLoader,
    },
];
