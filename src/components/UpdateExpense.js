import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";
import { useParams } from "react-router-dom";

const UpdateExpense=()=>{
  const params=useParams();
    const [details,setdetails] = useState({
        Id:params.id,
        Name:"",
        Amount:null,
        Date:"",
        Category:""

    });

    const onChangeInput=(e)=>{
        
        setdetails({...details,[e.target.name]: e.target.value});
      }
    const updateData = () => {
        try{
        console.log(details);
        axios.put(`https://localhost:7028/api/Expenses/${details.Id}`,{
            Id:details.Id,
            Name:details.Name,
            Amount: details.Amount,
            Date:details.Date,
            Category:details.Category
        })
        alert("Successfully Updated!!");
       }
       catch(error){
        alert(error);
       }

    }
    return (
        <div>
        <h3>Update</h3>
          
        <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="id"
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
    );
}

export default UpdateExpense;