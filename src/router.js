import { Layout, Products, Dashboard } from "./pages";
import { Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const routes = [
  {
    path: "/",
    element: <Layout firebaseApp={app} />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <Products firebaseApp={app} /> },
      { path: "/", element: <Navigate to="dashboard" /> },
    ],
  },
];

export default routes;
