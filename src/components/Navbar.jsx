import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: '首页', to: '/' },
  { label: '关于我', to: '/about' },
  { label: 'AI作品', to: '/works' },
  { label: '简历', to: '/resume' },
  { label: '联系我', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="主导航">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={20} strokeWidth={2.8} />
          </span>
          <span>AI Portfolio</span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
