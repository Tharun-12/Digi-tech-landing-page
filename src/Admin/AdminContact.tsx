import { Fragment, useMemo, useState } from 'react';
import { Contact, formatDate, useContacts } from '../context/useContact';

const badge = (status: string) =>
  status === 'new' ? 'bg-red-50 text-[#e31b23]' : 'bg-green-50 text-green-700';

const HEADERS = ['Name', 'Company', 'Phone', 'Email', 'Service', 'Status', 'Received'];

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 break-words text-sm font-medium text-slate-800">{value || '—'}</dd>
    </div>
  );
}

export default function Contacts() {
  const { contacts, loading, error, reload } = useContacts();
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<Contact['id'] | null>(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) =>
      [c.name, c.company, c.email, c.phone, c.service].some((v) => v.toLowerCase().includes(q))
    );
  }, [contacts, query]);

  const toggle = (id: Contact['id']) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-[#14215c]">Contacts</h1>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, company, email…"
            aria-label="Search contacts"
            className="w-64 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-[#e31b23]"
          />
          <button
            onClick={reload}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#14215c] ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Refresh
          </button>
        </div>
      </div>

      {loading && <p className="text-slate-500">Loading contacts…</p>}
      {error && <p className="rounded-2xl bg-red-50 p-3 text-red-700">Could not load contacts: {error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-slate-100 text-slate-500">
              <tr>
                {HEADERS.map((h) => (
                  <th key={h} className="px-5 py-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => {
                const open = openId === c.id;
                return (
                  <Fragment key={c.id}>
                    <tr
                      tabIndex={0}
                      aria-expanded={open}
                      onClick={() => toggle(c.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggle(c.id);
                        }
                      }}
                      className={`cursor-pointer border-t border-slate-100 outline-none transition-colors first:border-t-0 hover:bg-slate-50 focus-visible:bg-slate-50 ${
                        open ? 'bg-slate-50' : ''
                      }`}
                    >
                      <td className="px-5 py-4 font-semibold text-[#14215c]">{c.name}</td>
                      <td className="px-5 py-4">{c.company}</td>
                      <td className="px-5 py-4">{c.phone}</td>
                      <td className="px-5 py-4">{c.email}</td>
                      <td className="px-5 py-4">{c.service}</td>
                      <td className="px-5 py-4">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge(c.status)}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">{formatDate(c.created_at)}</td>
                    </tr>

                    {open && (
                      <tr className="bg-slate-50">
                        <td colSpan={HEADERS.length} className="px-5 pb-5 pt-0">
                          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14215c] text-base font-semibold text-white">
                                {c.name.charAt(0).toUpperCase()}
                              </span>
                              <div>
                                <p className="font-bold text-[#14215c]">{c.name}</p>
                                <p className="text-xs text-slate-500">{c.company || 'No company'}</p>
                              </div>
                            </div>

                            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-100 pt-5 md:grid-cols-4">
                              <Field label="Phone" value={c.phone} />
                              <Field label="Email" value={c.email} />
                              <Field label="Service" value={c.service} />
                              <Field label="Source" value={c.source} />
                            </dl>

                            <div className="mt-5">
                              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Message</p>
                              <p className="mt-2 whitespace-pre-wrap rounded-xl border-l-4 border-[#e31b23] bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                {c.message || 'No message provided.'}
                              </p>
                              <p className="mt-3 text-xs text-slate-400">Received {formatDate(c.created_at)}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={HEADERS.length} className="px-5 py-10 text-center text-slate-500">
                    No contacts match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}