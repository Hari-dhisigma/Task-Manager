import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddTask.css";
import axios from 'axios';
import Dashboard from './MyDashboard';
import React, { useEffect, useState ,Component} from 'react';
function AddTask(){
    const [NameList, setNameList] = useState([]);
    const [UserId, setUserId] = useState();
    const [Title, setTitle] = useState();
    const [discrption, setdiscrption] = useState();
    useEffect(() => {
        axios.get(' https://ciripf7zve.execute-api.us-west-2.amazonaws.com/tskUserselect')
          .then((res) => {
            // setPosts(res.data.slice(0, 10));
            console.log(res.data); 
            setNameList(res.data)
            // console.log(res.data.Id);
    
    
    
            // setaddresst(res.data);
          })
    
      }, []);
      const add = () => {
        console.log(UserId);
     
        var dt = '{ "txtTitle":"' + Title + '","txtDescription": "' + discrption + '","refAssignedTo": "' + UserId + '", "refOwner": 4}';
        axios.post('https://e67kuu9rwb.execute-api.us-west-2.amazonaws.com/taskIsert', dt)
          .then(function (res) {
            console.log(res.data);
            // if (res.data.length!=0) {
            //   navigate('/Product')
            // }
            // else {
            //   alert("No response")
            // }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      useEffect(() => {
    
      }, []);
    
return(
<div>
<Dashboard/>

<div class="containerAddTask">
<h1>ADD Task</h1>
<div class="form-group">

<label for="Title" class="form-label">Title</label>
<input type="text" class="form-control-file" id="Title" placeholder="Title"value={Title} onChange={e => setTitle(e.target.value)} ></input>
<div className="formfield">
<label class=".control-label" >discription:</label></div>
<textarea   id="discription" rows="4" cols="50"value={discrption} onChange={e => setdiscrption(e.target.value)}></textarea><br></br>
 




<div class="form-group">
          <label for="exampleFormControlSelect1">Assign To:</label>
          <select  id="exampleFormControlSelect1" value={UserId} onChange={e =>  setUserId(e.target.value)} >
            {

              NameList.map((itm, indx) => {

                return <option key={itm.id} value={itm.id}>{itm.txtUsername}</option>;
              })
            }
          </select>
        </div></div>
        <div class="col">
            <button type="button" class="btn btn-success" onClick={add}  >Save</button>
          </div>
          </div>
</div>
);
}
export default AddTask;