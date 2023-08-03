"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


//images
import Anisha from "public/assets/images/avatar-anisha.png";
import Ali from "public/assets/images/avatar-ali.png";
import Richard from "public/assets/images/avatar-richard.png";
import Shanai from "public/assets/images/avatar-shanai.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Imprima } from 'next/font/google';

export default function App() {
  return (
    <>
      <Swiper
      // quantidade de items do slide
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        
        className="mySwiper p-40"
      >
        <SwiperSlide className='w-full relative'>
            <div className='w-full h-full bg-tahiti flex flex-col items-center center gap-8 p-2'>
                <div className='rounded-full w-20  left-44 -top-10'>
                    <Image 
                    src={Anisha}
                    width={100}
                    height={100}
                    alt='show'
                    />
                </div>
                <div className='w-full h-full flex flex-col items-center center gap-4'>
                    <h1 className='text-dark-blue font-[700]'>Anisha Li</h1>
                    <p className='text-silver'>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
            <div className='w-full h-full bg-tahiti flex flex-col items-center center gap-8 p-2'>
                <div className='rounded-full w-20  left-44 -top-10'>
                    <Image 
                    src={Ali}
                    width={100}
                    height={100}
                    alt='show'
                    />
                </div>
                <div className='w-full h-full flex flex-col items-center center gap-4'>
                    <h1 className='text-dark-blue font-[700]'>Ali Bravo</h1>
                    <p className='text-silver'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
            <div className='w-full h-full bg-tahiti flex flex-col items-center center gap-8 p-2'>
                <div className='rounded-full w-20  left-44 -top-10'>
                    <Image 
                    src={Richard}
                    width={100}
                    height={100}
                    alt='show'
                    />
                </div>
                <div className='w-full h-full flex flex-col items-center center gap-4'>
                    <h1 className='text-dark-blue font-[700]'>Richard Watts</h1>
                    <p className='text-silver'>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
            <div className='w-full h-full bg-tahiti flex flex-col items-center center gap-8 p-2'>
                <div className='rounded-full w-20  left-44 -top-10'>
                    <Image 
                    src={Shanai}
                    width={100}
                    height={100}
                    alt='show'
                    />
                </div>
                <div className='w-full h-full flex flex-col items-center center gap-4'>
                    <h1 className='text-dark-blue font-[700]'>Shanai Gough</h1>
                    <p className='text-silver'>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}