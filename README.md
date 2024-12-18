# Next-Docs

### 介绍

Next-Docs，基于 Next.js、shadcn/ui、TailWind css、Convex、liveblocks、TipTap 的一套开源文档编辑器。

### 一、在线预览地址

- vercel(需要翻墙)：https://next-docs-zc.vercel.app/
- netlify(无需翻墙)：https://next-docs-zc.netlify.app/

### 二、Git 仓库地址 (欢迎 Star⭐)

- GitHub：https://github.com/zczhao1992/next-docs.git

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：Next14、TypeScript、shadcn/ui、Convex、TipTap 等
- 🚀 使用 Clerk 作为身份认证，支持 Google、Github 账号登录
- 🚀 使用 Convex 作为数据库存储工具
- 🚀 基于 TipTap 作为项目核心的富文本编辑器
- 🚀 整个项目集成了 TypeScript
- 🚀 使用 liveblocks 支持多人在线协同

### 四、安装使用步骤 📑

- **Clone：**

```text
# GitHub
git clone https://github.com/zczhao1992/next-docs.git
```

- **Install：**

```text
npm install
cnpm install

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **Run：**

```text
npm run dev
```

- **Build：**

```text
# 开发环境
npm run build
```

### 五、项目截图

#### 1、首页：

![docs](./public/docs1.png)
![docs](./public/docs2.png)

### 六、文件资源目录 📚

```text
next-docs
├─ convex                 # convex
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ app                 # 项目页面
│  ├─ components          # 全局组件
│  ├─ constants           # 常量
│  ├─ extensions          # 自定义插件
│  ├─ hooks               # 自定义hook
│  ├─ lib                 # 工具
│  ├─ store               # 全局状态
│  └─ middleware.ts       # 中间件
├─ .eslintrc.json         # eslint配置
├─ .gitignore             # git 提交忽略
├─ components.json        # shadcn/ui 组件配置
├─ next-env.d.ts          # 环境变量配置
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tailwind.config.ts     # tailwind 配置
└─ tsconfig.json          # typescript 全局配置
```
