import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import '../style/login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ()=>{
    const navigate = useNavigate();
    const [user,setudetails]=useState({
		
		Username:"",
		Password:"",
        token:"String"
	})
	const login= async( event )=>{
        event.preventDefault();
		try{
			console.log(user);
            let res=await axios.post("https://localhost:7028/api/Auth/Login",{
			username:user.Username,
            password:user.Password,
            token:user.token
		   });
		   
		   setudetails("");

           if(res.status==200){
            console.log(res);
            localStorage.setItem("Username",res.data.userName);
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
  const register = ()=>{
    navigate("/register");
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
    
                <p className="lead fw-normal mb-0 me-3">Sign in </p>
    
             
              </div>
    
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
    
              <MDBInput wrapperClass='mb-4' label="Username" id='formControlLg' name="Username" type='text' onChange={onChangeInput}  size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' name="Password" type='password' onChange={onChangeInput} value={user.Password} size="lg"/>
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5" size='lg' onClick={login}>Login</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2" >Don't have an account?<button onClick={register}>Register</button> </p>
              </div>
    
            </MDBCol>
    
          </MDBRow>
          </div>
    
         
         <div className='footer'>
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2023. All rights reserved.
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
export default Login;