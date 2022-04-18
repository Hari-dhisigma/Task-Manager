
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyDashboard.css";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Kanban from "./Kanban";

const axios = require("axios");
function Dashboard() {
  function openNav() {
    document.getElementById("mySidenav")
    document.getElementById("main")
  }
  
  function closeNav() {
    document.getElementById("mySidenav")
    document.getElementById("main")
  }
  
  return (
    // <div>
    //   <Kanban />
    <div>
      <div class="topnav">
      <Link to="/Dashboard">Dashboard</Link>

</div>
<div class="sidenav">
<Link to="/User">Users</Link>
<Link to="/Task">Tasks</Link>
<Link to="/">Logout</Link>
</div>
</div>

// </div>
  );
}

export default Dashboard;