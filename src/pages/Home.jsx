import { Link } from 'react-router-dom';
import { ArrowRight, Github, Mail, WandSparkles } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import SkillTags from '../components/SkillTags.jsx';
import WorkCard from '../components/WorkCard.jsx';
import { profile, skills, works } from '../data/content.js';

export default function Home() {
  const featuredWorks = works.filter((work) => work.featured);

  return (
    <>
      <section className="hero-section">
        <div className="hero-shape hero-circle" aria-hidden="true" />
        <div className="hero-shape hero-square" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Personal AI Portfolio</p>
            <h1>{profile.name}的 AI 作品展示网站</h1>
            <p>{profile.tagline}</p>
            <div className="hero-actions">
              <Button to="/works">浏览 AI 作品</Button>
              <Button to="/about" variant="secondary">
                了解我
              </Button>
            </div>
          </div>
          <div className="hero-visual" aria-label="AI 创作展示插画">
            <div className="visual-card">
              <span className="visual-dot dot-pink" />
              <span className="visual-dot dot-yellow" />
              <span className="visual-dot dot-green" />
              <div className="visual-icon">
                <WandSparkles size={72} strokeWidth={2.2} />
              </div>
              <div className="mini-grid">
                <span>AI 图片</span>
                <span>AI 视频</span>
                <span>AI 文案</span>
                <span>网页应用</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div className="intro-card sticker-card">
            <span className="category-pill">个人介绍</span>
            <h2>{profile.role}</h2>
            <p>{profile.intro}</p>
            <div className="inline-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                邮箱联系
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <strong>{works.length}</strong>
              <span>展示项目</span>
            </div>
            <div className="metric-card pink">
              <strong>{skills.length}</strong>
              <span>技能标签</span>
            </div>
            <div className="metric-card yellow">
              <strong>5</strong>
              <span>创作方向</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dots">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Works"
            title="精选 AI 作品"
            description="先展示三组代表性占位作品，每张卡片都能进入详情页并跳转 GitHub 仓库。"
          />
          <div className="works-grid">
            {featuredWorks.map((work) => (
              <WorkCard work={work} key={work.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container skill-section">
          <SectionTitle
            eyebrow="Skills"
            title="技能标签"
            description="围绕 AI 创作、前端实现和内容表达构建个人能力画像。"
          />
          <SkillTags items={skills} />
        </div>
      </section>

      <section className="section contact-cta-section">
        <div className="container contact-cta sticker-card">
          <div>
            <p className="eyebrow">Let’s Connect</p>
            <h2>想交流 AI 创作或一起做项目？</h2>
            <p>可以通过邮箱、微信或社交平台联系我，也可以在联系页留下你的想法。</p>
          </div>
          <Link className="round-link" to="/contact" aria-label="前往联系页面">
            <ArrowRight size={28} />
          </Link>
        </div>
      </section>
    </>
  );
}
