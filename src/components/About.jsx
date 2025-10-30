import React from "react";
import aboutImg from "../assets/abt.png";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Who We Are Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Who we are
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-2xl">
            Gencorp invests in early-stage and growth companies with a focus
            on long-term value. We combine capital, operational support, and
            strategic guidance to help businesses reach their next milestone.
          </p>
          <ul className="text-slate-600 dark:text-slate-300 space-y-2">
            <li>• Strategic capital & advisory</li>
            <li>• Market entry & expansion support</li>
            <li>• ESG and sustainable growth planning</li>
          </ul>
        </div>

        {/* About Image */}
        <div className="relative flex justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-[90%] h-[400px] object-cover rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Three Columns Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-semibold text-center text-slate-900 dark:text-white mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {/* Column 1 */}
          <div className="p-8 rounded-lg text-white text-center" style={{ backgroundColor: "#0c2f51" }}>
            <h3 className="text-xl font-bold mb-2">ABOUT US</h3>
            <p>GenCorp Investment CC is a proudly Namibian-owned and registered company offering services in construction, logistics, and housing — including renovations and property rentals. We’re committed to quality, reliability, and excellence in every project.
</p>
          </div>

          {/* Column 2 */}
          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: "#eeeef0", color: "#0c2f51" }}>
            <h3 className="text-xl font-bold mb-2">VISION</h3>
            <p>To be a leading force in Namibia's economic landscape. We will empower the next generation by creating meaningful employment and fostering a culture of entrepreneurial excellence, ensuring a prosperous future for all young Namibians.
</p>
          </div>

          {/* Column 3 */}
          <div className="p-8 rounded-lg text-white text-center" style={{ backgroundColor: "#344047" }}>
            <h3 className="text-xl font-bold mb-2">MISSION</h3>
            <p>GenCorp Investment CC exists to be a trusted provider of diverse solutions, including construction, supply, and specialized contracts. We are dedicated to delivering on our promises with unmatched quality and efficiency, ensuring every project not only meets but surpasses our clients' needs, solidifying our reputation for excellence and reliability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
