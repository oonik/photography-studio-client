import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assest/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector-r.png';
import { FcGoogle, IconName } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hook/useToken';



const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loginUser, signInEmail } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if(token){
       navigate(from, {replace: true})
    };

    const handleLogin = data => {
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                    reset();
                    setLoginUserEmail(data.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                // console.log(errorCode)
                const errorMessage = error.message;
                setLoginError(errorMessage);
            });
    };

    const handleLoginEmail = () =>{
        signInEmail()
        .then((result)=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
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
                            <input type="email" placeholder="email" {...register("email", { required: "Email is required" })} className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: "password is required", minLength: { value: 8, message: "password must 8 number or character" } })} className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleLoginEmail} className='btn btn-outline mx-8 mb-2 text-white bg-black'>Continue with Email <FcGoogle></FcGoogle></button>
                    <p className='text-red-500'>{loginError}</p>
                    <p className='text-center pb-4 text-red-500'>Don't have an account? <Link to='/signup' className='text-white font-semibold'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;