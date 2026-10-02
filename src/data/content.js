export const SITE = {
  name: 'RewriteAI',
  version: 'v0.1.0',
  links: {
    windows: '#', // replace with your .msi URL
    macos: '#',   // replace with your .dmg URL
    github: '#',
    docs: '#',
    privacy: '#',
    contact: '#',
  },
}

export const NAV = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Try it', href: '#demo' },
  { label: 'Privacy', href: '#privacy' },
]

export const STEPS = [
  { title: 'Select', text: 'Highlight text in any app or browser: Slack, Word, VS Code, Gmail, Notion.' },
  { title: 'Press a shortcut', text: 'Ctrl+Shift+Space opens a small assistant right beside your cursor.' },
  { title: 'Apply', text: 'Pick a tone or type an instruction. Apply swaps the text in place. Undo restores it.' },
]

export const ACTIONS = ['Grammar', 'Improve', 'Rewrite', 'Professional', 'Casual', 'Shorten', 'Expand', 'Vocabulary']

export const FEATURES = [
  { title: 'Works in every app', text: 'A native desktop app, not a browser extension. If you can select text, RewriteAI can rewrite it.', icon: 'Layers' },
  { title: 'One global shortcut', text: 'Summon it from anywhere. Change the key combination in Settings.', icon: 'Keyboard' },
  { title: 'Eight one-click actions', text: 'Grammar, Improve, Rewrite, Professional, Casual, Shorten, Expand, Vocabulary.', icon: 'Sparkles' },
  { title: 'Your own instructions', text: 'Ask for anything: "Translate to Spanish", "Add bullet points", "Make it funnier".', icon: 'MessageSquare' },
  { title: 'Applied in place', text: 'The rewrite replaces your selection directly. Your clipboard is restored afterwards.', icon: 'Check' },
  { title: 'Undo and redo', text: 'A small floating pill lets you step back for up to two minutes.', icon: 'Undo2' },
  { title: 'Edit before applying', text: 'Tweak the AI result in the preview, then apply exactly what you want.', icon: 'Pencil' },
  { title: 'Make it yours', text: 'Dark, light or system theme. Nine accent colors. Adjustable transparency.', icon: 'Palette' },
]

export const TONES = {
  original: 'hey, just wanted to check if u got my last email about the budget? need ur feedback asap thx',
  items: [
    { name: 'Professional', text: "Hello, I'm following up on my previous email regarding the budget. I'd appreciate your feedback at your earliest convenience. Thank you." },
    { name: 'Casual', text: 'Hey! Did you get my email about the budget? Let me know what you think when you get a sec.' },
    { name: 'Concise', text: 'Did you get my budget email? I need your feedback soon.' },
    { name: 'Friendly', text: "Hi there! Just checking in on my budget email. I'd love to hear your thoughts whenever you can. Thanks so much!" },
  ],
}

export const APPS = [
  'Chrome', 'Firefox', 'Edge', 'Safari', 'Brave', 'Arc',
  'Slack', 'Microsoft Word', 'Outlook', 'VS Code', 'Notion', 'Teams', 'Discord', 'Notepad',
]

export const PRIVACY = [
  'Text is sent only when you trigger a rewrite. Nothing runs in the background.',
  'No keylogging and no stored text on any server.',
  'API keys stay on the backend and never ship inside the app.',
  'Windows needs no admin rights. macOS asks for Accessibility permission, with guided setup.',
  'Your clipboard is restored after every capture and paste.',
]
