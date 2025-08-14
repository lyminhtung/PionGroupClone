import React from 'react'
import { Button } from '@/components/ui/btn/Button.component'
import { useState,useEffect } from 'react';
import './Board01.scss'
const Board01=()=> {
    const words = ["Crypto", "E-Commerce", "Social Media"];
      const [wordIndex, setWordIndex] = useState(0);
      const [displayedText, setDisplayedText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);
    
      useEffect(() => {
        const currentWord = words[wordIndex];
        const typingSpeed = 30;
    
        const timer = setTimeout(() => {
          if (!isDeleting) {
            setDisplayedText((prev) => {
              const next = currentWord.substring(0, prev.length + 1);
              if (next === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
              }
              return next;
            });
          } else {
            setDisplayedText((prev) => {
              const next = currentWord.substring(0, prev.length - 1);
              if (next === "") {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
              }
              return next;
            });
          }
        }, typingSpeed);
    
        return () => clearTimeout(timer);
      }, [displayedText, isDeleting, wordIndex]);
  return (
   <section id='banner' className='home2-banner-section'>
    <div className='container justify-center'>
            <div className="grid grid-cols-12 justify-center">
                <div className='col-span-12'>
                    <div className='banner-content xl:!max-w-[1280px]'>
                        <h1 className='md:block hidden block hidden text-center'>
                            Trình duyệt ẩn danh 
                            <br/>
                            Bảo vệ tài khoản  
                            <span> </span>
                            <span className='index-module_type__E-SaG underline '>{displayedText}</span>
                            <span className='text-type'></span>
                        </h1>
                        <h2 className="block md:hidden">Trình duyệt ẩn danh bảo vệ tài khoản 
                            <br/>
                            <span><span className="index-module_type__E-SaG"></span></span>
                            <span className="text-type"></span>
                        </h2>
                        <p>Nền tảng quản lý tài khoản an toàn và tự động hóa thao tác dễ dàng cùng kho ứng dụng đa dạng nhất.</p>
                        <div className='mt-10 flex gap-4 items-center justify-center'>
                            <Button variant='primary' size='lg'>
                                <span >Tải xuống</span>
                                <i className='bi bi-download'></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-10 col-span-12 lg:col-start-2'>
                    <div className="video">
                        <iframe className="rounded-t-3xl shadow-t-2xl w-full aspect-video" src="https://www.youtube.com/embed/N2vi3OlaJ1I?autoplay=1&amp;mute=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;playlist=N2vi3OlaJ1I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Board01
