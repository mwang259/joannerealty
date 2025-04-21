import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import './sellingresources.css';
import Social from './Social';

const buyingResourcesContent = {
  title: {
    EN: '8 Steps to Finding Your Ideal Home in Ottawa',
    Chinese: '8步轻松找到你的梦想之家',
    Japanese: 'オタワで理想のマイホームを見つける8ステップ',
  },
  content: {
    EN: `
      <h2>Welcome to Your Home Buying Journey</h2>
      <p>Buying a home is a big and exciting step. With the right support, it can be a smooth and enjoyable process. This guide is here to help you feel confident and clear every step of the way as you search for a home in Ottawa.</p>
      <hr />
      <h2>Step 1: Decide Where and What to Buy</h2>
      <p>Think about what kind of home fits your lifestyle. Detached, townhome, or condo? Do you prefer a bungalow, two-storey, or something modern? Consider how many bedrooms and bathrooms are needed, your ideal kitchen and living room layout, and any additional rooms like an office or main-floor laundry. Listing out your “must-haves” and “nice-to-haves” helps focus the search.</p>
      <hr />
      <h2>Step 2: Get Pre-Approved for a Mortgage</h2>
      <p>Mortgage pre-approval shows how much you can afford and strengthens your offer. The process includes meeting a mortgage specialist, submitting an application, and providing financial documents. Once verified, a pre-approval letter is issued. This helps you save time, secure a better rate, and shop with confidence.</p>
      <hr />
      <h2>Step 3: Choose a Great Real Estate Agent</h2>
      <p>A buyer’s agent works solely in your best interest. The role includes protecting your privacy, offering honest guidance, negotiating favorable terms, and identifying potential risks with any property. An experienced agent can also provide insight into property values and let you know when it’s best to walk away.</p>
      <hr />
      <h2>Step 4: Become an Informed Buyer</h2>
      <p>Once your preferences are noted, a tailored search will be set up so you receive daily updates on new and price-reduced listings. Viewing different homes and discussing their pros and cons afterward can help clarify your priorities. Staying informed and engaged ensures smart decision-making throughout the process.</p>
      <hr />
      <h2>Step 5: Make a Smart Offer</h2>
      <p>When the right home is found, a Comparative Market Analysis (CMA) is done to determine fair value based on similar listings. The offer will reflect your preferred terms, pricing, and timeline, with clauses to protect your interests. The seller may accept, reject, or counter—each scenario will be handled with care to ensure the best outcome for you.</p>
      <hr />
      <h2>Step 6: Conditions, Inspection, and Waivers</h2>
      <p>Once an offer is accepted, it’s time to meet any conditions—such as financing or a home inspection. Your mortgage broker or lender will need updated documents to finalize your mortgage approval. Meanwhile, a certified home inspector should check all major systems and provide a detailed report. Completing these steps on time ensures the purchase moves forward smoothly.</p>
      <hr />
      <h2>Step 7: Get Ready to Move</h2>
      <p>There’s usually 30–90 days between the accepted offer and moving day. During this time, prepare necessary documents for your lawyer, arrange final payments, and organize your move. Don’t forget home insurance and utility transfers—these should be in place before closing.</p>
      <hr />
      <h2>Step 8: Move In and Enjoy Your New Home!</h2>
      <p>Congratulations! The journey ends with moving in and beginning a new chapter. Expect to pay final closing costs such as the down payment balance, legal fees, land transfer tax, title insurance, and any adjustments for prepaid services. Once the keys are in hand, it’s time to relax and enjoy your new space.</p>
    `,
    Chinese: `
      <h2>欢迎开启购房之旅</h2>
      <p>买房是人生中一项重要且令人兴奋的决定。有了合适的支持，这个过程可以变得顺利且愉快。本指南将帮助您在渥太华寻找新家的过程中，每一步都充满信心与清晰感。</p>
      <hr />
      <h2>步骤一：决定购房地点与类型</h2>
      <p>思考哪种房屋适合您的生活方式：独立屋、联排别墅还是公寓？您偏好平房、两层住宅，或是现代风格的设计？还需要考虑卧室与浴室的数量、厨房与客厅的布局，以及是否需要书房或主层洗衣房等额外空间。列出“必须有”和“希望有”的条件，有助于更专注地寻找合适的房子。</p>
      <hr />
      <h2>步骤二：申请按揭预批</h2>
      <p>按揭预批可以帮助您了解自己的预算范围，并在出价时更具竞争力。流程包括与贷款专家会面、提交申请和财务资料，经审核后会收到预批信。这不仅节省时间，还能帮助您获得更好的贷款利率，并安心看房</p>
      <hr />
      <h2>步骤三：选择优秀的房地产经纪人</h2>
      <p>买家经纪人始终以您的利益为首要任务。他们会保护您的隐私，提供诚实建议，协助谈判，识别房产可能存在的风险。有经验的经纪人还能对房产价值提供专业见解，并在必要时建议您放弃不合适的交易。</p>
      <hr />
      <h2>步骤四：成为一个有准备的买家</h2>
      <p>一旦明确偏好，我们将为您设置专属房源搜索，确保每天获取最新或降价房源信息。实地看房并事后分析利弊，有助于您理清真正的优先事项。保持信息透明和积极参与，是做出明智决策的关键。</p>
      <hr />
      <h2>步骤五：制定合理报价</h2>
      <p>找到心仪房源时，我们会提供市场对比分析（CMA），根据类似房源确定公允价格。出价文件会包括您希望的条款、价格与时间表，并加入保障您权益的条款。卖家可能接受、拒绝或还价，每一种情况我们都会细致应对，争取最佳结果。</p>
      <hr />
      <h2>步骤六：完成条件、验屋与确认书</h2>
      <p>报价被接受后，您需要满足包括融资或房屋检查在内的各项条件。您的贷款顾问将要求更新财务文件，以最终批准按揭。同时，请专业验屋师检查房屋各项主要结构，并出具详细报告。按时完成这些步骤，能确保交易顺利进行。</p>
      <hr />
      <h2>步骤七：准备搬家</h2>
      <p>从报价被接受到搬入日，通常有30至90天的准备时间。这期间，您需要准备交给律师的文件、安排尾款支付、规划搬家日程。同时别忘了购买房屋保险、安排水电气账单的更名转接，这些都需要在成交前完成。</p>
      <hr />
      <h2>步骤八：入住并享受您的新家！</h2>
      <p>恭喜您！旅程的终点，就是搬入新家、开启新生活。成交当天，您需要支付尾款、法律费用、土地转让税、产权保险以及预付服务的费用调整等。一旦拿到钥匙，就尽情享受属于您的全新空间吧！</p>
    `,
    Japanese: `
      <h2>マイホーム購入の旅へようこそ</h2>
      <p>家を買うというのは、大きくてワクワクする一歩です。適切なサポートがあれば、そのプロセスはスムーズで楽しいものになります。このガイドでは、オタワで理想の家を探すすべてのステップで、自信を持ち、安心して進めるようお手伝いします。</p>
      <hr />
      <h2>ステップ1：どこで何を買うか決める</h2>
      <p>自分のライフスタイルに合った住まいを考えてみましょう。一戸建て、タウンハウス、コンドミニアム？平屋、2階建て、それともモダンなデザイン？寝室やバスルームの数、キッチンやリビングのレイアウト、書斎や1階ランドリールームの有無なども検討しましょう。「絶対に必要な条件」と「あれば嬉しい条件」をリストアップすると、物件探しがはるかに効率的になります。</p>
      <hr />
      <h2>ステップ2：住宅ローンの事前承認を受ける</h2>
      <p>住宅ローンの事前承認は、購入可能な予算を明確にし、購入オファーに信頼性を与えます。申請には、モーゲージスペシャリストとの面談、書類の提出、財務状況の確認が必要です。承認されると、事前承認レターが発行されます。これにより、安心して物件探しが進められ、より良い金利も期待できます。</p>
      <hr />
      <h2>ステップ3：信頼できる不動産エージェントを選ぶ</h2>
      <p>買主の代理人は、常にあなたの最善の利益を考えて行動します。プライバシーの保護、正直なアドバイス、交渉のサポート、物件のリスク発見などが主な役割です。経験豊富なエージェントは、物件の価値や市場の動向に関する有益な情報も提供してくれます。</p>
      <hr />
      <h2>ステップ4：情報収集と優先順位の整理</h2>
      <p>希望条件に基づいて、最新の新着物件や価格変更の通知を毎日受け取れる検索システムを設定します。複数の物件を見学し、それぞれのメリットとデメリットを話し合うことで、理想の家に必要な要素が明確になります。情報に基づいた判断が、賢い選択に繋がります。</p>
      <hr />
      <h2>ステップ5：賢いオファーを出す</h2>
      <p>理想の物件が見つかったら、類似物件を基にした市場価格分析（CMA）を行い、妥当な価格を確認します。希望の条件、価格、引き渡し時期などを含む購入オファーを作成し、あなたの利益を守る条項を盛り込みます。売主はオファーを受け入れるか、拒否するか、カウンターオファーを出すかのいずれかを選びます。それぞれの状況に応じて、最善の対応を行います。</p>
      <hr />
      <h2>ステップ6：条件の達成、ホームインスペクション、条件解除</h2>
      <p>オファーが受け入れられたら、融資承認やホームインスペクションなどの条件をクリアする必要があります。住宅ローンの最終承認には、最新の財務書類の提出が必要です。ホームインスペクターによる詳細なチェックを通して、建物の状態を確認しましょう。これらを期限内に完了することで、スムーズに取引が進みます。</p>
      <hr />
      <h2>ステップ7：引っ越しの準備</h2>
      <p>オファーが承認されてから引越しまでには、通常30～90日の猶予があります。この期間中に、弁護士への書類提出、最終的な支払い、引っ越しの手配などを行います。また、火災保険の契約や公共料金の移行手続きも忘れずに行っておきましょう。</p>
      <hr />
      <h2>ステップ8：新居での生活スタート！</h2>
      <p>おめでとうございます！この旅のゴールは、新しい家での生活の始まりです。引き渡し当日は、頭金残額、法的手数料、不動産譲渡税、タイトル保険、そして先払いサービスに関する調整費用などを支払う必要があります。鍵を受け取ったら、さあ、あなたの新しい暮らしを楽しみましょう！</p>
    `,
  },
};

const BuyingResources = () => {
  const { language } = useContext(LanguageContext);

  // 确保语言值有效
  const validLanguage = ['EN', 'Chinese', 'Japanese'].includes(language) ? language : 'EN';

  const title = buyingResourcesContent.title[validLanguage];
  const content = buyingResourcesContent.content[validLanguage];

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

export default BuyingResources;
