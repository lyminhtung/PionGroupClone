import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './SwiperSlice.scss'

const testimonials = [
  {
    name: 'Nguyễn Văn An',
    text: 'PionLogin đúng đỉnh! Quản lý acc siêu mượt, chống detect chất lừ. Làm MMO mà chưa dùng là tụt hậu. Quất ngay gói PL50 cho phê,',
    avatar: '/avt/author1.webp',
  },
  {
    name: 'Lê Hoàng Cường',
    text: 'PionLogin cho phép custom trình duyệt theo nhu cầu, cực kỳ tiện lợi.',
    avatar: '/avt/author1.webp',
  },
  {
    name: 'Phạm Thu Hà',
    text: 'Năng suất của mình tăng gấp đôi sau khi dùng phần mềm này.',
    avatar: '/avt/author1.webp',
  },
  {
    name: 'Nguyễn Thị Bích',
    text: 'Giá hợp lý, tính năng đầy đủ và support rất nhanh.',
    avatar: '/avt/author1.webp',
  },
  {
    name: 'Nguyễn Thị Bích',
    text: 'Giá hợp lý, tính năng đầy đủ và support rất nhanh.',
    avatar: '/avt/author1.webp',
  },
  {
    name: 'Nguyễn Thị Bích',
    text: 'Giá hợp lý, tính năng đầy đủ và support rất nhanh.',
    avatar: '/avt/author1.webp',
  },
]

export default function Testimonials() {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="container-card bg-white p-6 rounded-2xl hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center"
              style={{ width: '523px', height: '312px' }}
            >
              <div
                className="flex align-center"
                style={{ marginRight: '200px' }}
              >
                <img
                  style={{ width: '65px', height: '65px' }}
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-lg">{item.name}</h4>
              </div>
              <p style={{ width: '460.33px' }} className="text-start">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
