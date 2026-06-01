export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="hero-description">{description}</p>}
        </div>
        {children && <div className="page-hero-extra">{children}</div>}
      </div>
    </section>
  );
}
