import { Layout, Products, Dashboard } from "./pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <Products /> },
    ],
  },
];

export default routes;
