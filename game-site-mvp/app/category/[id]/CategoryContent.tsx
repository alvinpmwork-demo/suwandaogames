'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { games, Game } from '@/lib/data';

interface CategoryContentProps {
  category: {
    id: string;
    name: string;
    icon: string;
    color: string;
  };
  initialGames: Game[];
}

export function CategoryContent({ category, initialGames }: CategoryContentProps) {
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'rating'>('popular');
  
  let sortedGames = [...initialGames];
  
  // 根据排序选项排序
  if (sortBy === 'popular') {
    sortedGames = sortedGames.sort((a, b) => b.playCount - a.playCount);
  } else if (sortBy === 'newest') {
    sortedGames = sortedGames.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sortBy === 'rating') {
    sortedGames = sortedGames.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 返回按钮 */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>

        {/* 分类标题 */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
              {category.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{category.name}游戏</h1>
              <p className="text-gray-500 mt-1">
                共 {sortedGames.length} 款精选{category.name}游戏，全部免费即点即玩
              </p>
            </div>
          </div>
        </div>

        {/* 排序选项 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setSortBy('popular')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                sortBy === 'popular' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              人气排序
            </button>
            <button 
              onClick={() => setSortBy('newest')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                sortBy === 'newest' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              最新上架
            </button>
            <button 
              onClick={() => setSortBy('rating')}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                sortBy === 'rating' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              评分最高
            </button>
          </div>
        </div>

        {/* 游戏列表 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sortedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {sortedGames.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无游戏</h3>
            <p className="text-gray-500">该分类下暂时没有游戏，去看看其他分类吧~</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
