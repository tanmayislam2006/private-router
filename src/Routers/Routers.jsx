import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Registar from "../Components/Registar/Registar";
import Dashboard from "../Components/Dashboard/Dashboard";
import Orders from "../Components/Orders/Orders";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registar />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Orders />
          </PrivateRouter>
        ),
      },
      {
        path:'/about',
        element:<PrivateRouter><h2>This is PrivateRouter</h2></PrivateRouter>
      }
    ],
  },
]);
export default router;
