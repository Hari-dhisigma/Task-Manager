import React, { Component } from "react";

import { render } from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import User from "./User";
import AddUser from "./AddUser";
import Dashboard from "./MyDashboard";
import Tasklist from "./Tasklist";
import AddTask from "./AddTask";
import Kanban from "./Kanban";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",

      isUserAuthenticated: true,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <ul>
            <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Product">Product</Link>
              </li>              

            </ul> */}

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/User" element={<User />} />
              <Route path="/AddUser" element={<AddUser />} />
              <Route path="/MyDashboard" element={<Dashboard />} />
              <Route path="/Task" element={<Tasklist />} />
              <Route path="/AddTask" element={<AddTask />} />
              <Route path="/Dashboard" element={<Kanban />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
