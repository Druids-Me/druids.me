// src/components/DocsLayout.jsx
import { Link } from "react-router-dom"

export default function DocsLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="w-full border-b border-black/10">
        <div className="max-w-4xl mx-auto flex items-center gap-3 p-4">
          <Link to="/" aria-label="Homepage">
            <img src="/acorn.png" alt="Druids.Me" width={28} height={28} style={{display:'block'}} />
          </Link>
          <div className="text-sm tracking-wide font-medium opacity-70">Druids.Me</div>
          
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4 prose prose-neutral">
        {children}
      </main>
    </div>
  )
}
