import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">速</span>
              </div>
              <span className="font-bold text-gray-900">速玩岛</span>
            </div>
            <p className="text-gray-500 text-sm">
              免费在线小游戏平台，无需下载，即点即玩。收录多款精选小游戏，让你随时随地享受游戏乐趣。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">游戏分类</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/category/action" className="hover:text-gray-900 transition">动作游戏</Link></li>
              <li><Link href="/category/puzzle" className="hover:text-gray-900 transition">益智游戏</Link></li>
              <li><Link href="/category/racing" className="hover:text-gray-900 transition">竞速游戏</Link></li>
              <li><Link href="/category/shooting" className="hover:text-gray-900 transition">射击游戏</Link></li>
              <li><Link href="/category/casual" className="hover:text-gray-900 transition">休闲游戏</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/hot" className="hover:text-gray-900 transition">热门游戏</Link></li>
              <li><Link href="/new" className="hover:text-gray-900 transition">新游上架</Link></li>
              <li><Link href="/favorites" className="hover:text-gray-900 transition">我的收藏</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 transition">关于我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">关注我们</h4>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:scale-110 transition">📱</span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition">💬</span>
              <span className="text-2xl cursor-pointer hover:scale-110 transition">📧</span>
            </div>          
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 速玩岛. All rights reserved. | 本站游戏均来自第三方平台，仅供学习交流</p>
        </div>
      </div>
    </footer>
  );
}
