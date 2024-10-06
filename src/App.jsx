import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Hero from './components/Hero'

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
      }
    ])
    
    return <RouterProvider router={router} />
 
}

export default App
