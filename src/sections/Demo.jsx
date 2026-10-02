import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Redo2, Undo2, Check } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { TONES } from '../data/content'

export default function Demo() {
  const [tone, setTone] = useState(0)
  const [status, setStatus] = useState('idle') // idle | applied | undone
  const result = TONES.items[tone].text
  const shown = status === 'applied' ? result : TONES.original

  const pick = (i) => { setTone(i); setStatus('idle') }

  return (
    <section id="demo" className="border-t border-line bg-paper-alt py-28">
      <Container>
        <SectionHeading title="Try it right here." text="Pick a tone, apply it, then undo. It works the same way on your desktop." />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-paper p-6">
            <div className="flex flex-wrap gap-2">
              {TONES.items.map((t, i) => (
                <button key={t.name} onClick={() => pick(i)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${i === tone ? 'border-brand bg-brand-soft text-brand' : 'border-line text-ink-muted hover:border-ink-faint'}`}>
                  {t.name}
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-faint">Your text</p>
            <div className="mt-2 min-h-[130px] rounded-2xl bg-paper-alt p-4 leading-relaxed">
              <AnimatePresence mode="wait">
                <motion.p key={shown} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>{shown}</motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-line bg-paper p-6">
            <p className="text-sm text-ink-faint">Rewrite preview · {TONES.items[tone].name}</p>
            <div className="mt-2 min-h-[130px] flex-1 rounded-2xl border border-brand/20 bg-brand-soft/50 p-4 leading-relaxed">{result}</div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="h-10">
                <AnimatePresence>
                  {status !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      className="flex h-10 items-center gap-1 rounded-full bg-night px-2 pl-4 text-sm text-night-text shadow-lg"
                    >
                      <span className="mr-2">{status === 'applied' ? 'Text replaced' : 'Original restored'}</span>
                      <button onClick={() => setStatus('undone')} disabled={status === 'undone'} aria-label="Undo" className="rounded-full p-1.5 hover:bg-white/10 disabled:opacity-30"><Undo2 size={15} /></button>
                      <button onClick={() => setStatus('applied')} disabled={status === 'applied'} aria-label="Redo" className="rounded-full p-1.5 hover:bg-white/10 disabled:opacity-30"><Redo2 size={15} /></button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button onClick={() => setStatus('applied')}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                <Check size={16} /> Apply
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
