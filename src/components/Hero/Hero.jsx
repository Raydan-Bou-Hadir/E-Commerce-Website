import React from 'react'
import img1 from "../../assets/images/hero-1.jpg";
import img2 from "../../assets/images/hero-2.png";
import img3 from "../../assets/images/hero-3.jpg";

function Hero() {
    return (
        <main className='w-full h-[750px] grid py-8 px-20 grid-cols-[60%_38%] gap-[2%] bg-black'>
            <div className='w-full h-[650px] relative'>
                <img src={img1} alt="img1" className='w-full h-full object-cover overflow-hidden opacity-80' />
                <div className='flex flex-col gap-5 absolute top-60 left-20'>
                    <h2 className='font-latin text-white text-5xl'>Cyber Monday Sale</h2>
                    <h1 className='uppercase text-white text-5xl font-medium'>backpacks for<br/> business men</h1>
                    <h3 className='text-white text-3xl'>New Price: <span className='text-5xl border-b-2 font-medium'>$270.00</span></h3>
                    <div className='flex gap-10 pt-5'>
                        <button type="button" className='uppercase text-white border px-8 py-3 font-medium rounded-lg'>Browse</button>
                        <button type="button" className='uppercase text-white border px-4 py-3 font-medium rounded-lg'>Shop the look</button>
                    </div>
                </div>
            </div>

            <div className='w-full grid grid-rows-2 gap-[2%] h-[650px]'>
                <div className='h-full'>
                    <img src={img2} alt="img2" className='w-full h-full object-cover overflow-hidden opacity-80' />
                </div>
                <div className='h-full'>
                    <img src={img3} alt="img3" className='w-full h-full object-cover overflow-hidden opacity-80' />
                </div>
            </div>
        </main>
    )
}

export default Hero