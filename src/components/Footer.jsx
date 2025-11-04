import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6"; // ✅ brand icons come from react-icons

export default function Footer() {
  const iconBtn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400";

  return (
    <footer className="bg-white dark:bg-slate-900 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Brand + rights */}
        <div>
          <img src={logo} className="h-10 mb-2" alt="logo" />
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 Gencorp Investment. All rights reserved.
          </p>

          {/* Socials */}
          <div className="mt-4 flex items-center gap-3">
            <a href="https://facebook.com/gencorp" target="_blank" rel="noreferrer" aria-label="Facebook" className={iconBtn}>
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/gencorp" target="_blank" rel="noreferrer" aria-label="Instagram" className={iconBtn}>
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/gencorp" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className={iconBtn}>
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/gencorp" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtn}>
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@gencorp" target="_blank" rel="noreferrer" aria-label="YouTube" className={iconBtn}>
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="https://wa.me/264812267853" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={iconBtn}>
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-slate-700 dark:text-slate-300">
          <h5 className="font-semibold">Contact</h5>
          <a href="mailto:info@gencorp.cc" className="block hover:underline decoration-transparent hover:decoration-inherit">
            info@gencorp.cc
          </a>
          <a href="tel:+264812267853" className="block hover:underline">
            +264 81 2267853
          </a>
        </div>

        {/* Quick links */}
        <div className="text-slate-700 dark:text-slate-300">
          <h5 className="font-semibold">Quick links</h5>
          <a href="#about" className="block hover:underline">About</a>
          <a href="#services" className="block hover:underline">Services</a>
          <a href="#contact" className="block hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
