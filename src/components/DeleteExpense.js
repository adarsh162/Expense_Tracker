import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";
import { toast } from "react-toastify";

const DeleteExpense=()=>{
    const [details,setdetails] = useState({
        Id:null,
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
        //console.log(details);
        axios.delete(`https://localhost:7028/api/Expenses/${details.Id}`,{
            Id:details.Id,
            Name:details.Name,
            Amount: details.Amount,
            Date:details.Date,
            Category:details.Category
        })
        toast('Successfully Deleted', {icon: '👏',position: toast.POSITION.BOTTOM_CENTER ,style: {height:'10px',width:'200px',borderRadius: '10px',background:"red",color: '#ffffff',},});
       }
       catch(error){
        alert(error);
       }

    }
    return (
        <div>
        <h3>Delete</h3>
          
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
           
            <br />
            <Button variant="contained" color="primary" onClick={updateData}>
              Delete Expense
            </Button>
            </div>
    );
}

export default DeleteExpense;