"use client";

import { FormEvent, useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-500 placeholder:font-medium outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setSuccess("Message sent successfully! The school will contact you soon.");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Get In Touch
          </p>
          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Contact Manya Public School
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Have a question about admissions, classes or fees? Get in touch
            with the school.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-[#071a35] p-8 text-white shadow-xl">
          <h2 className="text-3xl font-black">School Information</h2>

          <div className="mt-8 space-y-7">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-[#071a35]">
                <MapPin />
              </div>

              <div>
                <p className="font-bold text-yellow-400">School Address</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Madalpur, Tulsi Colony
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-[#071a35]">
                <Phone />
              </div>

              <div>
                <p className="font-bold text-yellow-400">
                  School Phone Number
                </p>
                <a
                  href="tel:+919873566144"
                  className="mt-1 block text-lg font-semibold text-white hover:text-yellow-400"
                >
                  9873566144
                </a>
              </div>
            </div>
          </div>

          <a
            href="tel:+919873566144"
            className="mt-10 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 font-black text-[#071a35] transition hover:bg-yellow-300"
          >
            <Phone size={19} />
            Call School Now
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
        >
          <h2 className="text-3xl font-black text-[#071a35]">
            Send a Message
          </h2>

          <p className="mt-2 text-slate-600">
            Please fill in your details below.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label className="font-bold text-[#071a35]">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                required
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your question or message here..."
                className={inputClass}
              />
            </div>

            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 font-semibold text-green-700">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a35] px-5 py-4 font-bold text-white transition hover:bg-[#0c2850] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
