'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { searchGames, Game } from '@/lib/data';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      const searchResults = searchGames(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [query]);

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

        {/* 搜索结果标题 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            搜索结果："{query}"
          </h1>
          {!loading && (
            <p className="text-gray-500 mt-2">
              找到 {results.length} 个相关游戏
            </p>
          )}
        </div>

        {/* 加载状态 */}
        {loading && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-500">搜索中...</p>
          </div>
        )}

        {/* 搜索结果 */}
        {!loading && results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : !loading && query ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">没有找到相关游戏</h3>
            <p className="text-gray-500 mb-6">试试其他关键词，或者去首页逛逛~</p>
            <Link 
              href="/" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              返回首页
            </Link>
          </div>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
}
