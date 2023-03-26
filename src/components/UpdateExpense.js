import React,{useState,useEffect} from "react";
import axios from "axios";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { maxWidth } from "@mui/system";

const UpdateExpense=()=>{
  const params=useParams();
  const navigate=useNavigate();
  const id=params.id;
  let pid=parseInt(localStorage.getItem("Pid"), 10);
  let name=localStorage.getItem("Uname");
  let amount=parseInt(localStorage.getItem("Uamount"),10);
  let date = localStorage.getItem("Udate");
  let category = localStorage.getItem("Ucategory");
  let uid= localStorage.getItem("Username");
  const [firstName, setFirstName] = useState('Default value');

    const [details,setdetails] = useState({
      id:pid,
      name:name,
      amount:amount,
      date:date,
      category:category,
      uid:uid
    }
    );
    const home = ()=> {
      localStorage.removeItem("Pid");
      localStorage.removeItem("Uname");
        localStorage.removeItem("Uamount");
        localStorage.removeItem("Udate");
        localStorage.removeItem("Ucategory");
      navigate("/expenses/home");
    }
    const onChangeInput=(e)=>{
        console.log(e.target.name,e.target.value);
        setdetails({...details,[e.target.name]: e.target.value});
      }
    /*const getdata = async (id) => {
      const data=await axios.get(`https://localhost:7028/api/Expenses/${id}`);
      console.log(data.data);
      setdetails(data.data);
    }*/
    
    const updateData = async () => {
        try{
        console.log(details);
        await axios.put(`https://localhost:7028/api/Expenses/${details.id}`,{
           id:details.id,
           name:details.name,
           amount:details.amount,
           date:details.date,
           category:details.category,
           uid:details.uid


        })
        localStorage.removeItem("Pid");
        localStorage.removeItem("Uname");
        localStorage.removeItem("Uamount");
        localStorage.removeItem("Udate");
        localStorage.removeItem("Ucategory");

        toast('Successfully Updated', {position: toast.POSITION.BOTTOM_CENTER ,autoClose: 1000,hideProgressBar: true,style: {height:'10px',width:'200px',borderRadius: '10px',background:"rgb(75, 147, 242)",color: '#ffffff',},});
        navigate('/expenses/home');
        
       }
       catch(error){
        alert(error);
       }

    }
   
    return (
      
        <div classname="container">
          <br></br>
          <button class='toggle-btn-sqr-blk' onClick={home}>Home</button>
        <h3 className='h12'>Update</h3>
       
          
          <div className="form1">
          
        <TextField
              style={{ width:maxWidth}}
              type="text"
              label="id"
              hidden
              name="Id"
              variant="outlined"
              value={details.id}
        
              />
            <br />
            

            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              
              onChange={onChangeInput}
              defaultValue={details.name}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Amount"
              name="amount"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.amount}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="date"
              label="Date"
              name="date"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.date}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Category"
              name="category"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.category}
              />
            <br />
            <Button variant="contained" color="primary" onClick={updateData}>
              Update Expense
            </Button>
            </div>
            </div>
    );
}

export default UpdateExpense;