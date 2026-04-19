import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import homeslider from "../../assets/Images/home-slider-1.png"


export default function SliderHome() {
    return <>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}>
            <SwiperSlide >
                <div style={{ backgroundImage: `url(${homeslider})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="overlay py-24 px-8 md:p-24    bg-linear-to-r from-primary-500/90 to-primary-500/40">
                        <div className='contentSliderHome space-y-2  flex flex-col container mx-auto text-white'>
                            <h2 className='text-3xl font-bold'>Fresh Product Devlivered <br /> to your Door</h2>
                            <p>Get 20% off on your first order</p>
                            <div className='btnSliderHome space-y-2 space-x-1.5'>
                                <button className='btn bg-white hover:bg-gray-100 text-primary-500'> Shop Now</button>
                                <button className='btn bg-transparent hover:bg-white hover:text-primary-500 text-white border border-white'>view Deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide  >
                <div style={{ backgroundImage: `url(${homeslider})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="overlay py-24 px-8 md:p-24  bg-linear-to-r from-primary-500/90 to-primary-500/40">
                        <div className='contentSliderHome space-y-2  flex flex-col container mx-auto text-white'>
                            <h2 className='text-3xl font-bold'>Fresh Product Devlivered <br /> to your Door</h2>
                            <p>Get 20% off on your first order</p>
                            <div className='btnSliderHome space-y-2 space-x-1.5'>
                                <button className='btn bg-white hover:bg-gray-100 text-primary-500'> Shop Now</button>
                                <button className='btn bg-transparent hover:bg-white hover:text-primary-500 text-white border border-white'>view Deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div style={{ backgroundImage: `url(${homeslider})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="overlay py-24 px-8 md:p-24   bg-linear-to-r from-primary-500/90 to-primary-500/40">
                        <div className='contentSliderHome space-y-2  flex flex-col container mx-auto text-white'>
                            <h2 className='text-3xl font-bold'>Fresh Product Devlivered <br /> to your Door</h2>
                            <p>Get 20% off on your first order</p>
                            <div className='btnSliderHome space-y-2 space-x-1.5'>
                                <button className='btn bg-white hover:bg-gray-100 text-primary-500'> Shop Now</button>
                                <button className='btn bg-transparent hover:bg-white hover:text-primary-500 text-white border border-white'>view Deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div style={{ backgroundImage: `url(${homeslider})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="overlay py-24 px-8 md:p-24   p-24 bg-linear-to-r from-primary-500/90 to-primary-500/40">
                        <div className='contentSliderHome space-y-2  flex flex-col container mx-auto text-white'>
                            <h2 className='text-3xl font-bold'>Fresh Product Devlivered <br /> to your Door</h2>
                            <p>Get 20% off on your first order</p>
                            <div className='btnSliderHome space-y-2 space-x-1.5'>
                                <button className='btn bg-white hover:bg-gray-100 text-primary-500'> Shop Now</button>
                                <button className='btn bg-transparent hover:bg-white hover:text-primary-500 text-white border border-white'>view Deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
}
