import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [deletingBook, setDeletingBook] = useState(null);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBooking = id =>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
            headers:{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch();
            }
          })
    }

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          bookings &&  bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{1+i}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.message}</td>
                                <td>
                                <label 
                                onClick={()=>setDeletingBook(booking)}
                                htmlFor="confirmation-modal" 
                                className="btn btn-sm bg-cyan-400 text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBook && <ConfirmationModal
                title={'Are you sure you want to delete'}
                message={`If you delete ${deletingBook.name}. It cannot be undone`}
                handleDelete={()=>handleDeleteBooking(deletingBook._id)}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default Bookings;