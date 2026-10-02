import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Apple, Monitor, ChevronDown, X } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { SITE } from '../data/content'

export default function Download() {
  const [winOpen, setWinOpen] = useState(false)
  const [macToast, setMacToast] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setWinOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Auto-dismiss macOS toast
  useEffect(() => {
    if (!macToast) return
    const t = setTimeout(() => setMacToast(false), 4000)
    return () => clearTimeout(t)
  }, [macToast])

  return (
    <section id="download" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] bg-night px-8 py-20 text-center"
        >
          <img src="/logo.png" alt="" className="mx-auto h-14 w-14 object-contain" />
          <h2 className="h-display mx-auto mt-8 max-w-2xl text-4xl leading-[1.1] text-night-text sm:text-5xl">
            Stop switching tabs to fix your writing.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-night-muted">Free, fast, and built for focus.</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {/* ── Windows dropdown ── */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWinOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-night-text px-5 py-2.5 text-sm font-medium text-night transition-colors hover:bg-white/90"
              >
                <Monitor size={16} />
                Windows
                <ChevronDown size={14} className={`transition-transform duration-200 ${winOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {winOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-20 mt-2 w-48 -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#1e1e2a] shadow-xl shadow-black/30 backdrop-blur-xl"
                  >
                    <a
                      href={SITE.links.windowsMsi}
                      download="RewriteAI-Setup.msi"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-night-text transition-colors hover:bg-white/10"
                      onClick={() => setWinOpen(false)}
                    >
                      <Monitor size={15} className="shrink-0 text-night-muted" />
                      <span>
                        <span className="font-medium">Installer</span>
                        <span className="ml-1.5 text-xs text-night-muted">.msi</span>
                      </span>
                    </a>
                    <div className="mx-3 border-t border-white/5" />
                    <a
                      href={SITE.links.windowsExe}
                      download="RewriteAI-Setup.exe"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-night-text transition-colors hover:bg-white/10"
                      onClick={() => setWinOpen(false)}
                    >
                      <Monitor size={15} className="shrink-0 text-night-muted" />
                      <span>
                        <span className="font-medium">Portable / Setup</span>
                        <span className="ml-1.5 text-xs text-night-muted">.exe</span>
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── macOS (coming soon) ── */}
            <button
              onClick={() => setMacToast(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-night-text transition-colors hover:bg-white/10"
            >
              <Apple size={16} />
              macOS (.dmg)
            </button>
          </div>

          {/* <p className="mt-6 text-sm text-night-muted">{SITE.version} · Linux coming soon</p> */}
        </motion.div>
      </Container>

      {/* ── macOS coming-soon toast ── */}
      <AnimatePresence>
        {macToast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1e1e2a] px-5 py-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <Apple size={18} className="shrink-0 text-night-muted" />
              <div className="text-left">
                <p className="text-sm font-medium text-night-text">macOS version coming soon!</p>
                <p className="text-xs text-night-muted">We're working on it — stay tuned.</p>
              </div>
              <button onClick={() => setMacToast(false)} className="ml-2 rounded-lg p-1 text-night-muted transition-colors hover:bg-white/10 hover:text-night-text">
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
