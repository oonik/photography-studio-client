import React from 'react';
import abuoutImg from '../../../assest/about-img.jpg';
import abuoutBg from '../../../assest/about-img-bg.png';
import headImg from '../../../assest/heading-img.png'

const AboutStudio = () => {
    return (
        <div className='m-20'>
          <h1 className='text-4xl font-bold flex items-center justify-center'>ABOUT STUDIO <span className='ml-2'><img src={headImg} alt="" /></span></h1>
           <div className='my-10'>
           <div
                style={{
                    background: `url(${abuoutBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '40%',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'bottom',
                }}>
                <div className='flex justify-center items-center' >
                    <img src={abuoutImg} alt="" />
                </div>
            </div>
           </div>
            <div className='text-center'>
                <p className='mb-10 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <button className='btn btn-md bg-black rounded-full text-white px-8'>About More</button>
            </div>
        </div>
    );
};

export default AboutStudio;