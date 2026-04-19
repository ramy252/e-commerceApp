import '@fontsource/poppins';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Layout from './components/Layout/Layout';
import CheakOut from './components/Pages/CheckOut/CheckOut.jsx';
import ProductDetails from './components/Pages/ProductDetails/ProductDetails';
import WishList from './components/Pages/WishList/WishList';
import Favourite from './components/Pages/Favourite/Favourite';
import Cart from './components/Pages/Cart/Cart.jsx';
import Orders from './components/Pages/Orders/Orders';
import ForgetPassword from './components/Pages/ForgetPassword/ForgetPassword';
import Categories from './components/Pages/Category/Categories';
import SearchProduct from './components/Pages/SearchProduct/SearchProduct';
import Brands from './components/Pages/Brands/Brands';
import NotFound from './components/Pages/NotFound/NotFound';
import VerifyEmail from './components/Pages/VerifyEmail/VerifyEmail';
import ProductProvider from './context/ProductProvider';
import { ToastContainer } from 'react-toastify';
import CatagoriesProvider from './context/CatagoriesProvider';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import CartProvider from './context/CartProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Login", element: <Login /> },
        { path: "SignUp", element: <SignUp /> },
        { path: "CheakOut", element: <CheakOut /> },
        { path: "ProductDetails", element: <ProductDetails /> },
        { path: "WishList", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "Favourite", element: <Favourite /> },
        { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "CheckOut", element: <CheakOut /> },
        { path: "Orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "ForgetPassword", element: <ForgetPassword /> },
        { path: "Categories", element: <Categories /> },
        { path: "Brands", element: <Brands /> },
        { path: "VerifyEmail", element: <VerifyEmail /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "SearchProduct", element: <SearchProduct /> },
        { path: "*", element: <NotFound /> },
      ]
    },
  ]);

  return (
    <>
      <ProductProvider>
        <CatagoriesProvider>
          <CartProvider>
            <AuthProvider>
              <RouterProvider router={router} />
              <ToastContainer autoClose={3000} position="top-right" closeButton={false} closeOnClick={true} />
            </AuthProvider>
          </CartProvider>
        </CatagoriesProvider>
      </ProductProvider>
    </>
  );
}

export default App;
