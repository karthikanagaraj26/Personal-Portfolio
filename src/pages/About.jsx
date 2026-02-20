import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import { profile } from '../data/portfolio'
import './About.css'

const stats = [
  { number: '1+', label: 'Year Experience' },
  { number: '6+', label: 'Projects Done' },
  { number: '10+', label: 'Tech Skills' },
  { number: '4', label: 'Certifications' },
]

const whatIDo = [
  {
    icon: '&#128187;',
    title: 'Frontend Development',
    desc: 'Building responsive, interactive UIs with React.js, JavaScript, HTML5 and CSS3.',
  },
  {
    icon: '&#127912;',
    title: 'UI/UX Design',
    desc: 'Creating clean, user-friendly interfaces with consistent design systems and layouts.',
  },
  {
    icon: '&#128269;',
    title: 'SEO Optimization',
    desc: 'Implementing on-page/off-page SEO strategies to boost visibility and performance.',
  },
  {
    icon: '&#128241;',
    title: 'Responsive Design',
    desc: 'Ensuring cross-browser compatibility and pixel-perfect design across all devices.',
  },
]

const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
]

const interests = ['Web Technologies', 'UI Design', 'Problem Solving', 'Learning New Frameworks', 'Open Source']

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-fade-in-up">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Intro */}
        <GlassCard className="about-intro" delay={0.1}>
          <div className="about-intro-content">
            <div>
              <h3 className="about-name">{profile.name}</h3>
              <p className="about-role">{profile.tagline}</p>
              <p className="about-objective">{profile.bio}</p>
              <p className="about-objective">{profile.objective}</p>
              <div className="about-quick-info">
                <span className="quick-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {profile.location}
                </span>
                <span className="quick-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {profile.email}
                </span>
                <span className="quick-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {profile.phone}
                </span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="stat-card" hover delay={0.15 + i * 0.08}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </GlassCard>
          ))}
        </div>

        {/* What I Do */}
        <div className="about-section-block">
          <h3 className="block-title animate-fade-in-up">
            <span className="block-icon">&#9889;</span> What I Do
          </h3>
          <div className="what-i-do-grid">
            {whatIDo.map((item, i) => (
              <GlassCard key={i} hover delay={0.2 + i * 0.1}>
                <span className="wid-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h4 className="wid-title">{item.title}</h4>
                <p className="wid-desc">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="about-bottom-grid">
          <div className="about-section-block">
            <h3 className="block-title animate-fade-in-up">
              <span className="block-icon">&#127760;</span> Languages
            </h3>
            <GlassCard delay={0.2}>
              <div className="lang-list">
                {languages.map((lang, i) => (
                  <div key={i} className="lang-item">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="about-section-block">
            <h3 className="block-title animate-fade-in-up">
              <span className="block-icon">&#128161;</span> Interests
            </h3>
            <GlassCard delay={0.25}>
              <div className="interest-tags">
                {interests.map((item, i) => (
                  <span key={i} className="interest-tag">{item}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta animate-fade-in-up">
          <GlassCard className="cta-card">
            <h3 className="cta-title">Interested in working together?</h3>
            <p className="cta-desc">I'm always open to new opportunities and collaborations.</p>
            <Link to="/contact" className="btn btn-primary">
              Let's Connect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
