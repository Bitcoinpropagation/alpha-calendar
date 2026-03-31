# 部署到 Cloudflare Pages 的替代方法

## 方法：使用 GitHub + Cloudflare 自动部署

### 步骤 1：创建 GitHub 仓库

```bash
cd /Users/bc/.openclaw/workspace/alpha-calendar
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

然后去 GitHub 创建一个新仓库，执行：
```bash
git remote add origin https://github.com/YOUR_USERNAME/alpha-calendar.git
git push -u origin main
```

### 步骤 2：在 Cloudflare Dashboard 部署

1. 访问 https://dash.cloudflare.com
2. 点击左侧菜单 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权 GitHub 并选择 `alpha-calendar` 仓库
6. 构建设置：
   - **Project name**: alpha-calendar
   - **Production branch**: main
   - **Build command**: (留空)
   - **Build output directory**: (留空)
7. 点击 **Save and Deploy**

### 步骤 3：完成

Cloudflare 会自动构建并部署你的网站。

---

## 或者：直接上传文件

如果不想用 Git：

1. 访问 https://dash.cloudflare.com
2. Pages > Create a project > **Upload assets**
3. 拖放 `alpha-calendar` 文件夹中的所有文件
4. 点击 **Deploy**

---

## 部署后

网站地址会是：`https://alpha-calendar.pages.dev`

API 端点：
- `https://alpha-calendar.pages.dev/api/data`
- `https://alpha-calendar.pages.dev/api/history`
- `https://alpha-calendar.pages.dev/api/upcoming`
