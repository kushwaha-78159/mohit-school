"use client";

import Link from "next/link";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes & Fees", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a35] text-yellow-400">
            <GraduationCap size={26} />
          </div>

          <div>
            <div className="text-lg font-black leading-tight text-[#071a35]">
              MANYA PUBLIC SCHOOL
            </div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-yellow-600">
              EDUCATION • VALUES • FUTURE
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#071a35] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <a
            href="tel:+919873566144"
            className="flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-yellow-300"
          >
            <Phone size={16} />
            9873566144
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-[#071a35] lg:hidden"
          aria-label="Open menu"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#071a35] hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919873566144"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 font-bold text-slate-950"
            >
              <Phone size={17} />
              Call: 9873566144
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
