import Icon1 from '@/assets/footerIcon1.svg'
import Icon2 from '@/assets/footerIcon1.svg'
import Icon3 from '@/assets/footerIcon1.svg'
import Icon4 from '@/assets/footerIcon1.svg'
import Logo from '@/assets/footerLogo.svg'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi';


const Footer = () => {
    return (
        <>
            <div className='bg-[#091438] border-[1px] border-[#E8E8E8] sm:pt-24 pt-14 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='flex border-t-0 border-l-0 sm:gap-0 sm:px-0 px-4 gap-12 sm:flex-nowrap flex-wrap border-r-0 border-b-[1px] border-b-[#fff] lg:pb-24 pb-16'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-y-0 gap-y-16 lg:w-[70%] sm:w-[60%] w-full'>
                        <div className='text-white font-manrope flex flex-col gap-4'>
                            <h1 className='font-medium text-lg'>Explore</h1>
                            <p className='font-light text-sm font-manrope'>Home</p>
                            <p className='font-light text-sm font-manrope'>About Us</p>
                            <p className='font-light text-sm font-manrope'>Case Studies</p>
                            <p className='font-light text-sm font-manrope'>Get in Touch</p>
                        </div>
                        <div className='text-white font-manrope flex flex-col gap-4'>
                            <h1 className='font-medium text-lg'>Services</h1>
                            <p className='font-light text-sm font-manrope'>Robust Web Development</p>
                            <p className='font-light text-sm font-manrope'>Mobile App Development</p>
                            <p className='font-light text-sm font-manrope'>AI & Machine Learning</p>
                            <p className='font-light text-sm font-manrope'>Staff Augmentations</p>
                        </div>
                        <div className='text-white font-manrope flex flex-col gap-4'>
                            <h1 className='font-medium text-lg'>Connect On</h1>
                            <div className='flex gap-2 items-center'>
                                <Image alt='' src={Icon1} className='h-3' />
                                <p className='font-light text-sm font-manrope'>Dribbble</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image alt='' src={Icon2} className='h-3' />
                                <p className='font-light text-sm font-manrope'>Facebook</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image alt='' src={Icon3} className='h-3' />
                                <p className='font-light text-sm font-manrope'>Instagram</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image alt='' src={Icon4} className='h-3' />
                                <p className='font-light text-sm font-manrope'>Linkedin</p>
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-[30%] sm:w-[40%] w-full flex flex-col gap-8'>
                        <div className='text-white flex flex-col gap-3 pr-10'>
                            <h1 className='font-medium text-lg font-manrope'>Sign up for our newsletter</h1>
                            <p className='font-light text-sm font-manrope'>Subscribe to get the latest design news, articles, resources and inspiration.</p>
                        </div>
                        <div className='relative'>
                            <button className='bg-white p-2.5 absolute right-1 top-0.5 w-fit rounded-full'>
                                <BiRightArrowAlt className='text-black text-lg' />
                            </button>
                            <input type="text" className='h-11 bg-transparent border-[1px] border-white rounded-3xl w-full px-4 text-white' placeholder='Enter Your email here' name="" id="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center py-8'>
                <Image alt='' src={Logo} className='h-9' />
                    <p className='text-white font-manrope font-light text-xs'>© Nextalytic - 2023</p>
                </div>
            </div>
        </>
    )
}

export default Footer
