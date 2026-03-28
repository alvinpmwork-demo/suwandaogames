import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { getHotGames } from '@/lib/data';

export const metadata: Metadata = {
  title: '热门小游戏排行榜 - 大家都在玩 | 速玩岛',
  description: '速玩岛热门小游戏排行榜，发现大家都在玩的精品游戏。动作、益智、竞速等多种类型，全部免费即点即玩。',
};

export default function HotGamesPage() {
  const hotGames = getHotGames(24);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 返回按钮 */}
        <a 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </a>

        {/* 页面标题 */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🔥</div>
            <div>
              <h1 className="text-2xl font-bold">热门游戏排行榜</h1>
              <p className="opacity-90 mt-1">
                发现大家都在玩的精品小游戏，总有一款适合你
              </p>
            </div>
          </div>
        </div>

        {/* 游戏列表 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {hotGames.map((game, index) => (
            <div key={game.id} className="relative">
              {/* 排名徽章 */}
              {index < 3 && (
                <div className={`absolute -top-2 -left-2 z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'
                }`}>
                  {index + 1}
                </div>
              )}
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
