import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://still-brook-35324.herokuapp.com/product`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: '100vh' }}>
            <div>
                <h2 className='text-center' style={{ color: 'orange' }}>Add items</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                    <input className='btn btn-warning' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;