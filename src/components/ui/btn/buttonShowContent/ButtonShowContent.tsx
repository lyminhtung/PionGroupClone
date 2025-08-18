import { ButtonShowContentProps } from './ButtonShowContent.type'
import React from 'react'
import { useState } from 'react'
export const ButtonShowContent: React.FC<ButtonShowContentProps> = ({
  title,
  description,
}) => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="accordion-item1 mb-15 ml-10">
      <h5 className="accordion-header">
        <button
          style={{ width: '630px' }}
          className="items-center rounded-none shadow-none bg-transparent lg:text-[17px] text-sm text-start font-semibold leading-[1.8]  pb-[15px] border-b border-[rgba(11,12,12,0.08)] flex justify-between w-full hover:text-[--primary-color] transition-colors duration-300"
          type="button"
          aria-expanded="false"
          onClick={handleClickOpen}
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </button>
      </h5>
      <div
        className={`transition-all duration-300 ease-in-out max-h-[500px] ${open ? 'block' : 'hidden'}`}
      >
        <div className="accordion-body pt-4 pb-2">{description}</div>
      </div>
    </div>
  )
}
