import PostCard from '@/components/ui/cards/PostCard/PostCard'
import './Board07.scss'
import React from 'react'
import { squareFbLogo, suqareGmailLogo ,squareInstaLogo, squareDiscordLogo} from '../../../../../public/logo/logo'
const Board07=()=> {
  return (
    <section id='script-market' className='pt-10 pb-8 px-4 sm:px-6 lg:px-8 bg-[#f4f4f4] dark:bg-[#242627]'>
        <div className='container'>
            <div className='flex items-center justify-between h-full mb-16 md:gap-0 gap-4'>
                <div className='text-start'>
                    <h2 className='md:text-4xl text-xl font-bold  relative inline-block'>Chợ Script - Automation đa dạng</h2>
                </div>
                <button className='inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 size-lg font-bold p-6 md:text-md text-sm text-end'>Xem thêm</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <PostCard iconSrc={squareFbLogo.src}/>
                <PostCard title='Đăng nhập - Nuôi Via' 
                description='Chỉ cần setup một lần, hệ thống tự động nuôi acc theo lịch trình...' 
                views={200} downloads={150} likes={90}
                iconSrc={squareFbLogo.src}/>
                <PostCard title='Tự động đăng nhập hàng loạt' 
                description='Hỗ trợ cho các chiến dịch tạo account, xác thực siêu nhanh...' 
                views={201} downloads={190} likes={900}
                iconSrc={suqareGmailLogo.src}/>
                <PostCard title='Tự động nhắn tin' 
                description='Tự động gửi tin nhắn đến hàng loạt link. Nhận đến đâu thì...' 
                views={200} downloads={150} likes={90}
                iconSrc={squareFbLogo.src}/>
                <PostCard title='Nuôi Instagram Follow' 
                description='Công cụ mạnh mẽ hỗ trợ auto kéo ref trên Twitter và Reddit...' 
                views={200} downloads={150} likes={90}
                iconSrc={squareInstaLogo.src}/>
                <PostCard title='Comment Tự Động' 
                description='Đẩy mạnh farm coin, ref chi trong vài củ nhập...' 
                views={200} downloads={150} likes={90}
                iconSrc={squareDiscordLogo.src}/>
            </div>
        </div>
    </section>
  )
}

export default Board07
