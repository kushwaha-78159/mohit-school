"use client";

import { useEffect, useState } from "react";

type Contact = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  subject: string | null;
  message: string;
  status: string;
  createdAt: string;
};

export default function ContactsAdminPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadMessages(query = "") {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/admin/contacts?search=${encodeURIComponent(query)}`
      );

      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    await loadMessages(search);
  }

  async function deleteMessage(id: string) {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    await fetch(`/api/admin/contacts/${id}`, {
      method: "DELETE",
    });

    await loadMessages(search);
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-slate-950 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Contact Messages</h1>
            <p className="text-sm text-slate-300">
              Manage messages received from the website
            </p>
          </div>

          <a
            href="/admin"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            ← Dashboard
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") loadMessages(search);
              }}
              placeholder="Search name, phone, email, subject..."
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            <button
              onClick={() => loadMessages(search)}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-10 text-center">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center text-slate-500">
            No contact messages found.
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {item.name}
                    </h2>

                    <div className="mt-2 space-y-1 text-sm text-slate-600">
                      {item.phone && <p>📞 {item.phone}</p>}
                      {item.email && <p>✉️ {item.email}</p>}
                      {item.subject && <p>Subject: {item.subject}</p>}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["NEW", "READ", "RESOLVED"].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(item.id, status)}
                        className={`rounded-lg px-3 py-2 text-xs font-bold ${
                          item.status === status
                            ? "bg-blue-700 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {status}
                      </button>
                    ))}

                    <button
                      onClick={() => deleteMessage(item.id)}
                      className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="whitespace-pre-wrap text-slate-700">
                    {item.message}
                  </p>
                </div>

                <p className="mt-4 text-xs text-slate-400">
                  {new Date(item.createdAt).toLocaleString("en-IN")}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
