import { useMemo, useState } from 'react';
import Icon from './Icons';
import { Contact, formatDate, useContacts } from '../context/useContact';

const badge = (status: string) =>
  status === 'new' ? 'bg-red-50 text-[#e31b23]' : 'bg-green-50 text-green-700';

export default function Contacts() {
  const { contacts, loading, error, reload } = useContacts();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Contact | null>(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) =>
      [c.name, c.company, c.email, c.phone, c.service].some((v) => v.toLowerCase().includes(q))
    );
  }, [contacts, query]);

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
          <button onClick={reload} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#14215c] ring-1 ring-slate-200 hover:bg-slate-50">
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
                {['Name', 'Company', 'Phone', 'Email', 'Service', 'Status', 'Received'].map((h) => (
                  <th key={h} className="px-5 py-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((c) => (
                <tr key={c.id} onClick={() => setSelected(c)} className="cursor-pointer hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold text-[#14215c]">{c.name}</td>
                  <td className="px-5 py-4">{c.company}</td>
                  <td className="px-5 py-4">{c.phone}</td>
                  <td className="px-5 py-4">{c.email}</td>
                  <td className="px-5 py-4">{c.service}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge(c.status)}`}>{c.status}</span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">{formatDate(c.created_at)}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-10 text-center text-slate-500">No contacts match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={() => setSelected(null)}>
          <aside
            role="dialog"
            aria-label="Contact details"
            className="h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14215c] text-lg font-semibold text-white">
                  {selected.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-[#14215c]">{selected.name}</h2>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge(selected.status)}`}>{selected.status}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100" aria-label="Close">
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            <dl className="mt-6 space-y-4 text-sm">
              {[
                ['Company', selected.company],
                ['Phone', selected.phone],
                ['Email', selected.email],
                ['Service', selected.service],
                ['Message', selected.message],
                ['Source', selected.source],
                ['Received', formatDate(selected.created_at)],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="mt-0.5 text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex gap-2">
              <a href={`mailto:${selected.email}`} className="rounded-full bg-[#e31b23] px-5 py-2 text-sm font-semibold text-white hover:bg-[#c8141b]">Send email</a>
              <a href={`tel:${selected.phone}`} className="rounded-full px-5 py-2 text-sm font-semibold text-[#14215c] ring-1 ring-slate-300 hover:bg-slate-50">Call</a>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}