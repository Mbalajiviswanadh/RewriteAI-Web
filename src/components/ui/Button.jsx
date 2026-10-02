const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-line bg-paper text-ink hover:bg-paper-alt',
  light: 'bg-night-text text-night hover:bg-white/90',
  ghost: 'border border-white/20 text-night-text hover:bg-white/10',
}

export default function Button({ variant = 'primary', href, className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]} ${className}`
  return href
    ? <a href={href} className={cls} {...rest}>{children}</a>
    : <button className={cls} {...rest}>{children}</button>
}
