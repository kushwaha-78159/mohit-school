import { prisma } from "@/lib/prisma";
import { Camera, Image as ImageIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <section className="bg-[#071a35] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            School Gallery
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Moments at Manya
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            School activities, events and memorable moments will appear here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {items.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-black text-[#071a35]">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="text-center text-slate-400">
                  <ImageIcon className="mx-auto" size={48} />
                  <p className="mt-4 font-bold">Photo Coming Soon</p>
                  <p className="mt-1 text-sm">Gallery {item}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-3xl bg-[#071a35] p-10 text-center text-white">
          <Camera className="mx-auto text-yellow-400" size={42} />

          <h2 className="mt-5 text-3xl font-black">
            Your School Photos Will Be Here
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Admin Panel se published photos yahan automatically दिखाई देंगी.
          </p>
        </div>
      </section>
    </main>
  );
}
