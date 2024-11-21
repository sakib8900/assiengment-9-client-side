import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header></Header>

            {/* Main Content */}
            <div className="w-[90%] md:w-[80%] mx-auto py-10 flex-grow">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
