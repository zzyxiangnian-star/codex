import { Github, Mail, Sparkles } from 'lucide-react';
import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <Sparkles size={20} strokeWidth={2.8} />
            <span>个人 AI 作品展示网站</span>
          </div>
          <p>持续整理 AI 创作、前端练习和课程项目。</p>
        </div>
        <div className="footer-actions">
          <a href={`mailto:${profile.email}`} aria-label="发送邮件">
            <Mail size={20} />
            <span>{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="打开 GitHub">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
