# Yunfeng Li 个人主页

当前为第十二版 Academic 内容修订（2026-10-18）：英文恢复 Trebuchet MS，仅 `&` 字符使用 Times New Roman；中文继续使用 Microsoft YaHei。Academic 页已加入两个精选项目、研究成果、实习与访学、面向 AI Agent 工作负载的感知型硬件预取器毕业设计和真实素材；生活页的城市、照片、歌单、近况和视频仍为明确标注的占位内容。

## 交互

- 顶部并列放置 Academic / Life 与 EN / 中文切换，右侧内容和导航采用淡出淡入；切换页面时保持左侧资料一致。
- 首次访问默认英文，后续记住语言偏好；URL 的 `view=academic|life` 与 `lang=en|zh` 参数可以明确指定版本，支持浏览器返回。
- 学术页项目筛选与详情展开继续可用。
- 旅行条目平滑展开，点击照片占位可打开相册预览；支持左右按钮、方向键、Esc 关闭与焦点恢复。
- 尊重系统“减少动态效果”偏好；所有切换按钮都支持键盘操作。
- 网易云与抖音的真实链接尚未提供，因此以“链接待补充”呈现，没有虚构链接或自动播放。

## 固定备份规则

从第三版开始，每次新修改任务前先完整备份当前网站，校验 SHA256，并保存独立 ZIP；旧备份不覆盖。持续执行，直到用户明确取消。

- V1：`../yunfeng-homepage-v1/` 与 `../yunfeng-homepage-v1.zip`
- V2（本次修改前的完整版本）：`../yunfeng-homepage-v2/` 与 `../yunfeng-homepage-v2.zip`
- V3：当前目录与 `../yunfeng-homepage.zip`

回滚时直接使用对应版本的完整目录，即可还原 HTML、样式、脚本和资料文件。修改后的当前目录应先另存为新快照再恢复，避免丢失后续工作。

## 替换生活素材

生活页内容在 `index.html` 的 `life-view` 中，中文译文集中在 `i18n.js`。拿到素材后可将封面与照片占位替换为图片，将“链接待补充”替换为指向真实个人主页或公开歌单的链接，并更新城市、旅行寄语与两种语言的介绍。

## 第二版与回滚

本版改用参考页相同的 Trebuchet MS 字体，正文 16px、项目和经历正文 15px、栏目标题 24px；统一文字对比度、行距、链接色和栏目图标，重新调整侧栏与内容宽度，简化项目标签。

上一版的全部文件逐一校验 SHA256 后保存在同级目录 `yunfeng-homepage-v1`，同时提供 `yunfeng-homepage-v1.zip`。要恢复上一版，可直接使用该完整目录；不要只替换某个 CSS 文件。两个版本都能直接打开各自的 `index.html`，互不影响。

本地服务运行时，新版预览为 `http://127.0.0.1:8765/`，旧版对照为 `http://127.0.0.1:8766/`。

## 本地查看

直接用浏览器打开 `index.html` 即可，无需安装依赖或构建。请保留整个文件夹，CSS、JavaScript 和 CV 使用相对路径。

## 文件

- `index.html`：个人资料、项目、经历、教育、奖项和技能。
- `academic.css`：第二版排版、移动端样式、打印样式。
- `styles.css`：保留的第一版样式，当前页面不加载。
- `life.css`：共享双切换栏、生活页、相册及移动端样式。
- `controller.js`：双页面、语言与状态、过渡动画、筛选、相册、导航。
- `i18n.js`：中英内容对照。
- `app.js`：保留的旧版脚本，当前页面不加载。
- `assets/Yunfeng-Li-CV.docx`：用户提供的原始 CV 副本，供下载。
- `assets/favicon.svg`：姓名缩写图标。

## 本版内容选择

- 姓名采用英文 Yunfeng Li；原始简历未提供中文姓名，未推定汉字。
- 未提供头像，使用 YL 缩写；替换为照片时可修改 `.avatar` 内容。
- 简历邮箱 `xxx@163.com` 是占位符，未添加邮箱链接；未在主页正文展示电话号码。
- 下载的 CV 仍为原始文件，其中包含电话和占位邮箱。公开发布前应换成你确认的公开版 CV。
- 按当前时间 2026 年 9 月，将 NPU 实习显示为正在进行，并保留预计 2027 年 1 月结束说明。
- 未将申请院校列为当前所属机构；未将 “Invited to Submit” 作为已发表论文。
- 保留能够清楚描述的项目数据，没有将缺少条件的“最高利用率”“超低功耗”作为页面宣传结论。
- 项目详情可展开；后续可以加入代码仓库、报告、波形、布局或实物图片。当前未设置无目标的代码或报告按钮。
- 没有虚构兴趣爱好，志愿者经历收录在 Honors & community。

## 发布

当前是本地预览，尚未发布到互联网。该目录可直接用于 GitHub Pages 或其他静态托管服务。发布前确认头像、联系邮箱、CV 和所有项目资料的公开范围。

无需远程字体、第三方脚本、数据库或账号系统。


## 第四版 Academic 修订（2026-10-14）

- 精选项目保留 SRTP 光电融合与 GEMM / TinyStories-1M 两项；GEMM 详情内加入开发板图和不自动播放的结果视频。
- 新增 Research output、Experience & internship、International exchange & visiting、Graduation project 四个栏目；导航同步更新。
- 北大信息技术高等研究院与 NanoCoreChip 使用两个 Logo、`&` 连接和官网链接；ASML 访学采用用户指定的圆形照片；毕业设计链接刘鹏教授主页。
- 头像来自用户提供素材；论文补充材料链接到 `assets/CIOP2026-2026-000206-Supplementary.pdf`。论文正式标题、作者、DOI 和出版状态待用户确认，不在页面中擅自补全。
- 素材文件均使用相对路径，视频使用原生 controls，未设置自动播放。


第五版视觉修订：论文标题更新；头像与开发板使用裁剪后的专用素材；SRTP 使用用户提供的芯片照片；CIOP 标识使用用户提供的图标裁剪；AIIT / NanoCoreChip 改为大尺寸纵向 Logo 组合；浙大使用圆形校徽；ASML 使用更宽的访学照片框；Agent CPU 使用独立芯片插画封面。

第六版标识修订：浙大与北大均改用用户提供的透明底官方校徽，机构标识取消卡片底框并按参考页放大展示；NanoCoreChip 因暂无官方 Logo，以明确的彩色文字字标呈现。论文区域同时展示 CIOP 2026 与 IEEE 官方标识，并明确标注 CIOP 2026 已接收、IEEE 出版审核中，官方结果预计于 2026 年 11 月中旬公布。修改前快照为 `../yunfeng-homepage-backup-20261015-000000/` 及其同名 ZIP。

第七版素材试换：ASML 欢迎牌改为访学条目封面，原两人交流照片移入展开相册的第二张；NanoCoreChip 使用用户提供的品牌截图，裁去左侧白边和蓝点后以横向品牌图展示。修改前的第六版完整保存在 `../yunfeng-homepage-backup-20261015-101931/` 及其同名 ZIP，可完整复位本次试换。

第八版结构与命名修订：项目栏目采用 `Selected Projects`，两个项目标题与简历原文一致；研究成果栏目改为 `Publication` 并使用书本图标，毕业设计改用笔形图标；求是问芯实验室的中英文名称均已修正。Education 与 Honors 移至国际交流之前，IELTS 7.5 放入 Education 末尾，侧栏新增三维存算一体 NPU。英文字体为 Trebuchet MS，中文字体为 Microsoft YaHei。修改前的第七版完整保存在 `../yunfeng-homepage-backup-20261015-104226/` 及其同名 ZIP。

第九版英文字体试用：仅将英文从 Trebuchet MS 改为 Times New Roman；中文仍为 Microsoft YaHei，内容与布局保持第八版不变。修改前的第八版完整保存在 `../yunfeng-homepage-backup-20261015-110308/` 及其同名 ZIP，可随时完整回滚。

第十版字体细节修订：英文恢复 Trebuchet MS，并通过 Unicode 字符范围字体仅让 `&` 使用 Times New Roman；中文仍为 Microsoft YaHei。修改前的第九版试用稿完整保存在 `../yunfeng-homepage-backup-20261015-111122/` 及其同名 ZIP。

第十一版毕业设计题目修订：毕业设计更新为“面向 AI Agent 工作负载的感知型硬件预取器设计与实现”（Design and Implementation of an Agent-Aware Hardware Prefetcher for AI Agent Workloads），描述基于 NVIDIA Vera CPU 公开文章中的 Agentic CPU 背景，明确为研究目标与立项答辩阶段，不虚构已完成的实现或性能结果。封面同步改为 PREFETCHER 概念图。修改前的第十版完整保存在 `../yunfeng-homepage-backup-20261018-190217/` 及其同名 ZIP。

第十二版 Academic 内容修订：关于我补充浙江大学信息与电子工程学院；GEMM 项目改为 AI 硬件加速分类，并补充本地 AI 部署、加速和端到端跑通描述；NPU 实习明确 F2M 的 FP32/BF16/FP16 到 MXINT4/MXINT8 转换范围；ASML 反思按钮增加可见的边框与悬停状态；毕业设计封面替换为用户提供的 NVIDIA CPU 截图。公开邮箱尚未加入，学校邮箱未写入。修改前的第十一版完整保存在 `../yunfeng-homepage-backup-20261018-190217/` 及其同名 ZIP。
