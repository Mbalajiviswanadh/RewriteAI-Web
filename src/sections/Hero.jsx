import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Apple, Monitor, ChevronDown, X } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { ACTIONS, SITE, TONES } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

/** The one orchestrated moment: a mock of the assistant cycling through tones. */
function AssistantMock() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TONES.items.length), 3200)
    return () => clearInterval(t)
  }, [])
  const active = TONES.items[i]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease, delay: 0.35 }}
      className="mx-auto mt-16 w-full max-w-[460px] rounded-3xl border border-line bg-paper p-5 text-left shadow-[0_30px_80px_-30px_rgba(20,20,27,0.25)]"
    >
      <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-line" />
      <p className="rounded-xl bg-paper-alt p-3.5 text-sm leading-relaxed text-ink-muted">{TONES.original}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {ACTIONS.map((a) => (
          <span key={a} className={`rounded-full border px-3 py-1 text-xs transition-colors duration-500 ${a === active.name ? 'border-brand bg-brand-soft text-brand' : 'border-line text-ink-faint'}`}>{a}</span>
        ))}
      </div>
      <div className="mt-4 min-h-[96px] rounded-xl border border-brand/20 bg-brand-soft/50 p-3.5">
        <AnimatePresence mode="wait">
          <motion.p
            key={active.name}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm leading-relaxed text-ink"
          >{active.text}</motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-white">Apply</span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
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
    <section id="top" className="pt-36 pb-28 text-center">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
          className="h-display mx-auto max-w-3xl text-5xl leading-[1.05] sm:text-7xl"
        >
          Rewrite text anywhere, instantly.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          Highlight text in any app. Press one shortcut. Get AI-polished writing applied in place, with full undo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {/* ── Windows dropdown ── */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setWinOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              <Monitor size={16} />
              Download for Windows
              <ChevronDown size={14} className={`transition-transform duration-200 ${winOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {winOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full z-20 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-black/10"
                >
                  <a
                    href={SITE.links.windowsMsi}
                    download="RewriteAI-Setup.msi"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-ink transition-colors hover:bg-paper-alt"
                    onClick={() => setWinOpen(false)}
                  >
                    <Monitor size={15} className="shrink-0 text-ink-faint" />
                    <span>
                      <span className="font-medium">Installer</span>
                      <span className="ml-1.5 text-xs text-ink-faint">.msi</span>
                    </span>
                  </a>
                  <div className="mx-3 border-t border-line" />
                  <a
                    href={SITE.links.windowsExe}
                    download="RewriteAI-Setup.exe"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-ink transition-colors hover:bg-paper-alt"
                    onClick={() => setWinOpen(false)}
                  >
                    <Monitor size={15} className="shrink-0 text-ink-faint" />
                    <span>
                      <span className="font-medium">Portable / Setup</span>
                      <span className="ml-1.5 text-xs text-ink-faint">.exe</span>
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── macOS (coming soon) ── */}
          <button
            onClick={() => setMacToast(true)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-alt"
          >
            <Apple size={16} />
            Download for macOS
          </button>
        </motion.div>
        <AssistantMock />
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
            <div className="flex items-center gap-3 rounded-xl border border-line bg-paper px-5 py-3.5 shadow-2xl shadow-black/15">
              <Apple size={18} className="shrink-0 text-ink-faint" />
              <div className="text-left">
                <p className="text-sm font-medium text-ink">macOS version coming soon!</p>
                <p className="text-xs text-ink-muted">We're working on it — stay tuned.</p>
              </div>
              <button onClick={() => setMacToast(false)} className="ml-2 rounded-lg p-1 text-ink-faint transition-colors hover:bg-paper-alt hover:text-ink">
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
