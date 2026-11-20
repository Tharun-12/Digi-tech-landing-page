import { useEffect, useRef, useState } from 'react';
import { Phone, X } from 'lucide-react';
import { CONTACT_PHONES } from '../sections/Config';

type CallButtonProps = {
  className?: string;
  label?: string;
  /** ms to wait before showing the fallback dialog (default 6000) */
  fallbackDelay?: number;
};

export default function CallButton({
  className,
  label = 'Call Us',
  fallbackDelay = 6000,
}: CallButtonProps) {
  const [showFallback, setShowFallback] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Clear any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  // Lock body scroll while dialog is open
  useEffect(() => {
    if (!showFallback) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showFallback]);

  const handleCall = () => {
    // Must be a synchronous navigation inside the click handler (iOS Safari)
    window.location.href = CONTACT_PHONES[0].href;

    // Best-effort: after the user returns, offer the alternate number.
    // Browsers can't detect "no answer", so this is a user-choice fallback.
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setShowFallback(true);
    }, fallbackDelay);
  };

  const closeFallback = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setShowFallback(false);
  };

  return (
    <>
      <button type="button" onClick={handleCall} className={className}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>

      {showFallback && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="call-fallback-title"
          className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4"
          onClick={closeFallback}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 id="call-fallback-title" className="text-lg font-bold text-navy-900">
                Call us
              </h3>
              <button
                type="button"
                onClick={closeFallback}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg hover:bg-navy-50"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mb-4 text-sm text-navy-600">
              Didn&apos;t get through on the first line? Try our alternate number.
            </p>

            <div className="grid gap-2">
              {CONTACT_PHONES.map((phone, idx) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  onClick={closeFallback}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    idx === 0
                      ? 'border-navy-200 text-navy-800 hover:bg-navy-50'
                      : 'border-brand-500 bg-brand-500 text-white hover:bg-brand-600'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {phone.display}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide ${
                      idx === 0 ? 'text-navy-400' : 'text-white/80'
                    }`}
                  >
                    {phone.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}