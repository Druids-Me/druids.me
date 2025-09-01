
import "../styles/pages/404.css"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-white text-black">
      <div className="text-center">
        <img src="/acorn.png" alt="Druids.Me" width="64" height="64" style={{display:'inline-block', opacity:.8}} />
        <h1 style={{fontSize: "clamp(28px, 6vw, 56px)", margin: "16px 0 8px"}}>404 – nothing seeded here</h1>
        <p style={{opacity:.65, marginBottom: 16}}>The requested document was not found.</p>
        <Link to="/" className="inline-block border px-4 py-2 rounded white">return to the home page</Link>
      </div>
    </main>
  )
}
