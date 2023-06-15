import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"
import { Home } from './pages/Home/Home';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { Products } from './pages/Products/Products';
import { Navbar } from './components/NavBar/Navbar';
import { Footer } from './components/Footer/Footer';

const Layout = ()=>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>


    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      }
    ]
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />





    </>
  );
}

export default App;
