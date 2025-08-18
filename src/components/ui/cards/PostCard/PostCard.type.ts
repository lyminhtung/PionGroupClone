import { BaseProps } from '@/types/common'

export default interface PostCardProps extends BaseProps {
  title?: string
  description?: string
  iconSrc?: string
  views?: number
  downloads?: number
  likes?: number
  className?: string
}
