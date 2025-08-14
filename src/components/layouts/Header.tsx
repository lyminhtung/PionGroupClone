import React from 'react'
import Image from 'next/image'
import { logo } from '../../../public/img'
import './Header.css'
import '../../styles/button.scss'
import { Button } from '@/components/ui/btn/Button.component';
const MainHeader=() =>{
    console.log('Button type:', typeof Button);
  return (
    <header className="header-area style-1">
        <div className="container flex flex-nowrap items-center justify-between">
            <div className="company-logo">
                <div className="flex items-center space-x-2">
                    <a className="flex items-center justify-center" href=''>
                        <div className="flex items-center justify-center rounded-md text-primary">
                            <img alt="Logo" loading="lazy" width="135" height="40" decoding="async" data-nimg="1" style={{color:'transparent'}} srcSet={logo.src} src={logo.src}/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="main-menu lg:!flex">
                <ul className="menu-list flex flex-nowrap items-center justify-between">
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Trang chủ
                        </a>
                    </li>
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Bảng giá
                        </a>
                    </li>
                    <li className="menu-item-has-children flex h-full">
                        <a className='drop-down flex items-center h-full cursor-pointer' href='#banner'>
                            Hướng dẫn
                        </a>
                        <i className="bi bi-chevron-down pl-2">
                        </i>
                    </li>
                    <li className="menu-item-has-children flex h-full">
                        <a className='drop-down flex items-center' href='#banner'>
                            Tài nguyên
                        </a>
                        <i className="bi bi-chevron-down pl-2">
                        </i>
                    </li>
                    <li className="menu-item-has-children flex h-full">
                        <a className='drop-down flex items-center' href='#banner'>
                            Cộng đồng
                        </a>
                        <i className="bi bi-chevron-down pl-2">
                        </i>
                    </li>
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Liên hệ
                        </a>
                    </li>
                                     
                </ul>
            </div>
            <div className="">
                <Button variant='primary' size='sm' className='items-center space-x-2'>
                    <span className="">Tải xuống</span>
                    <i className="bi bi-download "></i>
                </Button>
            </div>
            
        </div>
    </header>
  )
}

export default MainHeader
