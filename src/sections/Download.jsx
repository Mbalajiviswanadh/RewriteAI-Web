import { motion } from 'framer-motion'
import { Apple, Monitor } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { SITE } from '../data/content'

export default function Download() {
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
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="light" href={SITE.links.windows}><Monitor size={16} /> Windows (.msi)</Button>
            <Button variant="ghost" href={SITE.links.macos}><Apple size={16} /> macOS (.dmg)</Button>
          </div>
          {/* <p className="mt-6 text-sm text-night-muted">{SITE.version} · Linux coming soon</p> */}
        </motion.div>
      </Container>
    </section>
  )
}
