import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        })
        
    };
    return (
        <div className='w-50 mx-auto' style={{height: '100vh'}}>
        <h2>Please add item</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
            <input type="submit" value="Add Item" />
        </form>
    </div>
    );
};

export default AddItem;