import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { getNewGames } from '@/lib/data';

export const metadata: Metadata = {
  title: '新游上架 - 最新小游戏推荐 | 速玩岛',
  description: '速玩岛最新上架小游戏推荐，第一时间体验新鲜有趣的游戏。每日更新，全部免费即点即玩。',
};

export default function NewGamesPage() {
  const newGames = getNewGames(12);

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
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">✨</div>
            <div>
              <h1 className="text-2xl font-bold">新游上架</h1>
              <p className="opacity-90 mt-1">
                最新入库的精品小游戏，抢先体验新鲜玩法
              </p>
            </div>
          </div>
        </div>

        {/* 游戏列表 */}
        {newGames.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无新游戏</h3>
            <p className="text-gray-500">敬请期待，我们正在筹备更多精彩游戏...</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
