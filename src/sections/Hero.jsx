import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Apple, Monitor } from 'lucide-react'
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
          <Button href={SITE.links.windows}><Monitor size={16} /> Download for Windows</Button>
          <Button variant="secondary" href={SITE.links.macos}><Apple size={16} /> Download for macOS</Button>
        </motion.div>
        <AssistantMock />
      </Container>
    </section>
  )
}
