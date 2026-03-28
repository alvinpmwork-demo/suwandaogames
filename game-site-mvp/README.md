# 🎮 速玩岛 - 游戏站 MVP v2.0

一个功能完整的免费在线小游戏平台，无需下载，即点即玩。

![版本](https://img.shields.io/badge/version-2.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC)

## ✨ 功能特性

### 核心功能
- 🎮 **36 款精选游戏** - 包含2048、俄罗斯方块、贪吃蛇、吃豆人等经典游戏
- 📱 **响应式设计** - 完美适配手机、平板、电脑
- ⚡ **极速加载** - Next.js 14 App Router + 静态生成
- 🔍 **搜索功能** - 支持游戏名称、标签、描述搜索
- 🏷️ **8大游戏分类** - 动作、益智、竞速、射击、冒险、策略、体育、休闲
- 🎯 **场景标签** - 办公室摸鱼、双人同屏、儿童益智、经典怀旧
- ❤️ **收藏功能** - LocalStorage 存储，无需登录
- 🕐 **最近玩过** - 自动记录游玩历史
- ▶️ **即点即玩** - 嵌入真实 HTML5 游戏
- 📊 **智能排序** - 支持按人气、最新、评分排序

### 页面清单
| 页面 | 路径 | 说明 |
|------|------|------|
| 🏠 首页 | `/` | 精选推荐 + 分类 + 热门/新游 |
| 🎲 游戏详情 | `/game/[slug]` | 游戏介绍 + 直接游玩 + 相关推荐 |
| 📂 分类页 | `/category/[id]` | 8大分类，支持排序 |
| 🔥 热门游戏 | `/hot` | 人气排行榜，TOP3 特殊标识 |
| ✨ 新游上架 | `/new` | 最新入库游戏 |
| 🎯 场景标签 | `/tag/[id]` | 4种场景标签筛选 |
| 🔎 搜索结果 | `/search?q=` | 实时搜索 |
| ❤️ 我的收藏 | `/favorites` | 收藏列表 + 最近玩过 |
| ℹ️ 关于我们 | `/about` | 平台介绍 |
| ❓ 404页面 | `/*` | 优雅的未找到页面 |

## 🚀 快速开始

### 1. 安装依赖

```bash
cd game-site-mvp
npm install
```

### 2. 开发模式运行

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 3. 生产构建

```bash
npm run build
```

静态文件输出到 `dist/` 目录

## 📁 项目结构

```
game-site-mvp/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # 首页
│   ├── layout.tsx               # 根布局
│   ├── not-found.tsx            # 404页面
│   ├── globals.css              # 全局样式
│   ├── game/
│   │   └── [slug]/
│   │       └── page.tsx         # 游戏详情页
│   ├── category/
│   │   └── [id]/
│   │       ├── page.tsx         # 分类页（服务端）
│   │       └── CategoryContent.tsx  # 分类页（客户端）
│   ├── tag/
│   │   └── [id]/
│   │       └── page.tsx         # 标签页
│   ├── search/
│   │   ├── page.tsx             # 搜索页
│   │   └── SearchContent.tsx    # 搜索内容
│   ├── hot/
│   │   └── page.tsx             # 热门游戏
│   ├── new/
│   │   └── page.tsx             # 新游上架
│   ├── favorites/
│   │   └── page.tsx             # 我的收藏
│   └── about/
│       └── page.tsx             # 关于页面
├── components/                   # React 组件
│   ├── Header.tsx               # 顶部导航
│   ├── Footer.tsx               # 底部
│   ├── GameCard.tsx             # 游戏卡片
│   ├── GamePlayer.tsx           # 游戏播放器
│   ├── CategoryNav.tsx          # 分类导航
│   ├── SearchBox.tsx            # 搜索框
│   ├── FavoriteButton.tsx       # 收藏按钮
│   ├── UserSection.tsx          # 用户区域
│   └── Skeleton.tsx             # 骨架屏
├── lib/
│   ├── data.ts                  # 游戏数据（36款）
│   └── storage.ts               # 本地存储工具
├── public/                      # 静态资源
├── dist/                        # 构建输出
└── README.md                    # 使用说明
```

## 🎮 游戏列表（36款）

### 益智类
- 2048 🔢
- 割绳子 🍬
- 俄罗斯方块 🎲
- 五子棋 ⚫
- 泡泡龙 🫧
- 消消乐 💎
- 拼图乐园 🧩
- 推箱子 📦
- 数独 🔢
- 扫雷 💣
- 愤怒的小鸟 🐦
- 祖玛 🐸

### 动作类
- 打砖块 🧱
- 坦克大战 🪖
- 射箭大师 🎯
- 飞机大战 ✈️
- 水果忍者 🥷

### 竞速类
- 极速赛车 🏎️
- 跑酷达人 🏃
- 地铁跑酷 🛹

### 射击类
- 泡泡龙 🫧
- 射箭大师 🎯
- 飞机大战 ✈️

### 体育类
- 足球小将 ⚽
- 桌球大师 🎱
- 乒乓球 🏓
- 保龄球 🎳
- 篮球投篮 🏀

### 休闲类
- 贪吃蛇 🐍
- Flappy Bird 🐦
- 黄金矿工 ⛏️
- 弹球 ⚡
- 跳一跳 🦘
- 连连看 🔗

### 棋牌类
- 纸牌接龙 🃏
- 蜘蛛纸牌 🕷️
- 国际象棋 ♟️
- 中国象棋 🏮

### 街机类
- 吃豆人 👾

## 🌐 真实游戏源

以下游戏已接入真实在线游玩链接：

| 游戏 | 来源 |
|------|------|
| 2048 | play2048.co |
| 俄罗斯方块 | tetris.com |
| 贪吃蛇 | snake.googlemaps.com |
| Flappy Bird | flappybird.io |
| 扫雷 | minesweeper.online |
| 数独 | sudoku.com |
| 纸牌接龙 | solitr.com |
| 泡泡龙 | bubbleshooter.net |
| 吃豆人 | google.com/logos/2010/pacman10-i.html |
| 五子棋 | gomokuonline.com |
| 割绳子 | crazygames.com |
| ... | crazygames.com |

> 全部36款游戏均已接入真实可玩的游戏链接！

## 💾 本地存储功能

### 收藏功能
- 点击游戏卡片上的 ❤️ 按钮收藏/取消收藏
- 数据存储在浏览器 LocalStorage
- 首页"我的收藏"区域显示已收藏游戏
- 独立收藏页面 `/favorites`

### 最近玩过
- 自动记录点击"开始游戏"的游戏
- 最多保存 20 个最近游戏
- 首页"最近玩过"区域显示
- 收藏页面也可查看历史

## 📦 部署指南

### 方式一：Vercel（推荐）

```bash
npm i -g vercel
vercel login
vercel --prod
```

### 方式二：静态托管

```bash
npm run build
# 上传 dist/ 目录到：
# - 阿里云 OSS
# - 腾讯云 COS  
# - GitHub Pages
# - Cloudflare Pages
# - 任何静态托管服务
```

### 方式三：Docker

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

## 📝 添加新游戏

编辑 `lib/data.ts`：

```typescript
{
  id: 37,
  title: "新游戏名称",
  slug: "new-game",
  description: "游戏描述...",
  category: "分类",
  tags: ["标签1", "标签2"],
  thumbnail: "🎮",
  rating: 4.5,
  playCount: 0,
  isNew: true
}
```

如需嵌入真实游戏，编辑 `components/GamePlayer.tsx`：

```typescript
const gameUrls: Record<string, string> = {
  'your-game-slug': 'https://game-url.com',
  // ...
};
```

## 🔧 自定义配置

### 修改品牌信息
编辑 `components/Header.tsx` 和 `components/Footer.tsx`

### 修改主题色
编辑 `tailwind.config.ts` 或直接在组件中修改颜色

### SEO 优化
每个页面已自动生成 meta 标签，如需修改编辑对应 `page.tsx`：

```typescript
export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
};
```

## 📊 数据分析

可接入以下分析工具：
- Google Analytics
- 百度统计
- 腾讯分析

在 `app/layout.tsx` 中添加跟踪代码

## 🎯 页面跳转完善清单

- ✅ 首页 → 游戏详情页
- ✅ 首页 → 分类页
- ✅ 首页 → 热门游戏页
- ✅ 首页 → 新游上架页
- ✅ 首页 → 场景标签页
- ✅ Header 收藏按钮 → 收藏页
- ✅ Footer 分类链接 → 分类页
- ✅ Footer 快速链接 → 对应页面
- ✅ 游戏详情页 → 返回首页
- ✅ 分类页 → 返回首页
- ✅ 标签页 → 返回首页
- ✅ 搜索页 → 返回首页
- ✅ 收藏页 → 返回首页
- ✅ 热门页 → 返回首页
- ✅ 新游页 → 返回首页
- ✅ 游戏卡片 → 游戏详情页
- ✅ 分类导航 → 分类页

## 📄 开源协议

本项目仅供学习交流使用。
游戏资源来自第三方平台或开源社区。

## 🤝 贡献

欢迎提交 Issue 和 PR！

---

**Made with ❤️ by 速玩岛团队**
