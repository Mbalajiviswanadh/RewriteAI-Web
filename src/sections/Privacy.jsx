import { ShieldCheck } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { PRIVACY } from '../data/content'

export default function Privacy() {
  return (
    <section id="privacy" className="border-t border-line bg-paper-alt py-28">
      <Container className="grid gap-12 lg:grid-cols-2">
        <SectionHeading title="Your text. Your control." text="Writing tools see what you write, so we keep the rules simple." />
        <ul className="space-y-5">
          {PRIVACY.map((p) => (
            <li key={p} className="flex gap-4 leading-relaxed text-ink-muted">
              <ShieldCheck size={20} strokeWidth={1.6} className="mt-0.5 shrink-0 text-brand" />
              {p}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
