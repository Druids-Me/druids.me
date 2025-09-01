
import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import DocsLayout from "../components/DocsLayout.jsx"

import "../styles/pages/docs.css"

export default function MarkdownPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [raw, setRaw] = useState(null)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const ctrl = new AbortController()
    let alive = true
    setErr(null)
    setRaw(null)

    fetch(`/docs/${slug}.md`, {
      cache: "no-cache",
      signal: ctrl.signal,
      headers: { Accept: "text/markdown, text/plain; q=0.9, */*;q=0.1" },
    })
      .then(async (res) => {
        // twarde błędy HTTP
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const ct = (res.headers.get("content-type") || "").toLowerCase()
        const txt = await res.text()

        // Jeśli serwer zwróci index.html (fallback SPA) → content-type będzie text/html
        const isProbablyMarkdown =
          ct.includes("text/markdown") || ct.includes("text/plain") || ct === ""

        // Heurystyka treści: łapiemy <!doctype html> / <html> na początku
        const startsLikeHtml = /^\s*<(?:!doctype\s+html|html)\b/i.test(txt)

        if (!isProbablyMarkdown || startsLikeHtml) {
          // Traktuj jak 404 i pozwól useEffect niżej przekierować
          throw new Error("NOT_MARKDOWN_OR_HTML_FALLBACK")
        }

        if (alive) setRaw(txt)
      })
      .catch((e) => {
        if (!alive || ctrl.signal.aborted) return
        setErr(e)
      })

    return () => {
      alive = false
      ctrl.abort()
    }
  }, [slug])

  // Błąd → na 404 (również dla „fałszywego 200” z HTML)
  useEffect(() => {
    if (!err) return
    // 0ms – bez migania
    const t = setTimeout(() => navigate("/404", { replace: true }), 0)
    return () => clearTimeout(t)
  }, [err, navigate])

  const title = useMemo(() => {
    if (!raw) return slug
    const m = raw.match(/^\s*#\s+(.+)$/m)
    return m ? m[1].trim() : slug
  }, [raw, slug])

  return (
    <DocsLayout title={title}>
      {raw ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{raw}</ReactMarkdown>
      ) : err ? (
        <p style={{ opacity: 0.6 }}>Przekierowuję na stronę 404…</p>
      ) : (
        <p style={{ opacity: 0.6 }}>Ładowanie…</p>
      )}
    </DocsLayout>
  )
}
