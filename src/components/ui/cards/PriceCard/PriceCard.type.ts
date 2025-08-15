import { BaseProps } from "@/types/common";

export interface PriceCardProps extends BaseProps{
    title?: string,
    price?: string,
    time?:string,
    subtitle?:string,
    features?: React.ReactNode[];
}