import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import '../style/style.css';
import '../style/styles.css';

const ReadExpense=()=>{
    return (
		<div className='container'>
			
            <ExpenseList/>
		</div>
	);
}
export default ReadExpense;