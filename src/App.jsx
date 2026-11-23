import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
