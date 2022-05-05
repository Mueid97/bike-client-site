import React from 'react';
import { Link} from 'react-router-dom';
import UseProducts from '../../hooks/UseHooks/UseProducts';
import './ManageItem.css'
const ManageItem = () => {
    const [products,setProducts] = UseProducts();
    

    const handleDelete = id =>{
        const procced = window.confirm('Are You Sure to Delete?');
        if(procced){
            const url= `http://localhost:5000/product/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{color: 'orange'}}>
        <div  className='text-center'>
            <h4>Manage Items</h4>
            {
                products.map(product => <div
                key={product._id} className='manage'
                >
                    <h5 className='manageitem'> <img style={{heigth:'200px', width:'200px'}} src={product.image} alt="" /> Name:{product.name} Price:{product.price}  <button className='btn btn-danger' onClick={()=> handleDelete(product._id)} >Delete</button> </h5>

                </div> )
            }
            <p style={{color: 'white'}}> <Link to='/additem' className='btn btn-success '>Add Items</Link></p>
        </div>
        </div>
    );
};

export default ManageItem;