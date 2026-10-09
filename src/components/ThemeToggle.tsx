type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-200 hover:-translate-y-0.5 ${
        theme === 'dark'
          ? 'border-slate-700 bg-slate-900 text-slate-100'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
