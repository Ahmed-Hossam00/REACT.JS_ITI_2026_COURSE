import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    prodName: "Samsung",
    price: 3000,
    onSale: false,
    desc: "Samsung Mobile Phone",
    quantity: 0,
  },
  {
    id: 2,
    prodName: "Oppo",
    price: 5000,
    onSale: false,
    desc: "Oppo Mobile Phone",
    quantity: 0,
  },
  {
    id: 3,
    prodName: "TV",
    price: 15000,
    onSale: true,
    desc: "Smart TV",
    quantity: 0,
  },
  {
    id: 4,
    prodName: "PC",
    price: 12000,
    onSale: true,
    desc: "HighEnd PC",
    quantity: 0,
  },
  {
    id: 5,
    prodName: "Camera",
    price: 10000,
    onSale: false,
    desc: "DSLR Camera",
    quantity: 0,
  },
  {
    id: 6,
    prodName: "iPad",
    price: 15000,
    onSale: true,
    desc: "Apple iPad",
    quantity: 0,
  },
  {
    id: 7,
    prodName: "Tab",
    price: 4000,
    onSale: false,
    desc: "Android Tab",
    quantity: 0,
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        {
          path: "products",
          element: <Products initialProducts={initialProducts} />,
          children: [
            {
              index: true,
              element: <ProductList />,
            },
            { path: ":productId", element: <ProductDetails /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
