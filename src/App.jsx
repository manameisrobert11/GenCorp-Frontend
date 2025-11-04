import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Impact from './components/impact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Navbar stays at top */}
      <Navbar onContactClick={() => setShowModal(true)} dark={dark} setDark={setDark} />

      {/* Hero and content area grow to fill remaining height */}
      <div className="flex-1 flex flex-col">
        <Hero onContactClick={() => setShowModal(true)} />

        {/* Main content area with spacing and responsive padding */}
        <main className="flex-1 flex flex-col gap-12 p-4 md:p-8">
          <About />
          <Services />
          <Impact onContactClick={() => setShowModal(true)} />
        </main>
      </div>

      {/* Footer stays at bottom */}
      <Footer />

      {/* Contact Modal */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
