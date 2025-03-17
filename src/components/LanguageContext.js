// src/components/LanguageContext.js
import React, { createContext, useState } from 'react';

// 语言内容映射表
const languageContent = {
  EN: {
    // Header.js
    home: 'Home',
    listings: 'Listings',
    selling: 'Selling',
    buying: 'Buying',
    resources: 'Resources',
    blog: 'Blog',
    contact: 'Contact Us',
    Map_search: 'Map Search',
    Featured_listings: 'Featured Listings',
    Search_listings: 'Search Listings',
    selling_resources: 'Selling Resources',
    free_evaluation: 'Free Evaluation',
    buying_resources: 'Buying Resources',
    Mortgage_calculation: 'Mortgage calculation',
    Loan_calculation: 'Loan calculation',
    Transfer_calculation: 'Transfer calculation',
    
    // Hero.js
    hero_title: 'Helping You Buy & Sell in Ottawa',
    hero_sell_button: 'Sell with Joanne',
    hero_buy_button: 'Buy with Joanne',
    
    // About.js
    about_title: 'MEET Joanne Wang',
    about_p1: `With a PhD in Intercultural Studies and a background as a researcher in Kobe University, Japan, 
      Joanne brings exceptional data analysis skills and a profound understanding of communication and problem-solving to her real estate practice. 
      Her analytical approach and attention to detail empower her clients with clear, well-informed advice tailored to their unique needs.`,
    about_p2: `Fluent in Mandarin, Japanese, and English, Joanne specializes in guiding clients through the complexities of buying, selling, or renting homes. 
      Her commitment to honesty, integrity, and efficiency has earned her a reputation for reliability and excellence. 
      She strives to provide a seamless and stress-free experience, helping her clients feel confident at every step of their real estate journey.`,
    about_p3: `Joanne enjoys playing tennis, reading, and traveling when she's not working, continuously seeking personal and professional growth opportunities.`,
    about_button: 'GET CONNECTED',
    
    // Service.js
    services_title: 'MY SERVICES',
    services_selling_title: 'GET HELP WITH Selling',
    services_selling_p: 'Our combination of skill, experience, and technology ensures that we can sell your home for the highest possible price!',
    services_selling_btn1: 'WHY CHOOSE ME',
    services_selling_btn2: 'SELLING PROCESS',
    services_selling_btn3: 'FREE HOME EVALUATION',
    services_buying_title: 'GET HELP WITH Buying',
    services_buying_p: 'We provide expert guidance to help you find your dream home with ease and confidence.',
    services_buying_btn1: 'WHY CHOOSE ME',
    services_buying_btn2: 'BUYING PROCESS',
    services_buying_btn3: 'CONTACT US',
    
    // Listings (Social.js 中房源部分)
    listings_title: 'Living in Ottawa',
    listings_view_more: 'VIEW MORE',
    
    // Social.js (社交部分)
    social_title: 'Broker',
    social_follow_btn: 'Follow Me',
    social_contact_direct: 'Direct: (613) 986-7089',
    social_contact_office: 'Office: (613) 592-6400',
    social_contact_email: 'info@joannerealty.com',
    social_contact_address: '484 Hazeldean Rd, Kanata, ON, K2L 1V4',
    social_qr_wechat: 'WeChat',
    social_qr_line: 'Line',
    social_qr_facebook: 'Facebook',
    social_chat_btn: 'Chat live with Lei now!',
    
    // Footer.js
    footer_copyright: '© mengyuan wang & haopeng wang',
  },
  Chinese: {
    // Header.js
    home: '首页',
    listings: '房源',
    selling: '出售',
    buying: '购买',
    resources: '资源',
    blog: '博客',
    contact: '联系我们',
    Map_search: '地图搜索',
    Featured_listings: '精品房源',
    Search_listings: '搜索房源',
    selling_resources: '出售资源',
    free_evaluation: '免费评估',
    buying_resources: '购买资源',
    Mortgage_calculation: '按揭计算',
    Loan_calculation: '贷款计算',
    Transfer_calculation: '转让计算',
    
    // Hero.js
    hero_title: '帮助您在渥太华买卖房屋',
    hero_sell_button: '与Joanne一起出售',
    hero_buy_button: '与Joanne一起购买',
    
    // About.js
    about_title: '认识Joanne Wang',
    about_p1: `Joanne Wang 拥有日本神户大学学术博士学位，并曾在日本从事研究工作。移居渥太华后，她曾担任日语教师，随后因对房地产投资的浓厚兴趣，毅然投身房地产经纪行业。作为研究员，她具备卓越的数据分析能力；而10年+的房东经验则锤炼了她与来自不同文化背景客户的沟通和解决问题的能力。`,
    about_p2: `Joanne精通中、英、日三语。她以缜密的分析思路和细致入微的观察力，帮助客户深入解读市场动态，制定精准的定价方案，并提供切实可行的投资规划。她始终秉持诚实、正直和高效的原则，致力于帮每一位客户实现房地产梦想。`,
    about_p3: `工作之余，Joanne热爱网球、阅读和旅行，不断追求个人与职业的成长机会。`,
    about_button: '联系我们',
    
    // Service.js
    services_title: '我的服务',
    services_selling_title: '获取出售帮助',
    services_selling_p: '我们的技能、经验和技术相结合，确保以最高价格出售您的房屋！',
    services_selling_btn1: '为什么选择我',
    services_selling_btn2: '出售流程',
    services_selling_btn3: '免费房屋评估',
    services_buying_title: '获取购买帮助',
    services_buying_p: '我们提供专业指导，帮助您轻松自信地找到梦想之家。',
    services_buying_btn1: '为什么选择我',
    services_buying_btn2: '购买流程',
    services_buying_btn3: '联系我们',
    
    // Listings (Social.js 中房源部分)
    listings_title: '住在渥太华',
    listings_view_more: '查看更多',
    
    // Social.js (社交部分)
    social_title: '经纪人',
    social_follow_btn: '关注我',
    social_contact_direct: '直线: (613) 986-7089',
    social_contact_office: '办公室: (613) 592-6400',
    social_contact_email: 'info@joannerealty.com',
    social_contact_address: '484 Hazeldean路, Kanata, ON, K2L 1V4',
    social_qr_wechat: '微信',
    social_qr_line: 'Line',
    social_qr_facebook: 'Facebook',
    social_chat_btn: '现在与Lei实时聊天！',
    
    // Footer.js
    footer_copyright: '© 王梦圆 & 王浩鹏',
  },
  Japanese: {
    // Header.js
    home: 'ホーム',
    listings: '物件',
    selling: '売却',
    buying: '購入',
    resources: 'リソース',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    Map_search: 'Mapサーチです',
    Featured_listings: '注目の物件',
    Search_listings: '物件検索',
    selling_resources: '売却リソース',
    free_evaluation: '無料評価',
    buying_resources: '購入リソース',
    Mortgage_calculation: '住宅ローン計算',
    Loan_calculation: 'ローン計算',
    Transfer_calculation: '譲渡計算',
    
    // Hero.js
    hero_title: 'オタワでの購入と売却をお手伝いします',
    hero_sell_button: 'Joanneと一緒に売却',
    hero_buy_button: 'Joanneと一緒に購入',
    
    // About.js
    about_title: 'Joanne Wangのご紹介',
    about_p1: `私は2013年に神戸大学で博士号（学術）を取得後、カナダのオタワに移住しました。オタワでは神戸大学異文化研究所の海外研究員として研究を続ける傍ら、オタワ日本語学校で日本語を教えていました。その後、不動産投資に興味を持ち、リアルター（REALTOR）としてのキャリアをスタートしました。
    日本で研究者として培ったデータ分析力、コミュニケーション能力、問題解決のスキルを活かし、クライアント一人ひとりに最適なアドバイスを提供しています。分析的なアプローチと細部へのこだわりを強みに、不動産の購入、売却、賃貸のプロセスをスムーズに進めるサポートを専門としています。誠実さ、公正さ、効率性を大切にし、その信頼性と質の高いサービスで高く評価されています。`,
    about_p2: `英語・中国語・日本語に堪能で、多様なバックグラウンドを持つクライアントと円滑にコミュニケーションを取ることができます。不動産取引のあらゆる段階でクライアントが自信を持てるよう、ストレスの少ない円滑な取引を目指しています。`,
    about_p3: `仕事以外では、テニス、読書、旅行を楽しみながら、常に自己成長と専門スキルの向上に努めています。`,
    about_button: 'お問い合わせ',
    
    // Service.js
    services_title: '私のサービス',
    services_selling_title: '売却に関するサポート',
    services_selling_p: '私たちのスキル、経験、技術の組み合わせにより、ご自宅を最高価格で売却できます！',
    services_selling_btn1: 'なぜ私を選ぶのか',
    services_selling_btn2: '売却プロセス',
    services_selling_btn3: '無料住宅評価',
    services_buying_title: '購入に関するサポート',
    services_buying_p: '専門的なガイダンスを提供し、簡単に自信を持って夢の家を見つけるお手伝いをします。',
    services_buying_btn1: 'なぜ私を選ぶのか',
    services_buying_btn2: '購入プロセス',
    services_buying_btn3: 'お問い合わせ',
    
    // Listings (Social.js 中房源部分)
    listings_title: 'オタワでの生活',
    listings_view_more: 'もっと見る',
    
    // Social.js (社交部分)
    social_title: 'ブローカー',
    social_follow_btn: 'フォローしてください',
    social_contact_direct: '直通: (613) 986-7089',
    social_contact_office: 'オフィス: (613) 592-6400',
    social_contact_email: 'info@joannerealty.com',
    social_contact_address: '484 Hazeldean Rd, Kanata, ON, K2L 1V4',
    social_qr_wechat: 'WeChat',
    social_qr_line: 'Line',
    social_qr_facebook: 'Facebook',
    social_chat_btn: '今すぐLeiとライブチャット！',
    
    // Footer.js
    footer_copyright: '© ワン・メンユアン & ワン・ハオペン',
  },
};

// 创建 LanguageContext
export const LanguageContext = createContext();

// 创建 LanguageProvider 组件，用于提供语言状态和内容
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN'); // 默认语言为英语

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: languageContent[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};