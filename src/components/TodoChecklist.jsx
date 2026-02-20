import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { todoItems } from '../data/portfolio'
import './TodoChecklist.css'

export default function TodoChecklist() {
  const [checked, setChecked] = useState({})
  const navigate = useNavigate()

  const allChecked = todoItems.every((item) => checked[item.id])

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleGenerate = () => {
    if (allChecked) {
      navigate('/home')
    }
  }

  return (
    <div className="checklist-page">
      {/* Background decoration */}
      <div className="checklist-bg-orb orb-1"></div>
      <div className="checklist-bg-orb orb-2"></div>
      <div className="checklist-bg-orb orb-3"></div>

      <div className="checklist-wrapper animate-fade-in-up">
        <div className="checklist-header">
          <div className="checklist-icon-row">
            <span className="checklist-emoji">&#9997;&#65039;</span>
          </div>
          <h1 className="checklist-title">
            Portfolio <span className="gradient-text">Checklist</span>
          </h1>
          <p className="checklist-subtitle">
            Verify each section is ready, then generate your portfolio
          </p>
        </div>

        <div className="checklist-items">
          {todoItems.map((item, index) => (
            <label
              key={item.id}
              className={`checklist-item animate-fade-in-up ${checked[item.id] ? 'completed' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.08}s`, opacity: 0 }}
            >
              <div className="checkbox-wrapper" onClick={() => toggle(item.id)}>
                <div className={`custom-checkbox ${checked[item.id] ? 'checked' : ''}`}>
                  {checked[item.id] && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="checklist-item-text">
                <span className="checklist-label">{item.label}</span>
                <span className="checklist-desc">{item.description}</span>
              </div>
              <span className={`checklist-status ${checked[item.id] ? 'done' : ''}`}>
                {checked[item.id] ? 'Ready' : 'Pending'}
              </span>
            </label>
          ))}
        </div>

        <div className="checklist-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(Object.values(checked).filter(Boolean).length / todoItems.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="progress-text">
            {Object.values(checked).filter(Boolean).length} / {todoItems.length} completed
          </span>
        </div>

        <button
          className={`generate-btn ${allChecked ? 'active' : 'disabled'}`}
          onClick={handleGenerate}
          disabled={!allChecked}
        >
          <span className="btn-sparkle">&#10024;</span>
          Generate Portfolio
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
