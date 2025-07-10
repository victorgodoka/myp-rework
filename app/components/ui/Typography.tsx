import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'caption';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small';
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, variant = 'p', as, ...props }, ref) => {
    const variants = {
      h1: "text-4xl font-bold text-gray-900",
      h2: "text-3xl font-bold text-gray-900",
      h3: "text-xl font-bold text-gray-900",
      h4: "text-lg font-semibold text-gray-900",
      p: "text-base text-gray-600 leading-relaxed",
      small: "text-sm text-gray-500",
      caption: "text-xs text-gray-400"
    };

    const defaultElements = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      p: 'p',
      small: 'small',
      caption: 'span'
    };

    const Element = as || defaultElements[variant];

    return React.createElement(
      Element,
      {
        ref,
        className: cn(variants[variant], className),
        ...props
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

export default Typography; 