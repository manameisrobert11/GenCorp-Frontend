import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar({ onContactClick, dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-14 w-auto" />
            <span className="font-bold text-lg text-slate-900 dark:text-slate-100">
              GENCORP
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="#about"
              className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#services"
              className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
            >
              Services
            </a>
            <button
              onClick={onContactClick}
              className="bg-slate-900 text-white px-3 py-2 rounded hover:bg-slate-800"
            >
              Contact
            </button>
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 p-2 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>

          {/* Mobile toggles */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50"
              aria-label="Toggle theme"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700/50"
            >
              {/* icon */}
              <svg
                className={`h-6 w-6 transition ${open ? "rotate-90" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-3 space-y-1">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50"
            >
              Services
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onContactClick?.();
              }}
              className="w-full text-left rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
