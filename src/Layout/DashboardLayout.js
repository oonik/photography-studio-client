import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hook/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        
                        {
                            user && <li><Link to='/dashboard/bookings' className='text-lg border-b-2'>Your Booking</Link></li>
                        }
                        {
                         isAdmin && <li><Link to='/dashboard/allUser' className='text-lg border-b-2'>All Users</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;