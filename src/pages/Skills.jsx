import GlassCard from '../components/GlassCard'
import { skills, certifications } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills-page section">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-tag">What I know</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        {/* Technical Skills */}
        <div className="about-section-block">
          <h3 className="block-title animate-fade-in-up">
            <span className="block-icon">&#128640;</span> Technical Skills
          </h3>
          <GlassCard delay={0.2}>
            <div className="skills-bars">
              {skills.technical.map((skill) => (
                <div key={skill.name} className="skill-bar-item">
                  <div className="skill-bar-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Tools, SEO, Soft Skills */}
        <div className="about-section-block">
          <div className="skills-tags-grid">
            <GlassCard delay={0.3}>
              <h4 className="skills-subtitle">Tools & Technologies</h4>
              <div className="tag-list">
                {skills.tools.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.35}>
              <h4 className="skills-subtitle">SEO Skills</h4>
              <div className="tag-list">
                {skills.seo.map((s) => (
                  <span key={s} className="skill-tag tag-blue">{s}</span>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.4}>
              <h4 className="skills-subtitle">Soft Skills</h4>
              <div className="tag-list">
                {skills.soft.map((s) => (
                  <span key={s} className="skill-tag tag-purple">{s}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section-block">
          <h3 className="block-title animate-fade-in-up">
            <span className="block-icon">&#127942;</span> Certifications
          </h3>
          <GlassCard delay={0.2}>
            <ul className="cert-list">
              {certifications.map((cert, i) => (
                <li key={i} className="cert-item">
                  <span className="cert-bullet"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
