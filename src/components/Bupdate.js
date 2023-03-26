import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { maxWidth } from "@mui/system";

const Bupdate = () => {
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
    }
    );
    const getdata = async (id) => {
        try{
        const data=await axios.get(`https://localhost:7028/api/Expenses/${id}`);
      //  console.log(data.data);
        setdetails(data.data);
       // console.log(data.data);
        localStorage.setItem('Pid',data.data.id)
       // localStorage.setItem('Uuid',data.data.id);
        localStorage.setItem('Uname',data.data.name);
        localStorage.setItem('Udate',data.data.date);
        localStorage.setItem('Uamount',data.data.amount);
        localStorage.setItem('Ucategory',data.data.category);
        navigate(`/expenses/update/${details.Uid}`);
        }
        catch(error){

        }
      }
    useEffect(()=>{
        getdata(id);
      //  console.log(details);
        
    },[]);
	return (
		<li className='list-group-item  justify-content-between '>
			
		</li>
	);
}

export default Bupdate;
