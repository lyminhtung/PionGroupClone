import './Board03.scss'
import React from 'react'
import { img_singleDown01 } from '../../../../../public/img'
import { img_singleDown02 } from '../../../../../public/img'
import { img_singleDown03 } from '../../../../../public/img'
const About=()=>{
  return (
   <section id='about' className='home2-about-section pt-20 bg-[#f4f4f4] dark:bg-[#242627] align-center'>
        <div className='container'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    <div className='about-content-wrap'>
                        <div className='about-title wow animate fadeInDown delay-200 duration-2000 ease-in-out'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z"></path>
                                </svg>
                                Dễ dàng hơn - An toàn hơn
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                                    <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z"></path>
                                </svg>
                            </span>
                            <h2>Tại sao bạn nên chọn PionLogin?</h2>
                        </div>
                        <div className='about-countdown-wrap'>
                            <div className='grid grid-cols-12 md:gap-12 gap-0 justify-center'>
                                <div className='lg:col-span-4 md:col-span-6 col-span-12 wow animate fadeInLeft delay-200 duration-2000 ease-in-out'>
                                    <div className='single-countdown flex justify-between items-center flex-col gap-8'>
                                        <img alt="feature-1" loading="eager" width="150" height="150" decoding="async" data-nimg="1" style={{color:'transparent'}} 
                                        srcSet={img_singleDown01.src} 
                                        src={img_singleDown01.src}>
                                        </img>
                                        <div className='content'>
                                            <p>Giả lập hầu hết toàn bộ các thông số trình duyệt, bảo mật tài khoản tuyệt đối</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:col-span-4 md:col-span-6 col-span-12 wow animate fadeInLeft delay-200 duration-2000 ease-in-out'>
                                    <div className='single-countdown flex justify-between items-center flex-col gap-8'>
                                        <img alt="feature-1" loading="eager" width="150" height="150" decoding="async" data-nimg="1" style={{color:'transparent'}} 
                                        srcSet={img_singleDown02.src} 
                                        src={img_singleDown02.src}>
                                        </img>
                                        <div className='content'>
                                            <p>Kho kịch bản phong phú cho nhiều nền tảng phổ biến, dễ dàng triển khai tự động hóa theo nhu cầu.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:col-span-4 md:col-span-6 col-span-12 wow animate fadeInLeft delay-200 duration-2000 ease-in-out'>
                                    <div className='single-countdown flex justify-between items-center flex-col gap-8'>
                                        <img alt="feature-1" loading="eager" width="150" height="150" decoding="async" data-nimg="1" style={{color:'transparent'}} 
                                        srcSet={img_singleDown03.src} 
                                        src={img_singleDown03.src}>
                                        </img>
                                        <div className='content'>
                                            <p>Hỗ trợ khách hàng nhiệt tình, chuyên nghiệp, nhanh chóng giải đáp các thắc mắc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default About
