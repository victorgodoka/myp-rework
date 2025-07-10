import React from 'react';
import { cn } from '@/lib/utils';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  onSearch,
  placeholder = "Buscar cartas...",
  className,
  ...props
}: SearchInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(e.currentTarget.value);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myp-primary focus:border-transparent",
          className
        )}
        onKeyPress={handleKeyPress}
        {...props}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="icon-[lucide--search] text-gray-400"></i>
      </div>
    </div>
  );
} 