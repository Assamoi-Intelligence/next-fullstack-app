import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, HTMLAttributes, forwardRef } from 'react'

const headingVariants = cva("text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter", {
    variants: {
        size:  {
            default: 'text-4xl md:text-5xl lg:text-6xl',
            sm: 'text-5xl md:text-6xl lg:text-7xl',
            lg: 'text-5xl'
        }
    },
    defaultVariants: {
        size: 'default'
    }
});

interface LargeHeadingProps  extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({
    className, size, children, ...props
}, ref) => {
    return <p ref={ref} {...props} className={cn(headingVariants({size, className}))}>
        {children}
    </p>
});

LargeHeading.displayName = "LargeHeading";

export default LargeHeading