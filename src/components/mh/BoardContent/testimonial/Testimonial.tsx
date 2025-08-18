import React from "react";
import Testimonials from "@/components/animation/SwiperSlide";
import "./Testimonial.scss";
const Testimonial = () => {
  return (
    <section className="comment">
      <div className="container-fluid">
        <div className="grid grid-cols-12 justify-center mb-3">
          <div className="lg:col-span-8 col-span-12 lg:col-start-3">
            <div className="section-title text-center wow animate fadeInDown delay-200 duration-1500 ease-in-out">
              <h2>Lắng nghe khách hàng chia sẻ về PionLogin</h2>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Testimonial;
