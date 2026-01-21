// 画家データ
const artists = {
    okakura: {
        name: "岡倉天心",
        icon: "🎨",
        masterpiece: "代表作：『東洋の理想』『茶の本』（著作）",
        works: [
            { title: "茶の本", searchQuery: "岡倉天心 茶の本" }
        ],
        evaluation: "日本美術の理論家・指導者として、近代日本画の発展に多大な影響を与えました。",
        personality: "理想主義者で情熱的。伝統を重んじながらも革新を恐れない、リーダーシップのある性格です。"
    },
    yokoyama: {
        name: "横山大観",
        icon: "🌊",
        masterpiece: "代表作：『生々流転』『無我』",
        works: [
            { title: "生々流転", searchQuery: "横山大観 生々流転" },
            { title: "無我", searchQuery: "横山大観 無我" }
        ],
        evaluation: "朦朧体という革新的な技法を確立し、日本画の近代化を牽引した巨匠です。",
        personality: "大胆で革新的。伝統に縛られず新しい表現を追求する、チャレンジ精神旺盛な性格です。"
    },
    hishida: {
        name: "菱田春草",
        icon: "🍃",
        masterpiece: "代表作：『落葉』『黒き猫』",
        works: [
            { title: "落葉", searchQuery: "菱田春草 落葉" },
            { title: "黒き猫", searchQuery: "菱田春草 黒き猫" }
        ],
        evaluation: "繊細な色彩感覚と詩情豊かな作風で、日本画に新しい美の世界を切り開きました。",
        personality: "繊細で感受性が豊か。内省的で、静かな情熱を持つ芸術家気質です。"
    },
    shimomura: {
        name: "下村観山",
        icon: "🏯",
        masterpiece: "代表作：『弱法師』『木の間の秋』",
        works: [
            { title: "弱法師", searchQuery: "下村観山 弱法師" },
            { title: "木の間の秋", searchQuery: "下村観山 木の間の秋" }
        ],
        evaluation: "古典的な題材を格調高く描き、日本画の伝統美を現代に伝えた重鎮です。",
        personality: "真面目で誠実。伝統を大切にし、品格を重んじる古風な性格です。"
    },
    kimura: {
        name: "木村武山",
        icon: "🦚",
        masterpiece: "代表作：『孔雀』『阿房劫火』",
        works: [
            { title: "孔雀", searchQuery: "木村武山 孔雀" },
            { title: "阿房劫火", searchQuery: "木村武山 阿房劫火" }
        ],
        evaluation: "装飾的で華麗な作風が特徴。色彩の美しさで見る者を魅了する画家です。",
        personality: "華やかで情熱的。美への強いこだわりを持ち、表現力豊かな性格です。"
    },
    takeuchi: {
        name: "竹内栖鳳",
        icon: "🐅",
        masterpiece: "代表作：『班猫』『アレ夕立に』",
        works: [
            { title: "班猫", searchQuery: "竹内栖鳳 班猫" },
            { title: "アレ夕立に", searchQuery: "竹内栖鳳 アレ夕立に" }
        ],
        evaluation: "写実と装飾の融合を図り、京都画壇の重鎮として多くの後進を育てました。",
        personality: "観察力が鋭く、バランス感覚に優れる。柔軟で包容力のある性格です。"
    },
    uemura: {
        name: "上村松園",
        icon: "👘",
        masterpiece: "代表作：『序の舞』『母子』",
        works: [
            { title: "序の舞", searchQuery: "上村松園 序の舞" },
            { title: "母子", searchQuery: "上村松園 母子" }
        ],
        evaluation: "女性画家の先駆者として、気品ある美人画で日本画壇に新風を吹き込みました。",
        personality: "優雅で気品がある。強い意志と美意識を持ち、困難に負けない芯の強さがあります。"
    },
    kawai: {
        name: "河合玉堂",
        icon: "⛰️",
        masterpiece: "代表作：『行く春』『渓山紅葉』",
        works: [
            { title: "行く春", searchQuery: "河合玉堂 行く春" },
            { title: "渓山紅葉", searchQuery: "河合玉堂 渓山紅葉" }
        ],
        evaluation: "日本の自然を愛し、四季の移ろいを詩情豊かに描いた風景画の大家です。",
        personality: "穏やかで自然を愛する。心の平安を大切にする、温厚な性格です。"
    },
    kaburaki: {
        name: "鏑木清方",
        icon: "🎭",
        masterpiece: "代表作：『築地明石町』『一葉』",
        works: [
            { title: "築地明石町", searchQuery: "鏑木清方 築地明石町" },
            { title: "一葉", searchQuery: "鏑木清方 一葉" }
        ],
        evaluation: "江戸情緒を現代に伝える美人画で知られ、文学的な情趣を絵画に表現しました。",
        personality: "情緒的で文学的。江戸の粋を理解し、繊細な感性を持つ風流人です。"
    },
    kobayashi: {
        name: "小林古径",
        icon: "🌸",
        masterpiece: "代表作：『髪』『清姫』",
        works: [
            { title: "髪", searchQuery: "小林古径 髪" },
            { title: "清姫", searchQuery: "小林古径 清姫" }
        ],
        evaluation: "古典を深く研究し、洗練された線描と色彩で格調高い作品を生み出しました。",
        personality: "知的で研究熱心。完璧主義で、細部まで妥協しない職人気質です。"
    },
    yasuda: {
        name: "安田靫彦",
        icon: "⚔️",
        masterpiece: "代表作：『黄瀬川陣』『卑弥呼』",
        works: [
            { title: "黄瀬川陣", searchQuery: "安田靫彦 黄瀬川陣" },
            { title: "卑弥呼", searchQuery: "安田靫彦 卑弥呼" }
        ],
        evaluation: "歴史画の第一人者として、日本の歴史や古典文学を格調高く描きました。",
        personality: "堅実で歴史を重んじる。正義感が強く、理想を追求する真摯な性格です。"
    }
};

// 質問ツリー（5階層）
const questionTree = {
    level: 1,
    question: "創作活動において、あなたが最も大切にしたいことは？",
    options: [
        {
            text: "伝統を守り、継承すること",
            next: {
                level: 2,
                question: "伝統をどのように表現したいですか？",
                options: [
                    {
                        text: "格調高く、品格を重んじて",
                        next: {
                            level: 3,
                            question: "どんな題材に惹かれますか？",
                            options: [
                                {
                                    text: "歴史や古典文学",
                                    next: {
                                        level: 4,
                                        question: "作品に込めたい想いは？",
                                        options: [
                                            { text: "正義と理想", next: { result: "yasuda" } },
                                            { text: "古典の美と精神性", next: { result: "shimomura" } }
                                        ]
                                    }
                                },
                                {
                                    text: "日本の美意識",
                                    next: {
                                        level: 4,
                                        question: "どのような美を追求しますか？",
                                        options: [
                                            { text: "洗練された線と色彩", next: { result: "kobayashi" } },
                                            { text: "装飾的な華やかさ", next: { result: "kimura" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "情緒豊かに、詩的に",
                        next: {
                            level: 3,
                            question: "何を描きたいですか？",
                            options: [
                                {
                                    text: "人物や風俗",
                                    next: {
                                        level: 4,
                                        question: "どんな雰囲気を大切にしますか？",
                                        options: [
                                            { text: "江戸の粋と情緒", next: { result: "kaburaki" } },
                                            { text: "気品ある美しさ", next: { result: "uemura" } }
                                        ]
                                    }
                                },
                                {
                                    text: "自然や風景",
                                    next: {
                                        level: 4,
                                        question: "自然をどう捉えますか？",
                                        options: [
                                            { text: "四季の移ろいと詩情", next: { result: "kawai" } },
                                            { text: "繊細な色彩と静寂", next: { result: "hishida" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            text: "革新を起こし、新しい表現を追求すること",
            next: {
                level: 2,
                question: "どのような革新を目指しますか？",
                options: [
                    {
                        text: "技法や表現方法の革新",
                        next: {
                            level: 3,
                            question: "あなたの創作スタイルは？",
                            options: [
                                {
                                    text: "大胆で力強い",
                                    next: {
                                        level: 4,
                                        question: "何を重視しますか？",
                                        options: [
                                            { text: "革新的な技法の確立", next: { result: "yokoyama" } },
                                            { text: "伝統と革新の融合", next: { result: "takeuchi" } }
                                        ]
                                    }
                                },
                                {
                                    text: "理論的で体系的",
                                    next: {
                                        level: 4,
                                        question: "あなたの役割は？",
                                        options: [
                                            { text: "理論を構築し、導く", next: { result: "okakura" } },
                                            { text: "研究を深め、完成させる", next: { result: "kobayashi" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "美意識や価値観の革新",
                        next: {
                            level: 3,
                            question: "どんな価値を示したいですか？",
                            options: [
                                {
                                    text: "女性の視点と美意識",
                                    next: {
                                        level: 4,
                                        question: "表現したい美しさは？",
                                        options: [
                                            { text: "気品と強さ", next: { result: "uemura" } },
                                            { text: "繊細さと優雅さ", next: { result: "kaburaki" } }
                                        ]
                                    }
                                },
                                {
                                    text: "新しい美の世界",
                                    next: {
                                        level: 4,
                                        question: "どのように表現しますか？",
                                        options: [
                                            { text: "装飾的で華麗に", next: { result: "kimura" } },
                                            { text: "詩的で繊細に", next: { result: "hishida" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};

let currentNode = questionTree;
let questionHistory = [];

function startTest() {
    showScreen('question-screen');
    currentNode = questionTree;
    questionHistory = [];
    displayQuestion();
}

function displayQuestion() {
    const progress = (currentNode.level / 5) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    document.getElementById('question-text').textContent = currentNode.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentNode.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    questionHistory.push(currentNode);
    
    if (option.next.result) {
        showResult(option.next.result);
    } else {
        currentNode = option.next;
        displayQuestion();
    }
}

function showResult(artistKey) {
    const artist = artists[artistKey];
    const resultContent = document.getElementById('result-content');
    
    // 作品リンクを生成
    const worksLinks = artist.works.map(work => {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(work.searchQuery)}&tbm=isch`;
        return `<a href="${googleSearchUrl}" target="_blank" class="work-link">${work.title}</a>`;
    }).join('、');
    
    resultContent.innerHTML = `
        <div class="artist-result">
            <h2>あなたは${artist.name}タイプ！</h2>
            <div class="artist-portrait">${artist.icon}</div>
            <div class="artist-info">
                <h3>代表作品</h3>
                <p>${artist.masterpiece}</p>
                <p class="works-links">作品を見る：${worksLinks}</p>
                <h3>作品評価</h3>
                <p>${artist.evaluation}</p>
                <h3>性格</h3>
                <p>${artist.personality}</p>
            </div>
        </div>
    `;
    
    showScreen('result-screen');
}

function restartTest() {
    showScreen('start-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
