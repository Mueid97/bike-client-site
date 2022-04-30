import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        
      ] = useSignInWithEmailAndPassword(auth);

      const handleEmail = e =>{
          setEmail(e.target.value);

      }

      const handlePassword =e =>{
          setPassword(e.target.value);
      }

      const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
      }
    return (
        <div style={{backgroundColor:'black'}}>
        <div className='mx-auto w-50 p-5 ' style={{ height: '100vh' }}>
            <h1 className='text-center' style={{color:'orange'}}>Please Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="Email" style={{color: 'white'}} >Email</label>
                <input onChange={handleEmail} className='w-100 mb-3 ps-2' type="email" name="email" placeholder='Your Email' id="" /> <br />
                <label htmlFor="password" style={{color: 'white'}}>Password</label>
                <input onChange={handlePassword} className='w-100 ps-2' type="Password" name="password" placeholder='Your Password' id="" /> <br />
                <div className='text-center'>
                    <button className='btn btn-warning m-5 w-50' style={{color:'gray'}}>Login</button>
                    <p style={{color: 'white'}}>Are you New? <Link to='/register' className='btn btn-link text-decoration-none'>Please Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;