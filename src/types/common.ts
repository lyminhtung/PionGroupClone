export interface BaseProps {
  className?: string
  children?: React.ReactNode
}
export type Size = 'sm' | 'md' | 'lg'
export type Variance =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
