import { Link } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './AddExpenseForm';
import { Routes, Route } from "react-router-dom";
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastClassName } from "react-toastify";
import '../App.css';
import '../style/style.css';
import '../style/styles.css';
toast.configure()


const Home = () => {
	const navigate=useNavigate();
	const logout = ()=>{
           localStorage.removeItem("Username");
		   navigate("/");
	}
	const [uid,setUid]=useState(localStorage.getItem("Username"));
	
	const tost= ()=>{
		//toast.success('successful',{className: "success",position: toast.POSITION.BOTTOM_CENTER });
		toast('Success', {icon: '👏',position: toast.POSITION.BOTTOM_CENTER,autoClose: 1000,hideProgressBar: true,style: {width:'200px',borderRadius: '10px',background:"#15883e",color: '#ffffff',},});
	}
	return (
		<div className='container'>
			<h1>Home Page</h1>
			
            <ul>
                <li><Link to={`/expenses/${uid}`}>Show all Expenses</Link></li>
				
            </ul>
			<button onClick={logout}>Log out</button>
			<button onClick={tost}>Toast</button>
			
		</div>
	);
};

export default Home;