import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategoryNav } from '@/components/CategoryNav';
import { GameCard } from '@/components/GameCard';
import { UserSection } from '@/components/UserSection';
import { getHotGames, getNewGames, games, categories } from '@/lib/data';

export const metadata: Metadata = {
  title: '速玩岛 - 免费在线小游戏，无需下载即点即玩',
  description: '速玩岛提供海量免费在线小游戏，无需下载，即点即玩。动作、益智、竞速、射击等多种类型，支持手机电脑双端。',
};

export default function Home() {
  const hotGames = getHotGames(12);
  const newGames = getNewGames(6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Hero 区域 */}
        <section className="mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="p-8 md:p-12 relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🎮 免费小游戏，点击即玩
              </h1>
              <p className="text-lg opacity-90 mb-6 max-w-xl">
                不用下载，不用安装，数千款精选小游戏等你来挑战。支持手机电脑双端，随时随地想玩就玩！
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#hot-games" 
                  className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  立即开始
                </a>
                <a 
                  href="#categories" 
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition"
                >
                  浏览分类
                </a>
              </div>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden md:block">
              <div className="text-[20rem] absolute right-8 top-1/2 transform -translate-y-1/2">🎮</div>
            </div>
          </div>
        </section>

        {/* 用户区域 - 收藏和历史 */}
        <UserSection />

        {/* 分类导航 */}
        <div id="categories">
          <CategoryNav />
        </div>

        {/* 热门游戏 */}
        <section id="hot-games" className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span>🔥</span>
              <span>今日热玩</span>
            </h2>
            <Link href="/hot" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              查看更多 →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hotGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* 新游上架 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span>✨</span>
              <span>新游上架</span>
            </h2>
            <Link href="/new" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              查看更多 →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* 特色板块 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 按场景找游戏</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/tag/office" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition hover:scale-105">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-bold">办公室摸鱼</div>
              <div className="text-sm opacity-80 mt-1">随时暂停，轻松解压</div>
            </Link>
            
            <Link href="/tag/multiplayer" className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:shadow-lg transition hover:scale-105">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-bold">双人同屏</div>
              <div className="text-sm opacity-80 mt-1">和朋友一起玩</div>
            </Link>
            
            <Link href="/tag/kids" className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-xl hover:shadow-lg transition hover:scale-105">
              <div className="text-3xl mb-2">👶</div>
              <div className="font-bold">儿童益智</div>
              <div className="text-sm opacity-80 mt-1">寓教于乐</div>
            </Link>
            
            <Link href="/tag/classic" className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl hover:shadow-lg transition hover:scale-105">
              <div className="text-3xl mb-2">🕹️</div>
              <div className="font-bold">经典怀旧</div>
              <div className="text-sm opacity-80 mt-1">童年的回忆</div>
            </Link>
          </div>
        </section>

        {/* 数据统计 */}
        <section className="mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600">{games.length}</div>
                <div className="text-gray-500 text-sm mt-1">精选游戏</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">{categories.length}</div>
                <div className="text-gray-500 text-sm mt-1">游戏分类</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-gray-500 text-sm mt-1">免费游玩</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">0</div>
                <div className="text-gray-500 text-sm mt-1">无需下载</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
