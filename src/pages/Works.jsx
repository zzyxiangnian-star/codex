import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import WorkCard from '../components/WorkCard.jsx';
import { categories, works } from '../data/content.js';

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredWorks = useMemo(() => {
    if (activeCategory === 'all') return works;
    return works.filter((work) => work.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="AI Works"
        title="AI作品"
        description="按照 AI 图片、AI 视频、AI 文案、AI 网页/应用和课程项目整理展示。"
      >
        <div className="hero-count">
          <strong>{filteredWorks.length}</strong>
          <span>当前作品</span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="filter-bar" aria-label="作品分类筛选">
            {categories.map((category) => (
              <button
                key={category.value}
                className={activeCategory === category.value ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="works-grid">
            {filteredWorks.map((work) => (
              <WorkCard work={work} key={work.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
