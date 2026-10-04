import Link from "next/link";
import { ArrowLeft, CheckCircle2, GraduationCap } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-500 placeholder:font-medium outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10";

export default function AdmissionsPage() {
  return (
    <main>
      <section className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            2026–27 Admissions
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Enquire for Admission
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Please enter the student and parent details below.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_360px]">

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a35] text-yellow-400">
              <GraduationCap />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#071a35]">
                Admission Enquiry Form
              </h2>

              <p className="text-sm text-slate-600">
                Fields marked with <span className="font-bold text-red-500">*</span> are required.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="font-bold text-[#071a35]">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter student's full name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Parent / Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter parent or guardian name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter contact number"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-bold text-[#071a35]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-bold text-[#071a35]">
                Select Class <span className="text-red-500">*</span>
              </label>

              <select className={inputClass}>
                <option>Select the class for admission</option>
                <option>Nursery</option>
                <option>L.K.G</option>
                <option>U.K.G</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th</option>
                <option>6th</option>
                <option>7th</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="font-bold text-[#071a35]">
              Message / Questions
            </label>

            <textarea
              rows={5}
              placeholder="Write any question or additional information..."
              className={inputClass}
            />
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-xl bg-yellow-400 px-5 py-4 font-black text-[#071a35] transition hover:bg-yellow-300"
          >
            Submit Admission Enquiry
          </button>
        </form>

        <aside className="h-fit rounded-3xl bg-slate-50 p-7">
          <h3 className="text-2xl font-black text-[#071a35]">
            Admission Information
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Admissions open for 2026–27",
              "Classes from Nursery onwards",
              "Limited seats",
              "Easy admission enquiry",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-green-600" size={20} />
                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/classes"
            className="mt-8 flex items-center justify-center gap-2 rounded-xl border-2 border-[#071a35] px-5 py-3 font-bold text-[#071a35]"
          >
            <ArrowLeft size={17} />
            View Classes & Fees
          </Link>
        </aside>
      </section>
    </main>
  );
}
