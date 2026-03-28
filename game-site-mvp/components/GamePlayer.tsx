'use client';

import { useState } from 'react';
import { addToHistory } from '@/lib/storage';

interface GamePlayerProps {
  slug: string;
  thumbnail: string;
}

// 真实的 HTML5 游戏 iframe URL（使用可靠的公共游戏源）
const gameUrls: Record<string, string> = {
  '2048': 'https://play2048.co/',
  'tetris': 'https://tetris.com/play-tetris',
  'snake': 'https://snake.googlemaps.com/',
  'cut-the-rope': 'https://www.crazygames.com/game/cut-the-rope',
  'flappy-bird': 'https://flappybird.io/',
  'bubble-shooter': 'https://www.bubbleshooter.net/',
  'sudoku': 'https://sudoku.com/',
  'solitaire': 'https://www.solitr.com/',
  'minesweeper': 'https://minesweeper.online/',
  'pacman': 'https://www.google.com/logos/2010/pacman10-i.html',
  // 新增游戏接入
  'gomoku': 'https://gomokuonline.com/',
  'racing-car': 'https://www.crazygames.com/game/racing-in-city',
  'breakout': 'https://www.crazygames.com/game/atari-breakout',
  'tank-battle': 'https://www.crazygames.com/game/tank-battle-arena',
  'match-3': 'https://www.crazygames.com/game/jewel-academy',
  'archery-master': 'https://www.crazygames.com/game/archery-world-tour',
  'jigsaw-puzzle': 'https://www.jigsawplanet.com/',
  'parkour-runner': 'https://www.crazygames.com/game/vector-rush',
  'soccer-star': 'https://www.crazygames.com/game/penalty-kick-online',
  'billiard-master': 'https://www.crazygames.com/game/8-ball-billiards-classic',
  'ping-pong': 'https://www.crazygames.com/game/table-tennis-world-tour',
  'sokoban': 'https://www.crazygames.com/game/sokoban',
  'gold-miner': 'https://www.crazygames.com/game/gold-miner',
  'pinball': 'https://www.crazygames.com/game/space-pinball',
  // 第二批新增游戏
  'subway-surfers': 'https://www.crazygames.com/game/subway-surfers-houston',
  'jump-jump': 'https://www.crazygames.com/game/jump-jump',
  'fruit-ninja': 'https://www.crazygames.com/game/fruit-ninja',
  'angry-birds': 'https://www.crazygames.com/game/angry-birds-classic',
  'spider-solitaire': 'https://www.solitr.com/spider',
  'chess': 'https://www.crazygames.com/game/chess-master',
  'chinese-chess': 'https://www.crazygames.com/game/chinese-chess',
  'link-link': 'https://www.crazygames.com/game/onet-connect-classic',
  'zuma': 'https://www.crazygames.com/game/zuma-deluxe',
  'bowling': 'https://www.crazygames.com/game/bowling-3d',
  'basketball': 'https://www.crazygames.com/game/basketball-stars',
};

export function GamePlayer({ slug, thumbnail }: GamePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const gameUrl = gameUrls[slug];
  
  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
    addToHistory(slug);
    
    // 模拟加载完成
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  // 如果没有嵌入链接，显示提示
  if (!gameUrl) {
    return (
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="aspect-video flex items-center justify-center relative">
          <div className="text-center text-white">
            <div className="text-8xl mb-4">{thumbnail}</div>
            <h3 className="text-xl font-semibold mb-2">游戏加载中</h3>
            <p className="text-gray-400">该游戏正在接入中，请稍后再试</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!isPlaying) {
    return (
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="aspect-video flex items-center justify-center relative">
          {/* 背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
          
          {/* 游戏封面 */}
          <div className="relative z-10 text-center">
            <div className="text-8xl mb-6 animate-pulse">{thumbnail}</div>
            <button
              onClick={handlePlay}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>▶</span>
              <span>开始游戏</span>
            </button>
            <p className="text-gray-400 mt-4 text-sm">点击按钮开始游戏，无需下载</p>
          </div>        
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="aspect-video relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white">游戏加载中...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={gameUrl}
          className="w-full h-full border-0"
          allow="fullscreen"
          onLoad={() => setIsLoading(false)}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}
