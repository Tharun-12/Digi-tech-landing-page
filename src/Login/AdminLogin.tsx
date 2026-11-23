import { FormEvent, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../Admin/Icons';
import Logo from '../Admin/Logo';

const LOGIN_IMAGE = 'https://i.pinimg.com/736x/cf/85/2f/cf852f48476cc90984e710c2d966278d.jpg';

export default function AdminLogin() {
  const { isAuthed, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/admin/dashboard';
  if (isAuthed) return <Navigate to={from} replace />;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const ok = await login(email, password, remember);
    setBusy(false);
    if (ok) navigate(from, { replace: true });
    else setError('Wrong email or password. Check both and try again.');
  };

  const input =
    'w-full border-0 border-b border-slate-300 bg-transparent py-2 text-slate-900 outline-none transition-colors focus:border-[#e31b23] focus:ring-0';

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e9edf3] p-3 sm:p-6">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">
        {/* Left: image (50%). Absolutely positioned so it never changes the card height */}
        <div className="relative hidden bg-white lg:block">
          <img
            src={LOGIN_IMAGE}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-contain p-6"
          />
        </div>

        {/* Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-12">
          <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex justify-center">
              <Logo className="h-14" />
            </div>
            <h1 className="mt-8 text-center text-3xl font-bold text-[#14215c]">Welcome Back!</h1>
            <p className="mt-1 text-center text-sm text-slate-500">Enter your details below</p>

            <label htmlFor="email" className="mt-8 block text-xs font-medium text-slate-500">Email</label>
            <input id="email" type="email" className={input} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />

            <label htmlFor="password" className="mt-6 block text-xs font-medium text-slate-500">Password</label>
            <div className="relative">
              <input
                id="password"
                type={show ? 'text' : 'password'}
                className={`${input} pr-10`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                aria-label={show ? 'Hide password' : 'Show password'}
                aria-pressed={show}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-[#14215c]"
              >
                <Icon name={show ? 'eyeOff' : 'eye'} />
              </button>
            </div>

            {/* <label className="mt-5 flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded accent-[#e31b23]" />
              Remember me
            </label> */}

            {error && (
              <p role="alert" className="mt-5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              disabled={busy}
              className="mt-7 w-full rounded-full bg-[#e31b23] py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-[#c8141b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14215c] disabled:opacity-60"
            >
              {busy ? 'Signing in…' : 'Log in'}
            </button>

            {/* <p className="mt-8 text-center text-sm text-slate-500">
              <Link to="/" className="font-medium text-[#14215c] hover:underline">Back to website</Link>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}