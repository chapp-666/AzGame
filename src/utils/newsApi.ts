export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const MOCK_NEWS: Article[] = [
  {
    source: { id: 'cnn', name: 'CNN' },
    author: 'CNN Staff',
    title: '全球科技峰会在旧金山开幕，AI成焦点话题',
    description: '来自世界各地的科技领袖齐聚旧金山，讨论人工智能的未来发展方向和伦理挑战。',
    url: 'https://www.cnn.com/technology',
    urlToImage: 'https://images.unsplash.com/photo-1677442136019-c998a3398b52?w=800&h=600&fit=crop',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    content: '会议首日，多位CEO发表演讲...',
  },
  {
    source: { id: 'bbc', name: 'BBC News' },
    author: 'BBC Reporter',
    title: '气候变化峰会达成新协议，各国承诺减排目标',
    description: '经过多轮谈判，各国代表达成共识，承诺在未来十年内大幅减少碳排放。',
    url: 'https://www.bbc.com/news',
    urlToImage: 'https://images.unsplash.com/photo-1509395536404-9017f0656dcb?w=800&h=600&fit=crop',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    content: '协议包括多项关键条款...',
  },
  {
    source: { id: 'reuters', name: 'Reuters' },
    author: 'Reuters',
    title: '全球股市震荡，投资者关注通胀数据',
    description: '受通胀担忧影响，全球主要股市出现大幅波动，分析师建议保持谨慎。',
    url: 'https://www.reuters.com',
    urlToImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    content: '美联储即将公布最新决策...',
  },
  {
    source: { id: 'nytimes', name: 'The New York Times' },
    author: 'NYT Staff',
    title: '医疗突破：新型癌症治疗方法临床试验成功',
    description: '一项新的免疫疗法在晚期癌症患者身上取得了显著疗效，为治疗带来新希望。',
    url: 'https://www.nytimes.com',
    urlToImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    content: '研究团队表示...',
  },
  {
    source: { id: 'techcrunch', name: 'TechCrunch' },
    author: 'TechCrunch Reporter',
    title: 'SpaceX成功发射新一代卫星，Starlink网络扩展',
    description: 'SpaceX成功将一批新卫星送入轨道，进一步扩大其全球互联网覆盖范围。',
    url: 'https://techcrunch.com',
    urlToImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    content: '此次发射是Starlink计划的重要里程碑...',
  },
];

export const fetchNews = async (): Promise<Article[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return MOCK_NEWS;
  } catch (error) {
    return MOCK_NEWS;
  }
};

export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return '刚刚';
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  return `${days}天前`;
};
