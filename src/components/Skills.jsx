import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title="My toolbox"
          subtitle="Technologies I use to take ideas from zero to production."
        />
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skill-card glass reveal">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
