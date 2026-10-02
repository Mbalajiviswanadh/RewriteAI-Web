/**
 * All site colors live here. Edit these values and the whole site updates.
 * Used by tailwind.config.js, so classes like bg-brand, text-ink, border-line just work.
 */
export const colors = {
  brand: {
    DEFAULT: '#5046E5', // matches the logo
    dark: '#4338CA',    // hover state
    soft: '#EEEDFD',    // tinted backgrounds
  },
  ink: {
    DEFAULT: '#14141B', // headings, primary text
    muted: '#5C5C6B',   // body text
    faint: '#9898A6',   // captions
  },
  paper: {
    DEFAULT: '#FFFFFF', // page background
    alt: '#F7F7FA',     // alternate sections / panels
  },
  line: '#E8E8EF',       // borders and dividers
  night: {
    DEFAULT: '#14141B',  // dark download block
    text: '#FFFFFF',
    muted: '#A4A4B3',
  },
}
