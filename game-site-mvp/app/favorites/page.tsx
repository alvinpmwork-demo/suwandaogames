'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { games, Game } from '@/lib/data';
import { getFavorites, getHistory } from '@/lib/storage';
import Link from 'next/link';

export default function FavoritesPage() {
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const [historyGames, setHistoryGames] = useState<Game[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const favorites = getFavorites();
    const history = getHistory();
    
    setFavoriteGames(games.filter(g => favorites.includes(g.slug)));
    setHistoryGames(games.filter(g => history.includes(g.slug)).slice(0, 8));
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-xl mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
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

        {/* 我的收藏 */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">❤️</div>
              <div>
                <h1 className="text-2xl font-bold">我的收藏</h1>
                <p className="opacity-90 mt-1">
                  共收藏 {favoriteGames.length} 款游戏
                </p>
              </div>
            </div>
          </div>

          {favoriteGames.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {favoriteGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">还没有收藏游戏</h3>
              <p className="text-gray-500 mb-4">点击游戏卡片上的心形图标，收藏你喜欢的游戏</p>
              <Link 
                href="/" 
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                去发现游戏
              </Link>
            </div>
          )}
        </section>

        {/* 最近玩过 */}
        {historyGames.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span>🕐</span>
                <span>最近玩过</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {historyGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
