import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";

const ReadExpense=()=>{
    return (
		<div className='container'>
			<h1>All Expenses</h1>
            <ExpenseList/>
		</div>
	);
}
export default ReadExpense;