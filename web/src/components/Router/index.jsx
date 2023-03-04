import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)

export default function Router({ children }) {
    return <RouterProvider router={router}>{children}</RouterProvider>
}
