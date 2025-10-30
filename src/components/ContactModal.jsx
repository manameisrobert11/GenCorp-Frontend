import React, { useState } from "react";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded-lg dark:bg-slate-700"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded-lg dark:bg-slate-700"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-2 border rounded-lg dark:bg-slate-700 h-24"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-3 text-center text-sm text-slate-700 dark:text-slate-300">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
