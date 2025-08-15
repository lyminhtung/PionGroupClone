import './Board05.scss'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { discordLogo,fbLogo,insntaLogo,teleLogo,xwebLogo,youtubeLogo,tiktokLogo,chormeLogo } from '../../../../../public/logo/logo'
const Board05 =()=> {
  return (
    <section id='partner-marquee' className='logo-section wow animate fadeInUp border-y bg-[#f4f4f4] dark:bg-[#242627] delay-200 duration-1500 ease-in-out'>
        <div className='container-fluid'>
            <h2 className='text-center font-bold text-3xl mb-16 mt-10'>Lựa chọn hàng đầu của hơn 200.000+ người dùng trên mọi lĩnh vực</h2>
            <div className='logo-wrap'>
                <div className='logo-area'>
                    <Marquee speed={50} gradient={false}>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px', marginRight:'80px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={chormeLogo.src} 
                            src={chormeLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={discordLogo.src} 
                            src={discordLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={fbLogo.src} 
                            src={fbLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={insntaLogo.src} 
                            src={insntaLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={teleLogo.src} 
                            src={teleLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={xwebLogo.src} 
                            src={xwebLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={youtubeLogo.src} 
                            src={youtubeLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                        <a href='#' className='mx-4 grayscale hover:grayscale-0 transition duration-300 flex items-center' style={{height:'60px'}}>
                            <img alt="discord" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" 
                            srcSet={tiktokLogo.src} 
                            src={tiktokLogo.src}
                             style={{color: 'transparent', objectFit: 'contain'}}></img>
                        </a>
                    </Marquee>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Board05
