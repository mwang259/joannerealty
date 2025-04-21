import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import './sellingresources.css';
import Social from './Social';

const sellingResourcesContent = {
  title: {
    EN: '10 Steps to Selling a Home in Ottawa',
    Chinese: '在渥太华卖房的10个步骤',
    Japanese: 'オタワで家を売るための10のステップ',
  },
  content: {
    EN: `
      <h2>Step 1: Understand Your Selling Goals</h2>
      <p>Before listing your home, it’s important to clarify your goals. Why are you selling? What’s your ideal timeline? And what do you hope to achieve once the property is sold? Writing down your answers helps set realistic expectations and creates a clear direction. A real estate professional can then help you refine your plan and work efficiently toward your ideal outcome.</p>
      <h2>Step 2: Price Your Home Strategically</h2>
      <p>Setting the right price from the beginning is key to attracting buyers and achieving a smooth sale. A competitive, well-researched price can create demand and reduce time on market. Your real estate agent will prepare a Comparative Market Analysis (CMA) and may recommend a professional appraisal to help determine fair market value.</p>
      <h2>Step 3: Prepare Your Property to Shine</h2>
      <p>Presentation matters. Buyers are drawn to homes that are clean, well-maintained, and welcoming. This may include upgrades, paint touch-ups, minor repairs, and decluttering. Consider home staging to enhance the property’s appeal. Staging helps highlight the space and allows buyers to envision themselves living there—often leading to quicker, higher offers.</p>
      <h2>Step 4: Create a Strong Marketing Plan</h2>
      <p>To reach the right buyers, your home needs targeted exposure. A well-rounded marketing plan typically includes professional photography, online listings, social media promotions, open houses, and communication with local buyer agents. The goal is to showcase your home to qualified buyers quickly and effectively.</p>
      <h2>Step 5: Review Offers Carefully</h2>
      <p>Once offers start coming in, it’s important to evaluate each one thoroughly. Look beyond the price—consider deposit amount, financing terms, included conditions, and closing timelines. Your agent will guide you through the details and ensure you're only considering serious, qualified offers.</p>
      <h2>Step 6: Negotiate the Best Terms</h2>
      <p>Most offers require some level of negotiation. Common points include price, conditions, closing date, or what’s included in the sale. Your agent acts as your advocate, helping you navigate each discussion with the goal of securing a win-win deal that meets your needs and protects your interests.</p>
      <h2>Step 7: Finalize the Deal</h2>
      <p>Once you’ve accepted an offer, it’s time to work through the conditions. This may involve a home inspection, financing verification, or property appraisal. Stay in touch with your agent to ensure that deadlines are met and that everything is progressing smoothly toward closing.</p>
      <h2>Step 8: Prepare for Closing Day</h2>
      <p>As closing day approaches, you’ll need to make sure the home is ready for the new owner. This includes completing any agreed-upon repairs, organizing documents, and making arrangements for your move. Your agent can help confirm all required paperwork is in place and coordinate final preparations.</p>
      <h2>Step 9: Closing</h2>
      <p>On closing day, ownership officially transfers to the buyer. Your lawyer and agent will oversee the process, ensuring all documents are signed and funds are transferred. If everything has been handled properly in advance, the closing should be smooth and straightforward.</p>
      <h2>Step 10: Move Out and Wrap Up</h2>
      <p>Even after closing, there are still a few final steps. Make sure utilities are canceled or transferred, and leave the home in the condition agreed upon. A checklist can help you stay organized. Once everything is complete, you can move forward knowing the sale is done—and done right!</p>
    `,
    Chinese: `
      <h2>步骤1：明确卖房目标</h2>
      <p>在挂牌之前，先搞清楚你的卖房动机。为什么要卖？理想的时间线是什么？卖完后你想达成什么目标？将这些写下来，可以帮助你建立清晰的方向。经验丰富的房地产经纪人可以帮助你理清思路，并制定高效的销售计划。</p>
      <h2>步骤2：制定合理的定价策略</h2>
      <p>合适的定价能吸引买家，促进快速成交。一个具有竞争力的价格能激发市场兴趣，避免房子长期滞销。你的经纪人会提供市场比较分析（CMA），必要时也会建议专业评估，确保定价符合市场。</p>
      <h2>步骤3：让房子脱颖而出</h2>
      <p>房子的第一印象非常关键。保持清洁整齐、进行必要的维修和升级、适当布置空间，能显著提升吸引力。可以考虑请专业的房屋布置师（Stager）来提高整体观感，让买家更容易产生购买意愿。</p>
      <h2>步骤4：制定有效的市场推广计划</h2>
      <p>要吸引合适的买家，就需要一个全面的营销策略。包括专业摄影、在线平台发布、社交媒体宣传、举办Open House、与买家经纪联系等多种方式。目标是快速、有效地展示房子的优势。</p>
      <h2>步骤5：认真评估每一份出价</h2>
      <p>收到出价后，不要只看价格，还要考虑押金金额、付款方式、条件条款、交接时间等。你的经纪人会帮助你分析每一份出价的细节，确保你只考虑真正有诚意且具备购房能力的买家。</p>
      <h2>步骤6：进行有效的谈判</h2>
      <p>大多数交易都涉及谈判，例如价格、交割时间、维修要求、包含的家电等。你的经纪人会作为你的代表，协助你与买家协商达成一个双赢的协议，最大程度保障你的利益。</p>
      <h2>步骤7：完成交易条件</h2>
      <p>一旦接受出价，就需要满足相关条件，例如验屋、贷款确认、评估报告等。保持与经纪人的沟通，确保在规定时间内完成所有步骤，顺利推进交易。</p>
      <h2>步骤8：为交接日做准备</h2>
      <p>临近交房，你需要完成承诺的维修工作，准备相关文件，并安排搬家。你的经纪人会协助你检查是否一切就绪，避免出现最后时刻的遗漏。</p>
      <h2>步骤9：顺利完成交接</h2>
      <p>交房当天，产权正式转移。你的律师与经纪人将协助完成文件签署和资金交接。如果前期准备充分，这一步通常很顺利。</p>
      <h2>步骤10：搬出并完成后续工作</h2>
      <p>完成交房后，还需做好最后的善后工作，如取消或转移水电气账户、清洁房屋、归还钥匙等。做好一份待办清单，确保所有事情井井有条。祝贺你，成功卖出房屋！</p>
    `,
    Japanese: `
      <h2>ステップ1：売却の目的を明確にする</h2>
      <p>売却前に、なぜ家を売りたいのか、理想的なスケジュールは何か、売却後に何を達成したいのかを明確にしましょう。これらを紙に書き出すことで、現実的でスムーズな売却計画を立てやすくなります。不動産エージェントがあなたの計画をさらに整理し、効率的に進める手助けをします。</p>
      <h2>ステップ2：適切な価格を設定する</h2>
      <p>適正価格を設定することで、多くの買い手を惹きつけ、早期の売却が期待できます。不動産エージェントが市場分析（CMA）を行い、必要に応じてプロの査定士による評価も受けることで、公正な市場価格を見極められます。</p>
      <h2>ステップ3：物件を魅力的に整える</h2>
      <p>第一印象が重要です。清掃、修繕、内装のアップデート、家具の配置などにより、購入希望者の印象が大きく変わります。ホームステージングを行えば、住まいの魅力を最大限に引き出し、購入意欲を高めることができます。</p>
      <h2>ステップ4：マーケティング戦略の立案</h2>
      <p>適切な買い手に情報を届けるためには、計画的なプロモーションが必要です。プロによる写真撮影、オンライン掲載、SNSの活用、オープンハウスの開催など、多様な方法で物件の魅力を広く伝えます。</p>
      <h2>ステップ5：オファーの確認と精査</h2>
      <p>オファーが届いたら、価格だけでなく、頭金、ローン条件、引き渡し時期などの詳細にも注意が必要です。経験豊富なエージェントが、条件を丁寧に確認し、有力な買い手かどうかを判断するサポートをします。</p>
      <h2>ステップ6：条件交渉</h2>
      <p>価格や修理内容、引き渡し時期など、オファーには交渉がつきものです。エージェントがあなたの代わりに交渉を進め、公平で納得のいく契約ができるように導きます。</p>
      <h2>ステップ7：条件の履行</h2>
      <p>オファーを受け入れたら、ローン審査、ホームインスペクション、評価など、契約条件を満たす必要があります。エージェントと連携しながら、期限内にすべての手続きを完了させましょう。</p>
      <h2>ステップ8：引き渡しの準備</h2>
      <p>引き渡し前には、修理の完了、書類の準備、引っ越し手配などを行います。エージェントが最終チェックを行い、問題が発生しないようサポートします。</p>
      <h2>ステップ9：クロージング（決済）</h2>
      <p>クロージングの日に所有権が正式に移転されます。弁護士とエージェントが手続きを監督し、書類や資金が正確に処理されるようにします。すべてが事前に準備されていれば、このプロセスはスムーズです。</p>
      <h2>ステップ10：引っ越しとアフターフォロー</h2>
      <p>決済が完了した後も、電気・水道の解約または名義変更、家の掃除、鍵の引き渡しなどが必要です。チェックリストを使って整理し、スムーズに新たなスタートを切りましょう。おめでとうございます！</p>
    `,
  },
};

const SellingResources = () => {
  const { language } = useContext(LanguageContext);

  // 确保语言值有效
  const validLanguage = ['EN', 'Chinese', 'Japanese'].includes(language) ? language : 'EN';

  const title = sellingResourcesContent.title[validLanguage];
  const content = sellingResourcesContent.content[validLanguage];

  return (
    <div>
      <section className="container-full selling-detail-page">
        <div className="selling-detail-container">
          <h1>{title}</h1>
          <div className="selling-detail-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
      <Social />
    </div>
  );
};

export default SellingResources;
