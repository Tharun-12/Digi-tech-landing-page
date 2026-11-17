import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-[70] grid h-12 w-12 place-items-center rounded-full bg-navy-800 text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-brand-500 ${
          showTop ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>

      <a
        href="https://wa.me/6364833139"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-5 left-5 z-[70] flex items-center gap-2 rounded-full bg-emerald-600 py-3 pl-3.5 pr-4 text-white shadow-lift transition hover:-translate-y-1 hover:bg-emerald-700"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden text-xs font-bold uppercase tracking-wide sm:inline">WhatsApp</span>
      </a>
    </>
  );
}
