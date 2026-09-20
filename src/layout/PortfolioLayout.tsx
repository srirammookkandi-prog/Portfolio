import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

function PortfolioLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <Outlet />
        </div>
    );
}

export default PortfolioLayout;