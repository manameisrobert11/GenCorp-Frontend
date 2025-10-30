import React from "react";
import { Mail, Phone } from "lucide-react"; // Make sure you ran: npm install lucide-react

export default function Impact({ onContactClick }) {
  return (
    <section id="impact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Impact text */}
        <div>
          <h3 className="text-2xl font-bold text-[#0c2f51] mb-4 flex items-center gap-2">
            <span className="text-3xl">→</span> Our Impact
          </h3>
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

      {/* Click Here Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 items-center gap-8">
        {/* Left side: click here text + arrow */}
        <div className="text-[#0c2f51] flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">→</span>
            <span className="text-2xl font-semibold">click here</span>
          </div>
          {/* Arrow pointing down-right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 60"
            className="w-32 h-16 text-[#0c2f51] mt-2"
          >
            <path
              d="M5 5 Q95 5, 70 55 M70 55 L90 35 M70 55 L50 35"
              stroke="#0c2f51"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Right side: contact info + button */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          <button
            onClick={onContactClick}
            className="flex items-center justify-center bg-[#0c2f51] text-white rounded-full px-8 py-4 shadow-md hover:bg-[#154572] transition-all duration-300"
          >
            <Mail className="w-6 h-6 mr-3" />
            <Phone className="w-6 h-6" />
          </button>

          <div className="text-[#0c2f51] text-sm">
            <p><strong>HQ</strong> &nbsp; Okahandja, Namibia</p>
            <p><strong>Email</strong> &nbsp; info@gencorp.cc</p>
            <p><strong>Phone</strong> &nbsp; +264 81 2267853</p>
          </div>
        </div>
      </div>
    </section>
  );
}
