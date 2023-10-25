import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../navbar/page';
import heroImg from '../../../assets/hero img.svg'
import '../../styles/page.css'
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='w-full sm:h-screen' >
                <div className='hero-bg relative w-full flex flex-col sm:h-full xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-8 py-0 sm:pb-0 pb-4'>
                    <Navbar />
                    <div className='sm:mt-0 mt-12 flex xl:gap-6 gap-0 items-center sm:px-6 px-2 sm:flex-grow sm:flex-nowrap flex-wrap'>
                        <div className='xl:w-[55%] lg:w-[58%] sm:w-[60%] w-full'>
                            <div className='flex flex-col lg:gap-2 sm:gap-3 gap-2'>
                                <div className='bg-[#FEE1BD] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
                                    <h1 className='font-inter text-xs'>From Idea to Impact</h1>
                                </div>
                                <h1 className='xl:text-5xl lg:text-[2.4rem] font-manrope md:text-[1.7rem] text-[1.45rem]  text-[#091438] font-semibold xl:leading-[3.5rem]'>
                                    Conceive, Build and Launch with Nextalytic.
                                </h1>
                                <p className='sm:text-base text-sm xl:w-[95%] text-[#6D7379] font-manrope'>Harness the power of Nextalytic&apos;s transformative tech expertise. Explore Services to or Learn More about our digital journey.</p>
                                <div className='lg:mt-4 md:mt-3 mt-2 flex gap-4'>
                                    <button className='hover:scale-105 transition-all duration-200 font-inter border-0 bg-[#091438] text-white lg:px-5 md:px-4 px-3 lg:py-2.5 py-2 text-sm rounded-3xl'>Explore Services</button>
                                    <button className='text-balck flex items-center font-medium font-inter group gap-0.5'>Learn More <FiArrowUpRight className='text-xl transition-all duration-200 group-hover:rotate-45'/></button>
                                </div>
                            </div>
                        </div>

                        <div className='xl:w-[45%] lg:w-[42%] sm:w-[40%] sm:mt-0 mt-10 w-full flex sm:justify-end justify-center'>
                            <Image
                            alt=''
                            src={heroImg}
                            className='xl:w-[18.5rem] lg:w-[17rem] w-[15rem]'
                            />
                            {/* <img src={heroImg} className='xl:w-[18.5rem] lg:w-[17rem] w-[15rem]' alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
