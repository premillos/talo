const LOCALE_STORAGE_KEY = 'client_locale'
const SUPPORTED_LOCALES = ['zh-CN', 'en', 'ja']

const COMMON_MESSAGES = {
  'zh-CN': {
    home: '首页',
    learn: '练习',
    faq: '常见问题',
    community: '社区守则',
    navLabel: '站点导航',
    footerNav: '页脚导航',
    mobileNav: '移动端导航',
    switchLanguage: '切换界面语言',
    backHome: '返回 Talo 首页',
    tagline: '把语言学习，变成一场游戏',
    learnGroup: '学习',
    startPractice: '开始练习',
    wrongBook: '错题本',
    helpGroup: '帮助',
    languageGroup: '界面语言',
    contactDeveloper: '联系开发者',
    contactNote: '添加时请备注 Talo',
    contactQrAlt: '联系开发者微信二维码',
    openQrPreview: '放大联系开发者二维码',
    closeQrPreview: '关闭二维码大图',
    copyright: '© {year} Talo。保留所有权利。',
  },
  en: {
    home: 'Home',
    learn: 'Practice',
    faq: 'FAQ',
    community: 'Community Guidelines',
    navLabel: 'Site navigation',
    footerNav: 'Footer navigation',
    mobileNav: 'Mobile navigation',
    switchLanguage: 'Switch interface language',
    backHome: 'Back to Talo home',
    tagline: 'Turn language learning into a game',
    learnGroup: 'Learn',
    startPractice: 'Start practicing',
    wrongBook: 'Review list',
    helpGroup: 'Help',
    languageGroup: 'Interface language',
    contactDeveloper: 'Contact the developer',
    contactNote: 'Please mention “Talo” when adding',
    contactQrAlt: 'Developer WeChat contact QR code',
    openQrPreview: 'Enlarge the developer contact QR code',
    closeQrPreview: 'Close QR code preview',
    copyright: '© {year} Talo. All rights reserved.',
  },
  ja: {
    home: 'ホーム',
    learn: '練習',
    faq: 'よくある質問',
    community: 'コミュニティガイドライン',
    navLabel: 'サイトナビゲーション',
    footerNav: 'フッターナビゲーション',
    mobileNav: 'モバイルナビゲーション',
    switchLanguage: '表示言語を切り替える',
    backHome: 'Talo ホームに戻る',
    tagline: '言語学習をゲームに変えよう',
    learnGroup: '学習',
    startPractice: '練習を始める',
    wrongBook: '復習リスト',
    helpGroup: 'ヘルプ',
    languageGroup: '表示言語',
    contactDeveloper: '開発者に連絡',
    contactNote: '追加時に「Talo」とご記載ください',
    contactQrAlt: '開発者の WeChat 連絡用 QR コード',
    openQrPreview: '開発者の連絡用 QR コードを拡大',
    closeQrPreview: 'QR コードの拡大表示を閉じる',
    copyright: '© {year} Talo。すべての権利を留保します。',
  },
}

const FAQ_MESSAGES = {
  'zh-CN': {
    title: '常见问题 · Talo 多语言打字练习',
    description: '了解 Talo 是否免费、如何开始练习、支持的语言与进度保存方式。',
    introTitle: '常见问题',
    intro:
      '关于 Talo 的使用方式、支持语言、练习模式与进度保存，你都可以在这里找到答案。',
    sectionLabel: '常见问题列表',
    questions: {
      'what-is-talo': [
        'Talo 是什么？',
        'Talo 是面向日语与英语的打字练习网站。通过逐字输入和即时校验，帮助学习者强化词汇、假名与拼写的肌肉记忆，并配有错题本、连击与心形等游戏化反馈。',
      ],
      'vs-others': [
        'Talo 和其他语言学习产品有什么不同？',
        '多数语言学习 App 侧重听说读和选择题，Talo 专注逐字输入练习，通过即时校验强化拼写、假名与词汇记忆。',
      ],
      'need-register': [
        '使用 Talo 需要注册吗？',
        '不需要。打开网站即可开始练习。学习进度、错题本与统计数据会加密保存在你的浏览器本机。',
      ],
      languages: ['Talo 支持哪些语言？', '当前支持日语和英语，后续会持续增加更多语言课程。'],
      'wrong-book': [
        '错题本怎么用？',
        '练习中答错的词条会自动收录到错题本。你可以随时重新练习薄弱内容，也可以手动移除已掌握的词条。',
      ],
      'progress-storage': [
        '学习进度保存在哪里？',
        '进度保存在本机浏览器中，并经过加密存储。清除浏览器数据会导致进度丢失。',
      ],
      free: ['Talo 是免费的吗？', '是的。Talo 当前完全免费，无需信用卡，即可开始日语与英语打字练习。'],
    },
    ctaTitle: '准备好开始练习了吗？',
    ctaDescription: '把语言学习，变成一场游戏。免费练日语与英语打字。',
    ctaAction: '免费开始学习',
  },
  en: {
    title: 'FAQ · Talo Multilingual Typing Practice',
    description: 'Learn how Talo works, which languages it supports, and how your progress is saved.',
    introTitle: 'Frequently Asked Questions',
    intro: 'Find answers about using Talo, supported languages, practice modes, and progress storage.',
    sectionLabel: 'Frequently asked questions',
    questions: {
      'what-is-talo': [
        'What is Talo?',
        'Talo is a Japanese and English typing practice website. Character-by-character input and instant feedback build muscle memory for vocabulary, kana, and spelling, with a review list, combos, and hearts.',
      ],
      'vs-others': [
        'How is Talo different from other language-learning products?',
        'Most language-learning apps focus on listening, speaking, reading, and multiple-choice exercises. Talo focuses on character-by-character input with instant feedback for spelling, kana, and vocabulary.',
      ],
      'need-register': [
        'Do I need to register to use Talo?',
        'No. You can start practicing immediately. Progress, review items, and statistics are encrypted and stored locally in your browser.',
      ],
      languages: ['Which languages does Talo support?', 'Talo currently supports Japanese and English, with more courses planned.'],
      'wrong-book': [
        'How does the review list work?',
        'Items answered incorrectly are added automatically. You can practice them again and remove an item manually after you have mastered it.',
      ],
      'progress-storage': [
        'Where is my learning progress stored?',
        'Progress is encrypted and stored in your local browser. Clearing browser data will also remove this progress.',
      ],
      free: ['Is Talo free?', 'Yes. Talo is currently completely free, with no credit card required.'],
    },
    ctaTitle: 'Ready to practice?',
    ctaDescription: 'Turn language learning into a game with free Japanese and English typing practice.',
    ctaAction: 'Start learning for free',
  },
  ja: {
    title: 'よくある質問 · Talo 多言語タイピング練習',
    description: 'Talo の使い方、対応言語、練習モード、進捗の保存方法をご案内します。',
    introTitle: 'よくある質問',
    intro: 'Talo の使い方、対応言語、練習モード、進捗の保存について確認できます。',
    sectionLabel: 'よくある質問の一覧',
    questions: {
      'what-is-talo': [
        'Talo とは？',
        'Talo は日本語と英語のタイピング練習サイトです。一文字ずつの入力とリアルタイム判定で、語彙・かな・スペルの定着を助け、復習リスト、コンボ、ハートなどのゲーム要素も備えています。',
      ],
      'vs-others': [
        'ほかの語学学習サービスとの違いは？',
        '多くの語学アプリが聞く・話す・読む・選択問題を中心とするのに対し、Talo は文字入力に特化しています。見ながらの入力と記憶からの入力を通じて、スペルやかな、語彙を自然に入力できる力を鍛えます。',
      ],
      'need-register': [
        'Talo の利用に登録は必要ですか？',
        '必要ありません。すぐに練習を始められます。進捗、復習項目、統計は暗号化され、ブラウザ内に保存されます。',
      ],
      languages: ['対応している言語は？', '現在は日本語と英語に対応しており、今後さらにコースを追加する予定です。'],
      'wrong-book': [
        '復習リストはどう使いますか？',
        '間違えた項目は自動的に復習リストへ追加されます。繰り返し練習し、覚えた項目は手動で削除できます。',
      ],
      'progress-storage': [
        '学習進捗はどこに保存されますか？',
        '進捗は暗号化され、ブラウザ内に保存されます。ブラウザデータを消去すると進捗も失われます。',
      ],
      free: ['Talo は無料ですか？', 'はい。現在 Talo は完全無料で、クレジットカードも必要ありません。'],
    },
    ctaTitle: '練習を始めませんか？',
    ctaDescription: '言語学習をゲームに変えて、日本語と英語のタイピングを無料で練習しましょう。',
    ctaAction: '無料で学習を始める',
  },
}

const COMMUNITY_MESSAGES = {
  'zh-CN': {
    title: '社区守则 · Talo',
    description: 'Talo 社区守则：尊重彼此、诚实练习、保护隐私，共同维护友善的语言学习环境。',
    introTitle: '社区守则',
    slogan: '把语言学习，变成一场游戏——也把它变成对每个人都安全、友善的体验。',
    intro:
      'Talo 欢迎来自不同背景的学习者。无论你是刚开始接触日语假名，还是在巩固英语拼写，这些原则适用于使用 Talo 产品、参与反馈交流，以及未来可能开放的社区功能。',
    updated: '最后更新：2026-08-13',
    sectionLabel: '社区守则正文',
    rules: {
      respect: {
        title: '1. 彼此尊重，保持友善',
        paragraphs: [
          '学习语言需要勇气。请尊重每位学习者的背景、口音、水平与节奏。我们不允许人身攻击、骚扰、歧视性言论，或故意让他人难堪的内容。',
          '可以不同意，但请就事论事，不要针对个人。',
        ],
      },
      help: {
        title: '2. 鼓励互助，拒绝“打击式帮忙”',
        paragraphs: ['看到他人出错时，可以温和地指出或分享经验；但如果语气会让对方更不敢开口，那就先别发。'],
        items: [
          '优先分享“可以怎么练”，而不是“你怎么连这都不会”。',
          '新手问题没有“太低级”，每个人都是从零开始的。',
          '连击、心形、连续天数是激励，不是嘲笑他人的工具。',
        ],
      },
      diversity: {
        title: '3. 语言有多种正确答案',
        paragraphs: [
          '同一种语言在不同地区、场景下可能有不同拼写、表达或输入习惯。讨论时保持开放，不要把某一种说法当作唯一标准去贬低其他人。',
          'Talo 课程会逐步完善，但学习者的真实语言环境同样值得尊重。',
        ],
      },
      honesty: {
        title: '4. 诚实练习，珍惜自己的进步',
        paragraphs: ['Talo 的游戏化设计是为了让你更愿意坚持，而不是为了“数据好看”。'],
        items: [
          '请勿通过脚本、篡改本地存储等方式伪造练习记录或连击。',
          '请勿批量抓取、复制课程内容用于未授权传播或商业用途。',
          '发现题目错误或争议答案，欢迎通过正当渠道反馈，而不是传播误导信息。',
        ],
      },
      privacy: {
        title: '5. 保护隐私，谨慎分享',
        paragraphs: ['你的安全很重要。请不要公开发布可能危及隐私的信息，也不要诱导他人分享此类内容。'],
        items: [
          '包括但不限于手机号、住址、邮箱、社交账号、学校或工作单位、精确行程等。',
          '分享学习截图时，请检查是否包含他人或敏感信息。',
        ],
      },
      feedback: {
        title: '6. 反馈可以尖锐，但要有建设性',
        paragraphs: ['我们欢迎对功能、课程与体验提出批评，这能帮助 Talo 变得更好。'],
        items: [
          '请描述具体问题与期望改进，而不是只发泄情绪。',
          '不要冒充官方，或散布未经证实的“内部消息”。',
          '涉及版权、商标或其他法律问题时，请通过正式渠道联系，而非公开争吵。',
        ],
      },
      safe: {
        title: '7. 共建安全、适合学习的环境',
        paragraphs: [
          'Talo 面向广泛年龄段的学习者。请勿发布色情、暴力、违法、垃圾信息或与语言学习无关的恶意内容。',
          '若发现有人持续破坏环境，请停止互动并通过官方渠道举报，而不是以暴制暴。',
        ],
      },
      enforcement: {
        title: '8. 违规会如何处理',
        paragraphs: [
          '违反本守则可能导致内容删除、功能限制或其他必要措施。严重或重复违规可能被永久禁止使用相关服务。',
          '我们会根据具体情况判断，目标是保护大多数学习者能安心练习。',
        ],
      },
    },
    notice: '本守则会随产品演进更新。继续使用 Talo，即表示你理解并愿意遵守上述原则。',
    noticeLabel: '说明：',
    noticeLink: '如有疑问，请阅读常见问题。',
    ctaTitle: '准备好了？',
    ctaDescription: '在友善的环境里，开始今天的练习。',
    ctaAction: '进入练习',
  },
  en: {
    title: 'Community Guidelines · Talo',
    description: 'Talo Community Guidelines: respect others, practice honestly, protect privacy, and keep learning welcoming.',
    introTitle: 'Community Guidelines',
    slogan: 'Turn language learning into a game—and make it safe and welcoming for everyone.',
    intro:
      'Talo welcomes learners from every background. Whether you are starting with Japanese kana or strengthening your English spelling, these principles apply when using Talo, sharing feedback, and joining future community features.',
    updated: 'Last updated: August 13, 2026',
    sectionLabel: 'Community guidelines',
    rules: {
      respect: {
        title: '1. Be respectful and kind',
        paragraphs: [
          'Learning a language takes courage. Respect every learner’s background, accent, level, and pace. Personal attacks, harassment, discrimination, and deliberate humiliation are not allowed.',
          'Disagreement is fine, but address the idea rather than the person.',
        ],
      },
      help: {
        title: '2. Help without putting others down',
        paragraphs: ['When someone makes a mistake, offer a gentle correction or share useful experience. If your tone may discourage them from trying again, reconsider before posting.'],
        items: [
          'Explain how someone can practice instead of asking how they could fail to know something.',
          'No beginner question is too basic; everyone starts from zero.',
          'Combos, hearts, and streaks motivate progress—they are not tools for mocking others.',
        ],
      },
      diversity: {
        title: '3. Language can have more than one correct answer',
        paragraphs: [
          'Spelling, expressions, and input habits vary by region and context. Stay open-minded and do not use one form as the only standard to belittle others.',
          'Talo courses will keep improving, and learners’ real language environments deserve equal respect.',
        ],
      },
      honesty: {
        title: '4. Practice honestly and value your progress',
        paragraphs: ['Talo uses game mechanics to help you stay consistent, not simply to make statistics look impressive.'],
        items: [
          'Do not use scripts or local-storage manipulation to fabricate practice records or combos.',
          'Do not scrape or copy course content for unauthorized distribution or commercial use.',
          'Report incorrect or disputed answers through appropriate channels instead of spreading misleading information.',
        ],
      },
      privacy: {
        title: '5. Protect privacy and share carefully',
        paragraphs: ['Your safety matters. Do not publish information that may compromise privacy or pressure others to share it.'],
        items: [
          'This includes phone numbers, addresses, email addresses, social accounts, schools, workplaces, and exact travel plans.',
          'Before sharing a learning screenshot, check it for personal or sensitive information.',
        ],
      },
      feedback: {
        title: '6. Be direct, but constructive',
        paragraphs: ['We welcome criticism of features, courses, and the overall experience because it helps Talo improve.'],
        items: [
          'Describe the specific problem and desired improvement instead of only venting frustration.',
          'Do not impersonate Talo or spread unverified inside information.',
          'For copyright, trademark, or legal concerns, use formal contact channels rather than public arguments.',
        ],
      },
      safe: {
        title: '7. Keep the environment safe and suitable for learning',
        paragraphs: [
          'Talo serves learners across a wide age range. Sexual, violent, illegal, spam, or malicious off-topic content is not allowed.',
          'If someone repeatedly disrupts the community, stop engaging and report it through an official channel.',
        ],
      },
      enforcement: {
        title: '8. How violations are handled',
        paragraphs: [
          'Violations may result in content removal, feature restrictions, or other necessary measures. Serious or repeated violations may lead to permanent loss of access to related services.',
          'Decisions are made according to context, with the goal of keeping most learners safe and comfortable.',
        ],
      },
    },
    notice: 'These guidelines may evolve with the product. By continuing to use Talo, you agree to understand and follow these principles.',
    noticeLabel: 'Note:',
    noticeLink: 'Read the FAQ if you have questions.',
    ctaTitle: 'Ready?',
    ctaDescription: 'Start today’s practice in a friendly learning environment.',
    ctaAction: 'Start practicing',
  },
  ja: {
    title: 'コミュニティガイドライン · Talo',
    description: '互いを尊重し、誠実に練習し、プライバシーを守りながら、安心して学べる環境をつくるためのガイドラインです。',
    introTitle: 'コミュニティガイドライン',
    slogan: '言語学習をゲームに変え、誰にとっても安全で親しみやすい体験にしましょう。',
    intro:
      'Talo はさまざまな背景を持つ学習者を歓迎します。日本語のかなを学び始めた方も、英語のスペルを強化している方も、Talo の利用、フィードバック、今後のコミュニティ機能ではこの原則が適用されます。',
    updated: '最終更新：2026年8月13日',
    sectionLabel: 'コミュニティガイドライン本文',
    rules: {
      respect: {
        title: '1. お互いを尊重し、親切に',
        paragraphs: [
          '言語学習には勇気が必要です。背景、アクセント、レベル、学習ペースを尊重してください。個人攻撃、嫌がらせ、差別的な発言、意図的に相手を傷つける行為は禁止です。',
          '意見が違っても構いませんが、人ではなく内容について話し合いましょう。',
        ],
      },
      help: {
        title: '2. 相手を傷つけずに助け合う',
        paragraphs: ['間違いを見つけたら、やさしく訂正したり経験を共有したりしましょう。相手が発言しづらくなる言い方なら、投稿前に見直してください。'],
        items: [
          '「なぜ知らないのか」ではなく「どう練習できるか」を伝えましょう。',
          '初心者の質問に「簡単すぎる」ものはありません。誰もがゼロから始めます。',
          'コンボ、ハート、連続日数は励みのためのもので、他人をからかう道具ではありません。',
        ],
      },
      diversity: {
        title: '3. 言語には複数の正解があります',
        paragraphs: [
          '地域や場面によって、つづり、表現、入力方法が異なることがあります。一つの言い方だけを絶対的な基準にせず、柔軟に話し合いましょう。',
          'Talo のコースは改善を続けますが、学習者が実際に使う言語環境も同じように尊重されるべきです。',
        ],
      },
      honesty: {
        title: '4. 誠実に練習し、自分の成長を大切に',
        paragraphs: ['Talo のゲーム要素は継続を助けるためのもので、数字を良く見せるためのものではありません。'],
        items: [
          'スクリプトやローカルストレージの改変で練習記録やコンボを偽造しないでください。',
          'コース内容を大量取得し、無断配布や商用利用をしないでください。',
          '問題や解答に誤りがある場合は、誤情報を広めず適切な方法でお知らせください。',
        ],
      },
      privacy: {
        title: '5. プライバシーを守り、慎重に共有する',
        paragraphs: ['安全はとても重要です。プライバシーを危険にさらす情報を公開したり、他人に共有を求めたりしないでください。'],
        items: [
          '電話番号、住所、メールアドレス、SNS、学校・勤務先、正確な行動予定などが含まれます。',
          '学習画面のスクリーンショットを共有する前に、個人情報や機密情報がないか確認してください。',
        ],
      },
      feedback: {
        title: '6. 率直でも、建設的なフィードバックを',
        paragraphs: ['機能、コース、体験への批判を歓迎します。皆さんの意見が Talo の改善につながります。'],
        items: [
          '感情をぶつけるだけでなく、具体的な問題と望む改善を説明してください。',
          '公式を装ったり、未確認の内部情報を広めたりしないでください。',
          '著作権、商標、法的な問題は、公開の場で争わず正式な窓口を利用してください。',
        ],
      },
      safe: {
        title: '7. 安全で学習に適した環境をつくる',
        paragraphs: [
          'Talo は幅広い年齢の学習者が利用します。性的、暴力的、違法、スパム、または学習と無関係な悪意ある内容は禁止です。',
          '環境を乱す行為が続く場合は、やり返さずに交流を止め、公式窓口から報告してください。',
        ],
      },
      enforcement: {
        title: '8. 違反への対応',
        paragraphs: [
          '違反内容は、コンテンツの削除、機能制限、その他必要な措置の対象となる場合があります。重大または繰り返しの違反では、関連サービスを利用できなくなることがあります。',
          '状況に応じて判断し、多くの学習者が安心して練習できる環境を守ります。',
        ],
      },
    },
    notice: '本ガイドラインは製品の成長に合わせて更新されます。Talo の利用を続けることで、上記の原則を理解し守ることに同意したものとみなされます。',
    noticeLabel: 'ご案内：',
    noticeLink: '不明な点はよくある質問をご覧ください。',
    ctaTitle: '準備はできましたか？',
    ctaDescription: '親しみやすい環境で、今日の練習を始めましょう。',
    ctaAction: '練習を始める',
  },
}

function normalizeLocale(value) {
  const locale = String(value || '').toLowerCase()
  if (locale.startsWith('ja')) return 'ja'
  if (locale.startsWith('en')) return 'en'
  return 'zh-CN'
}

function readInitialLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (SUPPORTED_LOCALES.includes(saved)) return saved
  } catch {
    // 浏览器禁用存储时回退到系统语言
  }
  return normalizeLocale(navigator.language)
}

function setMeta(selector, value) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', value)
}

function applyCommonMessages(locale) {
  const messages = COMMON_MESSAGES[locale]
  const labels = {
    './': messages.home,
    './learn': messages.learn,
    './faq.html': messages.faq,
    './community.html': messages.community,
  }

  document.querySelectorAll('.site-nav a, .mobile-nav a, .site-footer__links a').forEach((link) => {
    const label = labels[link.getAttribute('href')]
    if (label) link.textContent = label
  })

  const brand = document.querySelector('.brand')
  if (brand) brand.setAttribute('aria-label', messages.backHome)

  document.querySelectorAll('.locale-switcher').forEach((switcher) => {
    switcher.setAttribute('aria-label', messages.switchLanguage)
  })
  const navigation = document.querySelector('.site-nav')
  if (navigation) navigation.setAttribute('aria-label', messages.navLabel)
  const footerNavigation = document.querySelector('.site-footer__links')
  if (footerNavigation) footerNavigation.setAttribute('aria-label', messages.footerNav)
  const mobileNavigation = document.querySelector('.mobile-nav')
  if (mobileNavigation) mobileNavigation.setAttribute('aria-label', messages.mobileNav)
  document.querySelectorAll('.locale-switcher button').forEach((button) => {
    const active = button.dataset.locale === locale
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-pressed', String(active))
  })
}

function applyFooter(locale) {
  const common = COMMON_MESSAGES[locale]
  const tagline = document.querySelector('.site-footer__brand p')
  if (tagline) tagline.textContent = common.tagline

  document.querySelectorAll('[data-common]').forEach((element) => {
    const value = common[element.dataset.common]
    if (value) element.textContent = value
  })

  document.querySelectorAll('[data-common-alt]').forEach((element) => {
    const value = common[element.dataset.commonAlt]
    if (value) element.setAttribute('alt', value)
  })

  document.querySelectorAll('[data-common-aria-label]').forEach((element) => {
    const value = common[element.dataset.commonAriaLabel]
    if (value) element.setAttribute('aria-label', value)
  })

  const copyright = document.querySelector('.site-footer__copy p')
  if (copyright) {
    copyright.textContent = common.copyright.replace('{year}', String(new Date().getFullYear()))
  }
}

function applyFaqMessages(locale) {
  const messages = FAQ_MESSAGES[locale]
  document.title = messages.title
  setMeta('meta[name="description"]', messages.description)
  setMeta('meta[property="og:title"]', messages.title)
  setMeta('meta[property="og:description"]', messages.description)

  document.querySelector('.intro h1').textContent = messages.introTitle
  document.querySelector('.intro p').textContent = messages.intro
  document.querySelector('.faq-list').setAttribute('aria-label', messages.sectionLabel)

  Object.entries(messages.questions).forEach(([id, content]) => {
    const item = document.getElementById(id)
    if (!item) return
    item.querySelector('h2').textContent = content[0]
    item.querySelector('p').textContent = content[1]
  })

  document.querySelector('.cta h2').textContent = messages.ctaTitle
  document.querySelector('.cta p').textContent = messages.ctaDescription
  document.querySelector('.cta a').textContent = messages.ctaAction

  const structuredData = document.querySelector('script[type="application/ld+json"]')
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale,
      mainEntity: Object.values(messages.questions).map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    })
  }
}

function renderCommunityRule(element, rule) {
  element.replaceChildren()
  const heading = document.createElement('h2')
  heading.textContent = rule.title
  element.append(heading)

  for (const text of rule.paragraphs || []) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    element.append(paragraph)
  }

  if (rule.items?.length) {
    const list = document.createElement('ul')
    for (const text of rule.items) {
      const item = document.createElement('li')
      item.textContent = text
      list.append(item)
    }
    element.append(list)
  }
}

function applyCommunityMessages(locale) {
  const messages = COMMUNITY_MESSAGES[locale]
  document.title = messages.title
  setMeta('meta[name="description"]', messages.description)
  setMeta('meta[property="og:title"]', messages.title)
  setMeta('meta[property="og:description"]', messages.description)

  document.querySelector('.intro h1').textContent = messages.introTitle
  document.querySelector('.intro .slogan').textContent = messages.slogan
  document.querySelector('.intro p:not(.slogan)').textContent = messages.intro
  document.querySelector('.updated').textContent = messages.updated
  document.querySelector('.rule-list').setAttribute('aria-label', messages.sectionLabel)

  Object.entries(messages.rules).forEach(([id, rule]) => {
    const element = document.getElementById(id)
    if (element) renderCommunityRule(element, rule)
  })

  const notice = document.querySelector('.notice')
  notice.replaceChildren()
  const noticeLabel = document.createElement('strong')
  noticeLabel.textContent = messages.noticeLabel
  const noticeLink = document.createElement('a')
  noticeLink.href = './faq.html'
  noticeLink.textContent = messages.noticeLink
  notice.append(noticeLabel, ' ', messages.notice, ' ', noticeLink)

  document.querySelector('.cta h2').textContent = messages.ctaTitle
  document.querySelector('.cta p').textContent = messages.ctaDescription
  document.querySelector('.cta a').textContent = messages.ctaAction

  const structuredData = document.querySelector('script[type="application/ld+json"]')
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: messages.title,
      description: messages.description,
      inLanguage: locale,
      isPartOf: { '@type': 'WebSite', name: 'Talo' },
    })
  }
}

function applyLocale(locale) {
  const page = document.body.dataset.page
  document.documentElement.lang = locale
  const openGraphLocales = { 'zh-CN': 'zh_CN', en: 'en_US', ja: 'ja_JP' }
  setMeta('meta[property="og:locale"]', openGraphLocales[locale])
  applyCommonMessages(locale)
  if (page === 'faq') applyFaqMessages(locale)
  if (page === 'community') applyCommunityMessages(locale)
  applyFooter(locale)
}

/** 为静态页创建与主站一致的二维码大图预览。 */
function setupContactQrPreview() {
  const triggers = [...document.querySelectorAll('.site-footer__qr-button')]
  if (!triggers.length) return

  const preview = document.createElement('div')
  preview.className = 'contact-qr-preview'
  preview.hidden = true
  preview.setAttribute('role', 'dialog')
  preview.setAttribute('aria-modal', 'true')
  preview.setAttribute('aria-labelledby', 'contact-qr-preview-title')
  preview.innerHTML = `
    <div class="contact-qr-preview__panel">
      <button class="contact-qr-preview__close" type="button" aria-label="关闭二维码大图" data-common-aria-label="closeQrPreview">×</button>
      <strong id="contact-qr-preview-title" data-common="contactDeveloper">联系开发者</strong>
      <img class="contact-qr-preview__image" src="./contact-developer-wechat.png" alt="联系开发者微信二维码" data-common-alt="contactQrAlt" />
      <p data-common="contactNote">添加时请备注 Talo</p>
    </div>
  `
  document.body.append(preview)

  const closeButton = preview.querySelector('.contact-qr-preview__close')
  let lastTrigger = null

  function openPreview(trigger) {
    lastTrigger = trigger
    preview.hidden = false
    closeButton.focus()
  }

  function closePreview() {
    preview.hidden = true
    lastTrigger?.focus()
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openPreview(trigger))
  })
  closeButton.addEventListener('click', closePreview)
  preview.addEventListener('click', (event) => {
    if (event.target === preview) closePreview()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !preview.hidden) closePreview()
  })
}

let currentLocale = readInitialLocale()
setupContactQrPreview()
applyLocale(currentLocale)

document.querySelectorAll('.locale-switcher button').forEach((button) => {
  button.addEventListener('click', () => {
    currentLocale = normalizeLocale(button.dataset.locale)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale)
    } catch {
      // 存储不可用时仍允许本次页面切换
    }
    applyLocale(currentLocale)
  })
})
