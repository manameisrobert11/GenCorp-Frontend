import React from "react";

// Import your service images here (replace these with your own file names)
import img1 from "../assets/renovations.png";
import img2 from "../assets/rentals.png";
import img3 from "../assets/construction.png";
import img4 from "../assets/logistics.png";
import img5 from "../assets/clean.png";
import img6 from "../assets/transport.png";

export default function Services() {
  const items = [
    { title: "RENOVATIONS", img: img1 },
    { title: "RENTALS", img: img2 },
    { title: "CONSTRUCTION", img: img3 },
    { title: "LOGISTICS", img: img4 },
    { title: "CLEANING SUPPLIES", img: img5 },
    { title: "TRANSPORTATION", img: img6 },
  ];

  return (
    <section
      id="services"
      className="py-16"
      style={{ backgroundColor: "#0c2f51" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h3 className="text-3xl font-bold text-white mb-10">
          Our Services
        </h3>

        {/* Grid layout for 6 items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((i) => (
            <div
              key={i.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-500 hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative">
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>

              {/* Label / Title */}
              <div className="p-4">
                <h4 className="font-semibold text-white tracking-wide">
                  {i.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
