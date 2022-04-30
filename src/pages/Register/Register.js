import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,  
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleName = e =>{
          setName(e.target.value);
      }

      const handleEmail = e =>{
          setEmail(e.target.value);
      }

      const handlePassword = e=>{
          setPassword(e.target.value);
      }

      const handleRegister= e =>{
          e.preventDefault();
          createUserWithEmailAndPassword(email,password);
      }
    return (
        <div className='mx-auto w-50 m-5 ' style={{height: '100vh'}}>
            <h1 className='text-center'  style={{color:'orange'}}>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="">Your Name</label>
                <input onBlur={handleName} className='w-100 mb-3 ps-2' type="text" name='Your Name' placeholder='Your Name' required/>
                <label htmlFor="Email">Email</label>
                <input onBlur={handleEmail} className='w-100 mb-3 ps-2' type="email" name="email" placeholder='Your Email' id=""  required/> <br />
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='w-100 ps-2' type="Password" name="password" placeholder='Your Password' id="" required/> <br />
                <div className='text-center'>
                <button className='m-5 w-50' style={{color:'gray'}}>Register</button>
                <p>Already have an Account?<Link to='/login' className='btn btn-link text-decoration-none'>Please Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;