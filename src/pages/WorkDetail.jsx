import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Button from '../components/Button.jsx';
import PageHero from '../components/PageHero.jsx';
import { works } from '../data/content.js';

export default function WorkDetail() {
  const { id } = useParams();
  const work = works.find((item) => item.id === id);

  if (!work) {
    return (
      <section className="section">
        <div className="container empty-state sticker-card">
          <h1>没有找到这个作品</h1>
          <p>可能是链接已变化，请返回作品列表重新选择。</p>
          <Button to="/works">返回 AI作品</Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow={work.category} title={work.title} description={work.summary}>
        <Button href={work.githubUrl} icon="github">
          GitHub 仓库
        </Button>
      </PageHero>

      <section className="section">
        <div className="container detail-layout">
          <aside className="detail-side">
            <Link className="back-link" to="/works">
              <ArrowLeft size={18} />
              返回作品列表
            </Link>
            <div className="tool-card sticker-card">
              <span className="category-pill">使用工具</span>
              <ul>
                {work.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="detail-main">
            <img src={work.cover} alt={`${work.title}成品展示`} className="detail-cover" />

            <section className="detail-section sticker-card">
              <h2>创作背景</h2>
              <p>{work.background}</p>
            </section>

            <section className="detail-section sticker-card">
              <h2>Prompt展示</h2>
              <pre>{work.prompt}</pre>
            </section>

            <section className="detail-section sticker-card">
              <h2>创作流程</h2>
              <ol className="process-list">
                {work.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="detail-section sticker-card">
              <h2>总结反思</h2>
              <p>{work.reflection}</p>
              <a className="text-link" href={work.githubUrl} target="_blank" rel="noreferrer">
                打开项目仓库
                <ExternalLink size={16} />
              </a>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
