/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'PythonOS', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Open a new world with code!', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Try it now!', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://github.com/happyleibniz/Python-Operating-System', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://cdn.xyehr.cn/images/333884905-b65a99c2-4dd0-4f8f-b283-d7a6b1f13ecc.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'Key Features of PythonOS', // 特性
  STARTER_FEATURE_TEXT_2:
    'Understand the many features of PythonOS.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Free and open source', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'The project source code is fully open and shared on Github, following the MIT protocol.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Various built-in apps', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'PythonOS has many built-in apps, including alarm clock, calendar, calculator, etc.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Clean code', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Our code and UI design strives to be concise, clean, modern and very smooth.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Convenient operation experience', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'Just enter the content in the built-in notes app and it will be saved automatically.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'What is PythonOS?',
  STARTER_ABOUT_TEXT:
    'PythonOS is a simple operating system designed and developed using the Python programming language. All the code is open source, concise and clear, and takes up very little memory.',
  STARTER_ABOUT_BUTTON_TEXT: 'Get started',
  STARTER_ABOUT_BUTTON_URL: 'https://github.com/happyleibniz/Python-Operating-System',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: 'Fast',
  STARTER_ABOUT_TIPS_2: 'Safe',
  STARTER_ABOUT_TIPS_3: 'and Concise',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Customer feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'See what our users say.',
  STARTER_TESTIMONIALS_TEXT_2:
    '',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'This system is so smooth! The interface is also very neat and the code is very clean!🤩',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Anmy Jen',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Web developer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'I really like the UI design of this system!❤️',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Jim tee',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Web developer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'I like this UI design!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Dell Jan',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Windows app developer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Using Python to build an OS? That’s incredible!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ann Lily',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'React.js developer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Nice work!👍👍',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Luma killa',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Android app developer',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TEXT_1: 'Have any questions? Look here!',
  STARTER_FAQ_TEXT_2: 'We have collected common user questions',

  STARTER_FAQ_1_QUESTION: 'What Python version do I need?',
  STARTER_FAQ_1_ANSWER:
    '3.10+',

  STARTER_FAQ_2_QUESTION: 'What modules do I need to install?',
  STARTER_FAQ_2_ANSWER:
    'Please see the <a href="https://github.com/happyleibniz/Python-Operating-System/wiki">Wiki</a>',

  // STARTER_FAQ_3_QUESTION: '',
  // STARTER_FAQ_3_ANSWER:
    // '',

  // STARTER_FAQ_4_QUESTION: '',
  // STARTER_FAQ_4_ANSWER:
   // '',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team member',
  STARTER_TEAM_TEXT_1: 'Our Developer Team',
  STARTER_TEAM_TEXT_2:
    'PythonOS is contributed by many technology enthusiasts and programming enthusiasts. Here, we would like to thank every<a className="underline" href="https://github.com/happyleibniz/Python-Operating-System/graphs/contributors">contributor</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://cdn.xyehr.cn/images/121920485.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Happyleibniz',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.xyehr.cn/images/Image_1712299099839.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Dev_Huang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert & UI designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.xyehr.cn/images/54507071.png',
      STARTER_TEAM_ITEM_NICKNAME: 'shenjack',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Laster news',
  STARTER_BLOG_TEXT_2:
    'Here we will publish some of the latest news about PythonOS, including new trends, new future plans, and new features.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact us',
  STARTER_CONTACT_TEXT: 'Tell us about your problem',
  STARTER_CONTACT_LOCATION_TITLE: 'Our position',
  STARTER_CONTACT_LOCATION_TEXT: 'China',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we help you?',
  STARTER_CONTACT_EMAIL_TEXT: 'support@xyehr.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-4tljys', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Open a new world with code!',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About us',
      LINK_GROUP: [
        { TITLE: 'Home', URL: '/#home' },
        { TITLE: 'Docs', URL: 'https://github.com/happyleibniz/Python-Operating-System/wiki/Home' },
        {
          TITLE: 'Help & Support',
          URL: 'https://support.xyehr.cn'
        },
        {
          TITLE: 'Join us',
          URL: 'https://support.xyehr.cn/jekyll/2024-06-12-join-us.html'
        }
      ]
    },
    {
      TITLE: 'Features',
      LINK_GROUP: [
        {
          TITLE: 'Running Guide',
          URL: 'https://github.com/happyleibniz/Python-Operating-System/wiki/Home'
        },
      ]
    },
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Laster news',

  // STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  // STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notices',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: 'https://github.com/happyleibniz/Python-Operating-System/wiki/Agreement-&-Legal-Notices',
    
  // STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  // STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: 'It looks like we cannot find the page you are looking for.',
  STARTER_404_TEXT: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted.',
  STARTER_404_BACK: 'Back to Home',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.xyehr.cn', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
