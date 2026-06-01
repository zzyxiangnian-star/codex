import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import SkillTags from '../components/SkillTags.jsx';
import Timeline from '../components/Timeline.jsx';
import { learning, philosophy, profile, skills } from '../data/content.js';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="关于我"
        description="这里记录我的学习经历、技能能力和对 AI 创作的理解。"
      />

      <section className="section">
        <div className="container about-grid">
          <article className="sticker-card about-profile">
            <span className="category-pill">个人简介</span>
            <h2>{profile.role}</h2>
            <p>{profile.intro}</p>
            <p>
              我希望把每一次工具尝试都整理成有上下文的作品：为什么创作、怎样迭代、最后学到了什么。
            </p>
          </article>
          <div className="quote-card">
            <strong>Creative Note</strong>
            <p>作品集不只是陈列柜，也是一份持续更新的学习地图。</p>
          </div>
        </div>
      </section>

      <section className="section section-dots">
        <div className="container">
          <SectionTitle eyebrow="Learning" title="学习经历" />
          <Timeline items={learning} />
        </div>
      </section>

      <section className="section">
        <div className="container skill-section">
          <SectionTitle
            eyebrow="Abilities"
            title="技能能力"
            description="目前能力重点覆盖 AI 内容生成、作品包装和前端展示。"
          />
          <SkillTags items={skills} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Creative Philosophy" title="创作理念" />
          <div className="philosophy-grid">
            {philosophy.map((item) => {
              const Icon = item.icon;
              return (
                <article className="philosophy-card sticker-card" key={item.title}>
                  <div className="floating-icon bg-violet" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.7} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
