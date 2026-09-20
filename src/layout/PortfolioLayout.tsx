import { Outlet } from "react-router";
function PortfolioLayout() {
    return (
        <div className="min-h-screen">
            <Outlet />
        </div>
    );
}

export default PortfolioLayout;