import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Impact from './components/impact' // ✅ matches lowercase file name
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
    <>
      <Navbar onContactClick={() => setShowModal(true)} dark={dark} setDark={setDark} />
      <Hero onContactClick={() => setShowModal(true)} />
      <main className="bg-white dark:bg-slate-900 transition-colors">
        <About />
        <Services />
        <Impact onContactClick={() => setShowModal(true)} /> {/* ✅ works with lowercase import */}
      </main>
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  )
}
