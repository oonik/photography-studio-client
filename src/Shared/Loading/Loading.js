import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='text-blue-500 text-center my-20'>
            <p className='text-2xl'> Loading
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            </p>
        </div>
        </div>
    );
};

export default Loading;