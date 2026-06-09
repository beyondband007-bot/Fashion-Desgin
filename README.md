# 服装电商内容生成平台前端

基于 React 18、TypeScript、Vite 构建的服装电商内容生成平台前端工程。

本阶段目标是完成前端工程基础设施、主题系统、业务框架、核心页面和 Mock 数据闭环，后续可平滑切换到真实 API。

## 技术栈

- React 18
- TypeScript
- Vite
- React Router DOM
- Arco Design
- TailwindCSS
- SCSS
- Axios
- Zustand
- React Query
- dayjs
- framer-motion
- react-dropzone
- react-hook-form
- zod

## 启动方式

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

代码检查：

```bash
npm run lint
```

## 当前实现范围

- 首页落地页
- AI 在线生成工作台
- AI 编辑工具箱
- 视频生成
- 成片交付
- AI 创意生图
- 企业版
- 我的项目
- 素材管理
- 积分中心
- 套餐中心
- 登录 / 注册
- Light / Dark 主题系统
- Zustand 状态管理分层
- React Query + Mock Service 数据流

## 主题系统

使用 `html[data-theme="light"]` 与 `html[data-theme="dark"]` 驱动。

核心变量定义在：

- `src/styles/tokens.scss`

关键语义变量：

- `--bg-primary`
- `--bg-secondary`
- `--text-primary`
- `--text-secondary`
- `--border-color`
- `--brand-color`

## 目录结构

```text
src
├─ api
├─ assets
├─ business
│  ├─ ai-generate
│  ├─ ai-edit
│  ├─ video
│  ├─ delivery
│  ├─ creative
│  └─ enterprise
├─ components
│  └─ common
├─ hooks
├─ layouts
│  ├─ MainLayout
│  └─ WorkspaceLayout
├─ mock
├─ pages
│  ├─ Home
│  ├─ Login
│  ├─ Register
│  ├─ Pricing
│  ├─ Credits
│  ├─ Assets
│  ├─ Projects
│  ├─ Enterprise
│  ├─ AiGenerate
│  ├─ AiEdit
│  ├─ Video
│  ├─ Delivery
│  ├─ Creative
│  └─ NotFound
├─ providers
├─ router
├─ services
├─ store
├─ styles
├─ types
└─ utils
```

## Mock 策略

当前所有页面都通过 `src/services/mockService.ts` 和 `src/mock/data.ts` 获取演示数据。

后续替换真实 API 的建议路径：

1. 保留页面层 `useQuery` / store 调用方式
2. 将 `mockService` 同名方法迁移到 `api` / `services` 真实实现
3. 按接口文档补 DTO、错误处理、鉴权刷新和上传能力
4. 保持组件与页面层无感知切换

## 文档

- 架构文档：`docs/project-architecture.md`

## 已验证

- `npm install`
- `npm run build`

如果需要继续下一阶段，我可以直接在这个工程上完成：

- 真实接口接入
- 表单校验完善
- 上传进度与任务轮询
- 项目详情 / 预览弹窗深化
- 企业 API 页面与文档中心
