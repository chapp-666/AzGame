import { Clock } from '@/components/Clock';
import { DateDisplay } from '@/components/DateDisplay';
import { NewsList } from '@/components/NewsList';
import { Globe, Radio } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-white">
              实时资讯中心
            </h1>
          </div>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Radio className="text-blue-400" size={18} />
            世界新闻 · 实时更新
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">实时时钟</span>
              </div>
              <Clock />
              <DateDisplay />
            </div>
          </div>

          <div className="lg:col-span-2">
            <NewsList />
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>数据每60秒自动刷新</p>
        </footer>
      </div>
    </div>
  );
}
