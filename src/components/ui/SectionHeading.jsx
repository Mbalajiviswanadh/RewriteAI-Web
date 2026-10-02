export default function SectionHeading({ title, text, className = '' }) {
  return (
    <div className={`max-w-xl ${className}`}>
      <h2 className="h-display text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{text}</p>}
    </div>
  )
}
