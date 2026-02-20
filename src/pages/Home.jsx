import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { profile, skills } from '../data/portfolio'
import './Home.css'

const tabs = [
  {
    name: 'about.js',
    icon: '👤',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'about', type: 'variable' },
      { text: ' = {', type: 'punctuation' },
      { text: '\n' },
      { text: '  name', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: `"${profile.name}"`, type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  role', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: `"${profile.tagline}"`, type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  location', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: `"${profile.location}"`, type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  available', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: 'true', type: 'boolean' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '};', type: 'punctuation' },
    ],
  },
  {
    name: 'experience.js',
    icon: '💼',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'experience', type: 'variable' },
      { text: ' = {', type: 'punctuation' },
      { text: '\n' },
      { text: '  company', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Ara Discoveries"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  role', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Web Developer"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  period', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"June 2025 - Present"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  stack', type: 'property' },
      { text: ': [', type: 'punctuation' },
      { text: '"React"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"MUI"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"JS"', type: 'string' },
      { text: ']', type: 'punctuation' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '};', type: 'punctuation' },
    ],
  },
  {
    name: 'projects.js',
    icon: '🚀',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'projects', type: 'variable' },
      { text: ' = [', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"Business Website"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"Corporate Website"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"Face Recognition ATM"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"E-Commerce Website"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"CRM Application"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  ', type: 'plain' },
      { text: '"Telecalling App"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '];', type: 'punctuation' },
      { text: '\n' },
      { text: '// ', type: 'comment' },
      { text: 'Total: 6 projects', type: 'comment' },
    ],
  },
  {
    name: 'skills.js',
    icon: '⚡',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'skills', type: 'variable' },
      { text: ' = {', type: 'punctuation' },
      { text: '\n' },
      { text: '  frontend', type: 'property' },
      { text: ': [', type: 'punctuation' },
      { text: '"React"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"JS"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"HTML5"', type: 'string' },
      { text: ']', type: 'punctuation' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  backend', type: 'property' },
      { text: ': [', type: 'punctuation' },
      { text: '"Node.js"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"Python"', type: 'string' },
      { text: ']', type: 'punctuation' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  database', type: 'property' },
      { text: ': [', type: 'punctuation' },
      { text: '"MongoDB"', type: 'string' },
      { text: ', ', type: 'punctuation' },
      { text: '"SQL"', type: 'string' },
      { text: ']', type: 'punctuation' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '};', type: 'punctuation' },
    ],
  },
  {
    name: 'education.js',
    icon: '🎓',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'education', type: 'variable' },
      { text: ' = {', type: 'punctuation' },
      { text: '\n' },
      { text: '  degree', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"B.Sc Computer Science"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  university', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"PMIST University"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  year', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '2025', type: 'number' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  cgpa', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '8.89', type: 'number' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '};', type: 'punctuation' },
    ],
  },
  {
    name: 'contact.js',
    icon: '📬',
    tokens: [
      { text: 'const ', type: 'keyword' },
      { text: 'contact', type: 'variable' },
      { text: ' = {', type: 'punctuation' },
      { text: '\n' },
      { text: '  email', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: `"${profile.email}"`, type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  phone', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: `"${profile.phone}"`, type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  linkedin', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Karthika-nagaraj"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '  status', type: 'property' },
      { text: ': ', type: 'punctuation' },
      { text: '"Open to work"', type: 'string' },
      { text: ',', type: 'punctuation' },
      { text: '\n' },
      { text: '};', type: 'punctuation' },
    ],
  },
]

function useTypingEffect(tokens, speed = 40) {
  const [displayed, setDisplayed] = useState([])
  const [tokenIndex, setTokenIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  const reset = useCallback(() => {
    setDisplayed([])
    setTokenIndex(0)
    setCharIndex(0)
    setDone(false)
  }, [])

  useEffect(() => {
    if (tokenIndex >= tokens.length) {
      setDone(true)
      return
    }

    const currentToken = tokens[tokenIndex]
    if (charIndex >= currentToken.text.length) {
      setTokenIndex((i) => i + 1)
      setCharIndex(0)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayed((prev) => {
        const copy = [...prev]
        if (copy.length <= tokenIndex) {
          copy.push({ text: '', type: currentToken.type })
        }
        copy[tokenIndex] = {
          ...copy[tokenIndex],
          text: currentToken.text.slice(0, charIndex + 1),
        }
        return copy
      })
      setCharIndex((c) => c + 1)
    }, currentToken.text === '\n' ? 100 : speed)

    return () => clearTimeout(timeout)
  }, [tokenIndex, charIndex, tokens, speed])

  return { displayed, done, reset }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)
  const { displayed, done, reset } = useTypingEffect(tabs[activeTab].tokens, 35)

  const handleTabClick = (index) => {
    if (index === activeTab) return
    setActiveTab(index)
    reset()
  }

  return (
    <section className="home">
      {/* Decorative orbs */}
      <div className="home-orb home-orb-1"></div>
      <div className="home-orb home-orb-2"></div>

      <div className="container home-content">
        <div className="hero-text animate-slide-left">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </span>
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="hero-role">{profile.tagline}</h2>
          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-tech-tags">
            {skills.technical.slice(0, 5).map((s) => (
              <span key={s.name} className="tech-tag">{s.name}</span>
            ))}
          </div>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-visual animate-slide-right">
          <div className="code-card">
            <div className="code-card-header">
              <div className="code-card-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
            </div>
            <div className="code-card-tabs">
              {tabs.map((tab, i) => (
                <button
                  key={tab.name}
                  className={`code-tab ${i === activeTab ? 'code-tab-active' : ''}`}
                  onClick={() => handleTabClick(i)}
                >
                  <span className="code-tab-icon">{tab.icon}</span>
                  <span className="code-tab-name">{tab.name}</span>
                </button>
              ))}
            </div>
            <div className="code-card-body">
              <pre className="code-content">
                <code>
                  {displayed.map((token, i) => (
                    <span key={i} className={`token-${token.type || 'plain'}`}>
                      {token.text}
                    </span>
                  ))}
                  {!done && <span className="typing-cursor">|</span>}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling tech marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...skills.technical, ...skills.technical].map((s, i) => (
            <span key={i} className="marquee-item">{s.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
