import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import loginImg from '../../assest/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector-r.png';



const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleLogin = data =>{
        console.log(data)
    }
    return (
        <div className="hero min-h-screen">
            <div className="lg:grid grid-cols-2  justify-center items-center">
                <div className="">
                    <img src={loginImg} alt="" className=' w-full' />
                </div>
                <div className="card  lg:max-w-sm shadow-2xl lg:w-1/2 lg:ml-20 bg-cyan-400">
                
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                       <h1 className='text-3xl font-bold text-white '>Login Now!!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", {required: "Email is required"})} className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", {required: "password is required", minLength: {value: 8, message: "password must 8 number or character"}})} className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-red-500'>{}</p>
                    <p className='text-center pb-4 text-red-500'>Don't have an account? <Link to='/signup' className='text-white font-semibold'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;