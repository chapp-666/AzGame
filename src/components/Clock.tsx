import { useClock } from '@/hooks/useClock';

export const Clock = () => {
  const time = useClock();

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <div className="bg-gray-800 rounded-xl px-6 py-4 shadow-lg border border-gray-700">
          <span className="text-6xl font-bold text-white font-mono tracking-wider">
            {time.hours}
          </span>
        </div>
        <span className="text-6xl font-bold text-white animate-pulse">:</span>
        <div className="bg-gray-800 rounded-xl px-6 py-4 shadow-lg border border-gray-700">
          <span className="text-6xl font-bold text-white font-mono tracking-wider">
            {time.minutes}
          </span>
        </div>
        <span className="text-6xl font-bold text-white animate-pulse">:</span>
        <div className="bg-gray-800 rounded-xl px-6 py-4 shadow-lg border border-gray-700">
          <span className="text-6xl font-bold text-white font-mono tracking-wider">
            {time.seconds}
          </span>
        </div>
        <div className="bg-gray-900 rounded-lg px-3 py-4 border border-gray-700">
          <span className="text-2xl font-bold text-gray-400 font-mono">
            {time.milliseconds}
          </span>
        </div>
      </div>
    </div>
  );
};
