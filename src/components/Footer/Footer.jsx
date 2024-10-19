import React from 'react'
import logo from '../../assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
    return (
        <footer className='grid lg:grid-cols-3 lg:px-2 bg-[#111111] lg:pb-12 lg:pl-6 xl:gap-6 xsm:grid-cols-1 xsm:items-center xsm:pb-0'>
            <div className='flex lg:gap-6 xsm:flex-col gap-6 xsm:w-full h-full xsm:pt-6'>
                <img src={logo} alt="logo-image" className='w-1/2 h-1/2 lg:h-[50%] lg:m-0 xsm:m-auto '/>
                <p className='text-[#d2d2d2] xl:text-lg xl:w-[85%] lg:m-0 xsm:w-[50%] m-auto'>Shop the latest products right from your home with TuranOutfit. We have beard supplies & accessories from top brands.</p>
                <div className='text-[#d2d2d2] flex xsm:flex-row lg:m-0 xl:gap-8 xsm:m-auto gap-8'>
                    <FaFacebook className='text-3xl'/>
                    <PiInstagramLogoFill className='text-3xl'/>
                    <AiFillTikTok className='text-3xl'/>
                </div>
            </div>
            <div className='flex flex-col gap-6 lg:pt-16 xsm:w-full h-full xsm:pt-10'>
                <h2 className='text-white lg:m-0 xsm:text-3xl xsm:m-auto'>Latest News</h2>
                <div className='flex gap-6 lg:m-0 lg:pl-0  xsm:m-auto items-center pl-4'>
                    <div className=' text-center'>
                        <p className='text-[#d2d2d2] border py-1 px-3 font-bold'>07<br/>Aug</p>
                    </div>
                    <div className='flex flex-col leading-loose lg:m-0  xsm:m-auto'>
                        <h4 className='text-[#d2d2d2] xl:text-lg'>Mind Blowing Method</h4>
                        <p className='text-[#6d6d6d]'>7 Comments</p>
                    </div>
                </div>
                <div className='flex lg:gap-6 lg:m-0 lg:pl-0 xsm:m-auto xsm:pl-7'>
                    <div className=' text-center lg:m-0 xsm:m-auto xsm:items-center '> 
                        <p className='text-[#d2d2d2] border py-1 px-[14px] font-bold'>09<br />Apr</p>
                    </div>
                    <div className='flex flex-col leading-loose lg:m-0 xsm:m-auto'>
                        <h4 className='text-[#d2d2d2] xl:text-lg'> Ipsum Dolor Ame Ctetur</h4>
                        <p className='text-[#6d6d6d]'>3 Comments</p>
                    </div>
                </div>
                <div className='flex lg:gap-6 lg:m-0  xsm:m-auto'>
                    <div className=' text-center lg:m-0 xsm:m-auto items-center'>
                        <p className='text-white border py-1 px-[15px] font-bold'>11<br />Jan</p>
                    </div>
                    <div className='flex flex-col leading-loose'>
                        <h4 className='text-[#d2d2d2] xl:text-lg'>Top 10 Tips To Grow</h4>
                        <p className='text-[#6d6d6d]'>9 Comments</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:gap-9 lg:pt-16 lg:pb-0 xsm:w-full h-full xsm:pt-10 pb-10'>
                <h2 className='text-white lg:m-0 xsm:text-3xl  xsm:m-auto'>Our Newsletter</h2>
                <p className='text-[#d2d2d2] lg:m-0 xsm:text-lg  xsm:m-auto'>Sign up Newsletter to get more <br />Deals Events & Promotions</p>
                <input type="emai" className="rounded-lg lg:w-[55%] lg:py-3 lg:px-4 lg:m-0  xsm:m-auto xsm:w-[45%]" placeholder='Your Email Letter' />
                <button type='button' className='text-white rounded-lg font-bold uppercase lg:w-[35%] lg:m-0 bg-[#292929] p-4 xsm:m-auto'>subscribe</button>
            </div>
        </footer>
    )
}

export default Footer