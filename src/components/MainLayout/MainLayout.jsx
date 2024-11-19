import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
    return (
        <div className="w-[80%] mx-auto py-10">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;