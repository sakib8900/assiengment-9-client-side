import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import BrandDetail from "../pages/BrandDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch("Coupon.json")
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader: () => fetch("Coupon.json")
            },
            {
                path: "/details/:_id",
                element: <BrandDetail></BrandDetail>,
                loader: async ({ params }) => {
                    const res = await fetch("/Coupon.json");
                    const data = await res.json();
                    const singleData = data.find((d) => d._id === params._id); // Fixed key to match "_id"
                    return singleData;
                },
            },
            
            {
                path: "/profile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
])

export default router