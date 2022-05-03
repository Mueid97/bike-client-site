import React from 'react';
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
        <div  style={{height: '100vh'}}>
            <h4>Manage Items</h4>
            {
                products.map(product => <div
                key={product._id} className='manage'
                >
                    <h5 className='manageitem'>{product.name} <button className='btn btn-danger' onClick={()=> handleDelete(product._id)} >Delete</button> </h5>
                </div> )
            }
        </div>
        </div>
    );
};

export default ManageItem;