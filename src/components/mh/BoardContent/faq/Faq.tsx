import { ButtonShowContent } from '@/components/ui/btn/buttonShowContent/ButtonShowContent'
import './Faq.scss'
const Faq = () => {
  return (
    <section
      id="faq"
      className="home3-faq-section bg-[#f4f4f4] dark:bg-[#242627]"
    >
      <div className="container">
        <div className="grid grid-cols-12 justify-center mb-20">
          <div className="lg:col-span-8 lg:col-start-3 col-start-1 col-span-12">
            <div className="section-title text-center wow animate fadeInDown delay-200 duration-1500 ease-in-out">
              <h2> Câu hỏi thường gặp?</h2>
            </div>
          </div>
        </div>
        <div className="faq-wrap">
          <div className="faq-wrap">
            <div className="faq-content">
              <div className="accordion" id="accordionTravel">
                <div className="grid grid-cols-12 gap-0 lg:gap-12">
                  <div className="md:col-span-6 col-span-12 md:pl-6 pl-0 wow animate fadeInLeft delay-200 duration-1500 ease-in-out">
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12 md:pl-6 pl-0 wow animate fadeInLeft delay-200 duration-1500 ease-in-out">
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
                    <ButtonShowContent
                      title="01. PionLogin có thể giúp tôi quản lý bao nhiêu tài khoản?"
                      description="Tuỳ gói dịch vụ, từ vài chục đến hàng ngàn profile. Gói PL50 cho phép quản lý 50 profile cùng lúc."
                    />
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

export default Faq
