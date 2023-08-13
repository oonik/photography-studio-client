import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assest/logo.png';
import bg from '../../assest/hero-bg.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch((error) => console.log(error))
    };

    const menuItems = <>
        <li className='text-xl text-cyan-500'><Link to='/'>Home</Link></li>
        <li className='text-xl text-cyan-500'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='text-xl text-cyan-500'><Link to='/contactUs'>Contact Us</Link></li>
        {
            user?.email ?
                <li><button onClick={handleLogout} className='btn btn-sm bg-cyan-400 mt-2 text-white'>Logout</button></li>
                : <li className='text-xl text-cyan-500'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar" style={{ background: `url(${bg})` }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <p className='lg:ml-28 flex items-center text-3xl font-medium text-sky-400'><img src={logo} alt="" className='mr-2' />ULIYA</p>
            </div>
            <div className="navbar-end hidden lg:flex mr-5">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className=" btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;