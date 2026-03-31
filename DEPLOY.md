# Alpha Calendar - Cloudflare Pages 部署指南

## 项目结构

```
alpha-calendar/
├── index.html              # 首页
├── history.html            # 历史页面
├── functions/              # Cloudflare Pages Functions (后端 API)
│   └── api/
│       ├── data.js         # 今日空投数据 API
│       ├── history.js      # 历史空投数据 API
│       └── upcoming.js     # 预告空投数据 API
└── wrangler.toml           # Cloudflare 配置
```

## 部署步骤

### 方法一：使用 Wrangler CLI (推荐)

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署到 Cloudflare Pages**
   ```bash
   # 进入项目目录
   cd alpha-calendar
   
   # 部署
   wrangler pages deploy . --project-name=alpha-calendar
   ```

### 方法二：Git 集成自动部署

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/alpha-calendar.git
   git push -u origin main
   ```

2. **在 Cloudflare Dashboard 中**
   - 进入 Pages > Create a project
   - 连接 GitHub 仓库
   - 构建设置：
     - Build command: （留空，纯静态）
     - Build output directory: （留空，根目录）
   - 点击 Deploy

### 方法三：直接上传

1. 进入 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pages > Create a project > Upload assets
3. 拖放整个项目文件夹

## 自定义域名 (可选)

部署后可以在 Cloudflare Pages 设置中添加自定义域名。

## API 端点

部署后可以通过以下端点访问数据：

- `https://your-project.pages.dev/api/data` - 今日空投
- `https://your-project.pages.dev/api/history` - 历史空投
- `https://your-project.pages.dev/api/upcoming` - 预告空投

## 数据同步

API 会自动从 alpha123.uk 获取最新数据并缓存：
- 今日数据：缓存 1 分钟
- 历史数据：缓存 1 小时
- 预告数据：缓存 5 分钟
