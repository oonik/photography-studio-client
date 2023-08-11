import React from 'react';
import heading from '../../../assest/heading-img.png'
import a1 from '../../../assest/a-1.png';
import a2 from '../../../assest/a-2.png';
import a3 from '../../../assest/a-3.png';

const Achievements = () => {
    return (
        <section  className='m-10'>
            <h1 className='text-3xl lg:text-4xl font-bold flex items-center justify-center mb-3'>ACHIEVEMENTS <span className='ml-3'><img src={heading} alt="" /></span></h1>
            <p className='text-center text-xl mb-16'>minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
           <div className='grid lg:grid-cols-3 items-center gap-10 lg:mx-20'>
           <div className='border-2 border-cyan-400 flex flex-col items-center pt-10 pb-5'>
                <img src={a1} alt="" className='w-32' />
                <h3 className='text-3xl font-bold mt-5'>1000+</h3>
                <h4 className='text-xl font-bold'>PHOTO SESSION</h4>
            </div>
            <div className='border-2 border-cyan-400 flex flex-col items-center pt-10 pb-5'>
                <img src={a2} alt="" className='w-36'/>
                <h3 className='text-3xl font-bold mt-5'>9000+</h3>
                <h4 className='text-xl font-bold'>HAPPY CUSTOMERS</h4>
            </div>
            <div className='border-2 border-cyan-400 flex flex-col items-center pt-10 pb-5'>
                <img src={a3} alt="" className='w-32'/>
                <h3 className='text-3xl font-bold mt-5'>1000+</h3>
                <h4 className='text-xl font-bold'>ARCHIVE PHOTOGRAPHS</h4>
            </div>
           </div>
        </section>
    );
};

export default Achievements;