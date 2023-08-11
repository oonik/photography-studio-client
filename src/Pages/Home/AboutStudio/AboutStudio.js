import React from 'react';
import abuoutImg from '../../../assest/about-img.jpg';
import abuoutBg from '../../../assest/about-img-bg.png';
import headImg from '../../../assest/heading-img.png'
import './AboutStudio.css'
const AboutStudio = () => {
    return (
        <div className='my-20 lg:m-20'>
            <h1 className='text-3xl lg:text-4xl font-bold flex items-center justify-center mb-20'>ABOUT STUDIO <span className='ml-2'><img src={headImg} alt="" /></span></h1>

            <div className='bg-auto'
            style={{
                background: `url(${abuoutImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundPositionX: 'center',
                backgroundPositionY: 'bottom',
            }}
            >
                <div className='flex justify-center items-center' >
                    <img src={abuoutBg} alt="" className='img' />
                </div>
            </div>

            <div className='text-center'>
                <p className='my-10 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <button className='btn btn-md bg-black rounded-full text-white px-8'>About More</button>
            </div>
        </div>
    );
};

export default AboutStudio;