export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={item.title}>
          <span>{item.meta}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
