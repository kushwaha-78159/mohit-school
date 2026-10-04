import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    text: "A learning environment focused on strong foundations, confidence and academic growth.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Discipline",
    text: "Helping students grow with responsibility, respect, confidence and good values.",
  },
  {
    icon: Sparkles,
    title: "All-Round Growth",
    text: "Encouraging curiosity, creativity and a positive attitude towards learning.",
  },
];

const stats = [
  ["Nursery – 10th", "Classes"],
  ["14+ Years", "Faculty Experience*"],
  ["2026–27", "Admissions"],
  ["Limited", "Seats Available"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071a35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.20),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
              <Sparkles size={16} />
              Admissions Open 2026–27
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Manya Public
              <span className="block text-yellow-400">School</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Nurturing young minds with education, discipline, confidence
              and values for a brighter tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Enquire for Admission
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/classes"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Classes & Fees
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <Phone size={17} className="text-yellow-400" />
              <a href="tel:+919873566144" className="hover:text-yellow-300">
                9873566144
              </a>
              <span>•</span>
              <span>Madalpur, Tulsi Colony</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-yellow-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl">
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-800">
                <div className="px-8 text-center text-white">
                  <GraduationCap
                    size={64}
                    className="mx-auto mb-4 text-yellow-400"
                  />
                  <p className="text-2xl font-bold">Manya Public School</p>
                  <p className="mt-2 text-slate-300">
                    Admissions Open 2026–27
                  </p>
                  <p className="mt-4 text-sm text-slate-400">
                    Your supplied admission image will be placed here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y sm:grid-cols-4 sm:divide-y-0">
          {stats.map(([value, label]) => (
            <div key={label} className="px-5 py-7 text-center">
              <p className="text-2xl font-black text-[#071a35]">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[0.2em] text-yellow-600">
            Welcome to Manya Public School
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#071a35] sm:text-4xl">
            Building a Strong Foundation for Tomorrow
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Manya Public School is committed to creating a positive and
            encouraging learning environment where students can learn,
            discover their abilities and develop into confident individuals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a35] text-yellow-400">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#071a35]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#071a35] p-8 text-center shadow-xl sm:p-12 md:flex-row md:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 text-yellow-400 md:justify-start">
              <ShieldCheck size={22} />
              <span className="font-bold">Admissions 2026–27</span>
            </div>

            <h2 className="mt-3 text-3xl font-black text-white">
              Give your child a strong start.
            </h2>

            <p className="mt-2 text-slate-300">
              Explore classes, fees and admission information.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-yellow-300"
          >
            Contact School
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-slate-400">
        * Faculty experience information is based on the supplied admission
        poster.
      </div>
    </main>
  );
}
