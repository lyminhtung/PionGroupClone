import React from 'react'
import Image from 'next/image'
import { logo } from '../../../public/img'
const MainHeader=() =>{
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
            <div className="main-menu !hidden lg:!flex">
                <ul className="menu-list">
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
                    <li className="menu-item-has-children h-full">
                        <a className='drop-down flex items-center h-full cursor-pointer' href='#banner'>
                            Hướng dẫn
                        </a>
                        <i className="drop-down flex items-center h-full cursor-pointer"></i>
                    </li>
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Trang chủ
                        </a>
                    </li>
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Trang chủ
                        </a>
                    </li>
                    <li className="">
                        <a className='drop-down flex items-center' href='#banner'>
                            Trang chủ
                        </a>
                    </li>
                                     
                </ul>
            </div>
            <div className="flex items-center justify-between gap-3"></div>
        </div>
    </header>
  )
}

export default MainHeader
