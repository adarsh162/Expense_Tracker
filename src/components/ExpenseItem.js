import React from 'react';
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/styles.css';
import '../style/style.css';

const ExpenseItem = (props) => {
	const DeleteData = () => {
        try{
        //console.log(details);
        axios.delete(`https://localhost:7028/api/Expenses/${props.id}`,
        );
		toast('Successfully Deleted', {position: toast.POSITION.BOTTOM_CENTER ,style: {height:'10px',width:'200px',borderRadius: '10px',background:"red",color: '#ffffff',},});
       }
       catch(error){
        alert(error);
       }

    }
	return (
		<li className='list-group-item  justify-content-between '>
			<span >{props.name}</span>
            <span >{props.date}</span>
            <span >{props.category}</span>
             <span class="pl-24"><a href="{% url 'edit' expense.id %}">
             </a></span>
			
			<div>
			<Link to={`/expenses/update/${props.id}`}>Update</Link>
			</div>
			<div>
				<button style={{color:"red"}}onClick={DeleteData}>Delete</button>
			</div>
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
				₹{props.cost}
				</span>
				
			</div>
		</li>
	);
};

export default ExpenseItem;