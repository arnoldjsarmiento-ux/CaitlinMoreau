import { useEffect, useState } from 'react'
import { profile } from '../data.js'

function useTypewriter(words, { typeMs = 80, deleteMs = 40, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteMs : typeMs,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="badge reveal">
            <span className="pulse" /> Available for new projects
          </span>
          <h1 className="reveal">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role reveal">
            <span className="mono">&gt;</span> {role}
            <span className="caret" />
          </p>
          <p className="hero-tagline reveal">{profile.tagline}</p>
          <div className="hero-actions reveal">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's talk
            </a>
          </div>
          <ul className="hero-socials reveal">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual reveal">
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-file">developer.ts</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}
                {'\n'}  name: <span className="tok-str">'{profile.name}'</span>,
                {'\n'}  role: <span className="tok-str">'{profile.role}'</span>,
                {'\n'}  stack: [<span className="tok-str">'React'</span>, <span className="tok-str">'Node'</span>, <span className="tok-str">'Postgres'</span>],
                {'\n'}  principles: [<span className="tok-str">'clean'</span>, <span className="tok-str">'tested'</span>, <span className="tok-str">'fast'</span>],
                {'\n'}  <span className="tok-fn">ship</span>: () =&gt; <span className="tok-str">'🚀 to production'</span>,
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
          <div className="float-chip chip-1">⚛️ React</div>
          <div className="float-chip chip-2">🟢 Node.js</div>
          <div className="float-chip chip-3">🐘 PostgreSQL</div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
