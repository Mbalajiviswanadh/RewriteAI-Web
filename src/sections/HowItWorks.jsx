import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-line bg-paper-alt py-28">
      <Container>
        <SectionHeading title="Three steps, no tab switching." text="RewriteAI sits in your system tray and stays out of the way until you need it." />
        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-4 hidden h-px origin-left bg-line md:block"
          />
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-medium text-white">{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
