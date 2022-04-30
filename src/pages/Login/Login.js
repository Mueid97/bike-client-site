import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    return (
        <div className='mx-auto w-50 m-5 ' style={{ height: '100vh' }}>
            <h1 className='text-center text-primary'>Please Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="Email">Email</label>
                <input onChange={handleEmail} className='w-100 mb-3 ps-2' type="email" name="email" placeholder='Your Email' id="" /> <br />
                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} className='w-100 ps-2' type="Password" name="password" placeholder='Your Password' id="" /> <br />
                <div className='text-center'>
                    <button className='btn btn-primary m-5 w-50'>Login</button>
                    <p>Are you New in The Car-Doctor? <Link to='/register' className='btn btn-link text-decoration-none'>Please Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;