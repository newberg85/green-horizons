
import Image from 'next/image';
import Link from 'next/link';
import "./Footer"

//icons 
import Facebook from "public/assets/images/icon-facebook.svg";
import Youtube from "public/assets/images/icon-youtube.svg";
import Twitter from "public/assets/images/icon-twitter.svg";
import Pinterest from "public/assets/images/icon-pinterest.svg";
import Instagram from "public/assets/images/icon-instagram.svg";
import { InstagramIcon } from '../../../public/assets/svg/instagram';
import { FacebookIcon } from '../../../public/assets/svg/facebook';
import { GithubIcon } from '../../../public/assets/svg/github';

export default function Footer() {
    return (
        <>
            <footer className="bg-black w-screen h-full justify-between px-4  lg:max-w-screen md:items-center md:flex md:px-36 relative">
                <div className='w-full flex flex-col sm:flex-row items-center sm:items-start justify-between mb-10 mt-10 gap-8 '>
                    <div className='flex items-center sm:items-start flex-col sm:flex-col justify-between gap-8 sm:gap-3'>
                        {/* Logo */}
                        <Link href="/">
                        <h1 className='font-bold text-xl text-white'><span className='text-green'>Green</span>horizons</h1>
                        </Link>

                        <div>
                            <p className='text-white'>Mergulhe nesse mundo maravilhoso e descubra destinos fascinantes com a nossa agência.</p>
                        </div>

                        {/* Social */}
                        <div className='flex gap-6 sm:gap-2 mt-0'>
                            <Link href="/">
                                <div className='border border-white rounded-full p-2'>
                                    <InstagramIcon />
                                </div>
                            </Link>

                            <Link href="/">
                                <div className='border border-white rounded-full p-2'>
                                    <FacebookIcon />
                                </div>
                            </Link>

                            <Link href="/">
                                <div className='border border-white rounded-full p-2'>
                                    <GithubIcon />
                                </div>
                            </Link>

                        </div>
                    </div>

                    {/* links */}
                    <div className='flex justify-around text-center w-full'>
                        <ul>
                            <li className="text-base text-white py-2 px-6 text-left border-purple-900 hover:text-orange">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#products">
                                    Products
                                </Link>
                            </li>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#aboutus">
                                    About us
                                </Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#careers">
                                    Careers
                                </Link>
                            </li>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#comunity">
                                    Comunity
                                </Link>
                            </li>
                            <li className="text-base text-white py-2 px-6 text-left  border-purple-900 hover:text-orange">
                                <Link href="#Privacy">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* form */}
                    <div>
                        
                    </div>
                </div>
            </footer>
                    <div className="w-screen attribution relative bottom-0 flex justify-center">
                        <span className='text-white text-xs w-screen position absolute bottom-0 flex justify-center'> 
                        Coded by <a href="https://github.com/newberg85" className='underline'>Wandemberg</a>.
                        </span>
                    </div> 
        </>
    )
}