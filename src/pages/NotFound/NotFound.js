import React from 'react';
import Notfound from '../../images/404.jpg';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;