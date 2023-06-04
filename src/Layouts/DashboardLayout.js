import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBarDashboard from "../Pages/Dashboard/NavBarDashboard/NavBarDashboard";
import { AuthContext } from "../Context Api/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <NavBarDashboard />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content bg-sky-50 lg:bg-white">
            <li>
              <Link to="/dashboard">My Appoinment</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
