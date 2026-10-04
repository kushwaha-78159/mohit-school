import Link from "next/link";
import { GraduationCap, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06152b] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-[#071a35]">
              <GraduationCap size={28} />
            </div>
            <div>
              <h2 className="font-black">MANYA PUBLIC SCHOOL</h2>
              <p className="text-xs tracking-widest text-yellow-400">
                EDUCATION • VALUES • FUTURE
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-lg leading-7 text-slate-300">
            Manya Public School is committed to creating a positive learning
            environment where students can develop knowledge, confidence,
            discipline and strong values.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/classes" className="hover:text-white">Classes & Fees</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/admissions" className="hover:text-white">Admissions</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400">Contact</h3>

          <div className="mt-4 space-y-4 text-slate-300">
            <div className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-yellow-400" size={19} />
              <span>Madalpur, Tulsi Colony</span>
            </div>

            <a
              href="tel:+919873566144"
              className="flex items-center gap-3 hover:text-white"
            >
              <Phone className="text-yellow-400" size={19} />
              9873566144
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Manya Public School. All rights reserved.
      </div>
    </footer>
  );
}
