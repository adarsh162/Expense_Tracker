import React from 'react'
import ExpenseItem from './ExpenseItem';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddExpenseForm from './AddExpenseForm';
import '../style/style.css';
import '../style/styles.css';

const ExpenseList = () => {
	let total=0;
    const [expenses,setexpenses]=useState([]);
    const params=useParams();
	const uid=params.uid;
    const navigate=useNavigate();
	const home = ()=> {
		navigate("/expenses/home");
	}
	const add = () => {
		navigate('/expenses/create');
	}
	const getExpenses = async () => {
		try{
			//console.log(uid);
	  const data=await axios.get(`https://localhost:7028/api/Expenses/users/${uid}`);
	  //console.log(data);
	  setexpenses(data.data);
	  }
	  catch(error){
		console.log(error);
	  }
	}

	  useEffect(()=>{
		getExpenses();
	  },[expenses]);
	

    return (
		<div className='container'>
			<br></br>
			<button class='toggle-btn-sqr-blk' onClick={home}>Home</button>
			<h1 className='h12'>All Expenses💵</h1>
			 
         <div class="shadow-lg rounded-lg" >
			<hr></hr>
        <div class="expense-header flex flex-wrap space-x-40 px-10 py-2" >
		<td><span className='eh'>Name</span></td>
            
		<td><span className='eh'>Date</span></td>
            <span className='eh'>Category</span>
             <td></td>
			 <span className='eh'>Edit</span>
            <span className='eh'>Delete</span>
			<span className='eh'>Amount</span>
        </div>
        
		<hr></hr>
        </div>
		<ul className='list-group'>
			
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.amount} date={expense.date} category={expense.category}/>
			))}
		</ul>
		<div>
			
		
        <div class="px-72 py-5">
		<hr></hr>
        
            
			{
				
					expenses.map((exp)=>{
						 total+=exp.amount;
					})
				
			}
			<div class='total'>
				Total : ₹{total}
			</div>
       
        </div>
    
    </div>



		<button class='toggle-btn-ctr-blue' onClick={add}>Add Expense</button> 
		</div>
	
    )
}

export default ExpenseList