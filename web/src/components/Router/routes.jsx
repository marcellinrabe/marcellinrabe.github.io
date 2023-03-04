import App, { dataLoader } from '../App'

export default [
    {
        path: '/',
        element: <App />,
        loader: dataLoader,
        loadingMode: 'render',
    },
]
