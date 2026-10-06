 "use client";

import { useEffect, useState } from "react";

type ClassFee = {
  id: string;
  className: string;
  description: string | null;
  admissionFee: number;
  monthlyFee: number;
  annualFee: number;
  isPublished: boolean;
};

const emptyForm = {
  className: "",
  description: "",
  admissionFee: "0",
  monthlyFee: "0",
  annualFee: "0",
  isPublished: true,
};

export default function ClassesAdminPage() {
  const [items, setItems] = useState<ClassFee[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadItems() {
    setLoading(true);

    const res = await fetch("/api/admin/classes", {
      cache: "no-store",
    });

    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }

    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => {
    loadItems();
  }, []);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function saveItem(e: React.FormEvent) {
    e.preventDefault();

    if (!form.className.trim()) {
      alert("Class name required hai.");
      return;
    }

    setSaving(true);

    const body = {
      className: form.className,
      description: form.description,
      admissionFee: Number(form.admissionFee) || 0,
      monthlyFee: Number(form.monthlyFee) || 0,
      annualFee: Number(form.annualFee) || 0,
      isPublished: form.isPublished,
    };

    const res = await fetch(
      editingId ? `/api/admin/classes/${editingId}` : "/api/admin/classes",
      {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    setSaving(false);

    if (!res.ok) {
      alert("Class save nahi hui.");
      return;
    }

    resetForm();
    await loadItems();
  }

  function editItem(item: ClassFee) {
    setEditingId(item.id);

    setForm({
      className: item.className,
      description: item.description || "",
      admissionFee: String(item.admissionFee),
      monthlyFee: String(item.monthlyFee),
      annualFee: String(item.annualFee),
      isPublished: item.isPublished,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function togglePublish(item: ClassFee) {
    await fetch(`/api/admin/classes/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished: !item.isPublished }),
    });

    await loadItems();
  }

  async function deleteItem(id: string) {
    if (!confirm("Kya aap is class ko delete karna chahte hain?")) return;

    await fetch(`/api/admin/classes/${id}`, {
      method: "DELETE",
    });

    await loadItems();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-widest text-yellow-600">
              Admin Panel
            </p>
            <h1 className="mt-2 text-4xl font-black text-[#071a35]">
              Classes & Fees Manager
            </h1>
          </div>

          <a
            href="/admin"
            className="rounded-xl bg-[#071a35] px-5 py-3 font-bold text-white hover:bg-slate-800"
          >
            ← Dashboard
          </a>
        </div>

        <form
          onSubmit={saveItem}
          className="mb-10 rounded-3xl bg-white p-6 shadow-xl"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-[#071a35]">
              {editingId ? "Edit Class / Fees" : "Add Class / Fees"}
            </h2>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border px-4 py-2 font-bold"
              >
                Cancel Edit
              </button>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <input
              value={form.className}
              onChange={(e) =>
                setForm({ ...form, className: e.target.value })
              }
              placeholder="Class Name e.g. Nursery"
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="number"
              value={form.admissionFee}
              onChange={(e) =>
                setForm({ ...form, admissionFee: e.target.value })
              }
              placeholder="Admission Fee"
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="number"
              value={form.monthlyFee}
              onChange={(e) =>
                setForm({ ...form, monthlyFee: e.target.value })
              }
              placeholder="Monthly Fee"
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="number"
              value={form.annualFee}
              onChange={(e) =>
                setForm({ ...form, annualFee: e.target.value })
              }
              placeholder="Annual Fee"
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Class details / description"
              rows={3}
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 md:col-span-2 lg:col-span-4"
            />

            <label className="flex items-center gap-3 font-bold text-slate-700">
              <input
                type="checkbox"
                checked={form.isPublished}
                onChange={(e) =>
                  setForm({ ...form, isPublished: e.target.checked })
                }
                className="h-5 w-5"
              />
              Publish on website
            </label>
          </div>

          <button
            disabled={saving}
            className="mt-6 rounded-xl bg-yellow-400 px-7 py-3 font-black text-[#071a35] hover:bg-yellow-300 disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : editingId
                ? "Update Class"
                : "Add Class"}
          </button>
        </form>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="text-slate-500">Loading classes...</p>
          ) : items.length === 0 ? (
            <div className="rounded-3xl bg-white p-8 text-slate-500 shadow">
              Abhi koi class database me nahi hai.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-black text-[#071a35]">
                    {item.className}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      item.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.isPublished ? "PUBLISHED" : "HIDDEN"}
                  </span>
                </div>

                {item.description && (
                  <p className="mt-3 text-sm text-slate-500">
                    {item.description}
                  </p>
                )}

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Admission</p>
                    <p className="mt-1 font-black">₹{item.admissionFee}</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Monthly</p>
                    <p className="mt-1 font-black">₹{item.monthlyFee}</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Annual</p>
                    <p className="mt-1 font-black">₹{item.annualFee}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    onClick={() => editItem(item)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => togglePublish(item)}
                    className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-[#071a35]"
                  >
                    {item.isPublished ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
