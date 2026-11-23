import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data.js'

export default function Projects() {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!preview) return
    const onKey = (e) => e.key === 'Escape' && setPreview(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview])

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title="Selected projects"
          subtitle="A few things I've designed and built recently."
        />

        <div className="projects-list">
          {projects.map((p, i) => (
            <article key={p.title} className={`project reveal ${i % 2 ? 'flip' : ''}`}>
              <button
                className="project-media"
                onClick={() => setPreview(p)}
                aria-label={`Enlarge ${p.title} screenshot`}
              >
                <div className="browser-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                <span className="media-overlay">Click to enlarge</span>
              </button>

              <div className="project-info">
                <span className="project-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p className="project-desc glass">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t} className="mono">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="link-arrow">
                    Visit live site <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" aria-label="Close preview">
            ×
          </button>
          <img src={preview.image} alt={`${preview.title} full screenshot`} />
        </div>
      )}
    </section>
  )
}
