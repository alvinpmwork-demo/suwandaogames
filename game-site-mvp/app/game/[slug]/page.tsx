import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { GamePlayer } from '@/components/GamePlayer';
import { FavoriteButton } from '@/components/FavoriteButton';
import { getGameBySlug, getHotGames, games } from '@/lib/data';

interface Props {
  params: { slug: string };
}

// 静态生成所有游戏详情页
export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  if (!game) {
    return { title: '游戏未找到' };
  }
  
  return {
    title: `${game.title}在线玩 - 免费${game.category}游戏 | 速玩岛`,
    description: `免费在线玩${game.title}，${game.description}。无需下载，点击即玩。`,
  };
}

export default function GamePage({ params }: Props) {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    notFound();
  }

  const relatedGames = getHotGames(6).filter(g => g.id !== game.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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

        {/* 游戏标题区 */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{game.title}</h1>
          <FavoriteButton slug={game.slug} size="lg" />
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
            {game.category}
          </span>
          {game.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* 游戏区域 */}
        <GamePlayer slug={game.slug} thumbnail={game.thumbnail} />

        {/* 游戏信息 */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">游戏简介</h2>
            <p className="text-gray-600 leading-relaxed">{game.description}</p>
            
            <div className="mt-4 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-semibold text-lg">{game.rating}</span>
                <span className="text-gray-400">评分</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg">🔥</span>
                <span className="font-semibold text-lg">{(game.playCount / 1000).toFixed(1)}k</span>
                <span className="text-gray-400">玩过</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">游戏信息</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500">分类</span>
                <span className="font-medium">{game.category}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">标签</span>
                <span className="text-right">{game.tags.join(', ')}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">平台</span>
                <span>网页/手机</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">费用</span>
                <span className="text-green-600 font-medium">免费</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                分享游戏
              </button>
            </div>
          </div>
        </div>

        {/* 相关推荐 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎮</span>
            <span>类似游戏推荐</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedGames.map((relatedGame) => (
              <GameCard key={relatedGame.id} game={relatedGame} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
