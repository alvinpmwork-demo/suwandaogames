import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于我们 | 速玩岛',
  description: '了解速玩岛 - 免费在线小游戏平台',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">速</span>
            </div>
            <span className="font-bold text-gray-900">速玩岛</span>
          </Link>
        </div>
      </header>
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">关于速玩岛</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-4">
              速玩岛是一个免费的在线小游戏平台，我们致力于为用户提供最便捷的游戏体验。
              无需下载、无需安装、无需注册，打开网页即可畅玩数千款精选小游戏。
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">我们的特色</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>🎮 完全免费：所有游戏均可免费游玩</li>
              <li>⚡ 即点即玩：无需下载安装，打开即玩</li>
              <li>📱 全平台支持：手机、平板、电脑都能玩</li>
              <li>🎯 精选内容：只收录优质小游戏，拒绝垃圾游戏</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">联系我们</h2>
            <p className="text-gray-600">
              如果您有任何问题或建议，欢迎通过以下方式联系我们：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>邮箱：contact@suwandao.com</li>
              <li>微信：suwandao</li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t">
            <Link 
              href="/" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
