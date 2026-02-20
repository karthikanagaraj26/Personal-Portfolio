import GlassCard from '../components/GlassCard'
import { experience, education } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-tag">My journey</span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Experience */}
        <div className="about-section-block">
          <h3 className="block-title animate-fade-in-up">
            <span className="block-icon">&#128188;</span> Work Experience
          </h3>
          {experience.map((exp, i) => (
            <GlassCard key={i} delay={0.2 + i * 0.1}>
              <div className="exp-header">
                <div>
                  <h4 className="exp-role">{exp.role}</h4>
                  <p className="exp-company">{exp.company} &middot; {exp.location}</p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Education */}
        <div className="about-section-block">
          <h3 className="block-title animate-fade-in-up">
            <span className="block-icon">&#127891;</span> Education
          </h3>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <GlassCard key={i} delay={0.2 + i * 0.1}>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-meta">
                  <span className="edu-year">{edu.year}</span>
                  <span className="edu-score">{edu.score}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
