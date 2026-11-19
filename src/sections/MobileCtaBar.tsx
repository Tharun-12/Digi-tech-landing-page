// import { MessageCircle, Phone } from 'lucide-react';
// import { CONTACT_PHONE_HREF, WHATSAPP_URL } from '../sections/Config';

// // Fixed bottom bar, visible on mobile only (hidden from the md breakpoint up)
// export default function MobileCtaBar() {
//   return (
//     <div
//       className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] md:hidden"
//       style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
//     >
//       <a
//         href={CONTACT_PHONE_HREF}
//         className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-brand-600 px-4 py-3 text-sm font-bold text-white transition active:bg-brand-700"
//       >
//         <Phone className="h-4 w-4" aria-hidden="true" />
//         Call us
//       </a>
//       <a
//         href={WHATSAPP_URL}
//         target="_blank"
//         rel="noreferrer"
//         className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-emerald-700 px-4 py-3 text-sm font-bold text-white transition active:bg-emerald-800"
//       >
//         <MessageCircle className="h-4 w-4" aria-hidden="true" />
//         WhatsApp
//       </a>
//     </div>
//   );
// }



import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../sections/Config';

const PRIMARY_PHONE = 'tel:+919448113616';
const ALTERNATE_PHONE = 'tel:+919986513214';

export default function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Call Us */}
      <div className="flex flex-col">
        <a
          href={PRIMARY_PHONE}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-brand-600 px-3 py-2 text-sm font-bold text-white transition active:bg-brand-700"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Us
        </a>

        <a
          href={ALTERNATE_PHONE}
          className="flex min-h-[32px] items-center justify-center bg-brand-700 px-2 py-1 text-xs font-medium text-white"
        >
          Alternate: 99865 13214
        </a>
      </div>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-emerald-700 px-4 py-3 text-sm font-bold text-white transition active:bg-emerald-800"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
