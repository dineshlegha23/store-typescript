import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  About,
  Cart,
  Checkout,
  Login,
  Orders,
  Register,
  SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
        { path: "cart", element: <Cart />, errorElement: <ErrorElement /> },
        { path: "about", element: <About />, errorElement: <ErrorElement /> },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />,
        },
        { path: "orders", element: <Orders />, errorElement: <ErrorElement /> },
      ],
    },
    { path: "/login", element: <Login />, errorElement: <Error /> },
    { path: "/register", element: <Register />, errorElement: <Error /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
