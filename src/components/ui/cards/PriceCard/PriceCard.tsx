import './PriceCard.scss'
import React from 'react'
import { PriceCardProps } from './PriceCard.type'
import { title } from 'process'
import { subtle } from 'crypto'

const PriceCard : React.FC<PriceCardProps> =({
    title,
    price,
    time,
    subtitle,
    features = [],
    children
}) =>{
    const childItems = React.Children.toArray(children)
    .map((child) => {
        if (typeof child === 'string') return child.trim()
        if (
        React.isValidElement(child) &&
        typeof (child.props as { children?: React.ReactNode }).children === 'string'
        ) {
        return ((child.props as { children?: string }).children || '').trim()
        }
        return ''
    })
    .filter(Boolean)

  // Gộp features + children thành 1 danh sách
    const allItems = [...features, ...childItems]
    return(
        <div className='relative flex flex-col rounded-lg p-8 bg-[hsl(var(0 0% 100%)] border border-[#e4e4e7] dark:border-[#27272b] h-[500px]' style={{boxSizing:'initial'}}>
            <div className='relative z-10 grow'>
                <div className='mb-6'>
                    <h2 className='mb-2 text-xl font-medium'>{title}</h2>
                    <div className='mb-2 flex items-baseline'>
                        <span className='text-4xl font-bold'>{price}</span>
                        <span className='ml-2 text-muted-foreground'>/{time}</span>
                    </div>
                    <div className='h-10 text-sm text-start font-semibold my-1 line-clamp-2 break-words max-w-[calc(100%-20px)]'>
                        <div className='cursor-pointer'>{subtitle}</div>
                    </div>
                    <ul className="mb-8 space-y-4">
                        {allItems.map((item, idx) => (
                            <li key={idx} className="flex items-start pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-check mt-1 size-4"
                            >
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <div className="ml-2 text-start max-w-[calc(100%-20px)]">
                                {/* Dòng chính */}
                                <div className="text-sm font-medium line-clamp-1 break-words cursor-pointer">
                                {item}
                                </div>
                                {/* Dòng phụ */}
                                <div className="text-xs text-muted-foreground font-medium line-clamp-2 break-words cursor-pointer">
                                {item}
                                </div>
                            </div>
                            </li>
                        ))}
                    </ul>
                    <div style={{padding: '0 16px'}}>
                        <button className='inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground px-4 py-2 group mt-auto h-11 w-full rounded-xl text-sm font-medium shadow-none transition-colors duration-200' style={{width:'100%', boxSizing:'border-box', borderRadius:'15px'}}>
                            Nâng cấp
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 size-4 transition-transform group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6"></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default PriceCard