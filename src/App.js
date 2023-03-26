import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/AddExpenseForm';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Home from './components/Home';
import ReadExpense from './components/ReadExpense';
import UpdateExpense from './components/UpdateExpense';
import DeleteExpense from './components/DeleteExpense';
import Login from './components/Login';
import Register from './components/Register';
import Bupdate from './components/Bupdate';

const App = () => {
	return (
			<div className='container'>
				
	  <Routes>
	      <Route path="/" element={<Login/>} />
		  <Route path="/register" element={<Register/>} />
          <Route path="/expenses/home" element={<Home/>} />
          <Route path="/expenses/:uid" element={<ReadExpense />} />
          <Route path="/expenses/create" element={<AddExpenseForm />} />
		  <Route path="/expenses/bupdate/update/:id" element={<Bupdate/>} />
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
