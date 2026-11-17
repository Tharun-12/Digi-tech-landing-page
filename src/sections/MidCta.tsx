// import { PhoneCall } from 'lucide-react';
// import LeadFields from '../components/LeadFields';
// import Reveal from '../components/Reveal';

// export default function MidCta() {
//   return (
//     <section className="relative overflow-hidden" aria-label="Talk to a strategist">
//       <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950" aria-hidden="true" />
//       <div
//         className="absolute inset-0 opacity-10"
//         aria-hidden="true"
//         style={{
//           backgroundImage: 'radial-gradient(circle at 85% 20%, #E11D2E 0, transparent 45%)',
//         }}
//       />
//       <div className="container-x relative section-pad">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           <Reveal>
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
//               Let's Connect
//             </p>
//             <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
//               Let's Connect – Talk to our Digital Marketing Strategist Now
//             </h2>
//             <p className="mt-4 max-w-lg text-navy-100">
//               Get a free consultation and a custom growth roadmap for your business — no
//               obligations, just clear advice from experts.
//             </p>
//             <a
//               href="tel:+919717212955"
//               className="mt-6 inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-white/25 px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
//             >
//               <PhoneCall className="h-4 w-4" aria-hidden="true" />
//               +91-9717212955
//             </a>
//           </Reveal>

//           <Reveal delay={120}>
//             <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
//               <LeadFields source="mid_cta" successMessage="Success! We've received your details and will call you soon." />
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { WHATSAPP_URL } from '../sections/Config';

export default function MidCta({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <section className="relative overflow-hidden" aria-label="Talk to our team">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle at 85% 20%, #F97316 0, transparent 45%)' }}
      />
      <div className="container-x relative section-pad">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Let’s Talk About Your Business.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-100">
              Looking to strengthen your online presence, reach potential customers, or explore new business
              opportunities? Connect with our team to discuss your requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onRequestCall}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}