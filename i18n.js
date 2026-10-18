/* Exact English source strings and their curated Chinese translations.
   Proper names, product names, and technical abbreviations stay unchanged. */
window.HOMEPAGE_ZH = {
  'Skip to content':'跳至正文','Academic':'学术','Life':'生活','Building...':'建设中…','Menu':'菜单','About':'关于我','Projects':'项目','Experience':'实习经历','Education':'教育背景','Skills':'技能','CV ↗':'简历 ↗','Circuits & systems':'电路与系统','Notes from everyday life':'生活随记',
  'Microelectronics undergraduate':'微电子专业本科生','Zhejiang University':'浙江大学','Email':'邮箱','Education email':'教育邮箱','University email':'大学邮箱','Email contact':'邮箱联系方式','’s':'的','College of Information Science & Electronic Engineering':'信息与电子工程学院',', working across':'，专业为微电子，主要探索','Exploring circuits, computing,':'探索电路、计算，','and the space in between.':'以及它们之间的可能。','Hangzhou, China':'中国 · 杭州','Download CV':'下载简历','Areas of interest':'关注方向','Digital IC design':'数字集成电路设计','Computer architecture':'计算机体系结构','Hardware acceleration':'硬件加速','3D compute-in-memory NPU':'三维存算一体 NPU','Silicon photonics':'硅光子学',
  'About me':'关于我','Hi, I’m Yunfeng — a microelectronics undergraduate at':'你好，我是 Yunfeng，目前就读于','，':'，',', working across':'，专业为微电子，主要探索','digital hardware, computer architecture, and optoelectronic integration.':'数字硬件、计算机体系结构与光电集成。',
  'I enjoy connecting different layers of a system: from RTL and microarchitecture to the software that makes hardware useful. My projects span an FPGA accelerator running a small language model, a RISC-V processor with a configurable cache hierarchy, and control circuits for monolithic silicon photonics.':'我喜欢把系统的不同层次连接起来：从 RTL 与微架构，到让硬件真正发挥作用的软件。我的项目包括运行小型语言模型的 FPGA 加速器、搭载可配置多级缓存的 RISC-V 处理器，以及单片硅光集成的控制电路。',
  'Alongside my studies, I work on NPU front-end design at the Advanced Institute of Information Technology, Peking University. I have also worked on Flash controller IP verification at Zhejiang University’s Qiushi Wenxin Lab.':'在学习之外，我在北京大学信息技术高等研究院参与 NPU 前端设计，也曾在浙江大学求是问芯实验室从事 Flash 控制器 IP 验证。',
  'Currently pursuing a B.Eng. · Expected graduation in June 2027':'工学学士在读 · 预计 2027 年 6 月毕业',
  'Selected projects':'精选项目','All projects':'全部项目','Digital IC':'数字芯片','Photonics':'光子学','Showing all 3 projects.':'正在显示全部 3 个项目。',
  'AI hardware acceleration · Computer architecture':'AI 硬件加速 · 计算机体系结构','Apr – Jun 2026':'2026 年 4–6 月','GEMM accelerator & TinyStories-1M deployment':'GEMM 加速器与 TinyStories-1M 部署',
  'An 8 × 8 output-stationary array with INT8/INT16 support, connected to a complete PC–UART–FPGA inference pipeline on a Nexys4DDR board; the system supports local AI deployment and acceleration, with the end-to-end inference flow running successfully on the hardware.':'在 Nexys4DDR 开发板上，实现支持 INT8/INT16 的 8 × 8 输出驻留脉动阵列，并打通 PC–UART–FPGA 完整推理链路，实现 AI 的本地部署与加速，跑通端到端推理。',
  'Explore the project':'展开项目详情','Restructured pipeline registers and instantiated DSP IPs to address timing violations; combined BRAM banking with ping-pong buffering to overlap data movement and computation.':'通过重构流水线寄存器与实例化 DSP IP 解决时序违例；结合 BRAM 分组与乒乓缓冲，使数据搬运与计算重叠。',
  'Introduced GEMV broadcast and input-vector reuse to reduce AXI DMA overhead during token decoding.':'引入 GEMV 广播与输入向量复用，降低 token 解码过程中的 AXI DMA 开销。',
  'Developed quantization scripts and a C runtime for memory alignment, KV-cache scheduling, GELU, and LayerNorm.':'编写量化脚本与 C 运行时，处理内存对齐、KV Cache 调度、GELU 和 LayerNorm。',
  'Validated end-to-end TinyStories-1M inference with English story generation on the FPGA.':'在 FPGA 上验证 TinyStories-1M 的端到端推理，实现英文故事生成。',
  'RISC-V · RTL design':'RISC-V · RTL 设计','A RISC-V core, from RTL to FPGA':'RISC-V 处理器：从 RTL 到 FPGA','Four-stage RV32I processor & multi-level cache':'四级流水线 RV32I 处理器与多级缓存',
  'A pipelined processor and parameterized cache subsystem, evaluated through hardware–software co-verification and 51 cache-configuration regression sweeps.':'设计流水线处理器与参数化缓存子系统，通过软硬件协同验证和 51 组缓存配置回归测试进行架构评估。',
  'FPGA timing achieved':'FPGA 实现频率','cache configurations evaluated':'组缓存配置验证',
  'Implemented two-stage data forwarding, load-use bubble insertion, and branch-prediction flush mechanisms to handle pipeline hazards.':'实现两级数据前递、load-use 气泡插入与分支预测冲刷机制，处理流水线中的数据和控制冒险。',
  'Built a set-associative cache hierarchy with a cross-level sub-line bridge and finite-state-machine control.':'构建组相联缓存层次结构，设计跨层子行桥接与有限状态机控制。',
  'Integrated MMIO performance counters to track pipeline stalls and cache hit rates.':'集成 MMIO 性能计数器，跟踪流水线停顿与缓存命中率。',
  'Automated architecture evaluation with Python, observing up to a 25.46× architectural speedup across the evaluated workloads and configurations.':'使用 Python 自动化开展架构评估，在所测试的工作负载与配置中观察到最高 25.46 倍的架构加速。',
  'Silicon photonics · Project lead':'硅光集成 · 项目负责人','May 2025 – May 2026':'2025 年 5 月–2026 年 5 月','Monolithic optoelectronics on a 12-inch CMOS platform':'基于 12 英寸 CMOS 平台的单片光电集成',
  'Led an integration project bringing electrical control circuits and optical devices onto the same top-silicon layer of a 55 nm, 220 nm SOI silicon-photonics platform.':'负责单片光电集成项目，在 55 nm、220 nm SOI 硅光平台的同一顶层硅层上实现电控制电路与光学器件集成。','tape-outs completed':'次流片完成','spectral resolution':'光谱分辨率',
  'Developed side-gate MOSFET structures, automated substrate-bias testing, and BSIM4 parameter extraction using TCAD and Python.':'开发侧栅 MOSFET 结构与自动化衬底偏置测试，结合 TCAD 和 Python 提取 BSIM4 模型参数。',
  'Designed a control-circuit library including a 100 dBΩ transimpedance amplifier, an 8:1 analog multiplexer, and a 5-bit DAC.':'设计控制电路 IP 库，包括 100 dBΩ 跨阻放大器、8:1 模拟多路复用器与 5 位 DAC。',
  'Automated non-standard device layout generation with gdspy, reducing array iteration from hours to seconds.':'利用 gdspy 自动生成非标准器件版图，将阵列迭代时间从数小时缩短至数秒。',
  'Completed system-level micro-spectrometer verification, separating eight optical channels in the 1535–1565 nm band with a reported 0.04 nm resolution.':'完成片上微型光谱仪系统验证，在 1535–1565 nm 波段实现 8 通道光信号分离，分辨率为 0.04 nm。',
  'Advanced Institute of Information Technology,':'北京大学','Peking University':'信息技术高等研究院','Jul 2025 – Present':'2025 年 7 月–至今','NPU Design Intern':'NPU 设计实习生','· Expected completion Jan 2027':'· 预计 2027 年 1 月结束',
  'Working on command-scheduling architecture, low-bit VPU RTL, and automated power analysis for NPU front-end design.':'参与 NPU 前端设计，包括指令调度架构、低比特 VPU RTL 开发和自动化功耗分析。',
  'Developed an F2M data-conversion module for FP32, BF16, and FP16 inputs to MXINT4 and MXINT8 outputs, using Design Compiler feedback to optimize power, performance, and area.':'开发 F2M 数据转换模块，实现 FP32、BF16、FP16 到 MXINT4、MXINT8 的格式转换，并结合 Design Compiler 反馈优化功耗、性能与面积。',
  'Built a Tcl/Python-driven PrimeTime PX flow to evaluate switching activity and peak currents for clock-gating and power-delivery decisions.':'搭建 Tcl/Python 驱动的 PrimeTime PX 分析流程，评估翻转活动与峰值电流，为时钟门控和供电网络设计提供依据。',
  'Qiushi Wenxin Lab, Zhejiang University':'浙江大学 · 求是问芯实验室','Oct 2025 – Feb 2026':'2025 年 10 月–2026 年 2 月','IP Verification Intern':'IP 验证实习生',
  'Verified the XFLASHC Flash controller in a UVM environment, covering bus routing, dual-bank SWAP address remapping, and protection mechanisms.':'在 UVM 环境中验证 XFLASHC Flash 控制器，覆盖总线路由、双 Bank SWAP 地址重映射和安全保护机制。',
  'Debugged AXI/AHB handshakes, register timing, and ECC/CRC handling with VCS and Verdi/Debussy.':'使用 VCS 与 Verdi/Debussy 调试 AXI/AHB 握手、寄存器时序以及 ECC/CRC 错误处理。',
  'Extended flash-operation and error-trapping regressions, identifying bus hangs and state-machine stalls.':'扩展 Flash 操作和异常捕获回归测试，定位总线挂起与状态机停滞问题。',
  'Sep 2023 – Jun 2027':'2023 年 9 月–2027 年 6 月','(expected)':'（预计）','B.Eng. in Microelectronics Science and Engineering':'微电子科学与工程 · 工学学士','College of Information Science & Electronic Engineering':'信息与电子工程学院','Average score':'平均分','English proficiency':'英语能力','Honors & community':'荣誉与志愿服务','Outstanding Student Scholarship':'优秀学生奖学金','Sep 2024':'2024 年 9 月','Five-Star Volunteer':'五星级志愿者','May 2024':'2024 年 5 月',
  'Tools & skills':'工具与技能','Programming':'编程语言','Digital design':'数字设计','Circuits & devices':'电路与器件','Hardware':'硬件设计','Languages':'语言能力','ASIC / FPGA design · RTL · Cache microarchitecture · Systolic arrays · GDS layout · Optoelectronic integration':'ASIC / FPGA 设计 · RTL · 缓存微架构 · 脉动阵列 · GDS 版图 · 光电集成','English — IELTS 7.5':'英语 — 雅思 7.5','Circuits, systems, and things I build.':'电路、系统，以及我的创造。','Back to top ↑':'返回顶部 ↑',
  'Beyond the circuits':'电路之外','A little space for music, places, and everyday moments.':'给音乐、远方和日常片刻留一点空间。','This side of the homepage is taking shape. Playlists, photographs, and stories will find their home here.':'生活的这一页正在慢慢成形。喜欢的歌、路上的照片，以及值得记录的故事，都会放在这里。','On repeat':'最近在听','Next favorite song':'下一首心动的歌','On my mind':'最近在想','A little update':'一则生活近况','On the horizon':'下一站','The next destination':'下一个目的地','To be added':'待补充',
  'Music, on repeat':'音乐，循环播放','Listening notes':'听歌手记','COVER PLACEHOLDER':'封面占位','NETEASE CLOUD MUSIC':'网易云音乐','The personal soundtrack':'我的日常原声带','A playlist of favorites will live here, with a few words about the sounds and artists behind it.':'这里将放上我的收藏歌单，也会写写喜欢的声音、音乐人，以及这些歌背后的心情。','Playlist link to be added':'歌单链接待补充','Favorite sounds':'音乐偏好','Artists, genres, and listening notes — coming soon.':'喜欢的音乐人、曲风与听歌感受，稍后补充。',
  'Places & postcards':'城市与明信片','A travel journal':'旅行手记','Open a city to browse its album and a few words to remember it by.':'点开一座城市，看看相册，也读读留给它的几句话。','Preview albums below are placeholders, not travel records.':'以下为相册占位示例，并非真实旅行记录。','City to be added':'城市待补充','3 photo placeholders':'3 张照片占位','A note to this city — your impressions, favorite moments, and reasons to return.':'写给这座城市的话——最初的印象、难忘的片刻，以及想再来一次的理由。','Photo 01':'照片 01','Photo 02':'照片 02','Photo 03':'照片 03','Photo placeholders · Click to enlarge':'照片占位 · 点击放大',
  'Elsewhere':'在别处','Social & small moments':'社交与日常','Douyin':'抖音','Short videos and moments from everyday life.':'用短视频记录生活里的片刻。','Profile link to be added ↗':'主页链接待补充 ↗','Video cover placeholder':'视频封面占位','Album preview':'相册预览','Photo placeholder':'照片占位',
  'Main navigation':'主导航','Personal profile':'个人信息','Yunfeng Li initials':'Yunfeng Li 姓名缩写','Page selection':'页面选择','Language selection':'语言选择','Filter projects':'筛选项目','Current updates':'生活近况','Playlist cover placeholder':'歌单封面占位','Conceptual illustration of a systolic processing array':'脉动计算阵列概念示意图','Conceptual diagram of a processor and a two-level cache hierarchy':'处理器与两级缓存的概念示意图','Conceptual illustration of optical waveguides and ring resonators':'光波导与环形谐振器的概念示意图','Open photo placeholder 1':'打开第 1 张照片占位','Open photo placeholder 2':'打开第 2 张照片占位','Open photo placeholder 3':'打开第 3 张照片占位','Close photo viewer':'关闭照片查看器','Previous photo':'上一张照片','Next photo':'下一张照片','Travel photo placeholder':'旅行照片占位'
};

Object.assign(window.HOMEPAGE_ZH, {
  'Hi, I’m Yunfeng — a microelectronics undergraduate at':'你好，我是 Yunfeng，目前就读于','’s College of Information Science & Electronic Engineering, working across':'信息与电子工程学院，专业为微电子，主要探索',
  'I like working across the layers of a system, from RTL and microarchitecture to the software that makes hardware useful. My current academic focus is split between silicon photonics, efficient AI hardware, and an agent-aware hardware prefetcher for AI agent workloads.':'我喜欢在系统的不同层次之间建立连接，从 RTL 与微架构，到让硬件真正发挥作用的软件。目前的学术关注集中在硅光子学、高效 AI 硬件，以及面向 AI Agent 工作负载的感知型硬件预取器。',
  'Outside the lab, leading a student visit to ASML helped me connect the semiconductor technologies I study with the people, process, and long-term thinking that move the industry forward.':'在实验室之外，主导学生团队参访 ASML，让我把正在学习的半导体技术，与推动行业前进的人、流程和长期思维连接起来。',
  'Showing all 2 projects.':'正在显示全部 2 个项目。',
  'SRTP · Project lead':'SRTP · 项目负责人',
  'Led an SRTP project bringing electrical control circuits and optical devices onto the same top-silicon layer of a 55 nm, 220 nm SOI silicon-photonics platform.':'负责 SRTP 光电融合项目，在 55 nm、220 nm SOI 硅光平台的同一顶层硅层上实现电控制电路与光学器件集成。',
  'Research output':'研究成果','Selected publication':'代表性论文','Optoelectronic integration on a CMOS silicon-photonics platform':'基于 CMOS 硅光平台的光电集成','2026 · supplementary material':'2026 · 补充材料','Paper from the SRTP project':'SRTP 项目论文','publication details to be updated':'· 出版信息待补充','A research output connected to the monolithic optoelectronic integration project. The supplementary PDF is available here while the final bibliographic record is prepared.':'这是一项来自单片光电集成项目的研究成果。正式书目信息整理完成前，可先在此查看补充材料 PDF。','Open supplementary PDF ↗':'打开补充材料 PDF ↗',
  'Experience & internship':'实习与经历','Advanced Institute of Information Technology, Peking University':'北京大学信息技术高等研究院','NPU Design Intern':'NPU 设计实习生','Working on NPU front-end design at the institute, with my role attached to the institute while contributing to its incubated company NanoCoreChip.':'我在研究院从事 NPU 前端设计，职位挂靠研究院，同时参与其孵化企业 NanoCoreChip 的工作。',
  'International exchange & visiting':'国际交流与访学','The Netherlands · ASML':'荷兰 · ASML','ASML headquarters visit':'ASML 总部参访','Project lead · Global ISEE exchange':'项目负责人 · Global ISEE 交流项目','I led the project from proposal and coordination through the visit itself, treating ASML as a chance to understand the frontier of semiconductor manufacturing from the inside.':'我从项目立项、协调到执行全程主导这次参访，把 ASML 视作一次从内部理解半导体制造前沿的机会。','The company’s position at the leading edge of lithography sharpened my curiosity about the field. Conversations with experienced engineers and alumni helped me think about technology bottlenecks, research culture, and the role students like me can play in the semiconductor industry.':'ASML 在光刻领域的前沿位置进一步激发了我的探索欲。与资深工程师和前辈交流，让我思考技术瓶颈、科研文化，以及像我这样的学生能够在半导体产业中扮演怎样的角色。','Read the reflection':'阅读访学思考','This journey became an important push toward my current direction: learning how ambitious systems are built, how organizations evolve around them, and where my own circuit and architecture work can contribute.':'这段旅程成为我选择当前方向的重要推力：理解宏大系统如何被构建、组织如何围绕技术成长，以及自己的电路与体系结构工作能够在哪里贡献力量。',
  'Graduation project':'毕业设计','Early proposal stage':'立项答辩初期','Design and Implementation of an Agent-Aware Hardware Prefetcher for AI Agent Workloads':'面向 AI Agent 工作负载的感知型硬件预取器设计与实现','2026 — present':'2026 — 至今','Graduation project · proposal defense in progress':'毕业设计 · 立项答辩进行中','Designing an agent-aware hardware prefetcher for AI agent workloads, with the aim of anticipating memory access patterns across tool execution, retrieval, data processing, and orchestration.':'面向 AI Agent 工作负载设计具备工作负载感知能力的硬件预取器，尝试预测工具调用、检索、数据处理与任务编排等多步执行过程中的内存访问。','The project is informed by agentic CPU requirements around branch-heavy code, indirect memory access, and keeping cores fed through multistep workloads.':'项目参考 Agentic CPU 对分支密集、间接访存和持续数据供给的设计要求，目前处于立项答辩阶段。','Advisor:':'指导老师：','Professor Peng Liu ↗':'刘鹏教授 ↗','computer architecture, microarchitecture, integrated circuit design, and hardware security':'计算机体系结构、微架构、集成电路设计与硬件安全',
  'video placeholder for final edit':'视频占位，后续可替换','On-device TinyStories-1M result ·':'端侧 TinyStories-1M 结果 ·','ASML headquarters visit':'ASML 总部参访','The Netherlands · ASML':'荷兰 · ASML',
  'Yunfeng Li portrait':'Yunfeng Li 头像','Nexys4DDR board used for the GEMM accelerator':'GEMM 加速器使用的 Nexys4DDR 开发板','Yunfeng speaking with an ASML engineer during the visit':'访学期间 Yunfeng 与 ASML 工程师交流','Group discussion during the ASML visit':'ASML 访学期间的小组交流','Welcome to ASML sign':'ASML 欢迎标识','Screenshot of Professor Peng Liu’s homepage':'刘鹏教授个人主页截图','AIIT and NanoCoreChip logos':'AIIT 与 NanoCoreChip 标识','AIIT logo':'AIIT 标识','NanoCoreChip logo':'NanoCoreChip 标识'
});
Object.assign(window.HOMEPAGE_ZH, {
  'Publication':'研究成果','Visiting':'访学经历','Graduation':'毕业设计',
  'The Netherlands · 2026':'荷兰 · 2026','· publication details to be updated':'· 出版信息待补充',' · computer architecture, microarchitecture, integrated circuit design, and hardware security':' · 计算机体系结构、微架构、集成电路设计与硬件安全'
});
Object.assign(window.HOMEPAGE_ZH, {
  'Optoelectronic integration paper':'光电融合项目论文','· title to be confirmed':'· 标题待确认','Supplementary material':'补充材料'
});
Object.assign(window.HOMEPAGE_ZH, {
  '· computer architecture, microarchitecture, integrated circuit design, and hardware security':'· 计算机体系结构、微架构、集成电路设计与硬件安全'
});
Object.assign(window.HOMEPAGE_ZH, {
  'Device-Level Characterization of Back-Gate-Tunable Zero-Change MOSFETs for AI-Oriented Silicon Photonics':'面向 AI 硅光子的背栅可调零变化 MOSFET 器件级表征'
});
Object.assign(window.HOMEPAGE_ZH, {
  'CIOP 2026 · Accepted':'CIOP 2026 · 已接收',
  'IEEE publication review in progress':'IEEE 出版审核中',
  'A research output from the SRTP optoelectronic integration project, prepared for CIOP 2026 in collaboration with IEEE. The official IEEE decision is expected in mid-November 2026.':'本成果来自 SRTP 光电融合项目，面向与 IEEE 合作举办的 CIOP 2026。IEEE 官方结果预计于 2026 年 11 月中旬公布。',
  'CIOP 2026 and IEEE logos':'CIOP 2026 与 IEEE 标识',
  'Peking University and NanoCoreChip identifiers':'北京大学与 NanoCoreChip 标识',
  'Peking University emblem':'北京大学校徽',
  'Zhejiang University emblem':'浙江大学校徽',
  'IEEE logo':'IEEE 标识'
});
Object.assign(window.HOMEPAGE_ZH, {
  'Selected Projects':'精选项目',
  'High-Performance GEMM Accelerator Based on Systolic Array':'基于脉动阵列的高性能 GEMM 加速器',
  'Monolithic Optoelectronic Chip Based on 12-inch CMOS Silicon Photonics':'基于 12 英寸 CMOS 硅光平台的单片光电芯片'
});
