import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { maxWidth } from "@mui/system";

const UpdateExpense=()=>{
  const params=useParams();
  const navigate=useNavigate();
  const id=params.id;
    const [details,setdetails] = useState({
        Id:params.id,
        Name:"",
        Amount:0,
        Date:"",
        Category:"",
        Uid:localStorage.getItem("Username")

    });
    const home = ()=> {
      navigate("/expenses/home");
    }
    const onChangeInput=(e)=>{
        
        setdetails({...details,[e.target.name]: e.target.value});
      }
    const getdata = async (id) => {
      const data=await axios.get(`https://localhost:7028/api/Expenses/${id}`);
      console.log(data.data);
      setdetails(data.data);
    }
    
    const updateData = () => {
        try{
        console.log(details);
        axios.put(`https://localhost:7028/api/Expenses/${details.Id}`,{
            Id:details.Id,
            Name:details.Name,
            Amount: details.Amount,
            Date:details.Date,
            Category:details.Category,
            Uid:details.Uid
        })
        toast('Successfully Updated', {position: toast.POSITION.BOTTOM_CENTER ,style: {height:'10px',width:'200px',borderRadius: '10px',background:"rgb(75, 147, 242)",color: '#ffffff',},});
        navigate('/expenses/home');
        
       }
       catch(error){
        alert(error);
       }

    }
    useEffect(()=>{
       getdata(id);
    },[])
    return (
        <div class="container">
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
              value={details.Id}
              onChange = {onChangeInput}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Name"
              name="Name"
              variant="outlined"
              value={details.Name}
              onChange = {onChangeInput}
              autoComplete="true"
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Amount"
              name="Amount"
              variant="outlined"
              onChange = {onChangeInput}
              value={details.Amount}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="date"
              label="Date"
              name="Date"
              variant="outlined"
              onChange = {onChangeInput}
              value={details.Date}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Category"
              name="Category"
              variant="outlined"
              onChange = {onChangeInput}
              value={details.Category}
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