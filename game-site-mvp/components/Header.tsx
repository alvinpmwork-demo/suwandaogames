import Link from 'next/link';
import { SearchBox } from '@/components/SearchBox';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">速</span>
            </div>
            <span className="text-xl font-bold text-gray-900">速玩岛</span>
          </Link>

          {/* 搜索框 */}
          <div className="flex-1 max-w-md mx-8">
            <SearchBox />
          </div>

          {/* 右侧按钮 */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/favorites"
              className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
              登录
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
