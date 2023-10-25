'use client'
import Img1 from '@/assets/aboutImg1.svg'
import Img2 from '@/assets/aboutImg2.svg'
import Img3 from '@/assets/aboutImg3.svg'
import Img4 from '@/assets/aboutImg4.svg'
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';

const About = () => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <>
            <div className='bg-[#FAFAFA] sm:py-28 py-14 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-10 xl:gap-x-16 gap-x-10 items-center'>
                    <div>
                        <div className='bg-[#FEE1BD] py-0.5 mb-4 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
                            <h1 className='font-inter lg:text-sm text-xs'>About Nextalytic</h1>
                        </div>
                        <div className='border-[1px] border-t-0 border-l-0 border-r-0 border-b-[#DFDFDF] pb-5 flex flex-col sm:gap-4 gap-2'>
                            <h1 className='xl:text-5xl lg:text-[2.7rem] sm:text-3xl text-2xl font-manrope text-[#091438] font-semibold lg:leading-[4rem]'>The Digital Grimoire: Elixirs of Excellence Encoded</h1>
                            <p className='text-[#6D7379] font-manrope lg:text-base sm:text-sm text-xs'>Let Nextalytic unravel the enigmas of the electronic era. Crafting sagas where every script is a spell and screens shimmer with sorcery, we invite you to embark on a transcendent tech journey. Ready to explore? Dive into our cauldron of services and witness the magic firsthand.</p>
                        </div>
                        <div className='flex sm:flex-col sm:gap-3 gap-2 sm:flex-nowrap flex-wrap sm:justify-normal justify-between lg:mt-10 sm:mt-6 mt-3 lg:px-6 px-4'>
                            <div className='flex items-center lg:gap-4 gap-3'>
                                <h1 className='lg:text-3xl sm:text-2xl text-xl text-[#101828] font-medium font-inter'><CountUp duration={2} end={60} enableScrollSpy />+</h1>
                                <p className='text-[#101828] lg:text-base sm:text-sm text-xs font-inter font-medium'>Long-term International Clients</p>
                            </div>
                            <div className='flex items-center lg:gap-4 gap-3'>
                                <h1 className='lg:text-3xl sm:text-2xl text-xl text-[#101828] font-medium font-inter'><CountUp start={30} duration={2} end={99} enableScrollSpy />%</h1>
                                <p className='text-[#101828] lg:text-base sm:text-sm text-xs font-inter font-medium'>Client’s Satisfaction all over the world</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:gap-5 gap-3 sm:px-0 px-4'>
                        <div className='flex flex-col sm:gap-5 gap-3'>
                            <Image alt='' src={Img1} />
                            <Image alt='' src={Img2} />
                        </div>
                        <div className='flex flex-col sm:gap-5 gap-3'>
                            <Image alt='' src={Img3} />
                            <Image alt='' src={Img4} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
