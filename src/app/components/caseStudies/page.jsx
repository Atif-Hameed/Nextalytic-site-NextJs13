import { FiArrowUpRight } from 'react-icons/fi';
import Img1 from '@/assets/caseStudyImg1.svg'
import Img2 from '@/assets/caseStudyImg2.svg'
import Image from 'next/image';


const CardStruct = (props) => {
    return (
        <>
            <div className='bg-white p-2 cursor-pointer rounded-3xl border-[1px] hover:shadow-techShadow border-[#E8E8E8]'>
                <div>
                    {props.img}
                </div>
                <div className='flex flex-col gap-3 px-4 py-3 mt-5'>
                    <p className='text-sm font-manrope font-medium'>2023 / Case Studies</p>
                    <h1 className='text-xl font-manrope font-medium'>
                        {props.heading}
                    </h1>
                    <p className='text-[#707070]'>
                        {props.des}
                    </p>
                </div>
            </div>
        </>
    )
}

const CaseStudies = () => {
    return (
        <>
            <div className='bg-[#FFF8F5] border-[1px] border-[#E7E7E7] sm:py-28 py-14 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='flex gap-12 lg:flex-nowrap flex-wrap'>
                    <div className='flex flex-col lg:gap-0 gap-4 justify-between lg:w-[30%] w-full'>
                        <div className='flex flex-col lg:gap-3 gap-1'>
                            <div className='bg-[#FEE1BD] py-0.5 mb-4 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
                                <h1 className='font-inter lg:text-sm text-xs'>About Nextalytic</h1>
                            </div>
                            <h1 className='xl:text-5xl lg:text-[2.5rem] sm:text-4xl text-2xl text-[#091438] font-manrope font-medium'>See More Case Studies Here.</h1>
                        </div>
                        <div className='lg:w-auto w-full flex lg:justify-normal justify-end'>
                            <button className='text-white flex sm:gap-3 gap-1 group hover:scale-105 transition-all duration-200 bg-[#091438] font-inter sm:text-base text-xs sm:px-5 px-3 sm:py-3 py-2 rounded-3xl'>Explore All Case Studies <FiArrowUpRight className='sm:text-xl text-base group-hover:rotate-45 transition-all duration-200' /></button>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-4 gap-x-4 lg:w-[70%] w-full'>
                        <CardStruct
                            img={<Image alt='' src={Img1} />}
                            heading="Setosa Skin - Perfect eCommerce store for skin care"
                            des="Setosa skin is a brand of skin care products. We design their eCommerce store by using Shopify."
                        />
                        <CardStruct
                            img={<Image alt='' src={Img2} />}
                            heading="U&T Services -  Solution for medical recruitment"
                            des="U&T Provides talented medical staff like nurses, support workers and heath care assistants : WordPress."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies
