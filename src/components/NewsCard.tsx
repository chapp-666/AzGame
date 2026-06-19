import { Article, formatTimeAgo } from '@/utils/newsApi';

interface NewsCardProps {
  article: Article;
  index: number;
}

export const NewsCard = ({ article, index }: NewsCardProps) => {
  return (
    <article
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative overflow-hidden">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-40 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-2">
            <span className="bg-blue-500/90 text-white text-xs px-2 py-1 rounded-full">
              {article.source.name}
            </span>
          </div>
        </div>
        <div className="md:w-2/3 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 text-xs">{formatTimeAgo(article.publishedAt)}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
    </article>
  );
};
