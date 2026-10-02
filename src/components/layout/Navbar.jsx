import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { NAV, SITE } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-line bg-paper/80 backdrop-blur-lg' : 'border-b border-transparent'}`}>
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
          <span className="text-[15px] font-semibold tracking-tight">{SITE.name}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-ink-muted transition-colors hover:text-ink">{n.label}</a>
          ))}
        </nav>
        <Button href="#download" className="!py-2">Download</Button>
      </Container>
    </header>
  )
}
