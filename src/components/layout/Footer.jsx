import Container from '../ui/Container'
import { SITE } from '../../data/content'

export default function Footer() {
  const { links } = SITE
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-ink-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-6 w-6 object-contain" />
          <span>{SITE.name} · {SITE.version}</span>
        </div>
        <nav className="flex gap-6">
          <a href={links.github} className="hover:text-ink">GitHub</a>
          <a href={links.docs} className="hover:text-ink">Documentation</a>
          <a href={links.privacy} className="hover:text-ink">Privacy policy</a>
          <a href={links.contact} className="hover:text-ink">Contact</a>
        </nav>
      </Container>
    </footer>
  )
}
