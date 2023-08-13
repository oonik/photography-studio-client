import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../Shared/Loading/Loading';


const AllUsers = () => {
    
    const {data: users=[], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
           const res = await fetch('http://localhost:5000/users', {
            headers:{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
           })
           const data = await res.json();
           return data;
        }
    });

    // const handleMakeAdmin = id =>{
    //     fetch(`/user/make/admin/${id}`, {
    //         method: 'PUT',
    //         headers:{
    //             authorization : `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    if(isLoading){
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
                            <th>User Id</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                          users &&  users?.map((user, i) => <tr key={user._id}>
                                <th>{1+i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;