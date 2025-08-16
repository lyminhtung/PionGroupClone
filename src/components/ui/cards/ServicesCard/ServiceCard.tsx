import React from 'react'
import { ServiceCardProps } from './ServiceCard.type'
import './ServiceCard.scss'

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="md:col-span-6 col-span-12 wow animate fadeInUp delay-200 duration-1500 ease-in-out">
      <div className="services-card group">
        <div className="icon w-12 h-12 flex items-center justify-center 
                transition-transform duration-500 
                group-hover:rotate-180 transform origin-center">
            {icon}
        </div>
        <div className="services-content">
          <div className="title-category">
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
