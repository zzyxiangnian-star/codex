import Button from './Button.jsx';

export default function WorkCard({ work }) {
  const Icon = work.icon;

  return (
    <article className={`work-card sticker-card shadow-${work.color}`}>
      <div className={`floating-icon bg-${work.color}`} aria-hidden="true">
        <Icon size={24} strokeWidth={2.7} />
      </div>
      <img src={work.cover} alt={`${work.title}封面`} className="work-cover" />
      <div className="work-card-body">
        <span className="category-pill">{work.category}</span>
        <h3>{work.title}</h3>
        <p>{work.summary}</p>
        <div className="work-actions">
          <Button to={`/works/${work.id}`}>查看详情</Button>
          <Button href={work.githubUrl} variant="secondary" icon="github">
            GitHub 仓库
          </Button>
        </div>
      </div>
    </article>
  );
}
