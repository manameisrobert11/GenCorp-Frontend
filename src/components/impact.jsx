import React from "react";
import { Mail, Phone } from "lucide-react"; // npm i lucide-react

export default function Impact({ onContactClick }) {
  return (
    <section id="impact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Impact text */}
        <div>
          <h3 className="text-2xl font-bold text-[#0c2f51] mb-4">Our Impact</h3>
          <p className="text-slate-700 dark:text-slate-300">
            Turning insights into action has driven our impact on clients and
            communities over.
          </p>
        </div>

        {/* Right side: Impact stats */}
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-[#0c2f51]">101</h4>
            <p className="text-slate-600">Clients Served</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#0c2f51]">25</h4>
            <p className="text-slate-600">Homes Built</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#0c2f51]">23</h4>
            <p className="text-slate-600">Businesses Optimized</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#0c2f51]">53</h4>
            <p className="text-slate-600">Projects Delivered</p>
          </div>
        </div>
      </div>

      {/* Contact row */}
      <div className="max-w-6xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center md:justify-between gap-8">
        <button
          onClick={onContactClick}
          className="flex items-center justify-center bg-[#0c2f51] text-white rounded-full px-8 py-4 shadow-md hover:bg-[#154572] transition-all duration-300"
        >
          <Mail className="w-6 h-6 mr-3" />
          <Phone className="w-6 h-6" />
        </button>

        {/* Aligned contact details */}
        <div className="text-[#0c2f51] text-sm">
          <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 leading-6">
            <span className="font-semibold">HQ</span>
            <span>Okahandja, Namibia</span>

            <span className="font-semibold">Email</span>
            <a
              href="mailto:info@gencorp.cc"
              className="underline decoration-transparent hover:decoration-inherit"
            >
              info@gencorp.cc
            </a>

            <span className="font-semibold">Phone</span>
            <a href="tel:+264812267853">+264 81 2267853</a>
          </div>
        </div>
      </div>
    </section>
  );
}
