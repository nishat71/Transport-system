import React, { useState } from "react";
import Addroutestartstop from "../Addroutestartstop/Addroutestartstop";
import Dashboard from "../Dashboard/Dashboard";
import "./Admindashboard.css";
import useAuth from "../../Hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Rotesinfo from "../Routesinfo/Rotesinfo";
import Transportdemands from "../Transportdemands/Transportdemands";
import Viewdemands from "../Viewdemands/Viewdemands";
import Suggestions from "../Suggestion/Suggestion";
import Transportinfo from "../Transportinfo/Transportinfo";


export default function AdminDashboard() {
  const { admin } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="side-nav" style={{ backgroundColor: "#333" }}>
          <div className="logobar">

          </div>

          <ul className="text-light list-unstyled">


            <li className="" onClick={() => setActiveTab("dashboard")}>

              Dashboard
            </li>


            {admin && (
            <li onClick={() => setActiveTab("addroutes")}> Add routes</li>
            )} 
             {admin && (
            <li className="" onClick={() => setActiveTab("makeadmin")}>
             
              Make Admin
            </li>
             )}
             {admin && (
            <li className="" onClick={() => setActiveTab("routesinfo")}>

              Routes Information
            </li>
             )}
             {admin && (
            <li className="" onClick={() => setActiveTab("groups")}>

              Transport Demands
            </li>
             )}
              {admin && (
            <li className="" onClick={() => setActiveTab("viewgroups")}>

              View Demands
            </li>
             )}
            {admin && (
            <li className="" onClick={() => setActiveTab("suggestions")}>

              Optimal Suggestions
            </li>
             )}
<li className="" onClick={() => setActiveTab("transportinfo")}>

Transportation Information
</li>

          </ul>
        </div>
        <div className="side-content">
          {/* {activeTab === "makeadmin" && <MakeAdmin/>} */}
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "addroutes" && <Addroutestartstop />}
          {activeTab === "makeadmin" && <MakeAdmin />}
          {activeTab === "routesinfo" && <Rotesinfo />}
          {activeTab === "groups" && <Transportdemands/>}
          {activeTab === "viewgroups" && <Viewdemands/>}
          {activeTab === "suggestions" && <Suggestions/>}
          {activeTab === "transportinfo" && <Transportinfo/>}







        </div>
      </div>
    </div>
  );
}
