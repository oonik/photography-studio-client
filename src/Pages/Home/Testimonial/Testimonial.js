import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import heading from '../../../assest/heading-img.png';
import quote from '../../../assest/quote.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




const Testimonial = () => {
    const testimonials = [
        {
            name: "Anik",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ipsum eveniet quasi earum ducimus quod quia eius fuga, laboriosam fugit deleniti repellendus laudantium, soluta autem eaque nulla neque facilis perferendis."
        },
        {
            name: "Partho",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ipsum eveniet quasi earum ducimus quod quia eius fuga, laboriosam fugit deleniti repellendus laudantium, soluta autem eaque nulla neque facilis perferendis."
        },
        {
            name: "Suyel",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ipsum eveniet quasi earum ducimus quod quia eius fuga, laboriosam fugit deleniti repellendus laudantium, soluta autem eaque nulla neque facilis perferendis."
        },
        {
            name: "Juyel",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ipsum eveniet quasi earum ducimus quod quia eius fuga, laboriosam fugit deleniti repellendus laudantium, soluta autem eaque nulla neque facilis perferendis."
        },
    ]
    return (
        <section className='mx-10 mt-20'>
            <h1 className='text-3xl lg:text-4xl font-bold flex items-center justify-center mb-3'>TESTIMONIAL <span className='ml-3'><img src={heading} alt="" /></span></h1>
            <p className='text-center text-xl mb-16'>minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 3,
                }
              }}
        >
            {
                testimonials.map((testimonial, i) => <SwiperSlide key={i}>
                    <div className="card border-2">
                        <div className="card-body items-center text-center">
                            <img src={quote} alt="" className='w-16' />
                            <h2 className="card-title">{testimonial.name}</h2>
                            <p>{testimonial.message}</p>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
        </section>
    );
};

export default Testimonial;