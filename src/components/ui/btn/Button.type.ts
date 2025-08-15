import { BaseProps } from "@/types/common";
import { Variance,Size } from "@/types/common";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,BaseProps{
    variant?: Variance | 'outline';
    size?: Size;
    //loading : true hien thi trang thai loading va disable nut
    loading?: boolean;
    // Cho phép truyền một icon (React element{img} hoặc svg)
    icon? : React.ReactNode;
    //vị trí icon: bên trái hoặc bên phải của text
    iconPosition?: 'left' | 'right';
    // true => chiếm toàn bộ chiều ngang container
    fullWidth?: boolean;
}