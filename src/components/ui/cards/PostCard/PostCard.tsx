import React from 'react'
import Image from 'next/image'
import { Eye, CloudDownload, ThumbsUp } from 'lucide-react'
import type PostCardProps from './PostCard.type'
import { squareFbLogo } from '../../../../../public/logo/logo'

const PostCard: React.FC<PostCardProps> = ({
  title = 'Tự động đăng bài vào Group',
  description = 'Tự động đăng bài vào hàng loạt group, chỉ cần nhập Link Group...',
  iconSrc = '/img/landing/script-marketplace/facebook.webp',
  views = 133,
  downloads = 128,
  likes = 78,
  className = '',
}) => {
  return (
    <div
      className={`swiper-slide swiper-slide-active ${className}`}
      style={{
        height: 'calc(50% - 15px)',
        width: '441.333px',
        marginRight: '30px',
      }}
    >
      <div
        className="dark:border bg-white dark:bg-black rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 grid grid-cols-12"
        style={{ marginRight: '30px' }}
      >
        {/* Icon Section */}
        <div className="col-span-3 pt-6 pl-6">
          <Image
            alt="icon-extension"
            width={120}
            height={120}
            src={iconSrc}
            className="object-contain"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col h-48 col-span-9">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="flex-grow text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-2 px-6 pb-6 col-span-12 mt-15">
          <div className="col-span-1 flex justify-center items-center gap-3">
            <Eye size={24} className="text-gray-600 dark:text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400 m-0">{views}</p>
          </div>

          <div className="col-span-1 flex justify-center items-center gap-3">
            <CloudDownload
              size={24}
              className="text-gray-600 dark:text-gray-400"
            />
            <p className="text-gray-600 dark:text-gray-400 m-0">{downloads}</p>
          </div>

          <div className="col-span-1 flex justify-center items-center gap-3">
            <ThumbsUp size={24} className="text-gray-600 dark:text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400 m-0">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
