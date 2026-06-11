# 后端模块技术方案目录

本目录按第一版功能模块拆分后端技术方案，供后续接口建模、数据库迁移、任务编排和联调用。

文档列表：

1. [首页模块](/F:/服装/Fashion-Desgin/docs/backend-modules/01-首页模块-后端技术方案.md)
2. [登录注册模块](/F:/服装/Fashion-Desgin/docs/backend-modules/02-登录注册模块-后端技术方案.md)
3. [AI 在线生成工作台模块](/F:/服装/Fashion-Desgin/docs/backend-modules/03-AI在线生成工作台模块-后端技术方案.md)
4. [视频生成 Beta 模块](/F:/服装/Fashion-Desgin/docs/backend-modules/04-视频生成Beta模块-后端技术方案.md)
5. [创意生图 Beta 模块](/F:/服装/Fashion-Desgin/docs/backend-modules/05-创意生图Beta模块-后端技术方案.md)
6. [企业版模块](/F:/服装/Fashion-Desgin/docs/backend-modules/06-企业版模块-后端技术方案.md)
7. [成片交付模块](/F:/服装/Fashion-Desgin/docs/backend-modules/07-成片交付模块-后端技术方案.md)
8. [我的项目模块](/F:/服装/Fashion-Desgin/docs/backend-modules/08-我的项目模块-后端技术方案.md)
9. [素材管理模块](/F:/服装/Fashion-Desgin/docs/backend-modules/09-素材管理模块-后端技术方案.md)
10. [积分中心模块](/F:/服装/Fashion-Desgin/docs/backend-modules/10-积分中心模块-后端技术方案.md)
11. [套餐充值支付模块](/F:/服装/Fashion-Desgin/docs/backend-modules/11-套餐充值支付模块-后端技术方案.md)
12. [任务实时状态同步开发文档](/F:/服装/Fashion-Desgin/docs/backend-modules/12-任务实时状态同步开发文档.md)
13. [多模块并发任务同步规范](/F:/服装/Fashion-Desgin/docs/backend-modules/13-多模块并发任务同步规范.md)
14. [后端启动任务清单](/F:/服装/Fashion-Desgin/docs/backend-modules/14-后端启动任务清单.md)
15. [后端基础框架模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/15-后端基础框架模块-技术方案.md)
16. [数据库与Prisma基线模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/16-数据库与Prisma基线模块-技术方案.md)
17. [统一DTO与枚举模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/17-统一DTO与枚举模块-技术方案.md)
18. [最小任务主链路模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/18-最小任务主链路模块-技术方案.md)
19. [任务持久化与Repository模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/19-任务持久化与Repository模块-技术方案.md)
20. [Prisma Task Repository模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/20-PrismaTaskRepository模块-技术方案.md)
21. [Prisma客户端与真实持久化接入模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/21-Prisma客户端与真实持久化接入模块-技术方案.md)
22. [数据库migration与真实连通验证模块技术方案](/F:/服装/Fashion-Desgin/docs/backend-modules/22-数据库migration与真实连通验证模块-技术方案.md)

使用说明：

- 每份文档只描述单模块后端方案，不写实现代码。
- 模块方案以 [后端开发技术方案-ts-v1.0.md](/F:/服装/Fashion-Desgin/后端开发技术方案-ts-v1.0.md) 为总纲。
- 涉及任务、积分、支付、上传的跨模块能力，在各模块文档中只描述本模块视角下的调用关系，不重复定义公共基础设施。
