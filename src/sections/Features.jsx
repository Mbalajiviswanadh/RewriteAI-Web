import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import { FEATURES } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="py-28">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading title="Everything you need, nothing you don't." text="A small tool that does one job well, and looks the way you want it to." />
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {FEATURES.map((f) => (
            <li key={f.title} className="group flex gap-5 py-6">
              <Icon name={f.icon} className="mt-0.5 shrink-0 text-ink-faint transition-colors group-hover:text-brand" />
              <div>
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-muted">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
