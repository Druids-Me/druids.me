import { useEffect, useState } from "react"
import "../styles/pages/home.css"

import { Link, NavLink } from "react-router-dom"

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false)

// zamykanie ESC
useEffect(() => {
  const onKey = (e) => e.key === "Escape" && setMenuOpen(false)
  window.addEventListener("keydown", onKey)
  return () => window.removeEventListener("keydown", onKey)
}, [])

useEffect(() => {
  document.body.classList.toggle('body-lock', menuOpen)
  return () => document.body.classList.remove('body-lock')
}, [menuOpen])

const closeOnNav = () => setMenuOpen(false)

return (
  <>
    {/* NAV */}
    <nav className="site-nav" role="navigation" aria-label="Główne">
      <a href="#" className="nav-brand" aria-label="Strona główna">
        <span className="brand-mark">🌱</span>
        <span>DRUIDS ME</span>
      </a>

      {/* Desktop */}
      <ul className="nav-menu" aria-label="Menu desktop">
        <li><Link to="/md/INSPIRE" onClick={closeOnNav}>Inspire</Link></li>
        {/*<li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contact">Kontakt</a></li>*/}
      </ul>

      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        aria-label="Otwórz menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(v => !v)}
      >
        {/* ikona hamburger / close */}
        <svg className="icon-burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={menuOpen ? "true" : "false"}
        onClick={closeOnNav}
      >
        <div>
          <ul role="menu" onClick={(e) => e.stopPropagation()}>
            <li role="none"><Link role="menuitem" to="/md/INSPIRE" onClick={closeOnNav}>Inspire</Link></li>
            {/*<li role="none"><a role="menuitem" href="#tokenomics" onClick={closeOnNav}>Tokenomics</a></li>
            <li role="none"><a role="menuitem" href="#roadmap" onClick={closeOnNav}>Roadmap</a></li>
            <li role="none"><a role="menuitem" href="#contact" onClick={closeOnNav}>Kontakt</a></li>*/}
          </ul>
        </div>
      </div>
    </nav>

    {/* CONTENT */}
    <main className="wrap" role="main">
      <header>
        <div className="badge" aria-label="Codename">
          <span>DRUIDS ME</span><span>(codename)</span>
        </div>
        <h1>
          CEO Seed Coin Presale <br />
          <span className="accent">starting soon</span>
        </h1>
        <p className="sub">Be first to plant your stake. A tiny seed, mighty oaks, etc. 🌱</p>
      </header>

      <section className="acorn-shell" aria-label="Mascot">
        <div className="glow" aria-hidden="true" />
        <img className="acorn" src="/acorn.png" alt="Smiling acorn mascot" />
      </section>

      <footer>
        © {new Date().getFullYear()} <a href="https://grzechowski.com" target="_blank" rel="noopener">Tomek Grzechowski</a>
        <div className="dev-hint">
          The Oak Nursery is expected to go live in October 2025,<br/> more information in September 2025.
        </div>

        <div className="x-follow">
          <a href="https://x.com/DruidsMe" target="_blank" rel="noopener noreferrer" aria-label="Follow on X">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="18" height="18" aria-hidden="true" fill="currentColor">
              <path d="M714.163 519.284L1160.89 0H1057.03L667.137 450.887L356.69 0H0l463.024 679.532L0 1226.37h103.865l411.49-474.637l328.834 474.637H1200L714.137 519.284h.026Zm-145.336 167.9l-47.701-68.285L141.315 79.694h163.356l306.018 438.25l47.701 68.285l404.648 579.9H899.683L568.827 687.184h-.026Z"/>
            </svg>
            <span>Hi, please follow us on X to stay up to date!</span>
          </a>
        </div>
      </footer>
    </main>
  </>
)
}
