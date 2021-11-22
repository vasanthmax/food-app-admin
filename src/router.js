import { Layout, Products, Dashboard } from "./pages";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "/", element: <Navigate to="dashboard" /> },
    ],
  },
];

export default routes;
