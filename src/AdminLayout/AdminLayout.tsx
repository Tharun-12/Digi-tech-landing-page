import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon, { IconName } from '../Admin/Icons';
import Logo from '../Admin/Logo';

const links: { to: string; label: string; icon: IconName }[] = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: 'sparkle' },
  { to: '/admin/contacts', label: 'Contacts', icon: 'chat' },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    isActive ? 'bg-red-50 text-[#e31b23]' : 'text-[#14215c] hover:bg-slate-100'
  }`;

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const signOut = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f1f4f9]">
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 shadow-md sm:px-6">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <Logo className="h-9" />
            <span className="hidden text-lg font-bold text-[#14215c] sm:block">
              Admin <span className="text-[#e31b23]">Dashboard</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Admin">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={navClass}>
                {l.label}
              </NavLink>
            ))}
            {/* <a href="/" className="rounded-full px-4 py-2 text-sm font-semibold text-[#14215c] hover:bg-slate-100">
              Website
            </a> */}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 border-l border-slate-200 pl-4 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14215c] text-sm font-semibold text-white">A</span>
              <span className="text-sm font-medium text-[#14215c]">Admin</span>
            </div>
            <button onClick={signOut} aria-label="Sign out" title="Sign out" className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-[#e31b23] hover:bg-red-100">
              <Icon name="logout" className="h-4 w-4" />
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#14215c] ring-1 ring-slate-200 md:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="h-4 w-4" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-auto mt-2 max-w-7xl space-y-1 rounded-3xl bg-white p-3 shadow-md md:hidden" aria-label="Admin mobile">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={navClass}>
                <Icon name={l.icon} className="h-4 w-4" />
                {l.label}
              </NavLink>
            ))}
            <a href="/" className="block rounded-full px-4 py-2 text-sm font-semibold text-[#14215c] hover:bg-slate-100">Website</a>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-3 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}