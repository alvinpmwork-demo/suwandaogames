import Link from 'next/link';
import { Game } from '@/lib/data';
import { FavoriteButton } from './FavoriteButton';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative">
      <Link href={`/game/${game.slug}`} className="block">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          {/* 游戏封面 */}
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
              {game.thumbnail}
            </span>
            
            {/* 热度标签 */}
            {game.playCount > 80000 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                HOT
              </div>
            )}
            
            {/* NEW标签 */}
            {game.isNew && (
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                NEW
              </div>
            )}
            
            {/* 悬停遮罩 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* 游戏信息 */}
          <div className="p-3">
            <h3 className="font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
              {game.title}
            </h3>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-gray-500">{game.category}</span>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-600">{game.rating}</span>
              </div>
            </div>            
            <div className="mt-2 text-xs text-gray-400">
              🔥 {(game.playCount / 1000).toFixed(1)}k 玩过
            </div>
          </div>
        </div>
      </Link>
      
      {/* 收藏按钮 - 绝对定位 */}
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton slug={game.slug} size="sm" />
      </div>
    </div>
  );
}
