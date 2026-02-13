"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-0 bg-gradient-to-br bg-white overflow-hidden">

      {/* Decorative Blobs */}
      {/* <div className="absolute -top-20 left-0 w-72 h-72 bg-green-200 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-orange-200 blur-3xl opacity-30 rounded-full"></div> */}

      <div className="relative max-w-full mx-auto lg:px-0 flex flex-row-reverse gap-0 items-center">

        <div className="text-center mb-12 flex-1 p-0 w-full relative">
          <Image src="/students.png" height={300} width={300} alt='img.' className="w-full h-full object-cover" />

          <div className="absolute bg-black/50 flex items-center justify-center flex-col top-0 left-0 h-full w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Contact <span className="secondary-text">Us</span>
            </h2>
            <p className="mt-4 text-slate-50 max-w-lg mx-auto">
              Have questions or want to book a demo class? Fill out the form below
              and we will get back to you shortly.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl flex-1 p-8 md:p-12 md:py-8 space-y-6  border-gray-100"
        >
          <div className="grid gap-6 grid-cols-2">
            <InputField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-4 px-6 float-right primary-bg cursor-pointer w-fit text-white font-semibold rounded-xl shadow-md  transition duration-300 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        placeholder={label}
      />
    </div>
  );
}
