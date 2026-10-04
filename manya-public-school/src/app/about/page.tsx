import Link from "next/link";
import { ArrowRight, Award, Heart, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Manya Public School
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A place where learning, confidence, discipline and values come
            together.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-bold uppercase tracking-widest text-yellow-600">
            Our School
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071a35]">
            Growing minds. Building confidence. Shaping futures.
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              Manya Public School is committed to providing students with a
              supportive and positive environment where they can learn,
              explore their interests and develop confidence.
            </p>
            <p>
              Our approach focuses not only on academics but also on
              discipline, responsibility, respect, creativity and the overall
              development of every student.
            </p>
            <p>
              We believe that every child has unique abilities. With the
              right guidance and encouragement, those abilities can become
              the foundation for a bright future.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071a35] text-yellow-400">
            <Users size={32} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-yellow-600">
            School Leadership
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#071a35]">
            Mohit Sir
          </h2>

          <p className="mt-1 font-semibold text-slate-500">Owner</p>

          <p className="mt-5 leading-8 text-slate-600">
            Under the leadership of Mohit Sir, Manya Public School aims to
            create a welcoming educational environment where students,
            parents and teachers can work together for the child&apos;s
            development.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [Heart, "Student First", "A caring and encouraging environment."],
            [Award, "Strong Values", "Discipline, respect and responsibility."],
            [ShieldCheck, "Future Ready", "Building confidence for tomorrow."],
          ].map(([Icon, title, text]) => {
            const Component = Icon as typeof Heart;
            return (
              <div key={String(title)} className="rounded-2xl bg-white p-7 shadow-sm">
                <Component className="text-yellow-600" size={28} />
                <h3 className="mt-5 text-xl font-bold text-[#071a35]">
                  {String(title)}
                </h3>
                <p className="mt-2 text-slate-600">{String(text)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="py-12 text-center">
        <Link
          href="/classes"
          className="inline-flex items-center gap-2 rounded-xl bg-[#071a35] px-6 py-3 font-bold text-white"
        >
          Explore Classes & Fees <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
