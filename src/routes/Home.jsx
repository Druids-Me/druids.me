import "../styles/pages/home.css"

export default function Home() {
  return (
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
  )
}
