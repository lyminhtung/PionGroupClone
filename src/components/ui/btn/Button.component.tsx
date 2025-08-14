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
    const spanDefaultClasses = 'font-semibold tracking-wide text-white pr-2 whitespace-nowrap';
    const iconDefaultClasses = 'text-white';

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
                        if (React.isValidElement(child)) {
                            let defaultClasses = '';
                            if (child.type === 'span') {
                                defaultClasses = spanDefaultClasses;
                            } else if (child.type === 'i') {
                                defaultClasses = iconDefaultClasses;
                            }
                            const typedChild = child as React.ReactElement<{ className?: string }>;
                            const existingClasses = typedChild.props.className || '';

                            return React.cloneElement(typedChild, {
                                className: `${defaultClasses} ${existingClasses} ${textClass}`.trim(),
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