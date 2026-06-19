import { useState, useEffect, useCallback } from 'react';
import { Article, fetchNews } from '@/utils/newsApi';

export const useNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const articles = await fetchNews();
      setNews(articles);
    } catch (err) {
      setError('获取新闻失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, 60000);
    return () => clearInterval(interval);
  }, [loadNews]);

  return { news, loading, error, refresh: loadNews };
};
