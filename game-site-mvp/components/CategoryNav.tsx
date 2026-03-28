import Link from 'next/link';
import { categories } from '@/lib/data';

export function CategoryNav() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">游戏分类</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="group"
          >
            <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {cat.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
