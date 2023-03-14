import React from 'react';
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from 'axios';

const ExpenseItem = (props) => {
	const DeleteData = () => {
        try{
        //console.log(details);
        axios.delete(`https://localhost:7028/api/Expenses/${props.id}`,
        );
        alert("Successfully Deleted!!");
       }
       catch(error){
        alert(error);
       }

    }
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div className='col-sm-2'>
			{props.cost}
			</div>
			<div className='col-sm-2'>
			{props.date}
			</div>
			<div className='col-sm-2'>
			{props.amount}
			</div>
			<div className='col-sm-2'>
			{props.category}
			</div>
			<div>
			<Link to={`/expenses/update/${props.id}`}>Update</Link>
			</div>
			<div>
				<button onClick={DeleteData}>Delete</button>
			</div>
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
					£{props.cost}
				</span>
				<TiDelete size='1.5em'></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;