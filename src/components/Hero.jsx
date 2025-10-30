import React from 'react'
import heroImg from '../assets/gencorp.png'
export default function Hero({ onContactClick }){
  return (
    <section className="relative h-screen flex items-center">
      <img src={heroImg} alt="hero" className="absolute inset-0 w-full h-full object-cover brightness-75" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Gencorp — Investment &amp; Innovation</h1>
        <p className="mb-6 text-lg">Delivering strategic investments and sustainable growth solutions across industries.</p>
        <div className="flex justify-center gap-4">
          <button onClick={onContactClick} className="bg-white text-slate-900 px-5 py-3 rounded-md font-semibold">Get in touch</button>
          <button
  onClick={() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
  className="border border-white px-5 py-3 rounded-md text-white"
>
  Our services
</button>

        </div>
      </div>
    </section>
)
}
