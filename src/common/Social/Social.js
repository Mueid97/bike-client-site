import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import socialImg from '../../images/google.png';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const naviget = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorHandle;
    if (error) {
        errorHandle = <p style={{color:'gray'}}>Error: {error.message}</p>
    }
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    if (user) {
        naviget(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-light w-50' ></div>
                <p className='mt-2 px-2' style={{ color: 'gray' }}>or</p>
                <div style={{ height: '1px' }} className='bg-light w-50' ></div>
            </div>
            {errorHandle}
            <div className='text-center mb-2'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-warning w-50'>
                    <img style={{ width: '25px' }} src={socialImg} alt="" />
                    <span className='px-2'>Google</span>
                </button>
            </div>
        </div>
    );
};

export default Social;