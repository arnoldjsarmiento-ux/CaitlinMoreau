import SectionHeader from './SectionHeader.jsx'
import { work } from '../data.js'

function ArchitectureDiagram({ layers }) {
  return (
    <div className="arch-diagram" aria-hidden="true">
      {layers.map((layer, i) => (
        <div key={layer} className={`arch-ring ring-${i}`}>
          <span className={`arch-label ${i === layers.length - 1 ? 'core' : ''}`}>{layer}</span>
        </div>
      ))}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Featured Work"
          title="Beyond the codebase"
          subtitle="Writing, releases, and other work published around the web."
        />

        <div className="work-grid">
          {work.map((w) => (
            <article key={w.title} className="work-card glass reveal">
              <div className="work-visual">
                {w.type === 'spotify' ? (
                  <iframe
                    title={w.title}
                    src={w.embed}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <ArchitectureDiagram layers={w.layers} />
                )}
              </div>
              <div className="work-body">
                <span className="project-category">{w.category}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
                <a href={w.href} target="_blank" rel="noreferrer" className="link-arrow">
                  {w.type === 'spotify' ? 'Open in Spotify' : 'Read on algoroq.io'} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
