// 作品数据（第 5 课：数据与视图分离）
//
// 每个对象代表一个作品。想加作品只在这里加一个对象，HTML 一个字都不用改。
// 页面会把这张表渲染成卡片，并按 tags 生成筛选按钮、按 year 排序。
//
// 字段说明：
//   title        卡片标题
//   description  一句话说明
//   image        封面图路径（相对于本文件）
//   url          点击后跳转的线上地址
//   year         年份，用于排序和封面右上角徽标
//   tags         标签数组，用于筛选；一个作品可以有多个标签
const works = [
  {
    title: '个人主页 · 第 3 课',
    description: '语义化结构、CSS 变量与响应式两列布局。',
    image: 'assets/cover-01.svg',
    url: 'https://karina427.github.io/index260907/',
    year: 2026,
    tags: ['HTML', 'CSS', '部署'],
  },
  {
    title: '页面交互 · 第 4 课',
    description: '阅读进度条、导航高亮与返回顶部。',
    image: 'assets/cover-02.svg',
    url: 'https://karina427.github.io/index260907/',
    year: 2026,
    tags: ['JavaScript', '交互', '部署'],
  },
  {
    title: '作品筛选 · 第 5 课',
    description: '数据与视图分离，标签筛选与年份排序。',
    image: 'assets/cover-03.svg',
    url: 'https://karina427.github.io/index260907/',
    year: 2026,
    tags: ['JavaScript', '数据结构'],
  },
  {
    title: '简历站点 · CI/CD',
    description: 'Actions 自检通过后自动发布到 Pages。',
    image: 'assets/cover-04.svg',
    url: 'https://karina427.github.io/20260928_Resume_CICD_DMX/',
    year: 2026,
    tags: ['CI/CD', 'GitHub Actions', '部署'],
  },
]
