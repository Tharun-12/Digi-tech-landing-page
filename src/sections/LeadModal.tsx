// import { FormEvent, useEffect, useRef, useState } from 'react';
// import { CheckCircle2, X } from 'lucide-react';
// import { SERVICE_OPTIONS } from '../sections/Config';

// type Props = { open: boolean; onClose: () => void };

// const field =
//   'mt-1.5 w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20';
// const label = 'block text-sm font-semibold text-navy-800';

// export default function LeadModal({ open, onClose }: Props) {
//   const [submitted, setSubmitted] = useState(false);
//   const [sending, setSending] = useState(false);
//   const firstField = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
//     document.addEventListener('keydown', onKey);
//     document.body.style.overflow = 'hidden';
//     firstField.current?.focus();
//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.body.style.overflow = '';
//     };
//   }, [open, onClose]);

//   useEffect(() => {
//     if (!open) setSubmitted(false);
//   }, [open]);

//   if (!open) return null;

//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget).entries());
//     setSending(true);
//     try {
//       // TODO: replace with your real endpoint (API route, Formspree, Google Sheet webhook, CRM, etc.)
//       // await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
//       console.log('Lead submitted', data);
//       setSubmitted(true);
//     } finally {
//       setSending(false);
//     }
//   }

//   return (
//     <div
//       className="fixed inset-0 z-[90] flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
//       onMouseDown={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="lead-modal-title"
//         className="relative max-h-[95vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-lift sm:rounded-3xl sm:p-8"
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close form"
//           className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-navy-600 transition hover:bg-navy-50"
//         >
//           <X className="h-5 w-5" aria-hidden="true" />
//         </button>

//         {submitted ? (
//           <div className="py-10 text-center" role="status">
//             <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" aria-hidden="true" />
//             <p className="mt-5 font-heading text-xl font-extrabold text-navy-800">Thank you for your enquiry.</p>
//             <p className="mt-2 text-sm text-navy-900/75">Our team will get in touch with you shortly.</p>
//             <button
//               type="button"
//               onClick={onClose}
//               className="mt-8 min-h-[44px] rounded-xl bg-navy-800 px-6 py-3 font-heading text-sm font-bold text-white transition hover:bg-navy-900"
//             >
//               Close
//             </button>
//           </div>
//         ) : (
//           <>
//             <h2 id="lead-modal-title" className="pr-10 font-heading text-2xl font-extrabold text-navy-800">
//               Let’s Discuss Your Business Requirements
//             </h2>
//             <p className="mt-2 text-sm text-navy-900/75">Share a few details and our team will get in touch.</p>

//             <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//               <div>
//                 <label htmlFor="lead-name" className={label}>Full Name *</label>
//                 <input ref={firstField} id="lead-name" name="name" required autoComplete="name" className={field} />
//               </div>
//               <div>
//                 <label htmlFor="lead-company" className={label}>Company / Business Name</label>
//                 <input id="lead-company" name="company" autoComplete="organization" className={field} />
//               </div>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div>
//                   <label htmlFor="lead-phone" className={label}>Phone Number *</label>
//                   <input id="lead-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
//                 </div>
//                 <div>
//                   <label htmlFor="lead-email" className={label}>Email Address *</label>
//                   <input id="lead-email" name="email" type="email" required autoComplete="email" className={field} />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="lead-service" className={label}>Service Required *</label>
//                 <select id="lead-service" name="service" required defaultValue="" className={field}>
//                   <option value="" disabled>Select a service</option>
//                   {SERVICE_OPTIONS.map((s) => (
//                     <option key={s} value={s}>{s}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="lead-message" className={label}>Brief Requirement (Optional)</label>
//                 <textarea id="lead-message" name="message" rows={3} className={field} />
//               </div>
//               <button
//                 type="submit"
//                 disabled={sending}
//                 className="min-h-[48px] w-full rounded-xl bg-brand-500 px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:bg-brand-600 disabled:opacity-60"
//               >
//                 {sending ? 'Sending…' : 'Request a Consultation'}
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }




import { FormEvent, useEffect, useRef, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { SERVICE_OPTIONS } from '../sections/Config';
import { BASE_URL } from '@/Apiurls/apiurl';

const API_URL = BASE_URL;

const inputClass =
  'mt-1 w-full rounded-lg border border-navy-100 bg-white px-3 py-2 text-sm text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20';
const labelClass = 'block text-xs font-semibold text-navy-800';

export default function LeadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    nameRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setError('');
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'modal' }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Request failed');
      }
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== 'Request failed'
          ? err.message
          : 'Something went wrong. Please try again or contact us on WhatsApp.'
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-lift sm:p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-navy-50 text-navy-700 transition hover:bg-navy-100"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="py-10 text-center" role="status">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" aria-hidden="true" />
            <p className="mt-5 font-heading text-xl font-extrabold text-navy-800">
              Thank you for your enquiry.
            </p>
            <p className="mt-2 text-sm text-navy-900/75">
              Our team will get in touch with you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 min-h-[44px] rounded-xl bg-navy-800 px-6 py-3 font-heading text-sm font-bold text-white transition hover:bg-navy-900"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3
              id="lead-modal-title"
              className="pr-10 font-heading text-xl font-extrabold leading-snug text-navy-800"
            >
              Let's Discuss Your Business Requirements
            </h3>
            <p className="mt-1 text-xs text-navy-600/90">
              Share a few details and our team will get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lead-name" className={labelClass}>Full Name *</label>
                  <input ref={nameRef} id="lead-name" name="name" required autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="lead-company" className={labelClass}>Company / Business Name</label>
                  <input id="lead-company" name="company" autoComplete="organization" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lead-phone" className={labelClass}>Phone Number *</label>
                  <input id="lead-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="lead-email" className={labelClass}>Email Address *</label>
                  <input id="lead-email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="lead-service" className={labelClass}>Service Required *</label>
                <select id="lead-service" name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="lead-message" className={labelClass}>Brief Requirement (Optional)</label>
                <textarea id="lead-message" name="message" rows={2} className={inputClass} />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="min-h-[44px] w-full rounded-lg bg-brand-500 px-6 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:bg-brand-600 disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Request a Consultation'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}