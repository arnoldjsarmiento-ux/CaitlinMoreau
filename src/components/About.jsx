import SectionHeader from './SectionHeader.jsx'
import { about, profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" eyebrow="About" title="Building the whole stack, thoughtfully." />
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="about-location">
              <span className="mono">📍</span> {profile.location}
            </p>
          </div>
          <div className="about-stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stat-card glass reveal">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
