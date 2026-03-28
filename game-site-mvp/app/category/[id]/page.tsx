import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { games, categories } from '@/lib/data';
import { CategoryContent } from './CategoryContent';

interface Props {
  params: { id: string };
}

// 静态生成所有分类页面
export function generateStaticParams() {
  return categories.map((cat) => ({
    id: cat.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find(c => c.id === params.id || c.name === params.id);
  if (!category) {
    return { title: '分类未找到' };
  }
  
  return {
    title: `${category.name}小游戏大全 - 免费在线玩 | 速玩岛`,
    description: `${category.name}小游戏大全，收录多款精选${category.name}游戏。全部免费，无需下载，支持手机即点即玩。`,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find(c => c.id === params.id || c.name === params.id);
  
  if (!category) {
    notFound();
  }

  const categoryGames = games.filter(g => g.category === category.name);

  return <CategoryContent category={category} initialGames={categoryGames} />;
}
