import Container from '../components/ui/Container'
import { APPS } from '../data/content'

export default function Apps() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <h2 className="h-display mx-auto max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
          If you can select text, RewriteAI can rewrite it.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-muted">
          Not a browser extension. A system-wide writing assistant for desktop apps and browsers alike.
        </p>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {APPS.map((a) => (
            <span key={a} className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-muted">{a}</span>
          ))}
        </div>
      </Container>
    </section>
  )
}
