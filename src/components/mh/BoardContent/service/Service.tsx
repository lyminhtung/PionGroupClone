import React from 'react'
import './Service.scss'
import ServiceCard from '@/components/ui/cards/ServicesCard/ServiceCard'
import {ServiceIcon01,ServiceIcon02,ServiceIcon03,ServiceIcon04,ServiceIcon05,ServiceIcon06} from '../../../../../public/svg/ServiceIcon01'
const Service =()=> {
  return (
    <section id='service' className='home5-services-section bg-white dark:bg-[#000]'>
        <div className='grid grid-cols-12 xl:gap-6'>
            <div className='container xl:col-span-4 col-span-12 wow animate fadeInLeft md:block flex items-center justify-center delay-400 duration-1500 ease-in-out'>
                <div className='section-title5 xl:block flex flex-col justify-center items-center'>
                    <span className="sub-title5 two">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z">                          
                            </path>
                        </svg>
                        Quản lý tài khoản an toàn
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z">
                            </path>
                        </svg>
                    </span>
                    <h2 className='xl:text-start'>
                        Giải pháp của PionLogin
                    </h2>
                    <p className='xl:text-start text-center'>Tối ưu hiệu quả, đa dạng mục tiêu quản lý và vận hành.</p>
                </div>
            </div>
            <div className='xl:col-span-8 col-span-12'>
                <div className='grid grid-cols-12 g-0'>
                    <ServiceCard icon={<ServiceIcon01/>} 
                    title='Thương mại điện tử' 
                    description='Tự động quản lý nhiều tài khoản sàn, tương tác, up sản phẩm, đồng bộ đánh giá và dữ liệu đơn hàng trên nhiều nền tảng.'
                    />
                    <ServiceCard icon={<ServiceIcon02/>} 
                    title='Affiliate' 
                    description='Tạo hàng loạt tài khoản cho chiến dịch tiếp thị liên kết, đo lường hiệu quả quảng bá theo từng ref.'
                    />
                    <ServiceCard icon={<ServiceIcon03/>} 
                    title='Marketing số' 
                    description='Tự động hoá chiến dịch seeding, tăng tương tác trên mạng xã hội, thu thập insight khách hàng bằng AI.'
                    />
                    <ServiceCard icon={<ServiceIcon04/>} 
                    title='Quản lý đa tài khoản' 
                    description='Quản lý và chia sẻ tài khoản dạng profile tách biệt, dễ kiểm soát mà không cần tiết lộ cookie hay mật khẩu.'
                    />
                    <ServiceCard icon={<ServiceIcon05/>} 
                    title='Quản lý thành viên' 
                    description='Kiểm soát tài nguyên, phân quyền nhân sự cho các dự án cụ thể.'
                    />
                    <ServiceCard icon={<ServiceIcon06/>} 
                    title='Traffic automation' 
                    description='Tự động tăng lượt truy cập, phân phối traffic theo mục tiêu, kết hợp AI để mô phỏng hành vi người thật.'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
