import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🎮</div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">页面未找到</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在。可能游戏已被移除，或者链接有误。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            返回首页
          </Link>
          
          <Link
            href="/search"
            className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            搜索游戏
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-400 text-sm">试试以下热门游戏：</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/game/2048" className="text-4xl hover:scale-110 transition">🔢</Link>
            <Link href="/game/tetris" className="text-4xl hover:scale-110 transition">🎲</Link>
            <Link href="/game/snake" className="text-4xl hover:scale-110 transition">🐍</Link>
            <Link href="/game/flappy-bird" className="text-4xl hover:scale-110 transition">🐦</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
