import React from 'react';
import bg from '../../../assest/hero-bg.png';
import img from '../../../assest/slider-img.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bg})`,
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="h-full w-1/2" />
                    <div className='w-1/2'>
                        {/* <h1 className="text-5xl font-bold">PHOTOGRAPHY <br /> STUDIO</h1> */}
                        <div className="container">
                            <h1 className="typed text-5xl font-bold">PHOTOGRAPHY <span className='text-cyan-400'>STUDIO</span></h1>
                        </div>
                        <p className="py-6 text-xl">It is a long established fact that a reader will be <br /> distracted by the readable content</p>
                        <div>
                            <button className="btn btn-md px-8 bg-cyan-400 text-white rounded-full mr-2">About Us</button>
                            <button className="btn btn-md px-6 bg-black text-white rounded-full">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;