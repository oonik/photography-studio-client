import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import signupImg from '../../assest/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector-r.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hook/useToken';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, {replace: true});
    };

    const handleSignup = data =>{
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            if(user){
                reset();
                saveUser(data.name, data.email)
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            setSignupError(errorMessage);
          });
    };
    const saveUser = (name, email) =>{
        const user = {
            name,
            email
        };
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           setCreatedUserEmail(email);
        });
    };
    return (
        <div className="hero min-h-screen">
            <div className="lg:grid grid-cols-2  justify-center items-center">
                <div>
                    <img src={signupImg} alt="" />
                </div>
                <div className="card lg:max-w-sm shadow-2xl lg:w-1/2 lg:ml-20 bg-cyan-400">
                
                    <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                       <h1 className='text-3xl font-bold text-white'>Signup Now!!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", {required: "Name is required"})} className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
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
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                    <p className='text-red-500 text-center'>{signupError}</p>
                    <p className='text-center pb-4 text-red-500'>Already have an account?<Link to='/login' className='text-white font-semibold'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;