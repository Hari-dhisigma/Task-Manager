import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Dashboard from './MyDashboard';
import "./Tasklist.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState ,Component} from 'react';

function Tasklist() {
    
    const [Item,setItem ]=useState([]);
    const [countryList, setCountryList]=useState([]);
    const [product,setproduct]=useState(["cycle"]);
    
    console.log(Item);
    useEffect(()=>{
      axios.get('https://uur8y8dmqc.execute-api.us-west-2.amazonaws.com/taskfetch')
      .then((res) => {
          // setPosts(res.data.slice(0, 10));
          console.log(res);setItem(res.data);
         // setaddresst(res.data);
      })
  
     },[]);
  return( <>
  <Dashboard/>

  <div class="TaskList">
      <h4>Task</h4>
      <Link to="/AddTask">
        <div class="buttonAddTask">
        <button type="button" class="btn btn-success">
          Add Task
        </button></div>
      </Link>
  <div class="containerTask">
    
     <table class="center">
  <thead>
  <tr>
      <th>Id</th>

      <th>Title</th>
      
      <th>Owner</th>
      <th>CreatedOn</th>
      <th>status</th>
    </tr>
  </thead>
  <tbody>
    
    
      {Item. map((Item,indx) => <tr><td>{Item.id}  </td><td>  {Item.txtTitle}</td>  <td> {Item.txtUsername}</td><td> {Item.dtCreatedOn}</td><td> {Item.txtStatus}</td></tr>)}

    
  
  </tbody>
</table>
</div>
</div>
</>

  );
}
export default Tasklist;

