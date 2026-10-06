import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const loggedIn = await isAdminLoggedIn();

  if (!loggedIn) {
    redirect("/admin/login");
  }

  const [
    contacts,
    admissions,
    gallery,
    classes,
    newContacts,
    newAdmissions,
  ] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.admissionEnquiry.count(),
    prisma.galleryItem.count(),
    prisma.classFee.count(),
    prisma.contactMessage.count({ where: { status: "NEW" } }),
    prisma.admissionEnquiry.count({ where: { status: "NEW" } }),
  ]);

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Manya Public School
            </h1>
            <p className="text-sm text-slate-300">
              Administration Panel
            </p>
          </div>

          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-3xl font-bold text-slate-900">
          Dashboard
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Stat title="Contact Messages" value={contacts} />
          <Stat title="Admission Enquiries" value={admissions} />
          <Stat title="Gallery Photos" value={gallery} />
          <Stat title="Classes" value={classes} />
          <Stat title="New Contacts" value={newContacts} />
          <Stat title="New Admissions" value={newAdmissions} />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <AdminLink
            href="/admin/contacts"
            title="Contact Messages"
            description="View and manage website contact enquiries"
          />

          <AdminLink
            href="/admin/admissions"
            title="Admission Enquiries"
            description="View and manage admission requests"
          />

          <AdminLink
            href="/admin/gallery"
            title="Gallery Manager"
            description="Add, edit, publish or delete gallery photos"
          />

          <AdminLink
            href="/admin/classes"
            title="Classes & Fees"
            description="Manage classes and fee information"
          />
        </div>
      </section>
    </main>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function AdminLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {description}
      </p>

      <span className="mt-5 inline-block font-semibold text-blue-700">
        Open →
      </span>
    </a>
  );
}
