import GlassCard from '../components/GlassCard'
import { projects } from '../data/portfolio'
import './Projects.css'

const colorMap = {
  purple: { bg: 'rgba(192, 132, 252, 0.08)', border: 'rgba(192, 132, 252, 0.25)', accent: '#9333ea' },
  blue: { bg: 'rgba(96, 165, 250, 0.08)', border: 'rgba(96, 165, 250, 0.25)', accent: '#2563eb' },
  indigo: { bg: 'rgba(129, 140, 248, 0.08)', border: 'rgba(129, 140, 248, 0.25)', accent: '#4338ca' },
  cyan: { bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.25)', accent: '#0891b2' },
}

export default function Projects() {
  return (
    <section className="projects section">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-tag">What I've built</span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            A collection of professional and academic projects showcasing my skills
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const colors = colorMap[project.color] || colorMap.purple
            return (
              <GlassCard
                key={index}
                className="project-card"
                delay={0.1 + index * 0.12}
              >
                <div className="project-top">
                  <div className="project-badges">
                    <span
                      className="project-type-badge"
                      style={{ background: colors.bg, color: colors.accent, borderColor: colors.border }}
                    >
                      {project.type}
                    </span>
                    <span className="project-tag-badge">{project.tag}</span>
                  </div>
                  <div className="project-icon" style={{ background: `linear-gradient(135deg, ${colors.accent}22, ${colors.accent}44)` }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-outcome">
                  <span className="outcome-label">Outcome</span>
                  <p className="outcome-text">{project.outcome}</p>
                </div>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="project-tool" style={{ borderColor: colors.border }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
