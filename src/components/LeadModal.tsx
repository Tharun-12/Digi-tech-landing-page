import { X } from 'lucide-react';
import { useEffect } from 'react';
import LeadFields from './LeadFields';

export default function LeadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a call"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-lift">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy-700 transition hover:bg-navy-100"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          Get Started
        </p>
        <h3 className="mt-2 font-heading text-2xl font-extrabold text-navy-800">
          Request a Call
        </h3>
        <p className="mt-1.5 text-sm text-navy-600/90">
          Talk to our digital marketing strategist — free consultation.
        </p>
        <div className="mt-6">
          <LeadFields source="modal" />
        </div>
      </div>
    </div>
  );
}
