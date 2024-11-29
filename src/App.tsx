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

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/cart", element: <Cart /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
