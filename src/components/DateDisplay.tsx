import { useClock } from '@/hooks/useClock';

export const DateDisplay = () => {
  const time = useClock();

  return (
    <div className="text-center mt-6">
      <div className="inline-flex items-center gap-4 bg-gray-800/50 rounded-full px-8 py-3 backdrop-blur-sm">
        <span className="text-gray-400 text-lg">时区</span>
        <span className="text-white text-lg font-medium">{time.timezone}</span>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-2xl">
        <span className="text-gray-300">{time.year}</span>
        <span className="text-blue-400">年</span>
        <span className="text-gray-300 mx-2">{time.month}</span>
        <span className="text-gray-300">{time.date}</span>
        <span className="text-blue-400">日</span>
      </div>
      <div className="mt-2">
        <span className="text-xl text-gray-400">今天是</span>
        <span className="text-2xl text-blue-400 font-bold ml-2">{time.day}</span>
      </div>
    </div>
  );
};
