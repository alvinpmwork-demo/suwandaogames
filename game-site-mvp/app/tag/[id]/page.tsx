import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { games } from '@/lib/data';

interface Props {
  params: { id: string };
}

// 标签定义
const tags: Record<string, { name: string; icon: string; desc: string; filter: (game: typeof games[0]) => boolean }> = {
  office: {
    name: '办公室摸鱼',
    icon: '💼',
    desc: '随时暂停，轻松解压，适合工作之余放松的小游戏',
    filter: (game) => ['休闲', '益智', '棋牌'].includes(game.category) || game.tags.some(t => ['休闲', '放松', '解压'].includes(t)),
  },
  multiplayer: {
    name: '双人同屏',
    icon: '👥',
    desc: '和朋友一起玩的双人对战游戏',
    filter: (game) => game.tags.some(t => ['双人', '对战', '多人'].includes(t)),
  },
  kids: {
    name: '儿童益智',
    icon: '👶',
    desc: '寓教于乐，适合小朋友的益智游戏',
    filter: (game) => ['益智'].includes(game.category) || game.tags.some(t => ['教育', '儿童', '简单'].includes(t)),
  },
  classic: {
    name: '经典怀旧',
    icon: '🕹️',
    desc: '童年的回忆，经典游戏重现',
    filter: (game) => game.tags.some(t => ['经典', '怀旧', '复古'].includes(t)),
  },
};

// 静态生成所有标签页面
export function generateStaticParams() {
  return Object.keys(tags).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = tags[params.id];
  if (!tag) {
    return { title: '标签未找到' };
  }
  
  return {
    title: `${tag.name}小游戏 - ${tag.desc} | 速玩岛`,
    description: `${tag.name}小游戏精选，${tag.desc}。全部免费，无需下载，支持手机即点即玩。`,
  };
}

export default function TagPage({ params }: Props) {
  const tag = tags[params.id];
  
  if (!tag) {
    notFound();
  }

  const tagGames = games.filter(tag.filter);

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
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{tag.icon}</div>
            <div>
              <h1 className="text-2xl font-bold">{tag.name}</h1>
              <p className="opacity-90 mt-1">{tag.desc}</p>
            </div>
          </div>
        </div>

        {/* 游戏列表 */}
        {tagGames.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tagGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无游戏</h3>
            <p className="text-gray-500">该标签下暂时没有游戏，去看看其他标签吧~</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
