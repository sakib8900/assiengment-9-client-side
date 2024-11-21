import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import BrandDetail from "../pages/BrandDetail";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../AuthLayout/Login";
import Register from "../AuthLayout/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch("/Coupon.json")
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader: () => fetch("/Coupon.json")
            },
            {
                path: "/details/:_id",
                element: <PrivateRoute>
                    <BrandDetail></BrandDetail>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch("/Coupon.json");
                    const data = await res.json();
                    const singleData = data.find((d) => d._id === params._id);
                    return singleData;
                },
            },
            {
                path: "/profile",
                element: <MyProfile></MyProfile>
            },
            {
                path:"/auth",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: "/auth/login",
                        element:<Login></Login>
                    },
                    {
                        path: "/auth/register",
                        element: <Register></Register>
                    }
                ]
            },
            {
                path: "*",
                element: <h2>Error</h2>
            }
        ]
    }
])

export default router