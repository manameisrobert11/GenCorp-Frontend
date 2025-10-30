import React from 'react'
import logo from '../assets/logo.png'
export default function Footer(){
  return (
    <footer className="bg-white dark:bg-slate-900 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <img src={logo} className="h-10 mb-2" alt="logo" />
          <p className="text-slate-600 dark:text-slate-400 text-sm">© 2025 Gencorp Investment. All rights reserved.</p>
        </div>
        <div className="text-slate-700 dark:text-slate-300">
          <h5 className="font-semibold">Contact</h5>
          <p>info@gencorp.example</p>
          <p>+264 123 4567</p>
        </div>
        <div className="text-slate-700 dark:text-slate-300">
          <h5 className="font-semibold">Quick links</h5>
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      </div>
    </footer>
)
}
