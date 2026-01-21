// 現在選択されているグループ
let currentGroup = 'japanese';

// グループ情報
const groupInfo = {
    japanese: {
        title: "―日本画家編―",
        description: "いくつかの質問に答えて、あなたに似た日本画家を見つけましょう！"
    },
    impressionism: {
        title: "―印象派編―",
        description: "いくつかの質問に答えて、あなたに似た印象派画家を見つけましょう！"
    },
    ukiyoe: {
        title: "―浮世絵編―",
        description: "いくつかの質問に答えて、あなたに似た浮世絵師を見つけましょう！"
    },
    world: {
        title: "―世界の画家編―",
        description: "いくつかの質問に答えて、あなたに似た世界の画家を見つけましょう！"
    },
    artmovement: {
        title: "―絵画グループ編―",
        description: "いくつかの質問に答えて、あなたに合う絵画グループを見つけましょう！"
    }
};

// 日本画家データ
const japaneseArtists = {
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

// 絵画グループデータ
const artMovements = {
    classicism: {
        name: "古典主義",
        icon: "🏛️",
        description: "理性と調和を重んじ、古代ギリシャ・ローマの美を理想とする様式",
        characteristics: "明確な構図、均整の取れた形態、理想化された美、道徳的主題",
        artists: [
            { name: "ニコラ・プッサン", searchQuery: "Nicolas Poussin paintings" },
            { name: "ジャック＝ルイ・ダヴィッド", searchQuery: "Jacques-Louis David paintings" },
            { name: "ジャン・オーギュスト・ドミニク・アングル", searchQuery: "Jean-Auguste-Dominique Ingres paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/古典主義"
    },
    baroque: {
        name: "バロック美術",
        icon: "✨",
        description: "劇的な明暗対比と動的な構図で、感情を強く訴える様式",
        characteristics: "強烈な明暗対比、ダイナミックな構図、豪華な装飾、劇的な表現",
        artists: [
            { name: "カラヴァッジョ", searchQuery: "Caravaggio paintings" },
            { name: "ルーベンス", searchQuery: "Peter Paul Rubens paintings" },
            { name: "レンブラント", searchQuery: "Rembrandt paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/バロック美術"
    },
    romanticism: {
        name: "ロマン主義",
        icon: "🔥",
        description: "感情と想像力を重視し、個人の内面や自然の崇高さを表現",
        characteristics: "情熱的な色彩、劇的な構図、感情の表現、自然の力強さ",
        artists: [
            { name: "ウジェーヌ・ドラクロワ", searchQuery: "Eugene Delacroix paintings" },
            { name: "カスパー・ダーヴィト・フリードリヒ", searchQuery: "Caspar David Friedrich paintings" },
            { name: "ウィリアム・ターナー", searchQuery: "J.M.W. Turner paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/ロマン主義"
    },
    impressionism: {
        name: "印象派",
        icon: "🌅",
        description: "光と色彩の変化を捉え、一瞬の印象を描く革新的な様式",
        characteristics: "明るい色彩、筆触の可視化、屋外制作、光の表現",
        artists: [
            { name: "クロード・モネ", searchQuery: "Claude Monet paintings" },
            { name: "ピエール＝オーギュスト・ルノワール", searchQuery: "Pierre-Auguste Renoir paintings" },
            { name: "エドガー・ドガ", searchQuery: "Edgar Degas paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/印象派"
    },
    realism: {
        name: "写実主義（レアリズム）",
        icon: "⚒️",
        description: "理想化を排し、現実をありのままに描く様式",
        characteristics: "客観的な描写、日常的な題材、社会的テーマ、正確な観察",
        artists: [
            { name: "ギュスターヴ・クールベ", searchQuery: "Gustave Courbet paintings" },
            { name: "ジャン＝フランソワ・ミレー", searchQuery: "Jean-Francois Millet paintings" },
            { name: "オノレ・ドーミエ", searchQuery: "Honore Daumier paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/写実主義"
    },
    fauvism: {
        name: "フォービスム",
        icon: "🦁",
        description: "野獣派と呼ばれた、強烈で純粋な色彩を用いる様式",
        characteristics: "鮮烈な原色、大胆な色彩対比、単純化された形態、装飾性",
        artists: [
            { name: "アンリ・マティス", searchQuery: "Henri Matisse paintings" },
            { name: "アンドレ・ドラン", searchQuery: "Andre Derain paintings" },
            { name: "モーリス・ド・ヴラマンク", searchQuery: "Maurice de Vlaminck paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/フォーヴィスム"
    },
    cubism: {
        name: "キュビスム",
        icon: "🔷",
        description: "対象を幾何学的な形態に分解し、多視点から再構成する革新的様式",
        characteristics: "幾何学的形態、多視点の同時表現、色彩の抑制、分析的アプローチ",
        artists: [
            { name: "パブロ・ピカソ", searchQuery: "Pablo Picasso Cubism" },
            { name: "ジョルジュ・ブラック", searchQuery: "Georges Braque Cubism" },
            { name: "フアン・グリス", searchQuery: "Juan Gris paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/キュビスム"
    },
    surrealism: {
        name: "シュルレアリスム",
        icon: "🌙",
        description: "無意識や夢の世界を表現する超現実主義",
        characteristics: "夢のような情景、意外な組み合わせ、象徴的表現、無意識の探求",
        artists: [
            { name: "サルバドール・ダリ", searchQuery: "Salvador Dali paintings" },
            { name: "ルネ・マグリット", searchQuery: "Rene Magritte paintings" },
            { name: "ジョアン・ミロ", searchQuery: "Joan Miro paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/シュルレアリスム"
    },
    ecoledeparis: {
        name: "エコール・ド・パリ",
        icon: "🗼",
        description: "20世紀初頭、パリに集まった国際的な芸術家たちの総称",
        characteristics: "個性的な表現、抒情性、異国情緒、多様なスタイル",
        artists: [
            { name: "アメデオ・モディリアーニ", searchQuery: "Amedeo Modigliani paintings" },
            { name: "マルク・シャガール", searchQuery: "Marc Chagall paintings" },
            { name: "藤田嗣治", searchQuery: "Tsuguharu Foujita paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/エコール・ド・パリ"
    },
    abstractexpressionism: {
        name: "抽象表現主義",
        icon: "🎨",
        description: "感情を抽象的な形態と色彩で表現するアメリカ発の様式",
        characteristics: "大画面、即興性、身体的な制作過程、純粋な色彩と形態",
        artists: [
            { name: "ジャクソン・ポロック", searchQuery: "Jackson Pollock paintings" },
            { name: "マーク・ロスコ", searchQuery: "Mark Rothko paintings" },
            { name: "ウィレム・デ・クーニング", searchQuery: "Willem de Kooning paintings" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/抽象表現主義"
    },
    ukiyoe: {
        name: "浮世絵",
        icon: "🌊",
        description: "江戸時代に発展した日本の木版画芸術",
        characteristics: "平面的な色彩、明確な輪郭線、装飾性、庶民文化の描写",
        artists: [
            { name: "葛飾北斎", searchQuery: "葛飾北斎 浮世絵" },
            { name: "歌川広重", searchQuery: "歌川広重 浮世絵" },
            { name: "喜多川歌麿", searchQuery: "喜多川歌麿 浮世絵" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/浮世絵"
    },
    yamatoe: {
        name: "大和絵",
        icon: "🏯",
        description: "平安時代に成立した日本独自の絵画様式",
        characteristics: "優美な線描、装飾的な色彩、物語性、日本的な題材",
        artists: [
            { name: "土佐光信", searchQuery: "土佐光信 大和絵" },
            { name: "狩野永徳", searchQuery: "狩野永徳 絵画" },
            { name: "俵屋宗達", searchQuery: "俵屋宗達 作品" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/大和絵"
    },
    maruyama: {
        name: "丸山派",
        icon: "🐕",
        description: "写生を重視した江戸時代の日本画派",
        characteristics: "写実的描写、動物画の得意、西洋画法の影響、自然観察",
        artists: [
            { name: "円山応挙", searchQuery: "円山応挙 作品" },
            { name: "長沢芦雪", searchQuery: "長沢芦雪 作品" },
            { name: "森狙仙", searchQuery: "森狙仙 猿" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/円山派"
    },
    kisou: {
        name: "奇想の絵師",
        icon: "👹",
        description: "江戸時代の型破りで独創的な表現をした絵師たち",
        characteristics: "奇抜な発想、ユーモア、幻想性、型破りな表現",
        artists: [
            { name: "伊藤若冲", searchQuery: "伊藤若冲 作品" },
            { name: "曾我蕭白", searchQuery: "曾我蕭白 作品" },
            { name: "歌川国芳", searchQuery: "歌川国芳 作品" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/奇想の系譜"
    },
    rinpa: {
        name: "琳派",
        icon: "🌸",
        description: "装飾性と大胆な構図を特徴とする日本の美術様式",
        characteristics: "装飾的な金銀、大胆な構図、たらし込み技法、自然モチーフの様式化",
        artists: [
            { name: "俵屋宗達", searchQuery: "俵屋宗達 作品" },
            { name: "尾形光琳", searchQuery: "尾形光琳 作品" },
            { name: "酒井抱一", searchQuery: "酒井抱一 作品" }
        ],
        detailLink: "https://ja.wikipedia.org/wiki/琳派"
    }
};

// 世界の画家データ
const worldArtists = {
    delacroix: {
        name: "ウジェーヌ・ドラクロワ",
        icon: "🔥",
        masterpiece: "代表作：『民衆を導く自由の女神』『アルジェの女たち』",
        works: [
            { title: "民衆を導く自由の女神", searchQuery: "Delacroix Liberty Leading the People" },
            { title: "アルジェの女たち", searchQuery: "Delacroix Women of Algiers" }
        ],
        evaluation: "ロマン主義を代表する画家。情熱的な色彩と劇的な構図で、革命と自由の精神を描きました。",
        personality: "情熱的で行動的。自由と正義を愛し、強い信念を持つ革命家気質です。"
    },
    velazquez: {
        name: "ディエゴ・ベラスケス",
        icon: "👑",
        masterpiece: "代表作：『ラス・メニーナス』『教皇インノケンティウス10世の肖像』",
        works: [
            { title: "ラス・メニーナス", searchQuery: "Velazquez Las Meninas" },
            { title: "教皇インノケンティウス10世", searchQuery: "Velazquez Pope Innocent X" }
        ],
        evaluation: "スペイン黄金時代の巨匠。写実的な技法と複雑な構図で、宮廷画家として傑作を残しました。",
        personality: "知的で観察眼が鋭い。品格があり、冷静沈着な完璧主義者です。"
    },
    vermeer: {
        name: "ヨハネス・フェルメール",
        icon: "💎",
        masterpiece: "代表作：『真珠の耳飾りの少女』『牛乳を注ぐ女』",
        works: [
            { title: "真珠の耳飾りの少女", searchQuery: "Vermeer Girl with a Pearl Earring" },
            { title: "牛乳を注ぐ女", searchQuery: "Vermeer The Milkmaid" }
        ],
        evaluation: "光の魔術師と呼ばれるオランダの巨匠。静謐な室内画と繊細な光の表現で知られます。",
        personality: "静かで内省的。日常の美を見出す、繊細で瞑想的な性格です。"
    },
    courbet: {
        name: "ギュスターヴ・クールベ",
        icon: "⚒️",
        masterpiece: "代表作：『オルナンの埋葬』『画家のアトリエ』",
        works: [
            { title: "オルナンの埋葬", searchQuery: "Courbet A Burial at Ornans" },
            { title: "画家のアトリエ", searchQuery: "Courbet The Painter's Studio" }
        ],
        evaluation: "写実主義の創始者。理想化を排し、現実をありのままに描くことを主張しました。",
        personality: "反骨精神があり率直。権威に屈しない、強い意志を持つ現実主義者です。"
    },
    millet: {
        name: "ジャン＝フランソワ・ミレー",
        icon: "🌾",
        masterpiece: "代表作：『落穂拾い』『晩鐘』",
        works: [
            { title: "落穂拾い", searchQuery: "Millet The Gleaners" },
            { title: "晩鐘", searchQuery: "Millet The Angelus" }
        ],
        evaluation: "農民画家として知られる。労働する人々の尊厳を、温かい眼差しで描きました。",
        personality: "誠実で謙虚。労働の価値を理解し、人間の尊厳を大切にする温かい性格です。"
    },
    signac: {
        name: "ポール・シニャック",
        icon: "🎨",
        masterpiece: "代表作：『サン＝トロペの港』『赤いブイ』",
        works: [
            { title: "サン＝トロペの港", searchQuery: "Signac Port of Saint-Tropez" },
            { title: "赤いブイ", searchQuery: "Signac The Red Buoy" }
        ],
        evaluation: "点描画法（新印象派）の理論家。科学的な色彩理論に基づいた作品を制作しました。",
        personality: "理論的で体系的。科学と芸術の融合を追求する、知的で几帳面な性格です。"
    },
    munch: {
        name: "エドヴァルド・ムンク",
        icon: "😱",
        masterpiece: "代表作：『叫び』『マドンナ』",
        works: [
            { title: "叫び", searchQuery: "Munch The Scream" },
            { title: "マドンナ", searchQuery: "Munch Madonna" }
        ],
        evaluation: "表現主義の先駆者。人間の不安や孤独といった内面を、強烈な色彩で表現しました。",
        personality: "繊細で神経質。深い不安を抱えながらも、それを芸術に昇華する感受性豊かな性格です。"
    },
    matisse: {
        name: "アンリ・マティス",
        icon: "✂️",
        masterpiece: "代表作：『ダンス』『赤いアトリエ』",
        works: [
            { title: "ダンス", searchQuery: "Matisse The Dance" },
            { title: "赤いアトリエ", searchQuery: "Matisse The Red Studio" }
        ],
        evaluation: "フォービスムの巨匠。鮮やかな色彩と大胆な構図で、生命の喜びを表現しました。",
        personality: "楽観的で生命力にあふれる。色彩の喜びを追求する、明るく前向きな性格です。"
    },
    picasso: {
        name: "パブロ・ピカソ",
        icon: "🎭",
        masterpiece: "代表作：『ゲルニカ』『アヴィニョンの娘たち』",
        works: [
            { title: "ゲルニカ", searchQuery: "Picasso Guernica" },
            { title: "アヴィニョンの娘たち", searchQuery: "Picasso Les Demoiselles d'Avignon" }
        ],
        evaluation: "20世紀最大の巨匠。キュビズムを創始し、絵画の概念を根本から変革しました。",
        personality: "天才的で多才。常に革新を求め、既成概念を打ち破る破壊と創造の人です。"
    },
    rouault: {
        name: "ジョルジュ・ルオー",
        icon: "⛪",
        masterpiece: "代表作：『老いた王』『キリストの顔』",
        works: [
            { title: "老いた王", searchQuery: "Rouault The Old King" },
            { title: "キリストの顔", searchQuery: "Rouault Christ" }
        ],
        evaluation: "宗教的主題を描いた画家。太い黒い輪郭線と深い色彩で、人間の苦悩と救済を表現しました。",
        personality: "敬虔で真摯。人間の苦しみに寄り添い、精神性を重んじる深い信仰心を持つ性格です。"
    },
    chirico: {
        name: "ジョルジョ・デ・キリコ",
        icon: "🏛️",
        masterpiece: "代表作：『通りの神秘と憂鬱』『予言者の報酬』",
        works: [
            { title: "通りの神秘と憂鬱", searchQuery: "De Chirico Mystery and Melancholy of a Street" },
            { title: "予言者の報酬", searchQuery: "De Chirico The Soothsayer's Recompense" }
        ],
        evaluation: "形而上絵画の創始者。不可解な空間と静寂が支配する、謎めいた世界を描きました。",
        personality: "哲学的で神秘的。夢と現実の境界を探求する、知的で謎めいた性格です。"
    },
    dali: {
        name: "サルバドール・ダリ",
        icon: "⏰",
        masterpiece: "代表作：『記憶の固執』『内乱の予感』",
        works: [
            { title: "記憶の固執", searchQuery: "Dali The Persistence of Memory" },
            { title: "内乱の予感", searchQuery: "Dali Soft Construction with Boiled Beans" }
        ],
        evaluation: "シュルレアリスムの巨匠。精緻な技法で無意識の世界を描き、奇想天外な作品を生み出しました。",
        personality: "奇抜で演劇的。自己顕示欲が強く、常識を超越した天才肌の性格です。"
    },
    magritte: {
        name: "ルネ・マグリット",
        icon: "🎩",
        masterpiece: "代表作：『イメージの裏切り』『ピレネーの城』",
        works: [
            { title: "イメージの裏切り", searchQuery: "Magritte The Treachery of Images" },
            { title: "ピレネーの城", searchQuery: "Magritte The Castle of the Pyrenees" }
        ],
        evaluation: "シュルレアリスムの代表的画家。日常的なモチーフを非日常的に配置し、思考を刺激する作品を制作しました。",
        personality: "知的で冷静。論理と非論理の狭間で遊ぶ、ウィットに富んだ思索家です。"
    },
    kandinsky: {
        name: "ワシリー・カンディンスキー",
        icon: "🎵",
        masterpiece: "代表作：『コンポジションVII』『即興28』",
        works: [
            { title: "コンポジションVII", searchQuery: "Kandinsky Composition VII" },
            { title: "即興28", searchQuery: "Kandinsky Improvisation 28" }
        ],
        evaluation: "抽象絵画の創始者。音楽と絵画の融合を目指し、色彩と形態の純粋な表現を追求しました。",
        personality: "理論的で精神的。芸術の本質を探求する、哲学者のような深い思索家です。"
    },
    klee: {
        name: "パウル・クレー",
        icon: "🌟",
        masterpiece: "代表作：『セネキオ』『パルナッソス山へ』",
        works: [
            { title: "セネキオ", searchQuery: "Paul Klee Senecio" },
            { title: "パルナッソス山へ", searchQuery: "Paul Klee Ad Parnassum" }
        ],
        evaluation: "詩的で音楽的な抽象画を描いた画家。子供のような純粋な視点と、深い思索が融合した作品を制作しました。",
        personality: "詩的で繊細。音楽を愛し、子供のような純粋さと哲学的深さを併せ持つ性格です。"
    },
    utrillo: {
        name: "モーリス・ユトリロ",
        icon: "🏘️",
        masterpiece: "代表作：『モンマルトルの風景』『サクレ・クール寺院』",
        works: [
            { title: "モンマルトルの風景", searchQuery: "Utrillo Montmartre" },
            { title: "サクレ・クール寺院", searchQuery: "Utrillo Sacre-Coeur" }
        ],
        evaluation: "パリの街並みを描き続けた画家。白を基調とした独特の色調で、哀愁漂う風景を表現しました。",
        personality: "孤独で憂鬱。アルコール依存症に苦しみながらも、絵画に救いを求めた繊細な魂の持ち主です。"
    },
    modigliani: {
        name: "アメデオ・モディリアーニ",
        icon: "🗿",
        masterpiece: "代表作：『ジャンヌ・エビュテルヌの肖像』『横たわる裸婦』",
        works: [
            { title: "ジャンヌ・エビュテルヌの肖像", searchQuery: "Modigliani Jeanne Hebuterne" },
            { title: "横たわる裸婦", searchQuery: "Modigliani Reclining Nude" }
        ],
        evaluation: "独特の引き伸ばされた人物像で知られる画家。優雅で憂愁に満ちた肖像画を描きました。",
        personality: "情熱的で悲劇的。美と愛を追求しながら、短い生涯を燃え尽きた芸術家です。"
    },
    chagall: {
        name: "マルク・シャガール",
        icon: "💕",
        masterpiece: "代表作：『私と村』『誕生日』",
        works: [
            { title: "私と村", searchQuery: "Chagall I and the Village" },
            { title: "誕生日", searchQuery: "Chagall The Birthday" }
        ],
        evaluation: "愛と夢の画家。故郷への郷愁と妻への愛を、幻想的で詩的な世界として描きました。",
        personality: "ロマンティックで夢見がち。愛と故郷を大切にする、優しく詩的な性格です。"
    },
    foujita: {
        name: "藤田嗣治（レオナール・フジタ）",
        icon: "🐱",
        masterpiece: "代表作：『五人の裸婦』『猫』",
        works: [
            { title: "五人の裸婦", searchQuery: "Foujita Five Nudes" },
            { title: "猫", searchQuery: "Foujita Cat" }
        ],
        evaluation: "エコール・ド・パリを代表する日本人画家。乳白色の肌と繊細な線描で独自の画風を確立しました。",
        personality: "社交的で国際的。東洋と西洋の架け橋となった、柔軟で適応力のある性格です。"
    }
};

// 浮世絵師データ
const ukiyoeArtists = {
    hokusai: {
        name: "葛飾北斎",
        icon: "🌊",
        masterpiece: "代表作：『富嶽三十六景』『北斎漫画』",
        works: [
            { title: "神奈川沖浪裏", searchQuery: "葛飾北斎 神奈川沖浪裏" },
            { title: "凱風快晴", searchQuery: "葛飾北斎 凱風快晴 赤富士" }
        ],
        evaluation: "世界的に最も有名な浮世絵師。富士山や波の表現で革新的な構図を生み出し、西洋美術にも影響を与えました。",
        personality: "探究心旺盛で向上心が強い。90歳まで画業を続けた、飽くなき挑戦者です。"
    },
    hiroshige: {
        name: "歌川広重",
        icon: "🏔️",
        masterpiece: "代表作：『東海道五十三次』『名所江戸百景』",
        works: [
            { title: "東海道五十三次", searchQuery: "歌川広重 東海道五十三次" },
            { title: "名所江戸百景", searchQuery: "歌川広重 名所江戸百景" }
        ],
        evaluation: "叙情的な風景画で知られる浮世絵師。雨や雪の表現に優れ、旅情あふれる作品を数多く残しました。",
        personality: "穏やかで詩情豊か。自然と人々の暮らしを愛する、情緒的な性格です。"
    },
    utamaro: {
        name: "喜多川歌麿",
        icon: "👘",
        masterpiece: "代表作：『婦人相学十躰』『歌撰恋之部』",
        works: [
            { title: "婦人相学十躰", searchQuery: "喜多川歌麿 婦人相学十躰" },
            { title: "ポッピンを吹く女", searchQuery: "喜多川歌麿 ポッピンを吹く女" }
        ],
        evaluation: "美人画の第一人者。女性の内面まで表現する繊細な描写で、浮世絵美人画の頂点を極めました。",
        personality: "繊細で観察眼が鋭い。女性の美しさと心理を深く理解する、感受性豊かな性格です。"
    },
    sharaku: {
        name: "東洲斎写楽",
        icon: "🎭",
        masterpiece: "代表作：『三代目大谷鬼次の奴江戸兵衛』『市川鰕蔵の竹村定之進』",
        works: [
            { title: "三代目大谷鬼次の奴江戸兵衛", searchQuery: "東洲斎写楽 大谷鬼次" },
            { title: "市川鰕蔵の竹村定之進", searchQuery: "東洲斎写楽 市川鰕蔵" }
        ],
        evaluation: "わずか10ヶ月の活動期間で傑作を残した謎の絵師。役者の個性を鋭く捉えた大胆な表現が特徴です。",
        personality: "鋭い洞察力を持つ個性派。人間の本質を見抜く、ミステリアスで大胆な性格です。"
    },
    kuniyoshi: {
        name: "歌川国芳",
        icon: "🐱",
        masterpiece: "代表作：『相馬の古内裏』『東都名所』",
        works: [
            { title: "相馬の古内裏", searchQuery: "歌川国芳 相馬の古内裏" },
            { title: "猫の当字", searchQuery: "歌川国芳 猫" }
        ],
        evaluation: "武者絵と猫の絵で人気を博した絵師。ダイナミックな構図と遊び心あふれる作品が特徴です。",
        personality: "ユーモアがあり自由奔放。猫を愛し、型破りな発想を持つ、遊び心のある性格です。"
    },
    harunobu: {
        name: "鈴木春信",
        icon: "🌸",
        masterpiece: "代表作：『雪中相合傘』『夜の梅』",
        works: [
            { title: "雪中相合傘", searchQuery: "鈴木春信 雪中相合傘" },
            { title: "夜の梅", searchQuery: "鈴木春信 夜の梅" }
        ],
        evaluation: "錦絵を確立した浮世絵師。可憐で優美な美人画と、詩的な情景描写で知られます。",
        personality: "優雅で繊細。ロマンティックで詩的な感性を持つ、夢見がちな性格です。"
    },
    moronobu: {
        name: "菱川師宣",
        icon: "📜",
        masterpiece: "代表作：『見返り美人図』『吉原の体』",
        works: [
            { title: "見返り美人図", searchQuery: "菱川師宣 見返り美人図" },
            { title: "江戸風俗図", searchQuery: "菱川師宣 江戸風俗" }
        ],
        evaluation: "浮世絵の祖と称される絵師。肉筆画と版画の両方で活躍し、浮世絵を芸術として確立しました。",
        personality: "先駆者精神がある。伝統を打ち破り新しい分野を切り開く、革新的な性格です。"
    },
    kiyonaga: {
        name: "鳥居清長",
        icon: "👗",
        masterpiece: "代表作：『美南見十二候』『当世遊里美人合』",
        works: [
            { title: "美南見十二候", searchQuery: "鳥居清長 美南見十二候" },
            { title: "当世遊里美人合", searchQuery: "鳥居清長 美人" }
        ],
        evaluation: "八頭身の理想的なプロポーションの美人画を確立。優雅で健康的な美人像を描きました。",
        personality: "理想主義で美意識が高い。バランス感覚に優れた、洗練された性格です。"
    },
    yoshitoshi: {
        name: "月岡芳年",
        icon: "🌙",
        masterpiece: "代表作：『月百姿』『新形三十六怪撰』",
        works: [
            { title: "月百姿", searchQuery: "月岡芳年 月百姿" },
            { title: "新形三十六怪撰", searchQuery: "月岡芳年 新形三十六怪撰" }
        ],
        evaluation: "幕末から明治の浮世絵師。幻想的で劇的な表現が特徴で、最後の浮世絵師と呼ばれます。",
        personality: "情熱的で劇的。時代の変化に苦悩しながらも芸術を追求した、激しい性格です。"
    },
    eisen: {
        name: "渓斎英泉",
        icon: "💋",
        masterpiece: "代表作：『木曽街道六十九次』『江戸名所百人美女』",
        works: [
            { title: "木曽街道六十九次", searchQuery: "渓斎英泉 木曽街道" },
            { title: "江戸名所百人美女", searchQuery: "渓斎英泉 美人" }
        ],
        evaluation: "退廃的で妖艶な美人画で知られる絵師。独特の色彩感覚と官能的な表現が特徴です。",
        personality: "個性的で官能的。既成概念にとらわれない、自由で退廃的な美意識を持つ性格です。"
    },
    oei: {
        name: "葛飾応為",
        icon: "🎨",
        masterpiece: "代表作：『吉原格子先之図』『夜桜美人図』",
        works: [
            { title: "吉原格子先之図", searchQuery: "葛飾応為 吉原格子先之図" },
            { title: "夜桜美人図", searchQuery: "葛飾応為 夜桜美人図" }
        ],
        evaluation: "北斎の娘で、光と影の表現に優れた女性絵師。西洋画法を取り入れた革新的な作品を残しました。",
        personality: "独立心が強く才能豊か。父を超えようとする向上心と、独自の美意識を持つ性格です。"
    }
};

// 印象派画家データ
const impressionismArtists = {
    monet: {
        name: "クロード・モネ",
        icon: "🌅",
        masterpiece: "代表作：『印象・日の出』『睡蓮』",
        works: [
            { title: "印象・日の出", searchQuery: "Claude Monet Impression Sunrise" },
            { title: "睡蓮", searchQuery: "Claude Monet Water Lilies" }
        ],
        evaluation: "印象派の創始者の一人。光と色彩の変化を追求し、自然の一瞬の美を捉えた巨匠です。",
        personality: "忍耐強く粘り強い。自然を深く愛し、一つのテーマを徹底的に探求する情熱家です。"
    },
    renoir: {
        name: "ピエール＝オーギュスト・ルノワール",
        icon: "💃",
        masterpiece: "代表作：『ムーラン・ド・ラ・ギャレットの舞踏会』『舟遊びをする人々の昼食』",
        works: [
            { title: "ムーラン・ド・ラ・ギャレットの舞踏会", searchQuery: "Renoir Bal du moulin de la Galette" },
            { title: "舟遊びをする人々の昼食", searchQuery: "Renoir Luncheon of the Boating Party" }
        ],
        evaluation: "人生の喜びと美しさを描いた画家。柔らかな色彩と光で幸福感あふれる作品を生み出しました。",
        personality: "楽観的で社交的。人間の美しさと幸せを信じる、温かく陽気な性格です。"
    },
    degas: {
        name: "エドガー・ドガ",
        icon: "🩰",
        masterpiece: "代表作：『踊り子』シリーズ『アブサント』",
        works: [
            { title: "踊り子", searchQuery: "Edgar Degas Ballet Dancers" },
            { title: "アブサント", searchQuery: "Edgar Degas L'Absinthe" }
        ],
        evaluation: "動きの瞬間を捉える卓越した技術を持つ画家。バレエダンサーや競馬の場面を独特の視点で描きました。",
        personality: "観察眼が鋭く完璧主義。孤独を好み、芸術に対して妥協しない厳格な性格です。"
    },
    pissarro: {
        name: "カミーユ・ピサロ",
        icon: "🌳",
        masterpiece: "代表作：『ポントワーズの橋』『モンマルトル大通り』",
        works: [
            { title: "ポントワーズの橋", searchQuery: "Camille Pissarro Pontoise" },
            { title: "モンマルトル大通り", searchQuery: "Camille Pissarro Boulevard Montmartre" }
        ],
        evaluation: "印象派の父と呼ばれる存在。農村風景や都市の情景を温かい眼差しで描きました。",
        personality: "温厚で寛容。後進を育てることに情熱を注ぐ、教師気質の優しい性格です。"
    },
    sisley: {
        name: "アルフレッド・シスレー",
        icon: "🏞️",
        masterpiece: "代表作：『マルリーの洪水』『モレ・シュル・ロワンの橋』",
        works: [
            { title: "マルリーの洪水", searchQuery: "Alfred Sisley Flood at Port-Marly" },
            { title: "モレ・シュル・ロワンの橋", searchQuery: "Alfred Sisley Bridge at Moret-sur-Loing" }
        ],
        evaluation: "風景画に専念した純粋な印象派画家。空と水の表現に優れ、静謐な美を追求しました。",
        personality: "控えめで内向的。自然との対話を大切にする、静かで誠実な性格です。"
    },
    morisot: {
        name: "ベルト・モリゾ",
        icon: "👩‍🎨",
        masterpiece: "代表作：『ゆりかご』『舞踏会にて』",
        works: [
            { title: "ゆりかご", searchQuery: "Berthe Morisot The Cradle" },
            { title: "舞踏会にて", searchQuery: "Berthe Morisot At the Ball" }
        ],
        evaluation: "印象派を代表する女性画家。日常生活の親密な瞬間を繊細なタッチで描きました。",
        personality: "繊細で感受性豊か。女性の視点から日常の美を見出す、優雅で知的な性格です。"
    },
    cassatt: {
        name: "メアリー・カサット",
        icon: "👶",
        masterpiece: "代表作：『青い肘掛け椅子の少女』『母と子』",
        works: [
            { title: "青い肘掛け椅子の少女", searchQuery: "Mary Cassatt Little Girl in a Blue Armchair" },
            { title: "母と子", searchQuery: "Mary Cassatt Mother and Child" }
        ],
        evaluation: "母子の絆を温かく描いたアメリカ出身の画家。女性の社会的地位向上にも貢献しました。",
        personality: "独立心が強く意志堅固。家族愛を大切にしながらも、自己実現を追求する進歩的な性格です。"
    },
    cezanne: {
        name: "ポール・セザンヌ",
        icon: "🍎",
        masterpiece: "代表作：『サント＝ヴィクトワール山』『りんごとオレンジ』",
        works: [
            { title: "サント＝ヴィクトワール山", searchQuery: "Paul Cezanne Mont Sainte-Victoire" },
            { title: "りんごとオレンジ", searchQuery: "Paul Cezanne Apples and Oranges" }
        ],
        evaluation: "近代絵画の父。形態と色彩の本質を追求し、キュビズムへの道を開きました。",
        personality: "孤独を愛する求道者。芸術の真理を追求し続ける、頑固で真摯な性格です。"
    },
    vangogh: {
        name: "フィンセント・ファン・ゴッホ",
        icon: "🌻",
        masterpiece: "代表作：『ひまわり』『星月夜』",
        works: [
            { title: "ひまわり", searchQuery: "Vincent van Gogh Sunflowers" },
            { title: "星月夜", searchQuery: "Vincent van Gogh Starry Night" }
        ],
        evaluation: "情熱的な筆致と鮮烈な色彩で知られる天才画家。生前は評価されなかったが、後世に多大な影響を与えました。",
        personality: "情熱的で感情豊か。苦悩を抱えながらも芸術に全てを捧げる、純粋で激しい性格です。"
    },
    gauguin: {
        name: "ポール・ゴーギャン",
        icon: "🏝️",
        masterpiece: "代表作：『タヒチの女たち』『我々はどこから来たのか』",
        works: [
            { title: "タヒチの女たち", searchQuery: "Paul Gauguin Tahitian Women" },
            { title: "我々はどこから来たのか", searchQuery: "Paul Gauguin Where Do We Come From" }
        ],
        evaluation: "原始的な美と象徴性を追求した画家。タヒチで独自の芸術世界を確立しました。",
        personality: "冒険心旺盛で反骨精神がある。文明を離れ、原始的な美を求める自由な魂の持ち主です。"
    }
};

// 日本画家の質問ツリー（5階層）
const japaneseQuestionTree = {
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

// 絵画グループの質問ツリー（7階層）
const artMovementQuestionTree = {
    level: 1,
    question: "あなたが芸術で最も重視することは何ですか？",
    options: [
        {
            text: "秩序と調和、理性的な美",
            next: {
                level: 2,
                question: "どのような美を追求しますか？",
                options: [
                    {
                        text: "古代の理想美と完璧さ",
                        next: {
                            level: 3,
                            question: "どのように表現しますか？",
                            options: [
                                {
                                    text: "均整と調和を重視",
                                    next: {
                                        level: 4,
                                        question: "何を大切にしますか？",
                                        options: [
                                            {
                                                text: "理性と道徳性",
                                                next: {
                                                    level: 5,
                                                    question: "どんな構図を好みますか？",
                                                    options: [
                                                        {
                                                            text: "静的で均整の取れた構図",
                                                            next: {
                                                                level: 6,
                                                                question: "題材は何を選びますか？",
                                                                options: [
                                                                    {
                                                                        text: "神話や歴史",
                                                                        next: {
                                                                            level: 7,
                                                                            question: "最も共感する価値観は？",
                                                                            options: [
                                                                                { text: "理性と秩序", next: { result: "classicism" } },
                                                                                { text: "豪華さと権威", next: { result: "baroque" } }
                                                                            ]
                                                                        }
                                                                    },
                                                                    { text: "現実の人々", next: { result: "realism" } }
                                                                ]
                                                            }
                                                        },
                                                        { text: "動的で劇的な構図", next: { result: "baroque" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "豪華さと劇的表現",
                                                next: {
                                                    level: 5,
                                                    question: "どんな効果を狙いますか？",
                                                    options: [
                                                        { text: "強烈な明暗対比", next: { level: 6, question: "何を表現？", options: [
                                                            { text: "劇的な瞬間", next: { result: "baroque" } },
                                                            { text: "情熱と革命", next: { result: "romanticism" } }
                                                        ]}},
                                                        { text: "装飾的な華やかさ", next: { level: 6, question: "どんなスタイル？", options: [
                                                            { text: "金銀の装飾", next: { result: "rinpa" } },
                                                            { text: "物語絵", next: { result: "yamatoe" } }
                                                        ]}}
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    text: "写実的に正確に",
                                    next: {
                                        level: 4,
                                        question: "何を描きますか？",
                                        options: [
                                            {
                                                text: "現実をありのままに",
                                                next: {
                                                    level: 5,
                                                    question: "どんな現実？",
                                                    options: [
                                                        {
                                                            text: "労働者や庶民",
                                                            next: {
                                                                level: 6,
                                                                question: "どんな視点で？",
                                                                options: [
                                                                    { text: "社会批判的に", next: { level: 7, question: "何を重視？", options: [
                                                                        { text: "真実の追求", next: { result: "realism" } },
                                                                        { text: "光の表現", next: { result: "impressionism" } }
                                                                    ]}},
                                                                    { text: "温かく尊重して", next: { result: "realism" } }
                                                                ]
                                                            }
                                                        },
                                                        { text: "自然や動物", next: { result: "maruyama" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "動物や自然を観察",
                                                next: {
                                                    level: 5,
                                                    question: "どのように？",
                                                    options: [
                                                        { text: "写生を重視", next: { result: "maruyama" } },
                                                        { text: "装飾的に", next: { level: 6, question: "どんな装飾？", options: [
                                                            { text: "金銀を使って", next: { result: "rinpa" } },
                                                            { text: "物語的に", next: { result: "yamatoe" } }
                                                        ]}}
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
                        text: "日本の伝統美",
                        next: {
                            level: 3,
                            question: "どのような日本美術に惹かれますか？",
                            options: [
                                {
                                    text: "優美で装飾的",
                                    next: {
                                        level: 4,
                                        question: "どんなスタイル？",
                                        options: [
                                            {
                                                text: "物語絵と装飾性",
                                                next: {
                                                    level: 5,
                                                    question: "何を描きたいですか？",
                                                    options: [
                                                        {
                                                            text: "宮廷や貴族の世界",
                                                            next: {
                                                                level: 6,
                                                                question: "どんな表現？",
                                                                options: [
                                                                    { text: "優美な線描", next: { level: 7, question: "何を重視？", options: [
                                                                        { text: "物語性", next: { result: "yamatoe" } },
                                                                        { text: "装飾性", next: { result: "rinpa" } }
                                                                    ]}},
                                                                    { text: "金銀の装飾", next: { result: "rinpa" } }
                                                                ]
                                                            }
                                                        },
                                                        { text: "自然を装飾的に", next: { level: 6, question: "どのように？", options: [
                                                            { text: "大胆な構図で", next: { result: "rinpa" } },
                                                            { text: "写実的に", next: { result: "maruyama" } }
                                                        ]}}
                                                    ]
                                                }
                                            },
                                            {
                                                text: "庶民文化と版画",
                                                next: {
                                                    level: 5,
                                                    question: "何を表現しますか？",
                                                    options: [
                                                        { text: "風景や美人", next: { level: 6, question: "どんな雰囲気？", options: [
                                                            { text: "叙情的", next: { result: "ukiyoe" } },
                                                            { text: "奇抜", next: { result: "kisou" } }
                                                        ]}},
                                                        { text: "役者や物語", next: { result: "ukiyoe" } }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    text: "写実的で観察的",
                                    next: {
                                        level: 4,
                                        question: "何を重視しますか？",
                                        options: [
                                            {
                                                text: "自然観察と写生",
                                                next: {
                                                    level: 5,
                                                    question: "どんな題材？",
                                                    options: [
                                                        { text: "動物", next: { level: 6, question: "どのように？", options: [
                                                            { text: "リアルに", next: { result: "maruyama" } },
                                                            { text: "ユーモラスに", next: { result: "kisou" } }
                                                        ]}},
                                                        { text: "風景", next: { result: "maruyama" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "奇抜な発想",
                                                next: {
                                                    level: 5,
                                                    question: "どんな表現？",
                                                    options: [
                                                        { text: "幻想的", next: { result: "kisou" } },
                                                        { text: "ユーモラス", next: { result: "kisou" } }
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
            }
        },
        {
            text: "感情と想像力、革新的な表現",
            next: {
                level: 2,
                question: "どのような感情や世界を表現したいですか？",
                options: [
                    {
                        text: "情熱や劇的な感情",
                        next: {
                            level: 3,
                            question: "どのように表現しますか？",
                            options: [
                                {
                                    text: "ダイナミックで劇的に",
                                    next: {
                                        level: 4,
                                        question: "どんなスタイル？",
                                        options: [
                                            { text: "明暗対比と動き", next: { result: "baroque" } },
                                            { text: "情熱的な色彩", next: { result: "romanticism" } }
                                        ]
                                    }
                                },
                                {
                                    text: "鮮烈な色彩で",
                                    next: {
                                        level: 4,
                                        question: "何を重視しますか？",
                                        options: [
                                            { text: "野獣のような原色", next: { result: "fauvism" } },
                                            { text: "光の印象", next: { result: "impressionism" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "夢や無意識の世界",
                        next: {
                            level: 3,
                            question: "どのようなアプローチで？",
                            options: [
                                {
                                    text: "超現実的で幻想的",
                                    next: {
                                        level: 4,
                                        question: "どんな世界？",
                                        options: [
                                            { text: "夢と無意識", next: { result: "surrealism" } },
                                            { text: "奇想天外", next: { result: "kisou" } }
                                        ]
                                    }
                                },
                                {
                                    text: "抒情的で個性的",
                                    next: {
                                        level: 4,
                                        question: "どのように？",
                                        options: [
                                            { text: "パリの国際的雰囲気", next: { result: "ecoledeparis" } },
                                            { text: "抽象的な感情", next: { result: "abstractexpressionism" } }
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
            text: "形態の革新と抽象化",
            next: {
                level: 2,
                question: "どのような革新を目指しますか？",
                options: [
                    {
                        text: "形態の分解と再構成",
                        next: {
                            level: 3,
                            question: "どのようなアプローチ？",
                            options: [
                                {
                                    text: "幾何学的に分析",
                                    next: {
                                        level: 4,
                                        question: "何を追求しますか？",
                                        options: [
                                            { text: "多視点の同時表現", next: { result: "cubism" } },
                                            { text: "純粋な色彩と形態", next: { result: "abstractexpressionism" } }
                                        ]
                                    }
                                },
                                {
                                    text: "色彩を解放",
                                    next: {
                                        level: 4,
                                        question: "どのように？",
                                        options: [
                                            { text: "野獣のような強烈さ", next: { result: "fauvism" } },
                                            { text: "光の分解", next: { result: "impressionism" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "完全な抽象化",
                        next: {
                            level: 3,
                            question: "何を表現しますか？",
                            options: [
                                {
                                    text: "純粋な感情",
                                    next: {
                                        level: 4,
                                        question: "どのように？",
                                        options: [
                                            { text: "身体的な制作過程", next: { result: "abstractexpressionism" } },
                                            { text: "幾何学的構成", next: { result: "cubism" } }
                                        ]
                                    }
                                },
                                {
                                    text: "光と色彩の印象",
                                    next: {
                                        level: 4,
                                        question: "どんなスタイル？",
                                        options: [
                                            { text: "一瞬の光", next: { result: "impressionism" } },
                                            { text: "強烈な色彩", next: { result: "fauvism" } }
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

// 世界の画家の質問ツリー（7階層）
const worldQuestionTree = {
    level: 1,
    question: "あなたが芸術で表現したいものは何ですか？",
    options: [
        {
            text: "現実世界の美しさや真実",
            next: {
                level: 2,
                question: "どのような現実を描きたいですか？",
                options: [
                    {
                        text: "日常の静かな美しさ",
                        next: {
                            level: 3,
                            question: "どんな題材に惹かれますか？",
                            options: [
                                {
                                    text: "室内の光と静寂",
                                    next: {
                                        level: 4,
                                        question: "どのように表現しますか？",
                                        options: [
                                            {
                                                text: "繊細な光の表現で",
                                                next: {
                                                    level: 5,
                                                    question: "何を大切にしますか？",
                                                    options: [
                                                        {
                                                            text: "瞑想的な静けさ",
                                                            next: {
                                                                level: 6,
                                                                question: "あなたの性格は？",
                                                                options: [
                                                                    { text: "内省的で静か", next: { level: 7, question: "最も共感する価値観は？", options: [
                                                                        { text: "日常の中の永遠", next: { result: "vermeer" } },
                                                                        { text: "労働の尊厳", next: { result: "millet" } }
                                                                    ]}},
                                                                    { text: "観察眼が鋭い", next: { result: "velazquez" } }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            text: "科学的な正確さ",
                                                            next: { result: "signac" }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "ありのままの現実で",
                                                next: {
                                                    level: 5,
                                                    question: "何を描きたいですか？",
                                                    options: [
                                                        { text: "労働する人々", next: { level: 6, question: "どんな視点で？", options: [
                                                            { text: "温かく尊重して", next: { result: "millet" } },
                                                            { text: "率直に現実的に", next: { result: "courbet" } }
                                                        ]}},
                                                        { text: "宮廷や権力者", next: { result: "velazquez" } }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    text: "街の風景",
                                    next: {
                                        level: 4,
                                        question: "どんな街を描きますか？",
                                        options: [
                                            {
                                                text: "パリの街並み",
                                                next: {
                                                    level: 5,
                                                    question: "どんな雰囲気で？",
                                                    options: [
                                                        { text: "哀愁と孤独", next: { level: 6, question: "あなたの心境は？", options: [
                                                            { text: "憂鬱で孤独", next: { result: "utrillo" } },
                                                            { text: "異国での郷愁", next: { result: "foujita" } }
                                                        ]}},
                                                        { text: "科学的な色彩", next: { result: "signac" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "理想化せず現実を",
                                                next: { result: "courbet" }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "情熱や感情の爆発",
                        next: {
                            level: 3,
                            question: "どのような感情を表現したいですか？",
                            options: [
                                {
                                    text: "革命と自由への情熱",
                                    next: {
                                        level: 4,
                                        question: "どのように表現しますか？",
                                        options: [
                                            { text: "劇的で力強く", next: { level: 5, question: "何を描きますか？", options: [
                                                { text: "革命と戦い", next: { result: "delacroix" } },
                                                { text: "戦争の悲劇", next: { result: "picasso" } }
                                            ]}},
                                            { text: "色彩の喜びで", next: { result: "matisse" } }
                                        ]
                                    }
                                },
                                {
                                    text: "不安や孤独",
                                    next: {
                                        level: 4,
                                        question: "どう表現しますか？",
                                        options: [
                                            { text: "強烈な色彩で叫ぶ", next: { level: 5, question: "あなたの性格は？", options: [
                                                { text: "繊細で神経質", next: { result: "munch" } },
                                                { text: "情熱的で悲劇的", next: { result: "modigliani" } }
                                            ]}},
                                            { text: "精神性と苦悩", next: { result: "rouault" } }
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
            text: "内面世界や想像の世界",
            next: {
                level: 2,
                question: "どのような内面世界を表現したいですか？",
                options: [
                    {
                        text: "夢と無意識の世界",
                        next: {
                            level: 3,
                            question: "どのようなアプローチで？",
                            options: [
                                {
                                    text: "奇想天外で衝撃的",
                                    next: {
                                        level: 4,
                                        question: "どんなスタイルで？",
                                        options: [
                                            {
                                                text: "精緻で写実的に",
                                                next: {
                                                    level: 5,
                                                    question: "何を描きますか？",
                                                    options: [
                                                        { text: "溶ける時計など奇妙な物", next: { level: 6, question: "あなたの性格は？", options: [
                                                            { text: "奇抜で演劇的", next: { result: "dali" } },
                                                            { text: "知的でウィット", next: { result: "magritte" } }
                                                        ]}},
                                                        { text: "形而上的な空間", next: { result: "chirico" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "詩的で日常的に",
                                                next: {
                                                    level: 5,
                                                    question: "何を表現しますか？",
                                                    options: [
                                                        { text: "日常の不思議", next: { result: "magritte" } },
                                                        { text: "愛と夢", next: { level: 6, question: "どんなテーマ？", options: [
                                                            { text: "故郷と愛", next: { result: "chagall" } },
                                                            { text: "美と愛", next: { result: "modigliani" } }
                                                        ]}}
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    text: "神秘的で哲学的",
                                    next: {
                                        level: 4,
                                        question: "何を探求しますか？",
                                        options: [
                                            { text: "形而上学的な謎", next: { level: 5, question: "どう表現？", options: [
                                                { text: "静寂な広場", next: { result: "chirico" } },
                                                { text: "精神性と信仰", next: { result: "rouault" } }
                                            ]}},
                                            { text: "愛と郷愁", next: { result: "chagall" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "抽象的な美と本質",
                        next: {
                            level: 3,
                            question: "何を追求しますか？",
                            options: [
                                {
                                    text: "色彩と形態の純粋性",
                                    next: {
                                        level: 4,
                                        question: "どのようなアプローチ？",
                                        options: [
                                            {
                                                text: "音楽的で精神的",
                                                next: {
                                                    level: 5,
                                                    question: "何を重視しますか？",
                                                    options: [
                                                        { text: "理論と精神性", next: { level: 6, question: "あなたのスタイルは？", options: [
                                                            { text: "哲学的で体系的", next: { result: "kandinsky" } },
                                                            { text: "詩的で繊細", next: { result: "klee" } }
                                                        ]}},
                                                        { text: "生命の喜び", next: { result: "matisse" } }
                                                    ]
                                                }
                                            },
                                            {
                                                text: "革新的で破壊的",
                                                next: {
                                                    level: 5,
                                                    question: "何を目指しますか？",
                                                    options: [
                                                        { text: "絵画の革命", next: { level: 6, question: "どんな方法で？", options: [
                                                            { text: "キュビズム", next: { result: "picasso" } },
                                                            { text: "色彩の解放", next: { result: "matisse" } }
                                                        ]}},
                                                        { text: "東西の融合", next: { result: "foujita" } }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    text: "詩的で童話的な世界",
                                    next: {
                                        level: 4,
                                        question: "どんな世界？",
                                        options: [
                                            { text: "子供のような純粋さ", next: { level: 5, question: "何を表現？", options: [
                                                { text: "音楽と詩", next: { result: "klee" } },
                                                { text: "愛と夢", next: { result: "chagall" } }
                                            ]}},
                                            { text: "科学と芸術", next: { result: "signac" } }
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

// 浮世絵の質問ツリー（5階層）
const ukiyoeQuestionTree = {
    level: 1,
    question: "あなたが最も描きたいものは何ですか？",
    options: [
        {
            text: "風景や自然の美しさ",
            next: {
                level: 2,
                question: "どのような風景に惹かれますか？",
                options: [
                    {
                        text: "雄大で力強い自然",
                        next: {
                            level: 3,
                            question: "どのように表現したいですか？",
                            options: [
                                {
                                    text: "革新的な構図で",
                                    next: {
                                        level: 4,
                                        question: "あなたの創作姿勢は？",
                                        options: [
                                            { text: "生涯挑戦し続ける", next: { result: "hokusai" } },
                                            { text: "独自の視点を追求", next: { result: "oei" } }
                                        ]
                                    }
                                },
                                {
                                    text: "叙情的に",
                                    next: {
                                        level: 4,
                                        question: "何を大切にしますか？",
                                        options: [
                                            { text: "旅情と詩情", next: { result: "hiroshige" } },
                                            { text: "幻想と劇的表現", next: { result: "yoshitoshi" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "街道や名所",
                        next: {
                            level: 3,
                            question: "どんな雰囲気を出したいですか？",
                            options: [
                                {
                                    text: "旅の情緒",
                                    next: {
                                        level: 4,
                                        question: "どちらの街道を選びますか？",
                                        options: [
                                            { text: "東海道", next: { result: "hiroshige" } },
                                            { text: "木曽街道", next: { result: "eisen" } }
                                        ]
                                    }
                                },
                                {
                                    text: "江戸の賑わい",
                                    next: {
                                        level: 4,
                                        question: "何を描きたいですか？",
                                        options: [
                                            { text: "名所と風俗", next: { result: "hiroshige" } },
                                            { text: "人々の暮らし", next: { result: "moronobu" } }
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
            text: "人物の魅力",
            next: {
                level: 2,
                question: "どのような人物を描きたいですか？",
                options: [
                    {
                        text: "美人や女性",
                        next: {
                            level: 3,
                            question: "どのような美しさを表現したいですか？",
                            options: [
                                {
                                    text: "内面まで表現する繊細な美",
                                    next: {
                                        level: 4,
                                        question: "どんなスタイルで？",
                                        options: [
                                            { text: "心理描写を重視", next: { result: "utamaro" } },
                                            { text: "優美で詩的に", next: { result: "harunobu" } }
                                        ]
                                    }
                                },
                                {
                                    text: "理想的なプロポーション",
                                    next: {
                                        level: 4,
                                        question: "どのような美人像？",
                                        options: [
                                            { text: "健康的で優雅", next: { result: "kiyonaga" } },
                                            { text: "妖艶で官能的", next: { result: "eisen" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "役者や個性的な人物",
                        next: {
                            level: 3,
                            question: "何を重視しますか？",
                            options: [
                                {
                                    text: "人物の本質や個性",
                                    next: {
                                        level: 4,
                                        question: "どのように捉えますか？",
                                        options: [
                                            { text: "鋭く大胆に", next: { result: "sharaku" } },
                                            { text: "ユーモアを込めて", next: { result: "kuniyoshi" } }
                                        ]
                                    }
                                },
                                {
                                    text: "物語性やドラマ",
                                    next: {
                                        level: 4,
                                        question: "どんなテーマ？",
                                        options: [
                                            { text: "武者や怪談", next: { result: "kuniyoshi" } },
                                            { text: "幻想と月", next: { result: "yoshitoshi" } }
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

// 印象派の質問ツリー（5階層）
const impressionismQuestionTree = {
    level: 1,
    question: "あなたが絵を描くとき、何を最も大切にしますか？",
    options: [
        {
            text: "光と色彩の美しさ",
            next: {
                level: 2,
                question: "どのような光を捉えたいですか？",
                options: [
                    {
                        text: "自然の移ろいゆく光",
                        next: {
                            level: 3,
                            question: "どんな風景に惹かれますか？",
                            options: [
                                {
                                    text: "水辺や庭園",
                                    next: {
                                        level: 4,
                                        question: "どのように表現したいですか？",
                                        options: [
                                            { text: "一つのテーマを徹底的に", next: { result: "monet" } },
                                            { text: "静謐で詩的に", next: { result: "sisley" } }
                                        ]
                                    }
                                },
                                {
                                    text: "都市や農村",
                                    next: {
                                        level: 4,
                                        question: "何を描きたいですか？",
                                        options: [
                                            { text: "人々の暮らしと風景", next: { result: "pissarro" } },
                                            { text: "形態の本質", next: { result: "cezanne" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "人生の喜びと輝き",
                        next: {
                            level: 3,
                            question: "何を描きたいですか？",
                            options: [
                                {
                                    text: "人々の幸せな瞬間",
                                    next: {
                                        level: 4,
                                        question: "どんな雰囲気を大切にしますか？",
                                        options: [
                                            { text: "陽気で華やか", next: { result: "renoir" } },
                                            { text: "親密で温かい", next: { result: "morisot" } }
                                        ]
                                    }
                                },
                                {
                                    text: "家族の絆",
                                    next: {
                                        level: 4,
                                        question: "どのように表現しますか？",
                                        options: [
                                            { text: "母子の愛情を中心に", next: { result: "cassatt" } },
                                            { text: "日常の美しさを", next: { result: "morisot" } }
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
            text: "内面の感情や真実",
            next: {
                level: 2,
                question: "どのような真実を追求しますか？",
                options: [
                    {
                        text: "動きと瞬間の真実",
                        next: {
                            level: 3,
                            question: "何を観察したいですか？",
                            options: [
                                {
                                    text: "人間の動き",
                                    next: {
                                        level: 4,
                                        question: "どんな姿勢で臨みますか？",
                                        options: [
                                            { text: "完璧主義で厳格に", next: { result: "degas" } },
                                            { text: "情熱的に全力で", next: { result: "vangogh" } }
                                        ]
                                    }
                                },
                                {
                                    text: "芸術の本質",
                                    next: {
                                        level: 4,
                                        question: "どこに真実を求めますか？",
                                        options: [
                                            { text: "形態と構造の中に", next: { result: "cezanne" } },
                                            { text: "原始的な美の中に", next: { result: "gauguin" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "魂の叫びと情熱",
                        next: {
                            level: 3,
                            question: "何を表現したいですか？",
                            options: [
                                {
                                    text: "激しい感情",
                                    next: {
                                        level: 4,
                                        question: "どのように生きたいですか？",
                                        options: [
                                            { text: "芸術に全てを捧げて", next: { result: "vangogh" } },
                                            { text: "自由を求めて", next: { result: "gauguin" } }
                                        ]
                                    }
                                },
                                {
                                    text: "象徴と神秘",
                                    next: {
                                        level: 4,
                                        question: "どこに美を見出しますか？",
                                        options: [
                                            { text: "異文化の中に", next: { result: "gauguin" } },
                                            { text: "孤独な探求の中に", next: { result: "cezanne" } }
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

let currentNode = null;
let questionHistory = [];

// グループ選択
function selectGroup(group) {
    currentGroup = group;
    document.getElementById('group-title').textContent = groupInfo[group].title;
    document.getElementById('group-description').textContent = groupInfo[group].description;
    showScreen('start-screen');
}

// グループ選択画面に戻る
function backToGroupSelect() {
    showScreen('group-select-screen');
}

function startTest() {
    showScreen('question-screen');
    if (currentGroup === 'japanese') {
        currentNode = japaneseQuestionTree;
    } else if (currentGroup === 'impressionism') {
        currentNode = impressionismQuestionTree;
    } else if (currentGroup === 'ukiyoe') {
        currentNode = ukiyoeQuestionTree;
    } else if (currentGroup === 'world') {
        currentNode = worldQuestionTree;
    } else if (currentGroup === 'artmovement') {
        currentNode = artMovementQuestionTree;
    }
    questionHistory = [];
    displayQuestion();
}

function displayQuestion() {
    const maxLevel = (currentGroup === 'world' || currentGroup === 'artmovement') ? 7 : 5;
    const progress = (currentNode.level / maxLevel) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    document.getElementById('question-text').textContent = currentNode.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentNode.options.forEach((option) => {
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
    let artists;
    if (currentGroup === 'japanese') {
        artists = japaneseArtists;
    } else if (currentGroup === 'impressionism') {
        artists = impressionismArtists;
    } else if (currentGroup === 'ukiyoe') {
        artists = ukiyoeArtists;
    } else if (currentGroup === 'world') {
        artists = worldArtists;
    } else if (currentGroup === 'artmovement') {
        artists = artMovements;
    }
    const artist = artists[artistKey];
    const resultContent = document.getElementById('result-content');
    
    // 絵画グループの場合は特別な表示
    if (currentGroup === 'artmovement') {
        const artistsLinks = artist.artists.map(a => {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(a.searchQuery)}&tbm=isch`;
            return `<a href="${googleSearchUrl}" target="_blank" class="work-link">${a.name}</a>`;
        }).join('、');
        
        resultContent.innerHTML = `
            <div class="artist-result">
                <h2>あなたは${artist.name}タイプ！</h2>
                <div class="artist-portrait">${artist.icon}</div>
                <div class="artist-info">
                    <h3>概要</h3>
                    <p>${artist.description}</p>
                    <h3>特徴</h3>
                    <p>${artist.characteristics}</p>
                    <h3>代表的な画家</h3>
                    <p class="works-links">${artistsLinks}</p>
                    <h3>詳細情報</h3>
                    <p><a href="${artist.detailLink}" target="_blank" class="detail-link">→ ${artist.name}について詳しく見る</a></p>
                </div>
            </div>
        `;
    } else {
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
    }
    
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
