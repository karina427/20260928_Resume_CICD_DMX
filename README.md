# 黄俊杰 · 个人主页（简历站点 + CI/CD）

软件技术专业 · 前端开发方向。一个纯静态的个人主页：语义化 HTML5 结构 + CSS 变量与响应式布局 + 原生 JavaScript 交互，
用 GitHub Actions 做「自检通过才发布」的 CI/CD 流水线。

线上地址：<https://karina427.github.io/20260928_Resume_CICD_DMX/>

## 目录结构

```
.
├── index.html            页面结构（唯一需要改内容的文件）
├── styles.css            样式：配色变量、布局、响应式与打印样式
├── works-data.js         作品数据（增删作品只改这里）
├── works-render.js       把作品数据渲染成卡片 + 标签筛选 + 年份排序
├── app.js                交互：进度条、导航高亮、返回顶部
├── assets/               头像、图标、字体、作品封面
├── tools/check-page.mjs  上线前自检脚本（本地和 Actions 共用同一份）
└── .github/workflows/
    └── pages.yml         GitHub Actions：check → deploy
```

**维护原则**：结构、样式、数据、行为各自独立。
改文案只动 `index.html`；加作品只动 `works-data.js`；换配色只动 `styles.css` 顶部的 `:root` 变量。

## 本地开发

```bat
:: 启动本地服务器（必须用服务器打开，直接双击 file:// 会让相对路径和字体出问题）
npx live-server --port=7000 --host=0.0.0.0

:: 上线前自检
node tools/check-page.mjs
```

自检做四件事，都是人眼容易漏、机器一秒能查的：

1. 必备文件是否存在（`index.html` / `styles.css` / `app.js`）；
2. `index.html` 引用的本地文件是否真的存在；
3. 页内锚点 `#id` 是否有对应元素（导航不能点了没反应）；
4. 每张图片是否有**有意义**的 `alt`（空值或「图片」这类笼统写法都会报错）。

## CI/CD 流程

```
git push main
      │
      ▼
  check ── 跑 node tools/check-page.mjs ── 失败则整条流水线停在这里，线上不受影响
      │ needs: check
      ▼
  deploy ── 打包整个目录 ── 上传 artifact ── 发布到 GitHub Pages
```

- 触发条件：推送到 `main`，或在 Actions 页面手动 `Run workflow`（工作流里写了 `workflow_dispatch`）。
- 仓库设置：**Settings → Pages → Source 必须选 GitHub Actions**。
  保持默认的「Deploy from a branch」会跳过检查直接把文件发出去，等于没有 CI。
- 同一次发布用 `concurrency: pages` 串行执行，避免两次部署互相覆盖。

## 需要人工完成的三个动作

代码和流水线都已在本地就绪，以下步骤依赖你自己的 GitHub 账号，需要在浏览器里点：

1. 打开 <https://github.com/new>，仓库名填 `20260928_Resume_CICD_DMX`，**不要**勾选初始化 README。
2. 在项目目录执行首次推送：`git push -u origin main`（`origin` 已配置好）。
3. 仓库 Settings → Pages → Source 选 **GitHub Actions**；再到 Actions 页手动跑一次
   「检查并发布个人主页」，等 `check`、`deploy` 两个任务都变绿。

## 可继续优化的地方

- `assets/cover-01.svg` ~ `cover-04.svg` 是按课程主题手写的封面图（纯 SVG，几 KB，改配色只改其中 `fill`）。
  有自己项目的真实截图后，把 `works-data.js` 里的 `image` 和 `index.html` 里对应的 `<img>` 换掉即可。
- 头像 `assets/avatar.svg` 是占位插画，可换成自己的照片（记得同步修改 `alt`）。
- 后续进入 Vue 后，可把 `works-data.js` + `works-render.js` 这一对迁成一个列表组件。
