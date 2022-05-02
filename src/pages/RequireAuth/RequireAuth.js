import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init'
const RequireAuth = ({children}) => {
   const [user,loading] = useAuthState(auth);
   const location = useLocation();
   const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
   if (loading) {
     return <div className="d-flex justify-content-center align-items-center">
     <div className="spinner-border text-warning" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
   </div>
 }
   if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }

   if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
     return <div className='text-center mt-5'>
         <h2 className='text-danger'>Email is not verified!!!</h2>
         <h4 className='text-success'> Please Verify your email address</h4>
         <button
         className='btn btn-warning'
             onClick={async () => {
                 await sendEmailVerification();
                 toast('Sent email');
             }}
         >
           Verification Again
         </button>
         <ToastContainer></ToastContainer>
     </div>
 }

    return children;
};

export default RequireAuth;