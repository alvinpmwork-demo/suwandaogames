'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GameCard } from './GameCard';
import { getFavorites, getHistory } from '@/lib/storage';
import { games, Game } from '@/lib/data';

export function UserSection() {
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const [historyGames, setHistoryGames] = useState<Game[]>([]);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'favorites' | 'history'>('favorites');
  
  useEffect(() => {
    setMounted(true);
    
    // 获取收藏
    const favoriteSlugs = getFavorites();
    const favGames = games.filter(g => favoriteSlugs.includes(g.slug));
    setFavoriteGames(favGames);
    
    // 获取历史
    const historySlugs = getHistory();
    const histGames = historySlugs
      .map(slug => games.find(g => g.slug === slug))
      .filter((g): g is Game => g !== undefined);
    setHistoryGames(histGames);
  }, []);
  
  // 监听存储变化
  useEffect(() => {
    const handleStorage = () => {
      const favoriteSlugs = getFavorites();
      const favGames = games.filter(g => favoriteSlugs.includes(g.slug));
      setFavoriteGames(favGames);
      
      const historySlugs = getHistory();
      const histGames = historySlugs
        .map(slug => games.find(g => g.slug === slug))
        .filter((g): g is Game => g !== undefined);
      setHistoryGames(histGames);
    };
    
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  
  if (!mounted) return null;
  
  const displayGames = activeTab === 'favorites' ? favoriteGames : historyGames;
  const emptyMessage = activeTab === 'favorites' 
    ? '还没有收藏任何游戏，快去发现喜欢的游戏吧！' 
    : '还没有玩过任何游戏，快去尝试一下吧！';
  const emptyIcon = activeTab === 'favorites' ? '🤍' : '🎮';
  
  return (
    <section className="mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        {/* 标签切换 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'favorites'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ❤️ 我的收藏 ({favoriteGames.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'history'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🕐 最近玩过 ({historyGames.length})
            </button>
          </div>
        </div>
        
        {/* 游戏列表 */}
        {displayGames.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {displayGames.slice(0, 6).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-3">{emptyIcon}</div>
            <p className="text-gray-500">{emptyMessage}</p>
            <Link 
              href="/" 
              className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              去首页发现游戏 →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
