import React from 'react'
import { logo } from '../../../public/img'
import { fbLogo, tiktokLogo, xwebLogo, youtubeLogo } from '../../../public/logo/logo'
import './Footer.scss'
const Footer =() =>{
  return (
    <footer id='footer' className='border-t'>
      <div className='container px-6 py-10 flex md:flex-row flex-col md:gap-0 gap-10 justify-between text-base'>
        <div>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='flex items-center space-x-2'>
              <a href="#" className='flex items-center justify-center'>
                <img alt="Logo" loading="lazy" width="135" height="40" decoding="async" data-nimg="1" 
                src={logo.src}
                srcSet={logo.src}
                style={{color:'transparent'}}></img>
              </a>
            </div>
          </div> 
          <div className='flex space-x-4'>
            <a href="#" className='flex ml-2'>
              <img src={fbLogo.src} alt="" width="28px" height="28" loading='lazy' decoding='async' />
        
            </a>
            <a href='#'>
              <img src={xwebLogo.src} alt="" width="28px" height="28" loading='lazy' decoding='async' />
            </a>
          </div>
        </div>
        <div className='grid md:grid-cols-12 grid-cols-8 md:gap-12 gap-6 justify-center footer-content'>
          <div className='col-span-4 '>
            <h3 className='font-semibold md:text-lg text-md mb-3'>PionLogin</h3>
            <ul className='space-y-2 dark:text-gray-400'>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Về chúng tôi</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Kết nối</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Đối tác</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>
          <div className='col-span-4'>
            <h3 className='font-semibold md:text-lg text-md mb-3'>Tài nguyên</h3>
            <ul className='space-y-2 dark:text-gray-400'>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Kho ứng dụng</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Nguồn Proxy</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Tài liệu hướng dẫn</a>
              </li>
              <li className='flex items-center gap-2'>
                <a href="#" className='hover:underline md:text-base text-sm'>Tài liệu API</a>
              </li>
            </ul>
          </div>
          <div className='col-span-4'>
            <h3 className='font-semibold md:text-lg text-md mb-3'>PionLogin</h3>
            <ul className='space-y-2 dark:text-gray-400'>
              <li className='flex items-center gap-2'>
                <img alt="Facebook" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" 
                srcSet={fbLogo.src}
                src={fbLogo.src} 
                style={{color:'transparent'}}></img>
                <a href="#" className='hover:underline md:text-base text-sm'>@pl.vietnam.official</a>
              </li>
              <li className='flex items-center gap-2'>
                <img alt="Facebook" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" 
                srcSet={xwebLogo.src}
                src={xwebLogo.src} 
                style={{color:'transparent'}}></img>
                <a href="#" className='hover:underline md:text-base text-sm'>@pionlogin</a>
              </li>
              <li className='flex items-center gap-2'>
                <img alt="Facebook" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" 
                srcSet={youtubeLogo.src}
                src={youtubeLogo.src} 
                style={{color:'transparent'}}></img>
                <a href="#" className='hover:underline md:text-base text-sm'>@PionLogin</a>
              </li>
              <li className='flex items-center gap-2'>
                <img alt="Facebook" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" 
                srcSet={tiktokLogo.src}
                src={tiktokLogo.src} 
                style={{color:'transparent'}}></img>
                <a href="#" className='hover:underline md:text-base text-sm'>@pionlogin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
