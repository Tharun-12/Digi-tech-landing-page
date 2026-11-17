// import { useState } from 'react';
// import { Sparkles, X } from 'lucide-react';
// import LeadFields from './LeadFields';

// export default function GetStartedTab() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => setOpen(true)}
//         aria-haspopup="dialog"
//         aria-expanded={open}
//         className="fixed right-0 top-1/2 z-[75] -translate-y-1/2 rounded-l-xl bg-brand-500 py-4 pl-2 pr-3 font-heading text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lift transition hover:bg-brand-600"
//         style={{ writingMode: 'vertical-rl' }}
//       >
//         <span className="inline-flex items-center gap-2">
//           <Sparkles className="h-4 w-4 rotate-90" aria-hidden="true" />
//           Get Started
//         </span>
//       </button>

//       {open && (
//         <div
//           className="fixed inset-0 z-[90] flex items-center justify-center p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Get started"
//         >
//           <button
//             type="button"
//             aria-label="Close dialog"
//             onClick={() => setOpen(false)}
//             className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
//           />
//           <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-lift">
//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               aria-label="Close"
//               className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy-700 transition hover:bg-navy-100"
//             >
//               <X className="h-5 w-5" aria-hidden="true" />
//             </button>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
//               Get Started
//             </p>
//             <h3 className="mt-2 font-heading text-2xl font-extrabold text-navy-800">
//               Let's grow your business
//             </h3>
//             <p className="mt-1.5 text-sm text-navy-600/90">
//               Share your details and our strategist will call you back.
//             </p>
//             <div className="mt-6">
//               <LeadFields source="modal" successMessage="Got it! We'll be in touch within one business day." />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



import { Sparkles } from 'lucide-react';

// Vertical side tab. Opens the shared lead pop-up (LeadModal) instead of its own form.
// Hidden on mobile, where the bottom Call / WhatsApp bar is shown instead.
export default function GetStartedTab({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <button
      type="button"
      onClick={onRequestCall}
      aria-haspopup="dialog"
      className="fixed right-0 top-1/2 z-[75] hidden -translate-y-1/2 rounded-l-xl bg-brand-500 py-4 pl-2 pr-3 font-heading text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lift transition hover:bg-brand-600 md:block"
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-4 w-4 rotate-90" aria-hidden="true" />
        Get Started
      </span>
    </button>
  );
}