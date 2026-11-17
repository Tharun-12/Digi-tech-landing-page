// import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
// import LeadFields from '../components/LeadFields';
// import Reveal from '../components/Reveal';

// const services = [
//   'Digital Marketing Services',
//   'SEO',
//   'SMO',
//   'Website Design',
//   'Website Development',
//   'Graphic Design',
// ];

// const packages = ['SEO', 'SMO', 'PPC', 'ORM', 'Website Development', 'Website Design Packages'];
// const quickLinks = [
//   { label: 'Home', href: '#home' },
//   { label: 'About Us', href: '#about' },
//   { label: 'Contact Us', href: '#contact' },
//   { label: 'Portfolio', href: '#work' },
// ];

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-navy-950 text-navy-100">
//       <div className="container-x grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
//         <div>
//           <a href="#home" className="flex items-center gap-3">
//             <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 font-heading text-lg font-extrabold text-white">
//               DT
//             </span>
//             <span className="font-heading text-xl font-extrabold text-white">
//               Digitech <span className="text-brand-400">Tree</span>
//             </span>
//           </a>
//           <p className="mt-5 text-sm leading-relaxed text-navy-100/80">
//             Digitech Tree aim is to make your online business smooth, speedy and efficient. We
//             offer Digital Marketing Services, SEO Services, SMO, PPC, Email Marketing, Website
//             Design and Development.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Our Services</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {services.map((s) => (
//               <li key={s}>
//                 <a href="#services" className="text-navy-100/80 transition hover:text-white">
//                   {s}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Various Packages</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {packages.map((p) => (
//               <li key={p}>
//                 <a href="#packages" className="text-navy-100/80 transition hover:text-white">
//                   {p}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <h3 className="mt-7 font-heading text-base font-bold text-white">Quick Links</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {quickLinks.map((l) => (
//               <li key={l.label}>
//                 <a href={l.href} className="text-navy-100/80 transition hover:text-white">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Contact</h3>
//           <ul className="mt-5 space-y-3 text-sm">
//             <li className="flex items-start gap-2.5">
//               <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//               1008, Star Rameshwaram, Rajnagar, Ghaziabad (U.P) 201017
//             </li>
//             <li>
//               <a href="mailto:contact@digitechtree.com" className="flex items-center gap-2.5 transition hover:text-white">
//                 <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//                 contact@digitechtree.com
//               </a>
//             </li>
//             <li>
//               <a href="tel:+919717212955" className="flex items-center gap-2.5 transition hover:text-white">
//                 <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//                 +91-9717212955
//               </a>
//             </li>
//           </ul>

//           <a
//             href="https://wa.me/919717212955"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
//           >
//             <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
//             WhatsApp — Chat with us now
//           </a>

//           <div className="mt-6 rounded-2xl bg-white/5 p-4">
//             <LeadFields
//               source="footer"
//               requireName={false}
//               compact
//               dark
//               successMessage="Enquiry received. Our team will reach out shortly."
//             />
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-100/70 sm:flex-row">
//           <p>© Copyright 2025. All Rights Reserved by Digitech Tree</p>
//           <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
//             <a href="#" className="transition hover:text-white">Terms and Conditions</a>
//             <a href="#" className="transition hover:text-white">Privacy Policy</a>
//             <a href="#" className="transition hover:text-white">Refund &amp; Return Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





// import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
// import LeadFields from '../components/LeadFields';
// import Reveal from '../components/Reveal';
// import logo from '../assets/logo.webp'; // 👈 adjust path/filename to match your project

// const services = [
//   'Digital Marketing Services',
//   'SEO',
//   'SMO',
//   'Website Design',
//   'Website Development',
//   'Graphic Design',
// ];

// const packages = ['SEO', 'SMO', 'PPC', 'ORM', 'Website Development', 'Website Design Packages'];
// const quickLinks = [
//   { label: 'Home', href: '#home' },
//   { label: 'About Us', href: '#about' },
//   { label: 'Contact Us', href: '#contact' },
//   { label: 'Portfolio', href: '#work' },
// ];

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-navy-950 text-navy-100">
//       <div className="container-x grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
//         <div>
//           <a href="#home" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Digitech Tree"
//               className="h-11 w-auto"
//             />
//           </a>
//           <p className="mt-5 text-sm leading-relaxed text-navy-100/80">
//             Digitech Tree aim is to make your online business smooth, speedy and efficient. We
//             offer Digital Marketing Services, SEO Services, SMO, PPC, Email Marketing, Website
//             Design and Development.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Our Services</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {services.map((s) => (
//               <li key={s}>
//                 <a href="#services" className="text-navy-100/80 transition hover:text-white">
//                   {s}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Various Packages</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {packages.map((p) => (
//               <li key={p}>
//                 <a href="#packages" className="text-navy-100/80 transition hover:text-white">
//                   {p}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <h3 className="mt-7 font-heading text-base font-bold text-white">Quick Links</h3>
//           <ul className="mt-5 space-y-2.5 text-sm">
//             {quickLinks.map((l) => (
//               <li key={l.label}>
//                 <a href={l.href} className="text-navy-100/80 transition hover:text-white">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-heading text-base font-bold text-white">Contact</h3>
//           <ul className="mt-5 space-y-3 text-sm">
//             <li className="flex items-start gap-2.5">
//               <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//               1008, Star Rameshwaram, Rajnagar, Ghaziabad (U.P) 201017
//             </li>
//             <li>
//               <a href="mailto:contact@digitechtree.com" className="flex items-center gap-2.5 transition hover:text-white">
//                 <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//                 contact@digitechtree.com
//               </a>
//             </li>
//             <li>
//               <a href="tel:+919717212955" className="flex items-center gap-2.5 transition hover:text-white">
//                 <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
//                 +91-9717212955
//               </a>
//             </li>
//           </ul>

//           <a
//             href="https://wa.me/919717212955"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
//           >
//             <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
//             WhatsApp — Chat with us now
//           </a>

//           <div className="mt-6 rounded-2xl bg-white/5 p-4">
//             <LeadFields
//               source="footer"
//               requireName={false}
//               compact
//               dark
//               successMessage="Enquiry received. Our team will reach out shortly."
//             />
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-100/70 sm:flex-row">
//           <p>© Copyright 2025. All Rights Reserved by Digitech Tree</p>
//           <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
//             <a href="#" className="transition hover:text-white">Terms and Conditions</a>
//             <a href="#" className="transition hover:text-white">Privacy Policy</a>
//             <a href="#" className="transition hover:text-white">Refund &amp; Return Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import logo from '../assets/logo1.png'; // adjust path/filename to match your project
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  WHATSAPP_URL,
} from '../sections/Config';

const services = [
  'Digital Marketing',
  'SEO & Search Visibility',
  'Website Design & Development',
  'UI/UX Design',
  'Branding & Creative Design',
  'Content & Video Creation',
  'Social Media Management',
  'Paid Ads & Lead Generation',
];

const solutions = [
  'WhatsApp Business Automation',
  'CRM & Business Automation',
  'Business Growth Solutions',
  'End-to-End Digital Ecosystem',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <footer id="contact" className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="iiiQBets" className="h-18 w-auto" />
          </a>
          <p className="mt-5 text-sm leading-relaxed text-navy-100/80">
            iiiQBets is your digital growth partner, bringing strategy, creativity and technology under one
            roof to help businesses improve visibility, connect with customers and create new opportunities.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-white">Our Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-navy-100/80 transition hover:text-white">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-white">Business Solutions</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {solutions.map((s) => (
              <li key={s}>
                <a href="#services" className="text-navy-100/80 transition hover:text-white">{s}</a>
              </li>
            ))}
          </ul>
          <h3 className="mt-7 font-heading text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-navy-100/80 transition hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {CONTACT_ADDRESS}
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 transition hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={CONTACT_PHONE_HREF} className="flex items-center gap-2.5 transition hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={onRequestCall}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-heading text-xs font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-100/70 sm:flex-row">
          <p>© {new Date().getFullYear()} iiiQBets · KRIKA MKB Corporation Private Limited</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#" className="transition hover:text-white">Terms and Conditions</a>
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}