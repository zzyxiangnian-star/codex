import { Award, Download, GraduationCap, Rocket } from 'lucide-react';
import Button from '../components/Button.jsx';
import PageHero from '../components/PageHero.jsx';
import Timeline from '../components/Timeline.jsx';
import { certificates, learning, resumeDownload, resumeProjects } from '../data/content.js';

export default function Resume() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="简历"
        description="用结构化方式展示教育经历、技能证书和项目经历。"
      >
        <Button href={resumeDownload} icon="download">
          PDF下载
        </Button>
      </PageHero>

      <section className="section">
        <div className="container resume-grid">
          <article className="resume-panel sticker-card">
            <div className="panel-heading">
              <GraduationCap size={24} />
              <h2>教育经历</h2>
            </div>
            <Timeline items={learning} />
          </article>

          <article className="resume-panel sticker-card">
            <div className="panel-heading">
              <Award size={24} />
              <h2>技能证书</h2>
            </div>
            <ul className="check-list">
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </article>

          <article className="resume-panel sticker-card span-2">
            <div className="panel-heading">
              <Rocket size={24} />
              <h2>项目经历</h2>
            </div>
            <div className="resume-projects">
              {resumeProjects.map((project) => (
                <div key={project.id} className="resume-project">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
