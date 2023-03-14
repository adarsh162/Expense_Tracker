import { Link } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import Remaining from './Remaining';
import AddExpenseForm from './AddExpenseForm';
import { Routes, Route } from "react-router-dom";
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import { TextField } from "@mui/material";

const Home = () => {
	const [uid,setUid]=useState(null);
	const onChangeInput=(e)=>{
        
        setUid(e.target.value);
      }
	return (
		<div className='container'>
			<h1>Home Page</h1>
			<form>
				<TextField
				 type="text"
				 label="id"
				 name="Id"
				 variant="outlined"
				 onChange = {onChangeInput}>
					
				</TextField>
			</form>
            <ul>
                <li><Link to={`/expenses/${uid}`}>Show all Expenses</Link></li>
            </ul>
		</div>
	);
};

export default Home;