import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import Social from './Social';
import { LanguageContext } from './LanguageContext';

function Blog() {
  const { language } = useContext(LanguageContext); // 获取当前语言

  const blogPosts = [
    {
      id: 1,
      title: {
        EN: 'Ottawa Real Estate Market Analysis 2025',
        Chinese: '2025年渥太华房地产市场分析',
        Japanese: '2025年オタワ不動産市場分析',
      },
      excerpt: {
        EN: 'In January 2025, Ottawa’s real estate market saw some changes. While mortgage rates dropped and some properties received multiple offers, the market’s anticipation of a recovery is growing, but actual data shows cautious sentiment with an unclear overall trend.',
        Chinese: '2025年1月，渥太华的房产市场迎来了一定的变化。虽然房贷利率下调，一些房源出现了抢Offer的情况，市场对回暖的期待也在升温，但从实际数据来看，市场情绪依然谨慎，整体走势仍然不甚明朗。',
        Japanese: '2025年1月、オタワの不動産市場にいくつかの変化が見られました。住宅ローンの金利が下がり、一部の物件で複数のオファーが出る状況が見られ、市場の回復への期待が高まっていますが、実際のデータでは慎重なムードが続き、全体的な傾向は依然として不明確です。',
      },
      // date: {
      //   EN: 'January, 2025',
      //   Chinese: '2025年1月',
      //   Japanese: '2025年1月',
      // },
    },
    {
      id: 2,
      title: {
        EN: 'Market Data for February 2025',
        Chinese: '2025年2月市场数据',
        Japanese: '2025年2月市場データ',
      },
      excerpt: {
        EN: 'According to the latest February 2025 market data released by the Ottawa Real Estate Board (OREB), Ottawa’s real estate market in February showed a decline in transaction volume, an increase in supply, and a slight price increase.',
        Chinese: '根据渥太华房地产委员会（OREB）最新发布的2025年2月市场数据，渥太华房地产市场在2月的表现呈现出成交量下降、供应量增加、价格小幅上涨的趋势。',
        Japanese: 'オタワ不動産委員会（OREB）が発表した最新の2025年2月市場データによると、オタワの不動産市場は2月に取引量の減少、供給量の増加、価格のわずかな上昇傾向を示しました。',
      },
    },
    {
      id: 3,
      title: {
        EN: 'Real Estate Investment Step 3: Flexible Property Management',
        Chinese: '房产投资第三步--灵活管理物业',
        Japanese: '不動産投資の第3ステップ：柔軟な物件管理',
      },
      excerpt: {
        EN: 'For landlords, managing tenants and maintaining rental properties isn’t as simple as “collecting rent monthly.” It involves legal regulations, communication, property maintenance, and more. Today, I’ll share some insights from my experience as a landlord managing rental properties.',
        Chinese: '对于房东来说，管理租客维护出租屋的工作并不是“按月收钱”那么简单，还要涉及到法律法规，交流沟通，物业维护等诸多方面。今天就跟大家分享一些自己作为房东管理出租物业的心得。',
        Japanese: '大家にとって、テナントの管理や賃貸物件のメンテナンスは「毎月家賃を集める」ほど単純ではありません。法律規制、コミュニケーション、物件メンテナンスなど多くの側面が含まれます。今日は、私が大家として賃貸物件を管理してきた経験からいくつかの洞察を共有します。',
      },
    },
    {
      id: 4,
      title: {
        EN: 'Key Points to Know When Viewing a Resale Home in Canada',
        Chinese: '加拿大二手房看房，这些要点你都知道吗？',
        Japanese: 'カナダの中古住宅見学時に知っておくべきポイント',
      },
      excerpt: {
        EN: 'Buying a resale home in Ottawa has its unique advantages: the community is usually well-established, offering a strong sense of community; mature trees, schools, shopping centers, and transportation are all readily available. However, when viewing a home, besides its appearance and renovations, there are many key details to pay attention to.',
        Chinese: '在渥太华购买二手房有其独特的优势：社区通常已经成熟，您可以感受到浓厚的社区氛围；树木已经长成，学校、购物中心和交通设施一应俱全。不过，当您实地看房时，除了房屋的外观和装修，还需关注许多关键细节。',
        Japanese: 'オタワで中古住宅を購入することには独自の利点があります。コミュニティは通常成熟しており、強いコミュニティ意識を感じることができます。木々は成長し、学校、ショッピングセンター、交通施設がすべて揃っています。ただし、住宅を見学する際には、外観やリノベーションだけでなく、注意すべき多くの重要な詳細があります。',
      },
    },
    {
      id: 5,
      title: {
        EN: 'How to Make Your Home More Attractive to Buyers?',
        Chinese: '如何让您的房子更吸引买家？',
        Japanese: 'あなたの家を買い手にとって魅力的にする方法は？',
      },
      excerpt: {
        EN: 'Here are 5 practical tips to enhance your home’s appeal.',
        Chinese: '这里有5个实用小技巧，可以提升您房屋的吸引力。',
        Japanese: 'ここでは、家の魅力を高めるための5つの実際的なヒントを紹介します。',
      },
    },
    {
      id: 6,
      title: {
        EN: 'Real Estate Investment Step 2: Strictly Screening Tenants',
        Chinese: '投资房产第二步--严格筛选租客',
        Japanese: '不動産投資の第2ステップ：テナントの厳格なスクリーニング',
      },
      excerpt: {
        EN: 'Economist Zhang Wuchang said, “Real estate is a warehouse for storing wealth.” Some also say that if a city or country is likened to a company, then real estate is that company’s stock...',
        Chinese: '经济学家张五常说“房地产是财富储存的仓库”。也有人说如果把一个城市或国家当作一家公司，那么房地产就是这家公司的股票。买房就意味着你看好这家公司，投资这家公司，并跟随着公司快速发展，分享公司成长的利润。然而，房地产投资不是每个人都能做，房东更不是每个人都能当。要想长期的持有（hold）物业，当一个省心的房东，就必须严格筛选租客。那么，我们该如何筛选租客呢？',
        Japanese: '経済学者の張五常は、「不動産は富を蓄える倉庫だ」と言いました。また、都市や国を一つの企業に例えるなら、不動産はその企業の株式だと言う人もいます...',
      },
    },
    {
      id: 7,
      title: {
        EN: 'Real Estate Investment Step 1: Choosing the Right Rental Property',
        Chinese: '投资房产第一步--选择合适的出租物业',
        Japanese: '不動産投資の第1ステップ：適切な賃貸物件の選択',
      },
      excerpt: {
        EN: 'The first step in real estate investment is to carefully select the right property (buy). Only by doing this step well can you attract quality tenants, helping you hold the property long-term (hold); at the same time, a good property has significant appreciation potential, allowing you to profit when you eventually sell (sell). So, what should we pay attention to when choosing an investment property?',
        Chinese: '房地产投资的第一步就是要仔细选择合适的房产（buy），只有这一步做好了，才能吸引优质租客，帮助我们长期持有（hold）房产; 同时好的物业未来升值空间大，最终售出时才能获利（sell）。那么，在选择投资房时，我们要注意什么呢？',
        Japanese: '不動産投資の最初のステップは、適切な物件（購入）を慎重に選ぶことです。このステップをうまく行うことで、質の高いテナントを引きつけ、長期保有（ホールド）を助けます。同時に、良い物件は将来的に大きな値上がり余地があり、最終的に売却（セル）時に利益を得ることができます。それでは、投資物件を選ぶ際に何に注意すべきでしょうか？',
      },
    },
    {
      id: 8,
      title: {
        EN: 'Where Are Ottawa’s Top-Ranked Elementary Schools?',
        Chinese: '渥太华排名最好的小学在哪儿？',
        Japanese: 'オタワでトップランクの小学校はどこ？',
      },
      excerpt: {
        EN: 'After school district boundaries are adjusted, what should you pay special attention to when buying a home?',
        Chinese: '学区边界调整后，买房需要特别注意什么？',
        Japanese: '学区の境界が調整された後、住宅購入時に特に注意すべきことは何ですか？',
      },
    },
    {
      id: 9,
      title: {
        EN: '8 Steps to Finding Your Ideal Home in Ottawa',
        Chinese: '在渥太华找到理想住房的8个步骤',
        Japanese: 'オタワで理想の住宅を見つけるための8つのステップ',
      },
      excerpt: {
        EN: 'Congratulations on taking the first step toward buying a home. Owning your own house is one of life’s greatest joys and achievements. This is an exciting process, and this guide will provide you with clear direction and peace of mind on your home-buying journey in Ottawa.',
        Chinese: '恭喜您迈出了购房的第一步。拥有自己的房子是人生最伟大的喜悦和成就之一。这是一个令人兴奋的过程，而这份指南将为您在渥太华的购房旅程提供清晰的方向和安心的保障。',
        Japanese: '住宅購入の第一歩を踏み出したことをお祝いします。自分の家を持つことは、人生最大の喜びと達成の一つです。これはエキサイティングなプロセスであり、このガイドはオタワでの住宅購入の旅に明確な方向性と安心を提供します。',
      },
    },
  ];

  return (
    <div>
      <section className="container-full blog-page">
        <div className="blog-header">
          <h1>{language === 'EN' ? 'Our Blog' : language === 'Chinese' ? '我们的博客' : '私たちのブログ'}</h1>
          <p>
            {language === 'EN'
              ? 'Stay updated with the latest trends, tips, and insights on Ottawa’s real estate market.'
              : language === 'Chinese'
              ? '了解渥太华房地产市场的最新趋势、技巧和见解。'
              : 'オタワの不動産市場の最新トレンド、ヒント、洞察を常に把握してください。'}
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-content">
                <h3 className="blog-title">{post.title[language]}</h3>
                {/* <p className="blog-date">{post.date[language]}</p> */}
                <p className="blog-excerpt">{post.excerpt[language]}</p>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  {language === 'EN' ? 'Read More' : language === 'Chinese' ? '阅读更多' : 'もっと読む'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Social />
    </div>
  );
}

export default Blog;