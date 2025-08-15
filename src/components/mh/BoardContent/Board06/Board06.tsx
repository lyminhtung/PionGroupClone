import React from 'react'
import './Board06'
import PriceCard from '@/components/ui/cards/PriceCard/PriceCard'
const Board06=()=> {
  return (
    <section id='price'>
        <div className='flex min-h-0 flex-1 flex-col gap-3 group-data-[collapsible=icon]:overflow-hidden overflow-hidden'>
            <div className='size-full rounded-[inherit]' style={{overflow:'hiden scroll'}}>
                <div style={{minWidth:'100%', display:'table'}}>
                    <section className='flex justify-center'>
                        <div className='px-2 sm:container py-10'>
                            <div className='relative grid'>
                                <div className='mx-auto flex max-w-5xl flex-col items-center gap-6 text-center'>
                                    <h2 className='text-pretty text-5xl font-bold lg:text-6xl mb-0'>Bảng giá</h2>
                                    <p className='text-lg text-muted-foreground lg:text-xl'>Trải nghiệm 100 profile miễn phí</p>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='grid w-full gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                        <PriceCard title='FREE' price='0' time='Năm' subtitle='Trải nghiệm sự khác biệt'>
                                            <p>100 hồ sơ</p>
                                            <p>Lưu trữ dữ liệu đám mây</p>
                                            <p>Đồng bộ hóa thao tác</p>
                                            <p>Tự động hóa kéo thả</p>
                                        </PriceCard>
                                        <PriceCard title='PLUnlimit' price='999,000' time='Tháng' subtitle='Dành cho quý khách hàng doanh nghiệp'>
                                            <p>Không giới hạn hồ sơ</p>
                                            <p>Lưu trữ đám mây</p>
                                            <p>Đồng bộ hóa thao tác</p>
                                            <p>Tự động hóa kéo thả</p>
                                        </PriceCard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Board06
