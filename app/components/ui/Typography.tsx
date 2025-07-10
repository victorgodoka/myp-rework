import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 
      className={cn("text-4xl font-bold text-gray-900", className)} 
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn("text-3xl font-bold text-gray-900", className)} 
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={cn("text-xl font-bold text-gray-900", className)} 
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 
      className={cn("text-lg font-semibold text-gray-900", className)} 
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn("text-base text-gray-600 leading-relaxed", className)} 
      {...props}
    >
      {children}
    </p>
  );
}

export function Small({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <small 
      className={cn("text-sm text-gray-500", className)} 
      {...props}
    >
      {children}
    </small>
  );
}

export function Caption({ children, className, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <span 
      className={cn("text-xs text-gray-400", className)} 
      {...props}
    >
      {children}
    </span>
  );
} 