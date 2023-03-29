import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import '../style/login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ()=>{
    const navigate = useNavigate();
    const [user,setudetails]=useState({
		
		Username:"",
		Password:"",
    Age:0,
    Email:"",
    Phone:0,
    token:"String"
	})
	const register= async( event )=>{
        event.preventDefault();
		try{
			console.log(user);
            let res=await axios.post("https://localhost:7028/api/Auth/Register",{
			      username:user.Username,
            password:user.Password,
            email:user.Email,
            age:user.Age,
            phone:user.Phone
		   });
		   
		   setudetails("");
           if(res.status==200){
            localStorage.setItem("Username",res.data.username);
            localStorage.setItem("Useremail",res.data.email);
            localStorage.setItem("Userage",res.data.age);
            localStorage.setItem("Userphone",res.data.phone);
            console.log(res.data);
            toast('Successful', {icon: '👏',position: toast.POSITION.BOTTOM_CENTER,autoClose: 1000,hideProgressBar: true,style: {width:'200px',borderRadius: '10px',background:"#15883e",color: '#ffffff',},});
            navigate("/expenses/home");
           }
           console.log(res.data);
		}
		catch(error){
			toast(error, {position: toast.POSITION.BOTTOM_CENTER,autoClose: 1000,hideProgressBar: true,style: {width:'200px',borderRadius: '10px',background:"red",color: '#ffffff',},});
		}
	}
  const login = ()=>{
    navigate("/");
  }
      const onChangeInput=(e)=>{
        
        setudetails({...user,[e.target.name]: e.target.value});
      }
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <div className='pad'>
          <MDBRow>
    
            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>
    
            <MDBCol col='4' md='6'>
    
              <div className="d-flex flex-row align-items-center justify-content-center">
    
                <p className="lead fw-normal mb-0 me-3">Register</p>
    
             
              </div>
    
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
    
              <MDBInput wrapperClass='mb-4' label="Username" id='formControlLg1' name="Username" type='text' onChange={onChangeInput}  size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg2' name="Password" type='password' onChange={onChangeInput} value={user.Password} size="lg"/>
              <MDBInput wrapperClass='mb-4' label="Email" id='formControlLg3' name="Email" type='text' onChange={onChangeInput} value={user.Email} size="lg"/>
              <MDBInput wrapperClass='mb-4' label="Age" id='formControlLg4' name="Age" type='number' onChange={onChangeInput} value={user.Age} size="lg"/>
              <MDBInput wrapperClass='mb-4' label="Phone" id='formControlLg5' name="Phone" type='number' onChange={onChangeInput} value={user.Phone} size="lg"/>
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5" size='lg' onClick={register}>Register</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2" onClick={login}>Already Have Account?<button onClick={login}>Login</button></p>
              </div>
    
            </MDBCol>
    
          </MDBRow>
          </div>
    
          <div className="footer">
    
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2020. All rights reserved.
            </div>
    
            <div>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook-f' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='twitter' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='google' size="md"/>
              </MDBBtn>
    
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='linkedin-in' size="md"/>
              </MDBBtn>
    
            </div>
    
          </div>
    
        </MDBContainer>
      );
}
export default Register;