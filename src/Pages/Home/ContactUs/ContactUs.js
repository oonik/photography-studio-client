import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import heading from '../../../assest/heading-img.png';
import contactBg from '../../../assest/contact-bg.png'
import camera1 from '../../../assest/bg-img-1.png'
import camera2 from '../../../assest/bg-img-2.png'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);

    const handleContact = data => {
         fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged){
                reset();
                toast.success('Booking successfully', {
                    position: 'top-center',
                    closeOnClick: true,
                    autoClose: 2000
                });
            }
         })
    }
    return (
        <section className='mt-20 relative' 
            style={{
                background: `url(${contactBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'bottom',
                paddingBottom: '200px'
            }}>
            <img src={camera1} alt="" className='w-24 absolute hidden lg:inline right-0 lg:right-44' />
            <img src={camera2} alt="" className='w-16 absolute top-20' />
            <h1 className='text-3xl lg:text-4xl font-bold flex items-center justify-center mb-3 '>CONTACT US <span className='ml-3'><img src={heading} alt="" /></span></h1>
            <form onSubmit={handleSubmit(handleContact)} className='mx-20 lg:mx-64 mt-16'>
                <input type="text" placeholder='Name' {...register("name", { required: 'Name is required' })} className='border-b-2 p-2 bg-transparent border-slate-400 focus:outline-none w-full' />
                {errors?.name && <span className='text-red-500'>{errors.name?.message}</span>}

                <input type="email" placeholder='Email' defaultValue={user?.email} {...register("email", { required: 'Email is required' })} className='border-b-2 p-2 mt-6 bg-transparent border-slate-400 focus:outline-none w-full' />
                {errors?.email && <span className='text-red-500'>{errors.email?.message}</span>}

                <input type="number" placeholder='Number' {...register("number", { required: 'Number is required' })} className='border-b-2 p-2 mt-6 bg-transparent border-slate-400 focus:outline-none w-full' />
                {errors?.number && <span className='text-red-500'>{errors.number?.message}</span>}

                <input type="text" placeholder='Message' {...register("message")} className='border-b-2 p-2 bg-transparent mt-16 border-slate-400 focus:outline-none w-full' />
                
                <div className='text-center mt-10'>
                <button type="submit" className='btn btn-md px-10 rounded-full bg-cyan-400 text-white'>Send</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;