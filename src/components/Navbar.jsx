import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex items-center justify-between rounded-2xl bg-slate-900/70 backdrop-blur border border-amber-300/20 px-4 py-3"
        >
          <a href="#home" className="font-semibold text-white tracking-tight">Foxfolio</a>
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:text-amber-200 hover:bg-amber-500/10 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-xl bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400 text-slate-900 font-semibold px-3 py-2 text-sm">Hire me</a>
        </motion.nav>
      </div>
    </header>
  )
}

export default Navbar
