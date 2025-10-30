import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar({ onContactClick, dark, setDark }){
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14" />
          <span className="font-bold text-lg text-slate-900 dark:text-slate-100">GENCORP</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#about" className="text-slate-700 dark:text-slate-200">About</a>
          <a href="#services" className="text-slate-700 dark:text-slate-200">Services</a>
          <button onClick={onContactClick} className="bg-slate-900 text-white px-3 py-2 rounded">Contact</button>
          <button onClick={()=>setDark(!dark)} className="ml-2 p-2 rounded border dark:border-slate-700">
            {dark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
)
}
