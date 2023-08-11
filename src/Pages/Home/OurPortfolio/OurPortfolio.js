import React from 'react';
import p1 from '../../../assest/p-1.jpg';
import p2 from '../../../assest/p-2.jpg';
import p3 from '../../../assest/p-3.jpg';
import p4 from '../../../assest/p-4.jpg';
import p5 from '../../../assest/p-5.jpg';
import p6 from '../../../assest/p-6.jpg';
import headImg from '../../../assest/heading-img.png'

const OurPortfolio = () => {
    return (
        <section className='my-28'>
            <h1 className='text-3xl lg:text-4xl font-bold flex justify-center items-center mb-4'>OUR PORTFOLIO <span className='ml-3'><img src={headImg} alt="" /></span></h1>
            <p className='text-xl text-center mb-20'>minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mx-10'>
                <div className='lg:col-span-2 overflow-hidden'>
                    <img src={p1} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
                <div className='lg:col-span-3 overflow-hidden'>
                    <img src={p3} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
                <div className='lg:row-start-2 lg:grid-rows-2 lg:row-span-2 lg:col-span-2 overflow-hidden'>
                    <img src={p2} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
                <div className='lg:col-span-3 overflow-hidden'>
                    <img src={p4} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
                <div className='lg:col-span-2 overflow-hidden'>
                    <img src={p5} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
                <div className='lg:col-span-1 overflow-hidden'>
                    <img src={p6} alt="" className='w-full h-full hover:scale-125 transition duration-500 cursor-pointer' />
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-md rounded-full bg-black text-white px-12 mt-20'>See More</button>
            </div>
        </section>
    );
};

export default OurPortfolio;