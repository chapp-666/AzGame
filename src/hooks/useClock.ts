import { useState, useEffect, useCallback } from 'react';

interface TimeData {
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  date: string;
  day: string;
  month: string;
  year: string;
  timezone: string;
}

const DAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const useClock = () => {
  const [time, setTime] = useState<TimeData>(getCurrentTime());

  function getCurrentTime(): TimeData {
    const now = new Date();
    return {
      hours: formatNumber(now.getHours()),
      minutes: formatNumber(now.getMinutes()),
      seconds: formatNumber(now.getSeconds()),
      milliseconds: formatNumber(Math.floor(now.getMilliseconds() / 10)),
      date: formatNumber(now.getDate()),
      day: DAYS[now.getDay()],
      month: MONTHS[now.getMonth()],
      year: now.getFullYear().toString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }

  const updateTime = useCallback(() => {
    setTime(getCurrentTime());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 10);
    return () => clearInterval(timer);
  }, [updateTime]);

  return time;
};
