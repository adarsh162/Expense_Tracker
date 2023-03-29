import React,{useState,useEffect} from "react";
import axios from "axios";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { maxWidth } from "@mui/system";

const UpdateUser=()=>{
  const params=useParams();
  const navigate=useNavigate();
  let name=localStorage.getItem("Username");
  let age=parseInt(localStorage.getItem("Userage"),10);
  let email = localStorage.getItem("Useremail");
  let phone = localStorage.getItem("Userphone");

    const [details,setdetails] = useState({
      name:name,
      age:age,
     email:email,
      phone:phone,
    }
    );
    const home = ()=> {
      navigate("/expenses/home");
    }
    const onChangeInput=(e)=>{

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
        await axios.put(`https://localhost:7028/api/Auth/${details.name}`,{
           username:details.name,
           password:"string",
           email:details.email,
           age:details.age,
           phone:details.phone,

        })
        localStorage.setItem("Username",details.name);
        localStorage.setItem("Userage",details.age);
        localStorage.setItem("Useremail",details.email);
        localStorage.setItem("Userphone",details.phone);
        

        toast('Successfully Updated', {position: toast.POSITION.BOTTOM_CENTER ,autoClose: 1000,hideProgressBar: true,style: {height:'10px',width:'200px',borderRadius: '10px',background:"rgb(75, 147, 242)",color: '#ffffff',},});
        navigate('/expenses/myprofile');
        
       }
       catch(error){
        toast(error, {position: toast.POSITION.BOTTOM_CENTER,autoClose: 1000,hideProgressBar: true,style: {width:'200px',borderRadius: '10px',background:"red",color: '#ffffff',},});

       }

    }
   
    return (
      
        <div classname="container">
          <br></br>
          <button class='toggle-btn-sqr-blk' onClick={home}>Home</button>
        <h3 className='h12'>Update</h3>
       
          
          <div className="form12">
          
        
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
              label="Age"
              name="age"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.age}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Email"
              name="email"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.email}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Phone no"
              name="phone"
              variant="outlined"
              onChange = {onChangeInput}
              defaultValue={details.phone}
              />
            <br />
            <Button variant="contained" color="primary" onClick={updateData}>
              Update User
            </Button>
            </div>
            </div>
    );
}

export default UpdateUser;