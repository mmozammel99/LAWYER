import React from 'react';
import img1 from '../../../Assets/banner/banner.png'
import img2 from '../../../Assets/banner/banner2.png'
const Banner = () => {
    return (
        <div className="carousel w-full pt-5 shadow-lg ">
            <div id="slide1" className="hero carousel-item relative w-full " style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-90">
                    <div className="p-20 lg:p-64 text-center text-neutral-content ">
                        <div className=" mx-auto">
                            <h1 className=" text-2xl lg:text-4xl  font-bold">John B. Someone</h1>
                            <p className=" mb-6 lg:mb-16 lg:text-xl text-white">Criminal Justice Attorney</p>
                            <h2 className=" text-3 text-xl lg:text-2xl  font-bold">STRATEGY. EXPERIENCE. RESULTS.</h2>
                            <h2 className="mb-1 lg:mb-3 text-3 text-4xl lg:text-5xl text-white font-bold">Calgary Criminal Defence Lawyers</h2>
                            <h2 className="mb-6 lg:mb-16 lg:text-xl text-white ">Trust your future to the #1 Google-reviewed criminal
                                defence lawyer in Calgary.</h2>
                            <button className="btn btn-outline ">Get a Free Consultation</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="hero carousel-item relative w-full" style={{ backgroundImage: `url(${img2})` }}>
                <div className="hero-overlay bg-opacity-90">
                    <div className="p-20 lg:p-64  text-center text-neutral-content ">
                        <div className=" mx-auto">
                            <h1 className="mb-5 lg:text-3xl text-2xl font-bold">Emergency Service</h1>
                            <p className="mb-10 lg:text-5xl text-3xl font-bold text-white">24 Hours Day, 7 Days a Week</p>
                            <button className="btn btn-outline ">+8801303010591</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>






    );
};

export default Banner;