'use client'
import Slider from 'react-slick'
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';
import { FiArrowUpRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/page.css'
import Img1 from '@/assets/cardImg1.svg'
import Img2 from '@/assets/cardImg2.svg'
import Img3 from '@/assets/cardImg3.svg'
import Img4 from '@/assets/cardImg4.svg'
import Image from 'next/image';


const CardStruct = (props) => {
    return (
        <>
            <div className='py-4'>
                <div className='flex flex-col gap-4 py-6 sm:px-8 px-4  rounded-3xl border-[1px] border-[#E7E7E7] hover:shadow-cardShadow cursor-pointer'>
                    <div>
                        {props.img}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-lg text-[#101828] font-manrope'>
                            {props.heading}
                        </h1>
                        <p className='text-[#6D7379] font-manrope'>
                            {props.des}
                        </p>
                    </div>
                    <div className='flex gap-2 items-center hover:text-[#FE8F4F] font-manrope font-bold text-[#394145]'>
                        <h1 className=''>Learn More</h1>
                        <FiArrowUpRight className='text-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

const Carousel = () => {

    const settings = {
        infinite: true,
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        prevArrow: <GrFormPreviousLink className='prev' />,
        nextArrow: <GrFormNextLink className='next' />,
        responsive: [
               {
                   breakpoint: 1024,
                   settings: {
                        slidesToShow: 2,
                        arrows: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1
                    }
                }
        ]
    };

    return (
        <>
            <div className='w-100%  xl:pl-24 lg:pl-16 sm:pl-8 pl-4 sm:pr-0 pr-4'>
                <Slider className='sm:my-12 my-10 absolute' {...settings}>
                    <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                        <CardStruct
                            img={<Image src={Img1} alt='' />}
                            heading="Robust Web Development"
                            des="Building responsive, user-friendly websites tailored for a global audience. Whether it's an e-commerce site or a dynamic portal, we bring your digital vision to life."
                        />
                    </div>
                    <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                    <CardStruct
                            img={<Image src={Img2} alt='' />}
                            heading="Mobile App Development"
                            des="Designing intuitive apps for Android and iOS, melding aesthetics with flawless functionality. We bridge the gap between user needs and seamless mobile experiences."
                        />
                    </div>
                    <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                    <CardStruct
                            img={<Image src={Img3} alt='' />}
                            heading="Custom Software Development"
                            des="Crafting premium software tailored to your business needs. We turn your ideas into powerful tools, ensuring functionality meets innovation every step of the way."
                        />
                    </div>
                    <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                    <CardStruct
                            img={<Image src={Img4} alt='' />}
                            heading="AI & Machine Learning Solutions"
                            des="Harness the power of AI to supercharge your operations. From predictive analytics to intelligent automations, we've got the magic touch that will set you ahead."
                        />
                    </div>


                </Slider>
            </div>
        </>
    )
}

export default Carousel
