import React, { useState } from 'react';
import axios from "axios";

const AddExpenseForm = () => {
    const [details,setdetails]=useState({
		Id:"",
		Name:"",
		Amount:"",
		Date:"",
		Category:"",
	})
	const add= async( event )=>{
        event.preventDefault();
		try{
			console.log(details);
            await axios.post("https://localhost:7028/api/Expenses",{
			Name:details.Name,
			Amount:details.Amount,
			Date:details.Date,
			Category:details.Category
		   });
		   
		   setdetails("");
		   alert("Expense has been added succesfully");
		}
		catch(error){
			alert(error);
		}
	}
      const onChangeInput=(e)=>{
        
        setdetails({...details,[e.target.name]: e.target.value});
      }
	return (
    
		<div>
            <h2>Add Expense</h2>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						name='Name'
						value={details.Name}
						onChange={onChangeInput}

					></input>
				</div>
				</div>
				<br/>
				<div className='row'>
				<div className='col-sm'>
					<label for='amount'>Amount</label>
					<input
						required='required'
						type='number'
						className='form-control'
						name='Amount'
						value={details.Amount}
						onChange={onChangeInput}

					></input>
				</div>
				</div>
				<br/>
				<div className='row'>
				<div className='col-sm'>
					<label for='date'>Date</label>
					<input
						required='required'
						type='date'
						className='form-control'
						name='Date'
						value={details.Date}
						onChange={onChangeInput}

					></input>
				</div>
				</div>
				<br/>
				<div className='row'>
				<div className='col-sm'>
					<label for='category'>Category</label>
					<input
						required='required'
						type='text'
						className='form-control'
						name='Category'
						value={details.Category}
						onChange={onChangeInput}

					></input>
				</div>
				<br/>
				

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3' onClick={add}>
						Add Expense
					</button>
				</div>
            </div>
			</div>
	
	);
};

export default AddExpenseForm;