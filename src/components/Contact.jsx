import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader index="05" eyebrow="Contact" title="Let's build something great." />

        <div className="contact-grid">
          <div className="contact-intro reveal">
            <p>
              Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.
              I usually reply within a day.
            </p>
            <button className="email-chip glass" onClick={copyEmail}>
              <span className="mono">{profile.email}</span>
              <span className="email-action">{copied ? 'Copied ✓' : 'Copy'}</span>
            </button>
            <ul className="contact-socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-arrow">
                    {s.label} <span>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form glass reveal" onSubmit={submit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required placeholder="Jane Doe" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                placeholder="jane@company.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                placeholder="Tell me about your project..."
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
