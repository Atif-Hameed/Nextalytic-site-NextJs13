'use client'
import Img1 from '@/assets/customerImg.svg'
import Quotes from '@/assets/Vector.svg'
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';


const CardStruct = (props) => {
    return (
        <>
            <div className='py-12 relative'>
                <Image src={Quotes} alt='' className='absolute top-2 left-10' />
                <div className='border-[1px] flex flex-col gap-4 bprder-[#EAECF0] bg-white py-6 pt-10 px-6 rounded-3xl'>
                    <div className='border-[1px] border-b-[#EAECF0] border-t-0 border-l-0 border-r-0 pb-4'>
                        <p className='text-[#636363] font-manrope leading-6 text-sm'>
                            {props.des}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <Image alt='' src={Img1} />
                        <div className='flex flex-col'>
                            <h1 className='text-[#181818] font-manrope font-medium text-lg'>
                                {props.name}
                            </h1>
                            <p className='text-[#636363] font-manrope font-medium text-sm'>Satisfied Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Testimonials = () => {

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
            <div className='bg-[#FAFAFA] border-[1px] border-[#E7E7E7] sm:py-28 py-14'>
                <div className='xl:px-24 lg:px-16 sm:px-8 px-4'>
                    <div className='w-full'>
                        <h1 className='lg:text-5xl sm:text-4xl text-xl w-[90%] font-medium leading-snug text-[#091438] font-manrope'>Happy Customers with Happy - Testimonials</h1>
                    </div>
                </div>

                <div className='w-100%  xl:pl-24 lg:pl-16 sm:pl-8 pl-4 sm:pr-0 pr-4'>
                    <Slider className='sm:my-12 my-10 absolute' {...settings}>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct
                                des="In my half-decade journey with Nextalytic, it's been nothing short of exemplary. The leadership genuinely values and nurtures its talent. Highly Recommended!!"
                                name="Oliver Bennett"
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct 
                            des = "Engaging with Nextalytic was a pivotal moment for our digital transformation. Their expertise is unparalleled, and the results have been transformative."
                            name = "Amelia Thompson"
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct 
                            des = "Our e-commerce platform, build by Nextalytic, truly stands out. Their blend of creativity and technical acumen has boosted our brand significantly."
                            name = "Henry Wright"
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct 
                            des = "From the initiation phase to the final , Nextalytic's dedication was evident. They transformed our ideas into functional software that's both intuitive and robust."
                            name = "Oliver Bennett"
                            />
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials
