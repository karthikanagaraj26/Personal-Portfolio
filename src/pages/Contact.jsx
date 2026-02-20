import { useState } from 'react'
import GlassCard from '../components/GlassCard'
import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Karthika Nagaraj',
      href: profile.linkedin,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: profile.location,
      href: null,
    },
  ]

  return (
    <section className="contact section">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-tag">Let's connect</span>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-desc">
            Feel free to reach out for opportunities or just to say hello
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-list">
            {contactInfo.map((item, i) => (
              <GlassCard key={i} className="contact-info-card" delay={0.1 + i * 0.08}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-info-link">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div className="contact-info-link">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          {/* Contact Form */}
          <GlassCard className="contact-form-card" delay={0.3}>
            <h3 className="form-title">Send a Message</h3>
            {sent && (
              <div className="form-success animate-scale-in">
                <span>&#10024;</span> Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4z"/><path d="m22 2-11 11"/>
                </svg>
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
