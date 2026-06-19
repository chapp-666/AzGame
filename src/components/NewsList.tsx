import { useNews } from '@/hooks/useNews';
import { NewsCard } from './NewsCard';
import { RefreshCw } from 'lucide-react';

export const NewsList = () => {
  const { news, loading, error, refresh } = useNews();

  if (error) {
    return (
      <div className="bg-gray-800/50 rounded-xl p-8 text-center">
        <p className="text-red-400">{error}</p>
        <button
          onClick={refresh}
          className="mt-4 flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <RefreshCw size={18} />
          重试
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-gray-800/50 rounded-xl p-4 animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex gap-4">
              <div className="w-32 h-24 bg-gray-700 rounded-lg" />
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-700 rounded w-1/2 mb-2" />
                <div className="h-3 bg-gray-700 rounded w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-500 rounded-full" />
          世界新闻
        </h2>
        <button
          onClick={refresh}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <RefreshCw size={18} className="animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-sm">自动刷新中</span>
        </button>
      </div>
      <div className="space-y-4">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} index={index} />
        ))}
      </div>
    </div>
  );
};
