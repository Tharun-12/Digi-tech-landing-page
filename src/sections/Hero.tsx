// import {
//   ArrowRight, BarChart3, Bot, Clapperboard, Database, Globe2, Layers, LayoutDashboard,
//   MessageCircle, Palette, Settings2, Target, Users, Workflow, type LucideIcon,
// } from 'lucide-react';
// import Carousel from '../components/Carousel';
// import { WHATSAPP_URL } from '../sections/Config';

// type Slide = {
//   eyebrow: string;
//   heading: string;
//   highlight: string;
//   sub: string;
//   cta: string;
//   image: string;
//   alt: string;
//   chips: { label: string; Icon: LucideIcon }[];
// };

// const slides: Slide[] = [
//   {
//     eyebrow: 'Digital Growth Partner',
//     heading: 'Build Your Digital Presence.',
//     highlight: 'Generate More Business.',
//     sub: 'Digital marketing, branding, websites, and business solutions that help you reach the right audience, attract customers, and grow your business.',
//     cta: 'Get in Touch',
//     image: 'https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&w=1000',
//     alt: 'Digital marketing team collaborating around a table with laptops',
//     chips: [
//       { label: 'Reach the Right Audience', Icon: Target },
//       { label: 'Increase Enquiries', Icon: BarChart3 },
//       { label: 'Build Brand Value', Icon: Users },
//       { label: 'Strengthen Online Presence', Icon: Layers },
//       { label: 'Drive Business Growth', Icon: Settings2 },
//       { label: 'Automate Customer Engagement', Icon: Bot },
//     ],
//   },
//   {
//     eyebrow: 'Websites & Branding',
//     heading: 'Websites and Brands',
//     highlight: 'Built Around Your Business.',
//     sub: 'Corporate sites, e-commerce platforms, landing pages, logos and brand identities that help customers find, trust and remember you.',
//     cta: 'Discuss Your Project',
//     image: 'https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=1000',
//     alt: 'Professionals working together on laptops in a modern office',
//     chips: [
//       { label: 'Website Design & Development', Icon: Globe2 },
//       { label: 'UI/UX Design', Icon: LayoutDashboard },
//       { label: 'Branding & Creative Design', Icon: Palette },
//       { label: 'Content & Video Creation', Icon: Clapperboard },
//     ],
//   },
//   {
//     eyebrow: 'Automation & Lead Management',
//     heading: 'Never Miss an Enquiry.',
//     highlight: 'Follow Up Faster.',
//     sub: 'WhatsApp Business automation and CRM integration that organize your leads, answer customers quickly and simplify everyday workflows.',
//     cta: 'Talk to Our Team',
//     image: 'https://images.pexels.com/photos/8837507/pexels-photo-8837507.jpeg?auto=compress&cs=tinysrgb&w=1000',
//     alt: 'Team reviewing customer and campaign data on screen',
//     chips: [
//       { label: 'WhatsApp Business Automation', Icon: MessageCircle },
//       { label: 'CRM & Business Automation', Icon: Database },
//       { label: 'Lead Follow-ups', Icon: Target },
//       { label: 'Workflow Automation', Icon: Workflow },
//     ],
//   },
// ];

// export default function Hero({ onRequestCall }: { onRequestCall: () => void }) {
//   return (
//     <section id="home" aria-label="Hero" className="relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950" aria-hidden="true" />
//       <div
//         className="absolute inset-0 opacity-[0.08]"
//         aria-hidden="true"
//         style={{
//           backgroundImage:
//             'radial-gradient(circle at 20% 30%, #F97316 0, transparent 45%), radial-gradient(circle at 80% 70%, #F0B429 0, transparent 40%)',
//         }}
//       />
//       <div className="container-x relative">
//         <Carousel
//           ariaLabel="iiiQBets highlights"
//           className="py-14 sm:py-20 lg:py-24"
//           slides={slides.map(({ eyebrow, heading, highlight, sub, cta, image, alt, chips }, index) => {
//             const Heading = index === 0 ? 'h1' : 'h2';
//             return (
//               <div key={eyebrow} className="grid items-center gap-10 px-10 sm:px-14 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-20">
//                 <div className="text-center lg:text-left">
//                   <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-100 sm:text-xs">
//                     <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
//                     {eyebrow}
//                   </p>
//                   <Heading className="mt-5 font-heading text-3xl font-extrabold leading-[1.25] text-white text-balance sm:text-4xl lg:text-[3.15rem]">
//                     {heading} <span className="text-brand-400">{highlight}</span>
//                   </Heading>
//                   <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg lg:mx-0">
//                     {sub}
//                   </p>
//                   <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
//                     <button
//                       type="button"
//                       onClick={onRequestCall}
//                       className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-600"
//                     >
//                       {cta}
//                       <ArrowRight className="h-4 w-4" aria-hidden="true" />
//                     </button>
//                     <a
//                       href={WHATSAPP_URL}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
//                     >
//                       <MessageCircle className="h-4 w-4" aria-hidden="true" />
//                       WhatsApp Us
//                     </a>
//                   </div>
//                 </div>

//                 <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
//                   <div className="absolute -inset-3 rounded-[2rem] border border-white/10 bg-white/5" aria-hidden="true" />
//                   <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-2 shadow-lift backdrop-blur-sm">
//                     <img
//                       src={image}
//                       alt={alt}
//                       loading={index === 0 ? 'eager' : 'lazy'}
//                       className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
//                     />
//                     <ul className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2 rounded-2xl bg-navy-950/85 p-3 backdrop-blur-md">
//                       {chips.slice(0, 4).map(({ label, Icon }) => (
//                         <li
//                           key={label}
//                           className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white sm:text-xs"
//                         >
//                           <Icon className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
//                           {label}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         />
//       </div>
//       <div className="h-16 sm:h-20" aria-hidden="true" />
//     </section>
//   );
// }



import { useId } from 'react';
import { useLeadModal } from '@/context/LeadModalContext';
import {
  ArrowRight, BarChart3, Layers, MessageCircle, PlayCircle, Search,
  Send, Settings, Target, TrendingUp, Users, type LucideIcon,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/916364833139';

type Chip = { label: string; Icon: LucideIcon; pos: string };
const CHIPS: Chip[] = [
  { label: 'Reach the Right Audience', Icon: Target, pos: 'left-0 top-[4%]' },
  { label: 'Increase Enquiries', Icon: BarChart3, pos: '-left-2 top-[27%]' },
  { label: 'Build Brand Value', Icon: Users, pos: 'left-2 top-[50%]' },
  { label: 'Strengthen Online Presence', Icon: Layers, pos: 'right-0 top-[4%]' },
  { label: 'Drive Business Growth', Icon: TrendingUp, pos: 'right-0 top-[27%]' },
  { label: 'Automate Customer Engagement', Icon: Settings, pos: '-right-2 top-[50%]' },
];

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
    </svg>
  );
}

function HeroArt() {
  const uid = useId().replace(/:/g, '');
  const id = (n: string) => `${uid}-${n}`;
  const bars = [
    { x: 150, h: 28 }, { x: 188, h: 50 }, { x: 226, h: 40 }, { x: 264, h: 74 },
    { x: 302, h: 92 }, { x: 340, h: 120 }, { x: 378, h: 148 },
  ];
  return (
    <svg viewBox="0 0 520 380" className="block h-auto w-full" role="img" aria-label="Laptop and phone showing business growth chart">
      <defs>
        <linearGradient id={id('screen')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F2FF" /><stop offset="1" stopColor="#E3EBFF" />
        </linearGradient>
        <linearGradient id={id('bar')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E51A22" /><stop offset="1" stopColor="#CC1119" />
        </linearGradient>
        <linearGradient id={id('arrow')} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#CC1119" /><stop offset="1" stopColor="#E51A22" />
        </linearGradient>
        <linearGradient id={id('phone')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF1F2" /><stop offset="1" stopColor="#FECDD3" />
        </linearGradient>
        <filter id={id('shadow')} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#102B5C" floodOpacity="0.25" />
        </filter>
      </defs>
      <ellipse cx="270" cy="170" rx="210" ry="165" fill="#EEF0FF" />
      <path d="M90 170 C130 40 300 10 400 70" fill="none" stroke="#E51A22" strokeWidth="2" opacity=".7" />
      <g filter={`url(#${id('shadow')})`}>
        <rect x="88" y="62" width="330" height="214" rx="12" fill="#102B5C" />
        <rect x="98" y="72" width="310" height="194" rx="6" fill={`url(#${id('screen')})`} />
        {bars.map((b) => (
          <rect key={b.x} x={b.x + 4} y={236 - b.h} width="26" height={b.h} rx="2" fill={`url(#${id('bar')})`} />
        ))}
        <line x1="136" y1="238" x2="396" y2="238" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M130 222 C200 205 280 150 372 92" fill="none" stroke={`url(#${id('arrow')})`} strokeWidth="7" strokeLinecap="round" />
        <path d="M352 84 L388 78 L376 112 Z" fill="#CC1119" />
        <path d="M46 296 L460 296 L430 276 L76 276 Z" fill="#CBD5E1" />
        <rect x="46" y="294" width="414" height="9" rx="4" fill="#94A3B8" />
      </g>
      <g filter={`url(#${id('shadow')})`}>
        <rect x="396" y="108" width="100" height="186" rx="18" fill="#091C3E" />
        <rect x="402" y="114" width="88" height="174" rx="13" fill={`url(#${id('phone')})`} />
        <path d="M426 190 l36 -22 v50 z" fill="#E51A22" />
        <rect x="418" y="186" width="14" height="22" rx="3" fill="#CC1119" />
        <path d="M472 160 l8 -8 M476 176 h12 M470 146 v-8" stroke="#E51A22" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ChipCard({ label, Icon, className = '' }: { label: string; Icon: LucideIcon; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(16,43,92,0.12)] sm:px-4 sm:py-2.5 ${className}`}>
      <Icon className="h-6 w-6 shrink-0 text-[#E51A22] sm:h-7 sm:w-7" strokeWidth={1.75} aria-hidden="true" />
      <span className="text-[12px] font-semibold leading-tight text-[#102B5C] sm:text-[13px]">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { openModal } = useLeadModal();
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-gradient-to-br from-white via-[#F5F6FF] to-[#EEF2FF]">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-28 lg:pt-14">
        <div className="text-center lg:pl-6 lg:text-left xl:pl-12">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#102B5C] sm:text-sm">
            <span className="h-[3px] w-8 bg-[#E51A22]" aria-hidden="true" />
            Digital Growth Partner
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-[#091C3E] sm:text-5xl xl:text-[3.4rem]">
            Build Your Digital Presence.
            <span className="relative mt-1 block text-[#E51A22]">Generate More Business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg lg:mx-0">
            Digital marketing, branding, websites and business solutions that help you reach the right audience, attract customers and grow your business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                openModal();
                window.history.replaceState(null, '', '#contact');
              }}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E51A22] to-[#CC1119] px-8 text-base font-bold text-white shadow-[0_10px_24px_rgba(229,26,34,0.35)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Send className="h-5 w-5" aria-hidden="true" /> Get in Touch
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-[#15803D] bg-white/60 px-8 text-base font-bold text-[#15803D] transition hover:bg-[#15803D] hover:text-white sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div>
          <div className="relative mx-auto hidden aspect-[1.35/1] w-full max-w-[640px] lg:block">
            <div className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2">
              <HeroArt />
            </div>
            {CHIPS.map((c) => (
              <ChipCard key={c.label} label={c.label} Icon={c.Icon} className={`absolute max-w-[190px] ${c.pos}`} />
            ))}
          </div>
          <div className="lg:hidden">
            <div className="mx-auto w-full max-w-md sm:max-w-lg">
              <HeroArt />
            </div>
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3">
              {CHIPS.map((c) => (
                <ChipCard key={c.label} label={c.label} Icon={c.Icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}