import "bootstrap/dist/css/bootstrap.min.css";
import "./MyDashboard.css";
import { Link } from "react-router-dom";

const axios = require("axios");
function Dashboard() {
  function openNav() {
    document.getElementById("mySidenav");
    document.getElementById("main");
  }

  function closeNav() {
    document.getElementById("mySidenav");
    document.getElementById("main");
  }

  return (
    <div>
      <div class="topnav">
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      <div class="sidenav">
        <Link to="/Task">Tasks</Link>
        <Link to="/User">Users</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Dashboard;
