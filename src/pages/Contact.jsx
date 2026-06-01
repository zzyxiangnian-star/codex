import ContactForm from '../components/ContactForm.jsx';
import PageHero from '../components/PageHero.jsx';
import { contactCards, profile } from '../data/content.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="联系我"
        description="欢迎交流 AI 创作、课程项目、网页作品或合作想法。"
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article className={`contact-card sticker-card tone-${index + 1}`} key={card.label}>
                  <div className="floating-icon bg-green" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.7} />
                  </div>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </article>
              );
            })}
            <article className="social-card sticker-card">
              <span className="category-pill">社交平台</span>
              <div className="social-links">
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
