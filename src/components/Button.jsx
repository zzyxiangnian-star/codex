import { ArrowRight, Download, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  arrow: ArrowRight,
  download: Download,
  github: Github,
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon = 'arrow',
  className = '',
  ...props
}) {
  const Icon = iconMap[icon] ?? ArrowRight;
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <span className="btn-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={2.6} />
      </span>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
