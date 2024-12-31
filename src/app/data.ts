export interface GameContent {
  variables: {
    "方向": string[];
    "數字": string[];
    "身體部位": string[];
    "動作1": string[];
    "動作2": string[];
    "情緒": string[];
    "台詞": string[];
    "好笑的劇情": string[];
    "動物": string[];
    "部位": string[];
    "字詞": string[];
    "語言": string[];
  };
  categories: {
    id: string;
    name: string;
    templates: string[];
  }[];
}

export const gameContent: GameContent = {
  variables: {
    "動作1": [
      "跳",
      "蹲",
      "伏地挺身",
      "仰臥起坐",
      "開合跳",
      "瑪利歐跳",
      "高抬腿跑",
      "深蹲跳",
      "站立摸腳踝",
      "踢腿伸展",
      "前彎伸展", 
      "波比跳",
      "原地踢腿",
      "腳踝旋轉",
      "俄羅斯踢腿舞",
      "假裝跳繩",
      "原地游泳",
      "無重力跑",
      "超慢動作波比跳",
      "模仿機器人",
      "原地挖地",
      "假裝拍蚊子",
      "鴨子步走"
    ],
    "動作2": [
      "跳舞",
      "蹲走",
      "倒退走",
      "芭雷舞轉圈圈走",
      "模仿企鵝走路",
      "假裝溜冰",
      "大步跨跳", 
      "瘋狂搖擺跑",
      "模仿螃蟹橫著走",
      "模仿忍者偷偷走",
      "夸張的慢動作走",
      "扮演醉漢的踉蹌走",
      "旋轉跳躍前進",
      "模仿蜘蛛爬行",
      "學袋鼠跳跳走",
      "假裝撿硬幣",
      "原地慢跑移動",
      "小步快走",
      "學馬步慢慢走",
      "假裝打保齡球跑"
    ],
    "方向": [
      "左邊",
      "右邊"
    ],
    "數字": [
      "1", "2", "3", "4", "5",
      "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15",
      "16", "17", "18", "19", "20"
    ],
    "情緒": [
      "開心",
      "生氣",
      "傷心",
      "驚訝",
      "害羞",
      "憤怒",
      "激動",
      "感動",
      "興奮",
      "沮喪",
      "恐懼",
      "緊張", 
      "安慰",
      "滿足",
      "嫉妒",
      "慚愧",
      "孤單",
      "困惑",
      "絕望",
      "感激",
      "煩躁",
      "樂觀",
      "疲憊", 
      "驚嚇",
      "輕鬆",
      "愉快",
      "悔恨",
      "欣慰",
      "懷疑",
      "失望"
    ],
    "台詞": [
      "你是我的偶像",
      "你是我的神",
      "你是我的最愛",
      "世人笑我太瘋癲，我笑他人看不穿 - 唐伯虎點秋香",
      "小強！小強你怎麼了小強？小強你不能死啊！ - 唐伯虎點秋香",
      "我跳出來，又站回去了！你打我啊，笨蛋！ - 九品芝麻官",
      "像這種要求，我這輩子沒聽過！ - 九品芝麻官",
      "做人如果沒有夢想，那跟鹹魚有什麼分別！ - 少林足球",
      "你快點回火星吧，地球是很危險的！ - 少林足球",
      "人是人他媽生的，妖是妖他媽生的，只要你有一顆善良的心，就不再是妖，而是人妖！ - 大話西遊之月光寶盒",
      "貧僧乃少林寺方丈，法號夢遺，阿彌陀佛！ - 食神",
      "賤人就是矯情 - 甄嬛傳.華妃",
      "容不容得下嬪妾，是娘娘的氣度；能不能讓娘娘容下，是嬪妾的本事 - 甄嬛傳.甄嬛",
      "我就是笨蛋啦！大笨蛋才能追你那麼久！ - 那些年，我們一起追的女孩",
      "可是瑞凡，我們回不去了 - 犀利人妻.謝安真",
      "在愛情的世界裡，不被愛的那個才是第三者 - 犀利人妻.黎薇恩",
      "如果非要在這份愛加上一個期限，我希望是一萬年 - 大話西遊.至尊寶"
    ],
    "好笑的劇情": [
      "我是一隻小小小小鳥，我要飛得更高更高～",
      "我是超人，我要拯救地球！",
      "我是一隻可愛的小貓咪，喵喵喵～",
      "我是優雅的芭蕾舞者，我要旋轉跳躍～", 
      "我是宇宙無敵美少女戰士，我要消滅邪惡！",
      "我是忍者，我要成為火影！",
      "我是鋼鐵人，我要開著裝甲飛行！",
      "我是小智，我要成為寶可夢大師！",
      "我是幽默達人，我要讓全世界哈哈大笑！",
      "我是小智，去吧皮卡丘！",
      "我是旋渦名人，我我要成為火影！",
      "我是美少女戰士，我要代表月亮懲罰你！",
      "我是小魔女DoReMi，霹靂卡霹靂拉拉 波波力那貝貝魯多，一起來變身吧！",
      "我是魯夫，我是要成為海賊王的男人！"
    ],
    "身體部位": [
      "鼻子",
      "嘴巴",
      "耳朵",
      "手",
      "無名指",
      "腳",
      "額頭",
      "眉毛",
      "下巴",
      "左膝蓋",
      "右膝蓋",
      "左腳",
      "右腳",
      "左腳踝",
      "右腳踝"
    ],
    "動物": [
      "猴子",
      "企鵝",
      "雞",
      "狗",
      "貓",
      "兔子",
      "大象",
      "獅子",
      "老虎",
      "熊貓",
      "鴨子",
      "鳥",
      "烏龜", 
      "老鼠",
      "牛",
      "綿羊",
      "馬",
      "鵝",
      "豬",
      "青蛙",
      "龜",
      "蟑螂",
      "蚊子",
      "螞蟻",
      "蜘蛛",
      "熊",
      "狐狸",
      "松鼠",
      "袋鼠",
      "長頸鹿",
      "毛毛蟲"
    ],
    "部位": [
      "鼻子",
      "手肘",
      "膝蓋",
      "腳",
      "手指",
      "手掌",
      "腳趾"
    ],
    "字詞": [
      "愛",
      "樂",
      "開心",
      "快樂",
      "幸福",
      "美",
      "帥",
      "讚",
      "棒",
      "酷",
      "可愛",
      "漂亮",
      "帥氣",
      "可愛",
      "漂亮",
      "帥氣"
    ],
    "語言": [
      "台語",
      "英文",
      "火星文"
    ]
  },
  categories: [
    {
      id: "sports",
      name: "運動題",
      templates: [
        "{動作1}{數字}下/次",
        "用{動作2}繞場一圈"
      ]
    },
    {
      id: "performance",
      name: "表演題",
      templates: [
        "用{情緒}的表情對{方向}數第{數字}個人說：{台詞}",
        "大聲說出：{好笑的劇情}",
        "對{方向}數第{數字}個人用{語言}說：{台詞}"
      ]
    },
    {
      id: "interaction",
      name: "互動題",
      templates: [
        "對{方向}數第{數字}個人，誇獎他的{身體部位}10秒",
        "對{方向}數第{數字}個人，恭喜他的{身體部位}10秒",
        "對{方向}數第{數字}個人，說出他的三個特色點"
      ]
    },
    {
      id: "challenge",
      name: "挑戰題",
      templates: [
        "模仿{動物}的動作（叫聲）走一圈",
        "用{部位}寫出{字詞}",
        "用{動作1}的動作和{方向}數第{數字}個人玩剪刀石頭布,直到獲勝"
      ]
    }
  ]
}; 
