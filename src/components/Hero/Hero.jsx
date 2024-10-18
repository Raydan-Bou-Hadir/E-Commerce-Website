import React from 'react';
import img1 from "../../assets/images/hero-1.jpg";
import img2 from "../../assets/images/hero-2.png";
import img3 from "../../assets/images/hero-3.jpg";

function Hero() {
    return (
        <main className="w-full h-auto grid py-8 px-6 md:px-10 lg:px-20 grid-cols-1 lg:grid-cols-[60%_38%] lg:gap-[2%] bg-black">
            <div className="w-full h-[400px] md:h-[600px] lg:h-[650px] relative">
                <img src={img1} alt="img1" className="w-full h-full object-cover overflow-hidden opacity-80" />
                <div className="flex flex-col gap-3 md:gap-5 absolute top-32 left-8 md:top-48 md:left-14 lg:top-60 lg:left-20">
                    <h2 className="font-latin text-white text-2xl md:text-4xl lg:text-5xl">Cyber Monday Sale</h2>
                    <h1 className="uppercase text-white text-3xl md:text-4xl lg:text-5xl font-medium">
                        backpacks for<br /> business men
                    </h1>
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
                        New Price: <span className="text-3xl md:text-4xl lg:text-5xl border-b-2 font-medium">$270.00</span>
                    </h3>
                    <div className="flex gap-4 md:gap-10 pt-3 md:pt-5">
                        <button type="button" className="uppercase text-white border px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 font-medium rounded-lg hover:bg-white hover:text-black transition duration-300   ">
                            Browse
                        </button>
                        <button type="button" className="uppercase text-white border px-3 py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 font-medium rounded-lg hover:bg-white hover:text-black transition duration-300">
                            Shop the look
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full grid grid-rows-2 gap-[2%] h-[400px] md:h-[800px] sm:h-[800px] xsm:h-[800px] lg:h-[650px] mt-6 lg:mt-0 ">
                <div className="h-full">
                    <img src={img2} alt="img2" className="w-full h-full object-cover overflow-hidden opacity-60" />
                    <div className='absolute flex flex-col gap-5 top-[8%] left-3'>
                        <h1 className='text-white text-5xl font-semibold'>Designer <br />Backpacks</h1>
                        <h4 className='text-white font-thin text-xl pb-2'>Inspier your unique backpack <br /> style with us.</h4>
                        <button type='button' className='w-[70%] uppercase text-white border px-3 py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 font-medium rounded-lg hover:bg-white hover:text-black transition duration-300'> 
                            Let's do it
                        </button>
                    </div>
                </div>
                <div className="h-full">
                    <img src={img3} alt="img3" className="w-full h-full object-cover overflow-hidden opacity-80" />
                </div>
            </div>
        </main>
    );
}

export default Hero;
