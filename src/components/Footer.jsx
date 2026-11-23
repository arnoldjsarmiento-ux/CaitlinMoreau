import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React.
        </span>
        <a href="#top" className="link-arrow">
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  )
}
