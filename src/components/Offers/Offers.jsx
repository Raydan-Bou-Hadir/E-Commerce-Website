import React from 'react'
import image1 from '../../assets/images/offer-image.jpg';

function Offers() {
  return (
    <main className='w-full h-auto grid py-6 px-6 md:px-10 lg:px-20 grid-cols-1 gap-8 lg:grid-cols-[50%_50%] lg:gap-[2%] bg-black'>
        <div className='relative'>
            <img src={image1} alt="offers-image" className='lg:w-full lg:h-full object-cover overflow-hidden opacity-80 md:h-[90%]' />
            <div className='absolute top-[18%] left-[5%] flex flex-col gap-4 lg:gap-3 lg:top-[12%] md:top-[20%] md:gap-3 sm:gap-4 xsm:gap-0 xsm:top-[10%]'>
                <h2 className='font-latin text-white text-5xl tracking-tight lg:text-4xl md:text-5xl sm:text-4xl xsm:text-xl'>Still at weekend off light</h2>
                <h1 className='text-white text-6xl font-semibold lg:text-5xl md:text-6xl sm:text-5xl xsm:text-2xl'>EXTRA<br/>75% OFF</h1>
                <p className='text-white text-lg font-thin md:text-xl sm:text-lg xsm:text-[10px]'> use premo code <span className='text-2xl font-semibold border-b-2 md:text-2xl sm:text-xl xsm:text-[14px]'>Z9QAR21</span></p>
                <button className='md:w-[60%] md:py-3 md:mt-1 border rounded-md text-white font-semibold hover:text-black hover:bg-white transition duration-300 xsm:w-[80%] xsm:py-1 xsm:text-[14px] xsm:mt-2'>SHOP NOW</button>
            </div>
        </div>
        <div className='w-full'>
            <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/d1liTbcAa9A"
                    title="Timelapse Lighthouse Oct 2012"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </div>  
    </main>
  )
}

export default Offers