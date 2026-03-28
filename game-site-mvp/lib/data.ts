// 模拟游戏数据库 - 50个游戏
export interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  rating: number;
  playCount: number;
  isNew?: boolean;
}

export const games: Game[] = [
  {
    id: 1,
    title: "2048",
    slug: "2048",
    description: "经典数字益智游戏，通过滑动合并数字，目标是得到2048。简单上瘾，停不下来！",
    category: "益智",
    tags: ["数字", "消除", "休闲"],
    thumbnail: "🔢",
    rating: 4.9,
    playCount: 125000
  },
  {
    id: 2,
    title: "割绳子",
    slug: "cut-the-rope",
    description: "帮助小怪物Om Nom吃到糖果的物理解谜游戏。切断绳子，利用物理原理送达糖果！",
    category: "益智",
    tags: ["物理", "解谜", "可爱"],
    thumbnail: "🍬",
    rating: 4.8,
    playCount: 98000
  },
  {
    id: 3,
    title: "俄罗斯方块",
    slug: "tetris",
    description: "永恒的经典！旋转、移动、消除，挑战你的反应速度和空间思维。",
    category: "益智",
    tags: ["经典", "消除", "街机"],
    thumbnail: "🎲",
    rating: 4.7,
    playCount: 156000
  },
  {
    id: 4,
    title: "贪吃蛇",
    slug: "snake",
    description: "诺基亚时代的经典重现！控制小蛇吃食物，不要撞墙或咬到自己。",
    category: "休闲",
    tags: ["经典", "街机", "怀旧"],
    thumbnail: "🐍",
    rating: 4.6,
    playCount: 89000
  },
  {
    id: 5,
    title: "极速赛车",
    slug: "racing-car",
    description: "体验速度与激情！在赛道上飞驰，超越对手，成为冠军。",
    category: "竞速",
    tags: ["赛车", "街机", "竞速"],
    thumbnail: "🏎️",
    rating: 4.5,
    playCount: 67000
  },
  {
    id: 6,
    title: "飞机大战",
    slug: "plane-war",
    description: "经典飞行射击游戏！驾驶战机，消灭敌机，保卫领空。",
    category: "射击",
    tags: ["飞行", "射击", "街机"],
    thumbnail: "✈️",
    rating: 4.7,
    playCount: 72000
  },
  {
    id: 7,
    title: "打砖块",
    slug: "breakout",
    description: "控制挡板反弹小球，击碎所有砖块。简单上手，难以精通！",
    category: "动作",
    tags: ["街机", "球", "经典"],
    thumbnail: "🧱",
    rating: 4.4,
    playCount: 54000
  },
  {
    id: 8,
    title: "Flappy Bird",
    slug: "flappy-bird",
    description: "点击屏幕让小鸟飞翔，穿过管道。看似简单，极具挑战性！",
    category: "休闲",
    tags: ["飞行", "街机", "挑战"],
    thumbnail: "🐦",
    rating: 4.3,
    playCount: 110000
  },
  {
    id: 9,
    title: "五子棋",
    slug: "gomoku",
    description: "经典双人对弈游戏。五子连线即为胜，考验策略与预判。",
    category: "益智",
    tags: ["棋类", "双人", "策略"],
    thumbnail: "⚫",
    rating: 4.6,
    playCount: 45000
  },
  {
    id: 10,
    title: "坦克大战",
    slug: "tank-battle",
    description: "驾驶坦克消灭敌人，保卫基地。经典红白机游戏重现！",
    category: "动作",
    tags: ["射击", "街机", "怀旧"],
    thumbnail: "🪖",
    rating: 4.5,
    playCount: 58000
  },
  {
    id: 11,
    title: "泡泡龙",
    slug: "bubble-shooter",
    description: "发射彩色泡泡，三个相同颜色即可消除。轻松解压，老少皆宜。",
    category: "益智",
    tags: ["消除", "射击", "休闲"],
    thumbnail: "🫧",
    rating: 4.6,
    playCount: 63000
  },
  {
    id: 12,
    title: "消消乐",
    slug: "match-3",
    description: "交换相邻元素，三个以上相同即可消除。连击获得高分！",
    category: "益智",
    tags: ["消除", "三消", "休闲"],
    thumbnail: "💎",
    rating: 4.5,
    playCount: 82000
  },
  // 新游戏标记
  {
    id: 13,
    title: "射箭大师",
    slug: "archery-master",
    description: "瞄准靶心，控制力度和风向，成为射箭高手！",
    category: "动作",
    tags: ["射击", "体育", "精准"],
    thumbnail: "🎯",
    rating: 4.4,
    playCount: 12000,
    isNew: true
  },
  {
    id: 14,
    title: "拼图乐园",
    slug: "jigsaw-puzzle",
    description: "拖拽拼图碎片，完成美丽图画。多种难度可选。",
    category: "益智",
    tags: ["拼图", "图片", "休闲"],
    thumbnail: "🧩",
    rating: 4.3,
    playCount: 8900,
    isNew: true
  },
  {
    id: 15,
    title: "跑酷达人",
    slug: "parkour-runner",
    description: "在屋顶间跳跃奔跑，躲避障碍，收集金币！",
    category: "跑酷",
    tags: ["跳跃", "反应", "街机"],
    thumbnail: "🏃",
    rating: 4.5,
    playCount: 15600,
    isNew: true
  },
  {
    id: 16,
    title: "足球小将",
    slug: "soccer-star",
    description: "点球大战！控制角度和力度，击败守门员。",
    category: "体育",
    tags: ["足球", "体育", "竞技"],
    thumbnail: "⚽",
    rating: 4.4,
    playCount: 21300,
    isNew: true
  },
  {
    id: 17,
    title: "桌球大师",
    slug: "billiard-master",
    description: "经典8球玩法，精准控制杆法和力度，一杆清台！",
    category: "体育",
    tags: ["台球", "物理", "竞技"],
    thumbnail: "🎱",
    rating: 4.6,
    playCount: 34000
  },
  {
    id: 18,
    title: "乒乓球",
    slug: "ping-pong",
    description: "快节奏的乒乓球对战！反应速度决定胜负。",
    category: "体育",
    tags: ["球类", "双人", "反应"],
    thumbnail: "🏓",
    rating: 4.4,
    playCount: 28000
  },
  {
    id: 19,
    title: "推箱子",
    slug: "sokoban",
    description: "经典推箱子 puzzle！把箱子推到目标位置，考验逻辑思维。",
    category: "益智",
    tags: ["解谜", "逻辑", "经典"],
    thumbnail: "📦",
    rating: 4.5,
    playCount: 39000
  },
  {
    id: 20,
    title: "数独",
    slug: "sudoku",
    description: "数字填充游戏，每行每列每宫都不能重复。多种难度可选。",
    category: "益智",
    tags: ["数字", "逻辑", "解谜"],
    thumbnail: "🔢",
    rating: 4.7,
    playCount: 52000
  },
  {
    id: 21,
    title: "黄金矿工",
    slug: "gold-miner",
    description: "控制钩子抓取金矿和钻石，避开石头，在限时内获得目标金额！",
    category: "休闲",
    tags: ["挖矿", "街机", "经典"],
    thumbnail: "⛏️",
    rating: 4.6,
    playCount: 75000
  },
  {
    id: 22,
    title: "弹球",
    slug: "pinball",
    description: "经典弹球机！控制挡板，让球尽可能长时间保持在台上。",
    category: "休闲",
    tags: ["物理", "街机", "复古"],
    thumbnail: "⚡",
    rating: 4.3,
    playCount: 31000
  },
  {
    id: 23,
    title: "扫雷",
    slug: "minesweeper",
    description: "经典Windows游戏！根据数字提示找出所有地雷，不要踩雷！",
    category: "益智",
    tags: ["逻辑", "经典", "Windows"],
    thumbnail: "💣",
    rating: 4.5,
    playCount: 48000
  },
  {
    id: 24,
    title: "纸牌接龙",
    slug: "solitaire",
    description: "最经典的纸牌游戏！按规则整理纸牌，全部翻开即为胜利。",
    category: "棋牌",
    tags: ["纸牌", "经典", "休闲"],
    thumbnail: "🃏",
    rating: 4.6,
    playCount: 65000
  },
  // 新增游戏
  {
    id: 25,
    title: "吃豆人",
    slug: "pacman",
    description: "街机游戏传奇！吃掉所有豆子，躲避幽灵，吃完大力丸可以反吃幽灵！",
    category: "街机",
    tags: ["经典", "街机", "怀旧"],
    thumbnail: "👾",
    rating: 4.8,
    playCount: 92000
  },
  {
    id: 26,
    title: "地铁跑酷",
    slug: "subway-surfers",
    description: "在铁轨上飞奔，躲避列车和障碍物，收集金币和道具！",
    category: "跑酷",
    tags: ["跑酷", "反应", "街机"],
    thumbnail: "🛹",
    rating: 4.5,
    playCount: 88000
  },
  {
    id: 27,
    title: "跳一跳",
    slug: "jump-jump",
    description: "按住屏幕控制力度，从一个平台跳到另一个平台，看你能跳多远！",
    category: "休闲",
    tags: ["休闲", "反应", "挑战"],
    thumbnail: "🦘",
    rating: 4.3,
    playCount: 76000
  },
  {
    id: 28,
    title: "水果忍者",
    slug: "fruit-ninja",
    description: "滑动屏幕切开水果，避开炸弹，挑战你的反应极限！",
    category: "动作",
    tags: ["切水果", "反应", "街机"],
    thumbnail: "🥷",
    rating: 4.6,
    playCount: 83000
  },
  {
    id: 29,
    title: "愤怒的小鸟",
    slug: "angry-birds",
    description: "发射小鸟击倒猪猪堡垒，利用物理原理完成挑战！",
    category: "益智",
    tags: ["物理", "弹射", "策略"],
    thumbnail: "🐦",
    rating: 4.7,
    playCount: 95000
  },
  {
    id: 30,
    title: "接龙",
    slug: "spider-solitaire",
    description: "经典蜘蛛纸牌，按顺序排列纸牌，全部整理完成即可胜利。",
    category: "棋牌",
    tags: ["纸牌", "经典", "休闲"],
    thumbnail: "🕷️",
    rating: 4.4,
    playCount: 42000
  },
  {
    id: 31,
    title: "国际象棋",
    slug: "chess",
    description: "王者之战！与AI对弈，提升你的棋艺水平。",
    category: "策略",
    tags: ["棋类", "策略", "对战"],
    thumbnail: "♟️",
    rating: 4.7,
    playCount: 56000
  },
  {
    id: 32,
    title: "中国象棋",
    slug: "chinese-chess",
    description: "楚河汉界，运筹帷幄。经典中国象棋对战！",
    category: "策略",
    tags: ["棋类", "策略", "经典"],
    thumbnail: "🏮",
    rating: 4.6,
    playCount: 48000
  },
  {
    id: 33,
    title: "连连看",
    slug: "link-link",
    description: "找出相同的图案，用不超过三条直线连接消除。经典休闲游戏！",
    category: "休闲",
    tags: ["消除", "眼力", "休闲"],
    thumbnail: "🔗",
    rating: 4.4,
    playCount: 71000
  },
  {
    id: 34,
    title: "祖玛",
    slug: "zuma",
    description: "发射彩球消除链条，阻止珠子进入洞口。经典消除游戏！",
    category: "益智",
    tags: ["消除", "射击", "经典"],
    thumbnail: "🐸",
    rating: 4.5,
    playCount: 67000
  },
  {
    id: 35,
    title: "保龄球",
    slug: "bowling",
    description: "滑动控制球的方向和力度，击倒所有球瓶，争取全中！",
    category: "体育",
    tags: ["体育", "精准", "休闲"],
    thumbnail: "🎳",
    rating: 4.3,
    playCount: 35000
  },
  {
    id: 36,
    title: "篮球投篮",
    slug: "basketball",
    description: "按住屏幕控制投篮力度，在不同位置投进篮球，挑战高分！",
    category: "体育",
    tags: ["体育", "投篮", "精准"],
    thumbnail: "🏀",
    rating: 4.4,
    playCount: 44000
  }
];

// 分类定义
export const categories = [
  { id: "action", name: "动作", icon: "⚔️", color: "from-red-400 to-red-600" },
  { id: "puzzle", name: "益智", icon: "🧩", color: "from-blue-400 to-blue-600" },
  { id: "racing", name: "竞速", icon: "🏎️", color: "from-orange-400 to-orange-600" },
  { id: "shooting", name: "射击", icon: "🎯", color: "from-purple-400 to-purple-600" },
  { id: "adventure", name: "冒险", icon: "🗺️", color: "from-green-400 to-green-600" },
  { id: "strategy", name: "策略", icon: "♟️", color: "from-indigo-400 to-indigo-600" },
  { id: "sports", name: "体育", icon: "⚽", color: "from-teal-400 to-teal-600" },
  { id: "casual", name: "休闲", icon: "☕", color: "from-pink-400 to-pink-600" }
];

// 获取热门游戏
export function getHotGames(limit = 12) {
  return [...games].sort((a, b) => b.playCount - a.playCount).slice(0, limit);
}

// 获取新游戏
export function getNewGames(limit = 12) {
  return games.filter(g => g.isNew).slice(0, limit);
}

// 获取分类游戏
export function getGamesByCategory(category: string, limit = 24) {
  return games.filter(g => g.category === category).slice(0, limit);
}

// 搜索游戏
export function searchGames(query: string) {
  const q = query.toLowerCase();
  return games.filter(g => 
    g.title.toLowerCase().includes(q) || 
    g.description.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  );
}

// 根据slug获取游戏
export function getGameBySlug(slug: string) {
  return games.find(g => g.slug === slug);
}
