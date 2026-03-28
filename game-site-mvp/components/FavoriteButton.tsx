'use client';

import { useFavorite } from '@/lib/storage';

interface FavoriteButtonProps {
  slug: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FavoriteButton({ slug, size = 'md' }: FavoriteButtonProps) {
  const { favorited, toggle, mounted } = useFavorite(slug);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  // 防止服务端渲染不匹配
  if (!mounted) {
    return (
      <button 
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-gray-100 text-gray-400`}
      >
        <svg className={iconSizes[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    );
  }
  
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-200 ${
        favorited 
          ? 'bg-red-100 text-red-500 hover:bg-red-200' 
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
      }`}
      title={favorited ? '取消收藏' : '添加收藏'}
    >
      <svg 
        className={iconSizes[size]} 
        fill={favorited ? "currentColor" : "none"} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
}
