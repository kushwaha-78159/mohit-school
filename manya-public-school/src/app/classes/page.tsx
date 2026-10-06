import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ClassesPage() {
  const classes = await prisma.classFee.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main>
      <section className="relative overflow-hidden bg-[#071a35] px-6 py-20 text-white">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-[#071a35]">
            <GraduationCap size={30} />
          </div>

          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Academic Information
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Classes & Fees
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Explore the latest class-wise fee information from Manya Public
            School.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-7">
              <span className="font-bold uppercase tracking-widest text-yellow-600">
                Fee Structure
              </span>

              <h2 className="mt-2 text-3xl font-black text-[#071a35]">
                Class-wise School Fees
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="grid grid-cols-4 bg-[#071a35] px-6 py-5 text-sm font-bold uppercase tracking-wider text-white">
                <span>Class</span>
                <span className="text-right">Admission</span>
                <span className="text-right">Monthly</span>
                <span className="text-right">Annual</span>
              </div>

              {classes.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  Fee information will be updated soon.
                </div>
              ) : (
                classes.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid grid-cols-4 px-6 py-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <span className="font-semibold text-slate-700">
                      {item.className}
                    </span>

                    <span className="text-right">
                      <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 font-black text-[#071a35] ring-1 ring-yellow-300">
                        ₹{item.admissionFee}
                      </span>
                    </span>

                    <span className="text-right">
                      <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 font-black text-[#071a35] ring-1 ring-yellow-300">
                        ₹{item.monthlyFee}
                      </span>
                    </span>

                    <span className="text-right">
                      <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 font-black text-[#071a35] ring-1 ring-yellow-300">
                        ₹{item.annualFee}
                      </span>
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-[#071a35] p-7 text-white shadow-xl lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-[#071a35]">
              <BookOpen size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Admissions Open
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              2026–27 academic session. Contact the school for the latest
              admission information and available seats.
            </p>

            <Link
              href="/admissions"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-[#071a35] hover:bg-yellow-300"
            >
              Enquire Now <ArrowRight size={18} />
            </Link>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            "Free Admission",
            "Limited Seats",
            "Admissions Open 2026–27",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <CheckCircle2 className="shrink-0 text-green-600" />
              <span className="font-bold text-[#071a35]">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
