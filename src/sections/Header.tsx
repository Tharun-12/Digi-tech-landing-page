import { useEffect, useState } from 'react';
import { Menu, Phone, Sparkles, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Packages', href: '#packages' },
  { label: 'Our Work', href: '#work' },
  { label: 'Career', href: '#career' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header({ onRequestCall }: { onRequestCall: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="bg-navy-950 text-navy-100">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="tel:+919717212955" className="inline-flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
              +91-9717212955
            </a>
            <a href="mailto:contact@digitechtree.com" className="inline-flex items-center gap-1.5 transition hover:text-white">
              <MailIcon />
              contact@digitechtree.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            {[
              { label: 'Facebook', href: '#', d: 'M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.4l.6-3H13v-1.2c0-.5.2-.8.5-.8Z' },
              { label: 'Twitter / X', href: '#', d: 'M17.7 5h2.3l-5 5.8L20.8 21h-4.7l-3.6-4.8L8.4 21H6l5.4-6.2L5.5 5h4.8l3.3 4.4L17.7 5Zm-.8 14.5h1.3L9.4 6.4H8l8.9 13.1Z' },
              { label: 'LinkedIn', href: '#', d: 'M6.9 8.5a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5ZM5.4 10h3v10h-3V10Zm5 0h2.9v1.4c.4-.8 1.5-1.7 3-1.7 2.4 0 3.7 1.6 3.7 4.4V20h-3v-5.3c0-1.5-.6-2.3-1.8-2.3-1.1 0-1.9.8-1.9 2.3V20h-2.9V10Z' },
              { label: 'Instagram', href: '#', d: 'M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm0 5.2a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16.4 6.3a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5v-7A4.5 4.5 0 0 1 8.5 4Zm0 1.6A2.9 2.9 0 0 0 5.6 8.5v7a2.9 2.9 0 0 0 2.9 2.9h7a2.9 2.9 0 0 0 2.9-2.9v-7a2.9 2.9 0 0 0-2.9-2.9h-7Z' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 shadow-card backdrop-blur-xl border-b border-navy-50'
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-[72px]">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Digitech Tree home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-800 font-heading text-base font-extrabold text-white">
              <span className="text-brand-400">DT</span>
            </span>
            <span className="whitespace-nowrap font-heading text-lg font-extrabold text-navy-800 sm:text-xl">
              Digitech <span className="text-brand-500">Tree</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-0 xl:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-semibold transition ${
                  activeSection === link.href
                    ? 'text-brand-500'
                    : 'text-navy-800/85 hover:text-brand-500'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onRequestCall}
              className="hidden min-h-[44px] items-center whitespace-nowrap rounded-xl bg-brand-500 px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-600 sm:inline-flex"
            >
              Request a Call
            </button>
            <button
              type="button"
              onClick={onRequestCall}
              className="hidden min-h-[44px] items-center gap-1.5 whitespace-nowrap rounded-xl border-2 border-navy-800 px-3 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-navy-800 transition hover:bg-navy-800 hover:text-white lg:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              Get Started
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-xl bg-navy-800 text-white xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-navy-950 p-6 shadow-lift transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-extrabold text-white">
              Digitech <span className="text-brand-400">Tree</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-heading text-sm font-bold text-navy-100 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto grid gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onRequestCall();
              }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-500 px-5 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white"
            >
              Request a Call
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onRequestCall();
              }}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white"
            >
              <Sparkles className="h-4 w-4 text-brand-400" aria-hidden="true" />
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
