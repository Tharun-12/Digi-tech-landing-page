import { Link } from 'react-router-dom';
import Icon, { IconName } from './Icons';
import { formatDate, useContacts } from '../context/useContact';

export default function Dashboard() {
  const { contacts, loading, error, reload } = useContacts();

  if (loading) return <p className="text-slate-500">Loading dashboard…</p>;
  if (error)
    return (
      <div className="rounded-2xl bg-red-50 p-4 text-red-700">
        Could not load contacts: {error}.{' '}
        <button onClick={reload} className="font-semibold underline">Try again</button>
      </div>
    );

  const today = new Date().toDateString();
  const byService = Object.entries(
    contacts.reduce<Record<string, number>>((acc, c) => {
      acc[c.service] = (acc[c.service] ?? 0) + 1;
      return acc;
    }, {})
  ).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...byService.map(([, n]) => n));

  const stats: { label: string; value: number; icon: IconName; tint: string }[] = [
    { label: 'Total contacts', value: contacts.length, icon: 'chat', tint: 'bg-[#e31b23]' },
    { label: 'New', value: contacts.filter((c) => c.status === 'new').length, icon: 'sparkle', tint: 'bg-blue-500' },
    { label: 'Received today', value: contacts.filter((c) => new Date(c.created_at).toDateString() === today).length, icon: 'calendar', tint: 'bg-green-500' },
    { label: 'Services requested', value: byService.length, icon: 'briefcase', tint: 'bg-orange-500' },
  ];

  const card = 'rounded-2xl bg-white shadow-sm ring-1 ring-slate-100';

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#14215c]">Dashboard Overview</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`${card} flex items-center gap-4 p-5`}>
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${s.tint}`}>
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm text-slate-500">{s.label}</p>
              <p className="text-2xl font-bold text-[#14215c]">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <section className={`${card} flex flex-wrap items-center justify-between gap-4 p-6`}>
        <div>
          <h2 className="text-lg font-bold text-[#14215c]">Welcome back, Admin 👋</h2>
          <p className="mt-1 text-sm text-slate-500">Check new requests and follow up with your contacts from the Contacts page.</p>
        </div>
        <Link to="/admin/contacts" className="rounded-full bg-[#e31b23] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c8141b]">
          View contacts
        </Link>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className={`${card} p-6`}>
          <h2 className="font-bold text-[#14215c]">Requests by service</h2>
          <ul className="mt-4 space-y-4">
            {byService.map(([name, n]) => (
              <li key={name}>
                <div className="flex justify-between text-sm text-slate-700"><span>{name}</span><span className="font-semibold">{n}</span></div>
                <div className="mt-1.5 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-[#e31b23]" style={{ width: `${(n / max) * 100}%` }} />
                </div>
              </li>
            ))}
            {byService.length === 0 && <li className="text-sm text-slate-500">No requests yet.</li>}
          </ul>
        </section>

        <section className={`${card} p-6`}>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#14215c]">Latest contacts</h2>
            <Link to="/admin/contacts" className="text-sm font-semibold text-[#e31b23] hover:underline">View all</Link>
          </div>
          <ul className="mt-3 divide-y divide-slate-100">
            {contacts.slice(0, 5).map((c) => (
              <li key={c.id} className="flex items-center gap-3 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14215c] text-sm font-semibold text-white">
                  {c.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-[#14215c]">{c.name} <span className="font-normal text-slate-500">· {c.company}</span></p>
                  <p className="truncate text-sm text-slate-500">{c.service} — {formatDate(c.created_at)}</p>
                </div>
              </li>
            ))}
            {contacts.length === 0 && <li className="py-3 text-sm text-slate-500">No contacts yet.</li>}
          </ul>
        </section>
      </div>
    </div>
  );
}