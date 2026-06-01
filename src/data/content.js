import {
  Bot,
  Brush,
  Code2,
  FileText,
  GraduationCap,
  Image,
  Mail,
  MessageCircle,
  Palette,
  PenTool,
  Sparkles,
  Video,
} from 'lucide-react';

export const profile = {
  name: '你的名字',
  role: 'AI 创作者 / 前端学习者',
  tagline: '用 AI 把灵感变成可展示、可复盘、可迭代的作品。',
  intro:
    '这里会展示我的 AI 图片、视频、文案、网页应用和课程项目。我关注从 Prompt 构思、工具组合到最终作品表达的完整过程。',
  email: 'hello@example.com',
  wechat: 'your-wechat-id',
  github: 'https://github.com/your-name',
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-name' },
    { label: 'Bilibili', href: 'https://www.bilibili.com' },
    { label: '小红书', href: 'https://www.xiaohongshu.com' },
  ],
};

export const skills = [
  'Prompt Engineering',
  'AI 图像生成',
  'AI 视频创作',
  '前端开发',
  'React',
  '内容策划',
  '视觉排版',
  '项目复盘',
];

export const learning = [
  {
    title: 'AI 创作系统学习',
    meta: '2025 - 现在',
    description: '系统学习 Prompt 结构、图像生成流程、视频分镜、网页作品表达和作品集整理。',
  },
  {
    title: '前端基础与作品开发',
    meta: '2024 - 现在',
    description: '学习 HTML、CSS、JavaScript、React，并把课程练习沉淀成可展示项目。',
  },
  {
    title: '设计表达与内容策划',
    meta: '长期积累',
    description: '练习将抽象想法转化为清晰的视觉故事、交互结构和可阅读的作品说明。',
  },
];

export const certificates = [
  'AI 工具实战课程结业证书',
  '前端开发基础训练营证书',
  '数字媒体创作课程项目认证',
];

export const categories = [
  { label: '全部', value: 'all' },
  { label: 'AI图片', value: 'AI图片' },
  { label: 'AI视频', value: 'AI视频' },
  { label: 'AI文案', value: 'AI文案' },
  { label: 'AI网页/应用', value: 'AI网页/应用' },
  { label: '课程项目', value: '课程项目' },
];

export const works = [
  {
    id: 'dream-city',
    title: '梦境城市视觉实验',
    category: 'AI图片',
    featured: true,
    icon: Image,
    color: 'violet',
    cover: '/assets/work-dream-city.svg',
    summary: '用几何建筑和霓虹色块探索未来城市的视觉叙事。',
    tools: ['Midjourney', 'Photoshop', 'Prompt 编排'],
    prompt:
      'A playful geometric dream city, optimistic colors, paper cutout shadows, modern editorial composition, warm cream background.',
    background: '希望把“城市记忆”和“梦境拼贴”结合起来，形成适合作品集首屏展示的视觉作品。',
    process: ['收集城市、贴纸、Memphis 风格参考', '拆分建筑、光影、色彩与材质关键词', '多轮生成并筛选构图', '后期统一色彩和展示比例'],
    reflection: '强风格作品需要保持视觉秩序，色彩越活泼，构图越需要稳定。',
    githubUrl: 'https://github.com/your-name/dream-city',
  },
  {
    id: 'motion-story',
    title: '一分钟 AI 短片分镜',
    category: 'AI视频',
    featured: true,
    icon: Video,
    color: 'pink',
    cover: '/assets/work-motion-story.svg',
    summary: '从脚本、镜头到视频生成，完成一支轻量叙事短片方案。',
    tools: ['Runway', '剪映', 'ChatGPT'],
    prompt:
      'A warm short film storyboard about a student building a tiny AI robot, playful, bright, cinematic close-ups.',
    background: '练习用 AI 视频工具把抽象故事拆成可执行镜头，并控制节奏与画面一致性。',
    process: ['确定主题和情绪曲线', '生成 8 个镜头脚本', '制作关键画面', '生成视频并剪辑配乐'],
    reflection: 'AI 视频更依赖前期分镜规划，镜头描述越明确，后期返工越少。',
    githubUrl: 'https://github.com/your-name/motion-story',
  },
  {
    id: 'copywriting-kit',
    title: 'AI 文案灵感卡片',
    category: 'AI文案',
    featured: true,
    icon: PenTool,
    color: 'yellow',
    cover: '/assets/work-copywriting-kit.svg',
    summary: '整理一套适合社交平台发布的标题、正文和选题生成模板。',
    tools: ['ChatGPT', 'Notion', 'Markdown'],
    prompt:
      'Generate energetic Chinese social media copywriting ideas for AI portfolio projects with clear hooks and friendly tone.',
    background: '为了让作品不只停留在成品展示，也能有清晰的传播表达和复盘文字。',
    process: ['分析目标读者', '整理标题公式', '生成多版本文案', '人工筛选并统一语气'],
    reflection: '好文案不是堆砌形容词，而是让读者快速理解作品价值。',
    githubUrl: 'https://github.com/your-name/copywriting-kit',
  },
  {
    id: 'portfolio-web',
    title: 'AI 作品集网页',
    category: 'AI网页/应用',
    featured: false,
    icon: Code2,
    color: 'green',
    cover: '/assets/work-portfolio-web.svg',
    summary: '使用 React 构建多页作品展示网站，支持分类筛选和详情页。',
    tools: ['React', 'Vite', 'CSS'],
    prompt:
      'Design a playful geometric personal AI portfolio website with bold borders, sticker cards, and clear project detail pages.',
    background: '搭建个人作品展示阵地，集中呈现 AI 作品、学习过程、技能和联系方式。',
    process: ['规划信息架构', '建立设计系统', '创建数据结构', '实现多页路由和响应式布局'],
    reflection: '作品网站本身也是作品，要同时服务展示、阅读和后续维护。',
    githubUrl: 'https://github.com/your-name/portfolio-web',
  },
  {
    id: 'course-lab',
    title: '课程项目复盘板',
    category: '课程项目',
    featured: false,
    icon: GraduationCap,
    color: 'violet',
    cover: '/assets/work-course-lab.svg',
    summary: '将课程练习按目标、方法、成果、反思整理为结构化项目。',
    tools: ['Figma', 'React', 'AI 助手'],
    prompt:
      'Create a structured course project review with goals, process, deliverables, and reflection for an AI learning portfolio.',
    background: '把学习过程变成可以展示的证据，也方便回顾自己的成长路径。',
    process: ['归档课程任务', '提炼项目目标', '补充截图和说明', '形成可展示详情页'],
    reflection: '复盘能让练习变成资产，尤其适合作品集长期积累。',
    githubUrl: 'https://github.com/your-name/course-lab',
  },
];

export const resumeProjects = works.slice(0, 3);

export const contactCards = [
  { label: '邮箱', value: profile.email, icon: Mail },
  { label: '微信', value: profile.wechat, icon: MessageCircle },
  { label: 'GitHub', value: 'github.com/your-name', icon: Code2 },
];

export const philosophy = [
  {
    icon: Sparkles,
    title: '先有想法，再选工具',
    text: '工具负责扩展表达边界，创作者负责判断方向、筛选结果和讲清楚故事。',
  },
  {
    icon: Palette,
    title: '让过程可被看见',
    text: '我会记录 Prompt、迭代流程和反思，让每个作品都能说明它是如何被创造出来的。',
  },
  {
    icon: Bot,
    title: '与 AI 协作，而不是替代',
    text: 'AI 是灵感伙伴和生产助手，最终的审美选择、结构整理和价值表达仍然由人完成。',
  },
  {
    icon: Brush,
    title: '保持轻快和清晰',
    text: '视觉可以活泼，但信息必须清楚；作品集要让人愿意点开，也能快速理解。',
  },
];

export const resumeDownload = '/resume.pdf';
export const docIcon = FileText;
