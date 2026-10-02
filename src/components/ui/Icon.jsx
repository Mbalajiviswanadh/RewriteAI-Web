import * as Lucide from 'lucide-react'

export default function Icon({ name, size = 20, className = '' }) {
  const C = Lucide[name] || Lucide.Sparkles
  return <C size={size} strokeWidth={1.6} className={className} />
}
