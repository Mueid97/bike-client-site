import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='mx-auto w-50 p-5 ' style={{ height: '100vh' }}>
                <h1 className='text-center' style={{ color: 'orange' }}>Register</h1>
                <form onSubmit={handleRegister}>
                    <label htmlFor="" style={{color: 'white'}}>Your Name</label>
                    <input onBlur={handleName} className='w-100 mb-3 ps-2' type="text" name='Your Name' placeholder='Your Name' required />
                    <label htmlFor="Email" style={{color: 'white'}}>Email</label>
                    <input onBlur={handleEmail} className='w-100 mb-3 ps-2' type="email" name="email" placeholder='Your Email' id="" required /> <br />
                    <label htmlFor="password" style={{color: 'white'}}>Password</label>
                    <input onBlur={handlePassword} className='w-100 ps-2' type="Password" name="password" placeholder='Your Password' id="" required /> <br />
                    <div className='text-center'>
                        <button className='btn btn-warning m-5 w-50' style={{ color: 'gray' }}>Register</button>
                        <p style={{color: 'white'}}>Already have an Account?<Link to='/login' className='btn btn-link text-decoration-none'>Please Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;