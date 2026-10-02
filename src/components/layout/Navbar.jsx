import { useEffect, useState } from 'react'
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none py-4 px-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-3xl items-center justify-between rounded-2xl border px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-white/15 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl'
            : 'border-white/10 bg-white/50 backdrop-blur-md'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
          <span className="text-[15px] font-semibold tracking-tight">{SITE.name}</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-ink-muted transition-colors hover:text-ink">{n.label}</a>
          ))}
        </div>
        <Button href="#download" className="!py-2 !text-sm">Download</Button>
      </nav>
    </header>
  )
}
