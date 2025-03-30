// src/components/BlogDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './blogdetail.css';

function BlogDetail() {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Real Estate in 2025',
    //   image: 'https://cdn.realtor.ca/listing/TS638766878115800000/reb76/highres/1/x11999381_1.jpg',
      date: 'March 15, 2025',
      content: `
        <p>2025年1月，渥太华的房产市场迎来了一定的变化。虽然房贷利率下调，一些房源出现了抢Offer的情况，市场对回暖的期待也在升温，但从实际数据来看，市场情绪依然谨慎，整体走势仍然不甚明朗。</p>
        <h1>成交量：买家仍然谨慎，市场缺乏强劲动力</h1>
        <p>根据渥太华房地产委员会（OREB）的数据，1月份MLS®系统共成交617套房屋，同比下降4.2%。这一数字比五年平均水平低13%，比十年平均水平低9.6%。可以看出，尽管利率有所下降，买家并未大规模回归市场。</p>
        <h1>库存增加：部分市场转向买家市场S</h1>
        <p>从挂牌数据来看，1月份新增挂牌量为1,359套，同比增长3.0%，活跃房源更是达到了3,312套，比去年同期增长57.3%。库存的快速上升意味着部分房源供应已经出现过剩，市场明显向买方倾斜。根据最新数据，目前渥太华房市的库存月数（即按照当前销售速度消化所有库存所需的时间）为5.4个月，远高于去年的3.3个月。这表明买家有更多的选择，卖家需要更具竞争力的定价策略来吸引购房者。</p>
        <h1>房价坚挺，市场仍具韧性</h1>
        <p>尽管市场需求疲软，渥太华的房价依然保持增长。数据显示，1月份MLS®基准价格（更能准确反映市场趋势）为**$649,900**，同比上涨5.2%。平均销售价格也是稳步上涨，独立住宅平均价格： $670,258，同比增长5.8%。公寓平均价格： $441,704，同比上涨5.4%。即使渥太华房源供应量增加，房价仍然持续上涨，这主要归功于渥太华房产持有者的稳定收入和较强的持有能力。即使市场调整，房主也不会急于抛售。</p>
        <h1>政策与利率：市场的未来仍不明朗</h1>
        <p>目前来看，尽管加拿大央行降息，但利率水平仍未达到支撑房产市场强劲复苏的程度。投资者仍然在观望，尚未大规模进场。此外，加拿大和美国的经济政策变化、省级和联邦选举等因素，增加了市场的不确定性。除非是刚需买家，许多潜在买家依然选择继续观望。</p>
        <p>渥太华的房地产市场向来以稳定著称，即使在供需失衡的情况下，房价仍能保持相对坚挺。那么，在未来几个月里，市场是否会延续这一趋势？房价能否继续稳住，甚至逆势上涨？</p>
        `,
    },
    {
      id: 2,
      title: 'Top 5 Tips for First-Time Home Buyers',
      image: 'https://via.placeholder.com/800x400?text=Blog+2',
      date: 'March 10, 2025',
      content: `
        <p>Buying your first home can be an overwhelming experience, but with the right preparation, it can also be incredibly rewarding. Here are five tips to help you navigate the process:</p>
        <ol>
          <li><strong>Get Pre-Approved for a Mortgage:</strong> Knowing your budget upfront will help you narrow down your search and make you a more competitive buyer.</li>
          <li><strong>Work with a Real Estate Agent:</strong> A professional agent can guide you through the process, negotiate on your behalf, and help you avoid common pitfalls.</li>
          <li><strong>Research the Neighborhood:</strong> Look into schools, amenities, and future development plans to ensure the area meets your long-term needs.</li>
          <li><strong>Don’t Skip the Home Inspection:</strong> A thorough inspection can uncover potential issues that might cost you down the line.</li>
          <li><strong>Be Prepared for Closing Costs:</strong> Budget for additional fees like legal costs, taxes, and insurance, which can add up quickly.</li>
        </ol>
      `,
    },
    // 其他博客文章（为了简洁，这里只展示 2 篇，实际需要 10 篇）
    {
      id: 3,
      title: 'Why Ottawa is the Best Place to Invest in Real Estate',
      image: 'https://via.placeholder.com/800x400?text=Blog+3',
      date: 'March 5, 2025',
      content: '<p>Ottawa’s real estate market is booming, thanks to its stable economy, growing tech sector, and high quality of life...</p>',
    },
    {
      id: 4,
      title: 'How to Stage Your Home for a Quick Sale',
      image: 'https://via.placeholder.com/800x400?text=Blog+4',
      date: 'February 28, 2025',
      content: `
        <p>在渥太华购买二手房有其独特的优势：社区通常已经成熟，您可以感受到浓厚的社区氛围；树木已经长成，学校、购物中心和交通设施一应俱全。不过，当您实地看房时，除了房屋的外观和装修，还需关注许多关键细节。以下是一些在看房时应注意的事项，帮助您做出明智的购房决策。</p>
        <h1>1. 事前准备</h1>
        <p>明确需求：确定您对房屋的基本要求，如卧室数量、浴室数量、通勤距离、学区和附近设施等。</p>
        <p>仔细查看房源信息：在看房前，仔细阅读房源的在线信息，包括照片、平面图和社区统计数据，留意描述中的细节和可能的警示信息。</p>
        <p>了解预算：在看房前确保财务状况良好，获得贷款预批准，以明确您的预算范围，并在找到合适的房产时增强您的出价优势。</p>
        <h1>2. 位置的重要性</h1>
        <p>社区适配性：在不同时间段访问社区，观察噪音、交通和附近的施工项目等情况。</p>
        <p>生活便利性：评估房屋与基本设施的距离，如超市、医院、公共交通和学校等。</p>
        <p>未来发展规划：研究该地区的未来发展计划或规划变更，这些可能会显著影响房产价值和社区氛围。</p>
        <h1>3. 外观和结构检查</h1>
        <p>地基检查：寻找地基上的可见裂缝，小的裂缝通常正常，但较大的裂缝可能预示结构问题。</p>
        <p>屋顶和排水系统：检查屋顶是否有缺失或卷曲的瓦片、苔藓或老化迹象，同时确保排水沟和落水管清洁且功能正常。</p>
        <p>景观和排水：确保地面向远离房屋的方向倾斜，以防止水在地基附近积聚，避免潜在的渗水问题。</p>
        <p>窗户和门：检查窗户和门的状况，注意是否有裂缝、气流或窗格间的冷凝水，这些可能表明隔热或密封问题。</p>
        <h1>4. 室内布局</h1>
        <p>房间大小和配置：评估房间是否足够宽敞，布局是否符合您的生活方式。</p>
        <p>自然光照：注意房屋的自然采光情况，这会影响房屋的氛围和未来的能源费用。</p>
        <p>储物空间：检查储物空间是否充足，包括衣柜、橱柜和其他储物区域，以满足您的需求。</p>
        <h1>5. 细节检查</h1>
        <p>墙壁和天花板：寻找污渍、裂缝或剥落的油漆，这些可能表明漏水或结构问题。</p>
        <p>地板状况：检查地板是否有磨损、起拱或其他损坏迹象。</p>
        <p>气味：注意房屋内是否有霉味或其他异味，这可能表明通风不良或存在霉菌问题。</p>
        <h1>6. 检查管道和电气系统</h1>
        <p>水压测试：打开所有水龙头，检查水压是否足够，并观察水的颜色和气味。</p>
        <p>排水速度：检查水槽、浴缸和淋浴的排水速度，确保没有堵塞。</p>
        <p>配电板和插座：查看配电板，确保没有过时的布线，测试插座和开关的功能。</p>
        <h1>7. 检查地下室和阁楼</h1>
        <p>地下室：如有水渍、霉菌或霉味，可能表明有渗水问题。</p>
        <p>阁楼：检查隔热层是否足够，寻找害虫活动的迹象，并确保没有水渍或其他损坏（验房师会查看）。</p>
        <h1>8. 提出问题</h1>
        <p>在看房时，不要犹豫，积极向卖家或您的房地产经纪人提问。掌握更多信息，有助于您做出明智的购房决定。</p>
        <p>卖家为什么要搬家？ 了解出售原因可能会透露房屋的历史或潜在问题。</p>
        <p>房子在市场上挂牌多久了？ 如果房屋已经挂牌很长时间，可能存在定价过高或隐藏问题的情况。</p>
        <p>最近是否有维修或翻新？ 如果卖家进行了翻新，询问装修质量以及是否由持牌承包商完成。临时修补可能掩盖更大的问题。</p>
        <p>房屋出售包含哪些内容？ 确认哪些家电、固定装置或设施包含在交易中。有时，在看房时看到的物品可能并不包含在出售范围内。</p>
        <h1>9. 携带检查清单</h1>
        <p>在看房时，携带一份详细的检查清单，确保您不会遗漏任何重要细节。</p>
        <h1>10. 考虑二次看房</h1>
        <p>如果您对房屋感兴趣，安排第二次看房，可能会发现第一次未注意到的细节。</p>
        <h1>11. 相信直觉</h1>
        <p>如果您对房屋有任何不安或疑虑，务必认真对待，进一步调查或咨询专业人士。/p>
        <h1>12. 聘请专业验房师</h1>
        <p>即使您对房屋状况有信心，聘请专业验房师进行全面检查也是明智之举，他们可以发现潜在问题并提供维护建议。</p>
        <p>购买二手房是一项重要的投资，尤其是老房子，既有独特的魅力，也可能隐藏着一些挑战。通过仔细观察、专业验房和与经验丰富的经纪人合作，您可以最大限度地降低风险，找到理想的家。</p>
        <p>如果您正在考虑在渥太华购买二手房，欢迎联系我们！我们将为您提供专业的建议和贴心的服务，助您顺利实现安家梦想！</p>
        `,
    },
    {
      id: 5,
      title: 'The Impact of Technology on Real Estate',
      image: 'https://via.placeholder.com/800x400?text=Blog+5',
      date: 'February 20, 2025',
      content: '<p>Technology is transforming the real estate industry in unprecedented ways. Virtual tours, AI analytics, and blockchain transactions are just the beginning...</p>',
    },
    {
      id: 6,
      title: 'Sustainable Living: Eco-Friendly Homes',
      image: 'https://via.placeholder.com/800x400?text=Blog+6',
      date: 'February 15, 2025',
      content: '<p>Eco-friendly homes are not only good for the environment but also for your wallet. Learn how to incorporate sustainable features into your home...</p>',
    },
    {
      id: 7,
      title: 'The Benefits of Working with a Real Estate Agent',
      image: 'https://via.placeholder.com/800x400?text=Blog+7',
      date: 'February 10, 2025',
      content: '<p>A real estate agent can save you time, money, and stress by guiding you through the buying or selling process...</p>',
    },
    {
      id: 8,
      title: 'Renovation Ideas to Increase Your Home’s Value',
      image: 'https://via.placeholder.com/800x400?text=Blog+8',
      date: 'February 5, 2025',
      content: '<p>Simple renovations like updating the kitchen or adding a fresh coat of paint can significantly increase your home’s market value...</p>',
    },
    {
      id: 9,
      title: 'Understanding the Mortgage Process',
      image: 'https://via.placeholder.com/800x400?text=Blog+9',
      date: 'January 30, 2025',
      content: '<p>Securing a mortgage can be daunting, but understanding the process can make it much easier. Here’s a step-by-step guide...</p>',
    },
    {
      id: 10,
      title: 'The Rise of Remote Work and Its Impact on Housing',
      image: 'https://via.placeholder.com/800x400?text=Blog+10',
      date: 'January 25, 2025',
      content: '<p>Remote work has changed the way people choose where to live, with many opting for suburban or rural areas over city centers...</p>',
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <section className="container-full blog-detail-page">
        <div className="blog-detail-container">
          <h1>Blog Not Found</h1>
          <Link to="/blog" className="back-btn">Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-full blog-detail-page">
      <div className="blog-detail-container">
        <div className="blog-detail-header">
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
        </div>
        <div className="blog-detail-image">
          {/* <img src={post.image} alt={post.title} /> */}
        </div>
        <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="back-btn">Back to Blog</Link>
      </div>
    </section>
  );
}

export default BlogDetail;