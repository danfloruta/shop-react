import "./App.css";
import { useState, createContext, lazy, useEffect } from "react";
import MainNav from "./components/MainNav";
import { Button } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import Product from "./components/Product";
import Wishlist from "./components/Wishlist";
import { actionsShop, fetchProducts } from "./store/shopSlice";
import Account from "./components/Account";
import ProtectionRoute from "./components/ProtectionRoute";
import Cart from "./components/Cart";

export const ThemeContext = createContext();

const Home = lazy(() => import("./components/Home"));
const Root = lazy(() => import("./components/Root"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Contact = lazy(() => import("./components/Contact"));
const Products = lazy(() => import("./components/Products"));

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      {
        path: "wishlist",
        element: (
          <ProtectionRoute>
            <Wishlist />
          </ProtectionRoute>
        ),
      },
      { path: "account", element: <Account /> },
      { path: "products/:id", element: <Product /> },
    ],
  },
]);

function App() {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const fromWishlist = JSON.parse(localStorage.getItem("wishlist") || []);
    //produsele se fetchuiesc doar pe pagina de produse

    if (Array.isArray(fromWishlist)) {
      dispatch(actionsShop.restoreWishlist(fromWishlist));
    }
    dispatch(fetchProducts());
  }, [dispatch]); // when app loads you populate the wishlist from localStorage with a reducer (see shopSlice)

  return (
    // <Provider store={store}>
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div
        style={{ backgroundColor: theme === "light" ? "#ededed" : "#2c2c2c" }}
      >
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeContext.Provider>
    // </Provider>
  );
}

export default App;
