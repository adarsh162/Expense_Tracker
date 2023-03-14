import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import AddExpenseForm from './components/AddExpenseForm';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Home from './components/Home';
import ReadExpense from './components/ReadExpense';
import UpdateExpense from './components/UpdateExpense';
import DeleteExpense from './components/DeleteExpense';

const App = () => {
	return (
			<div className='container'>
	  <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/expenses/:uid" element={<ReadExpense />} />
          <Route path="/expenses/create" element={<AddExpenseForm />} />
		  <Route path="/expenses/update/:id" element={<UpdateExpense />} />
		  <Route path="/expenses/delete" element={<DeleteExpense />} />

      </Routes>
			</div>
	);
};
const AppWrapper = () => {
	return (
	  <Router>
		<App />
	  </Router>
	);
  };
export default AppWrapper;
