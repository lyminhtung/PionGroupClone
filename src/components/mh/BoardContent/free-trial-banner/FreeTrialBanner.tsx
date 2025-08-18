import React from 'react'
import './FreeTrialBanner.scss'
import { Button } from '@/components/ui/btn/Button.component'
import { free_trial_banner } from '../../../../../public/img'
const FreeTrialBanner = () => {
  return (
    <section
      id="free-trial-banner"
      className="py-12 px-4 text-center justify-between items-center container"
      style={{ display: 'flex' }}
    >
      <div className="text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          DÙNG THỬ MIỄN PHÍ NGAY BÂY GIỜ
        </h2>
        <p className="text-lg mb-6">
          Đăng ký tài khoản ngay để nhận 100 trình duyệt miễn phí
        </p>
        <Button variant="secondary" size="lg">
          <span className="">Tải xuống</span>
          <i className="bi bi-download "></i>
        </Button>
      </div>
      <div>
        <img
          alt="Free trial banner"
          loading="lazy"
          width="310"
          height="310"
          srcSet={free_trial_banner.src}
          src={free_trial_banner.src}
          style={{ color: 'transparent' }}
        ></img>
      </div>
    </section>
  )
}

export default FreeTrialBanner
