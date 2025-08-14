import React from 'react';
import { ButtonProps } from './Button.type';
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    iconPosition = 'left',
    children,
    className = '',
    disabled,
    ...rest
}) => {
    const sizeToTextClass = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    const textClass = sizeToTextClass[size] || 'text-base';

    const classes = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        className,
    ].filter(Boolean).join(' ');

    const renderIcon = () => {
        if (loading) {
            return <div className="btn-loading" />;
        }
        return null;
    };

    return (
        <button
            className={classes}
            disabled={disabled || loading}
            {...rest}
        >
            <div className='btn_content flex items-center justify-center'>
                {iconPosition === 'left' && renderIcon()}
                {
                    React.Children.map(children, child => {
                        // Kiểm tra nếu là một phần tử React hợp lệ trước khi clone
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                className: `${child.props.className || ''} ${textClass}`.trim(),
                            });
                        }
                        return child;
                    })
                }
                {iconPosition === 'right' && renderIcon()}
            </div>
        </button>
    );
};