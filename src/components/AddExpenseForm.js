import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddExpenseForm = () => {
	
	const uid=localStorage.getItem("Username");
    const [details,setdetails]=useState({
		Id:0,
		Name:"",
		Amount:"",
		Date:"",
		Category:"",
	})
	const navigate=useNavigate();
	const add= async( event )=>{
        event.preventDefault();
		try{
			console.log(details);
            await axios.post("https://localhost:7028/api/Expenses",{
			Name:details.Name,
			Amount:details.Amount,
			Date:details.Date,
			Category:details.Category,
			Uid:uid,
		   });
		   
		   
		   toast('Success', {icon: '👏',position: toast.POSITION.BOTTOM_CENTER ,style: {height:'10px',width:'200px',borderRadius: '10px',background:"#15883e",color: '#ffffff',},});
		   navigate('/expenses/home');
		}
		catch(error){
			alert(error);
		}
	}
	const home = ()=> {
		navigate("/expenses/home");
	}
      const onChangeInput=(e)=>{
        
        setdetails({...details,[e.target.name]: e.target.value});
      }
	return (
    
		<div className='container'>
			<br></br>
			<button class='toggle-btn-sqr-blk' onClick={home}>Home</button>
            <h1 class='h12'>Add Expense</h1>
			<div class='form1'>
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
            <div className='col-sm1'>
            	<div className='row'>
					<button type='submit' className='btn btn-primary mt-3' onClick={add}>
						Add Expense
					</button>
				</div>
            </div>
			</div>
			</div>
	
	);
};

export default AddExpenseForm;