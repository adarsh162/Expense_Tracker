import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import '../style/style.css';
import '../style/styles.css';
import { borderRadius } from "@mui/system";


const MyProfile = () => {
    const navigate=useNavigate();
   const username = localStorage.getItem("Username");
   const age= parseInt(localStorage.getItem("Userage"),10);
   const email= localStorage.getItem("Useremail");
   const phone = parseInt(localStorage.getItem("Userphone"),10);
   const update = () => {
    navigate("/expenses/user/update");
   }
   const home = ()=> {
    navigate("/expenses/home");
}

    return (
		<div className='container'>
            <br></br>
           
            <button class='toggle-btn-sqr-blk' onClick={home}>Home</button>
			<h1 className="h12">My-Profile</h1>
            <img src={require('../style/pic.png')} className="pic"/>
            <div className="details">
            <div>Username : {username} </div>
            <div>Email : {email} </div>
            <div>Age : {age} </div>
            <div>Phone : {phone} </div>


            <button class="toggle-btn-ctr-green" onClick={update}>Update User</button>
            </div>
		</div>
	);
}
export default MyProfile;