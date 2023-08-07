"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


//images
import Greece from "public/assets/images/country-1.png";
import Canada from "public/assets/images/country-2.png";
import Peru from "public/assets/images/country-3.png";
// import Ali from "public/assets/images/avatar-ali.png";
// import Richard from "public/assets/images/avatar-richard.png";
// import Shanai from "public/assets/images/avatar-shanai.png";

//icons
import Star from "public/assets/svg/staricon.svg"

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

        className="mySwiper p-5 sm:p-40 mt-12"
      >
        <SwiperSlide className='w-full relative'>
          <div className='w-full h-ful flex flex-col items-center center gap-8 p-2'>
            <div className='rounded-full w-full left-44 -top-10'>
              <Image
                src={Greece}
                width={378}
                height={506}
                alt='show'
              />
            </div>
            <div className='w-full h-full flex flex-col items-center center gap-4'>
              <h1 className='text-dark-blue font-[700]'>Santorini, Grécia</h1>
              <div className=' flex items-center justify-center bg-metal p-3 rounded-full gap-1'>
                <div className='w-[25px]'>
                  <Image
                    src={Star}
                    width={7}
                    height={7}
                    alt='star icon'
                  />
                </div>

                <p className='font-bold'>4,4</p>
                <span>(1k analise)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
          <div className='w-full h-ful flex flex-col items-center center gap-8 p-2'>
            <div className='rounded-full w-full  left-44 -top-10'>
              <Image
                src={Canada}
                className='gradient'
                width={378}
                height={506}
                alt='show'
              />
            </div>
            <div className='w-full h-full flex flex-col items-center center gap-4'>
              <h1 className='text-dark-blue font-[700]'>Niagra falls, Canada</h1>
              <div className=' flex items-center justify-center bg-metal p-3 rounded-full gap-1'>
                <div className='w-[25px]'>
                  <Image
                    src={Star}
                    width={7}
                    height={7}
                    alt='star icon'
                  />
                </div>

                <p className='font-bold'>4,4</p>
                <span>(1k analise)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
          <div className='w-full h-ful flex flex-col items-center center gap-8 p-2'>
            <div className='rounded-full w-full  left-44 -top-10'>
              <Image
                src={Peru}
                width={378}
                height={506}
                alt='show'
              />
            </div>
            <div className='w-full h-full flex flex-col items-center center gap-4'>
              <h1 className='text-dark-blue font-[700]'>Machu Picchu, Peru</h1>
              <div className=' flex items-center justify-center bg-metal p-3 rounded-full gap-1'>
                <div className='w-[25px]'>
                  <Image
                    src={Star}
                    width={7}
                    height={7}
                    alt='star icon'
                  />
                </div>

                <p className='font-bold'>4,4</p>
                <span>(1k analise)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative'>
          <div className='w-full h-ful flex flex-col items-center center gap-8 p-2'>
            <div className='rounded-full w-full  left-44 -top-10'>
              <Image
                src={Greece}
                width={378}
                height={506}
                alt='show'
              />
            </div>
            <div className='w-full h-full flex flex-col items-center center gap-4'>
              <h1 className='text-dark-blue font-[700]'>Santorini, Grécia</h1>
              <div className=' flex items-center justify-center bg-metal p-3 rounded-full gap-1'>
                <div className='w-[25px]'>
                  <Image
                    src={Star}
                    width={7}
                    height={7}
                    alt='star icon'
                  />
                </div>

                <p className='font-bold'>4,4</p>
                <span>(1k analise)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}