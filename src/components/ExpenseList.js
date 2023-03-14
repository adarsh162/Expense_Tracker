import React from 'react'
import ExpenseItem from './ExpenseItem';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import AddExpenseForm from './AddExpenseForm';

const ExpenseList = () => {
    const [expenses,setexpenses]=useState([]);
    const params=useParams();
	const uid=params.uid;

	const getExpenses = async () => {
		try{
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
		<ul className='list-group'>
			
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.amount} date={expense.date} category={expense.category}/>
			))}
		</ul>
		<div>
		<Link to='/expenses/create'>Add Expense</Link> 
		</div>
		<div>
		<Link to='/expenses/update'>Update Expense</Link> 
		</div>
		<div>
		<Link to='/expenses/delete'>Delete Expense</Link> 
		</div>
		</div>
    )
}

export default ExpenseList