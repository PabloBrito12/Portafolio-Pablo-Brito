import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary:
      'bg-sky-400 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:bg-sky-300',
    secondary:
      'border border-slate-300/30 bg-slate-900/60 text-slate-100 hover:border-sky-400/60 hover:bg-slate-800',
    ghost: 'text-slate-200 hover:bg-slate-800/80',
  }

  return (
    <button type="button" className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
