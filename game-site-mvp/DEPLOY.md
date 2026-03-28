# 速玩岛游戏站项目部署文档

## 📋 项目信息

| 项目 | 详情 |
|------|------|
| **项目名称** | 速玩岛游戏站 (Suwandao Games) |
| **版本** | V1.2.0 |
| **技术栈** | Next.js 14 + React 18 + TypeScript + Tailwind CSS |

---

## 🔗 重要链接

| 平台 | 地址 |
|------|------|
| **GitHub 仓库** | https://github.com/alvinpmwork-demo/suwandaogames |
| **GitHub Release** | https://github.com/alvinpmwork-demo/suwandaogames/releases/tag/v1.2 |
| **Cloudflare Pages** | https://d3683f09.suwandaogames.pages.dev |
| **正式域名** | https://suwandao.com |

---

## 🔐 认证信息（请自行替换）

| 平台 | Token/密钥 |
|------|-----------|
| **GitHub Token** | `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| **Cloudflare API Token** | `cfat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| **Cloudflare Account ID** | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| **Cloudflare Project** | `suwandaogames` |

> ⚠️ **获取方式**：
> - GitHub Token: https://github.com/settings/tokens
> - Cloudflare API Token: https://dash.cloudflare.com/profile/api-tokens
> - Cloudflare Account ID: Cloudflare Dashboard 右侧显示

---

## 📁 项目结构

```
game-site-mvp/
├── app/              # Next.js 应用页面
├── components/       # React 组件
├── lib/              # 工具库和数据
├── dist/             # 构建产物（部署用这个）
├── package.json      # 依赖和版本
├── README.md         # 项目说明
└── DEPLOY.md         # 本文档
```

---

## 🚀 快速部署指南

### 方式一：全自动部署（推荐）

如果你使用 Kimi Claw/OpenClaw，直接说：**"部署速玩岛到 GitHub 和 Cloudflare"**

---

### 方式二：手动部署到 Cloudflare Pages

#### 步骤 1：构建项目
```bash
cd game-site-mvp
npm run build
```

#### 步骤 2：使用 wrangler 部署
```bash
export CLOUDFLARE_API_TOKEN="你的_CLOUDFLARE_API_TOKEN"
export CLOUDFLARE_ACCOUNT_ID="你的_ACCOUNT_ID"

wrangler pages deploy dist --project-name suwandaogames --branch main
```

#### 步骤 3：查看部署结果
部署成功后会显示 URL，例如：
```
https://xxxxxx.suwandaogames.pages.dev
```

---

### 方式三：Cloudflare Dashboard 手动上传

#### 步骤
1. 打开 https://dash.cloudflare.com
2. 左侧菜单 → **Workers & Pages**
3. 找到 **suwandaogames** 项目，点击进入
4. 点击 **Create deployment**
5. 选择上传方式：
   - **方式 A**：直接拖拽 `dist/` 文件夹到浏览器
   - **方式 B**：先打包 `dist/` 为 zip，然后上传
6. 点击 **Deploy**

#### 打包命令
```bash
cd game-site-mvp
zip -r dist-deploy.zip dist/
```
然后上传 `dist-deploy.zip`

---

## 📝 更新版本号

修改 `package.json`：
```json
{
  "version": "1.3.0"
}
```

然后提交到 GitHub：
```bash
git add package.json
git commit -m "Bump version to 1.3.0"
git push origin main
```

---

## ⚠️ 常见问题

| 问题 | 解决方案 |
|------|---------|
| **Token 过期** | 到 Cloudflare Dashboard → Profile → API Tokens 重新创建 |
| **项目不存在** | 运行 `wrangler pages project create suwandaogames --production-branch main` |
| **部署失败** | 检查 `dist/` 目录是否存在，运行 `npm run build` 重新构建 |
| **域名无法访问** | 检查 Cloudflare Pages 的 Custom Domains 设置 |

---

## 🔄 完整发布流程

```bash
# 1. 进入项目目录
cd game-site-mvp

# 2. 更新版本号（编辑 package.json）
# "version": "1.3.0"

# 3. 构建
npm run build

# 4. 提交到 GitHub
git add .
git commit -m "Release v1.3.0"
git push origin main

# 5. 创建 Git Tag
git tag -a v1.3 -m "速玩岛 V1.3 发布"
git push origin v1.3

# 6. 部署到 Cloudflare
export CLOUDFLARE_API_TOKEN="你的_CLOUDFLARE_API_TOKEN"
export CLOUDFLARE_ACCOUNT_ID="你的_ACCOUNT_ID"
wrangler pages deploy dist --project-name suwandaogames --branch main
```

---

**记录时间**: 2026-03-28  
**版本**: V1.2.0
