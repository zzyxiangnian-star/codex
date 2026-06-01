export default function SkillTags({ items }) {
  return (
    <div className="skill-tags">
      {items.map((item, index) => (
        <span key={item} className={`skill-tag tone-${(index % 4) + 1}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
