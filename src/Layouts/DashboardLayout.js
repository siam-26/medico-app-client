import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBarDashboard from "../Pages/Dashboard/NavBarDashboard/NavBarDashboard";

const DashboardLayout = () => {
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
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
