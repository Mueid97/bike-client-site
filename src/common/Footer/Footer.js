import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items d-flex justify-content-between'>
                <div>
                    <h1 style={{color:'orange'}} >Bikers</h1>
                </div>
                <div>
                    <h4>Shop</h4>
                    <p>Shop Parts</p>
                    <p>Wheels and Rims </p>
                    <p>Engine</p>
                    <p>Bike Body Parts </p>
                </div>
                <div>
                    <h4>The Company</h4>
                    <p>About Us</p>
                    <p>Reviews</p>
                    <p>Premium Area</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>info@bikers.com</p>
                    <p>500 Terry Francois St.</p>
                    <p>San Francisco,</p>
                    <p>Tel: 123-456-7890</p>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;