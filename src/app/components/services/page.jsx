import React from 'react'
import Carousel from '../carousel/page'

const Services = () => {
    return (
        <>
            <div className='bg-white sm:py-28 py-14'>
                <div className='xl:px-24 lg:px-16 sm:px-8 px-4'>
                    <div className='bg-[#FEE1BD] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
                        <h1 className='font-inter text-sm font-semibold'>Core Services</h1>
                    </div>
                    <div className='flex justify-between items-center mt-2 sm:flex-nowrap flex-wrap'>
                        <div className='flex flex-col gap-1 xl:w-[48%] lg:w-[65%] sm:w-[60%] w-full'>
                            <h1 className='lg:text-5xl sm:text-4xl text-2xl text-[#101828] lg:leading-[4rem] font-manrope font-bold'>From Enchanted to to <span className='text-[#FE8F4F]'>Our Services</span></h1>
                        </div>
                        <div className='xl:w-[52%] lg:w-[35%] sm:w-[40%] w-full  flex justify-end'>
                            <button className='text-white hover:scale-105 transition-all font-inter duration-200 bg-[#091438] sm:text-base text-xs sm:px-5 px-3 py-3 rounded-3xl'>Explore All Services</button>
                        </div>
                    </div>
                </div>

                <Carousel />
            </div>
        </>
    )
}

export default Services
