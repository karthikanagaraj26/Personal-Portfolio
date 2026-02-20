import './GlassCard.css'

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <div
      className={`glass-card ${hover ? 'glass-hover' : ''} ${className} animate-fade-in-up`}
      style={delay ? { animationDelay: `${delay}s`, opacity: 0 } : {}}
    >
      {children}
    </div>
  )
}
