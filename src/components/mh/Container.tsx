"use client";
import React from 'react'
import { Button } from '../ui/btn/Button.component'
import { useState,useEffect } from 'react';
import'./Container.scss'
import Banner from './BoardContent/banner/Banner';
import BannerMarquee from './BoardContent/banner-marquee/BannerMarquee';
import About from './BoardContent/about/About';
import Service from './BoardContent/service/Service';
import PartnerMarquee from './BoardContent/partner-marquee/PartnerMarquee';
import Pricing from './BoardContent/pricing/Pricing';
import ScriptMarket from './BoardContent/script-market/ScriptMarket';
import Testimonial from './BoardContent/testimonial/Testimonial';
import Faq from './BoardContent/faq/Faq';
import FreeTrialBanner from './BoardContent/free-trial-banner/FreeTrialBanner';
const MainContainer = () =>{
  
  return (
    <div className='main-container w-full min-h-screen overflow-x-hidden max-w-full'>
        <Banner/>
        <BannerMarquee/>
        <About/>
        <Service/>
        <PartnerMarquee/>
        <Pricing/>
        <ScriptMarket/>
        <Testimonial/>
        <Faq/>
        <FreeTrialBanner/>
    </div>

  )
}

export default MainContainer
