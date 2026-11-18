// import { ArrowRight, BarChart3, CheckCircle2, Globe2, Users } from 'lucide-react';
// import Carousel from '../components/Carousel';

// const slides = [
//   {
//     eyebrow: 'Strategy that scales',
//     heading: 'RESULT DRIVEN DIGITAL MARKETING AGENCY',
//     sub: 'With tested strategies, smart automations and a team that is invested in your growth.',
//     cta: 'Get a Free Strategy Call',
//     image: 'https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     alt: 'Digital marketing team collaborating around a table with laptops',
//     stat: '600+ projects delivered',
//     highlights: ['Search visibility', 'Qualified leads', 'Revenue growth'],
//     Icon: BarChart3,
//   },
//   {
//     eyebrow: 'Digital presence, redesigned',
//     heading: 'BUILD ONLINE VISIBILITY GENERATE REVENUE',
//     sub: "Let's create a wonderful website together — built to be found, trusted and remembered.",
//     cta: 'Start Your Website',
//     image: 'https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     alt: 'Professionals working together on laptops in a modern office',
//     stat: 'Mobile-first experiences',
//     highlights: ['Conversion focused', 'SEO ready', 'Made for growth'],
//     Icon: Globe2,
//   },
//   {
//     eyebrow: 'Turn attention into action',
//     heading: 'BUILD A UNIQUE CUSTOM WEBSITE',
//     sub: 'To convert visitors into customers with memorable design and frictionless experiences.',
//     cta: 'Get a Custom Quote',
//     image: 'https://images.pexels.com/photos/39190576/pexels-photo-39190576.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     alt: 'Diverse business team reviewing a growth presentation on screen',
//     stat: '500+ happy customers',
//     highlights: ['Clear brand story', 'Easy to navigate', 'Built to convert'],
//     Icon: Users,
//   },
// ];

// export default function Hero({ onRequestCall }: { onRequestCall: () => void }) {
//   return (
//     <section id="home" aria-label="Hero" className="relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950" aria-hidden="true" />
//       <div
//         className="absolute inset-0 opacity-[0.07]"
//         aria-hidden="true"
//         style={{
//           backgroundImage:
//             'radial-gradient(circle at 20% 30%, #E11D2E 0, transparent 45%), radial-gradient(circle at 80% 70%, #F0B429 0, transparent 40%)',
//         }}
//       />
//       <div className="container-x relative">
//         <Carousel
//           ariaLabel="Digitech Tree highlights"
//           className="py-12 sm:py-16 lg:py-20"
//           slides={slides.map(({ eyebrow, heading, sub, cta, image, alt, stat, highlights, Icon }) => (
//             <div key={heading} className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
//               <div className="text-center lg:text-left">
//                 <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-100 sm:text-xs">
//                   <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
//                   {eyebrow}
//                 </p>
//                 <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] text-white text-balance sm:text-4xl lg:text-[3.15rem]">
//                   {heading}
//                 </h1>
//                 <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg lg:mx-0">
//                   {sub}
//                 </p>
//                 <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-navy-100 sm:text-sm lg:mx-0 lg:justify-start">
//                   {highlights.map((highlight) => (
//                     <li key={highlight} className="inline-flex items-center gap-1.5">
//                       <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
//                   <button
//                     type="button"
//                     onClick={onRequestCall}
//                     className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-600"
//                   >
//                     {cta}
//                     <ArrowRight className="h-4 w-4" aria-hidden="true" />
//                   </button>
//                   <a
//                     href="#services"
//                     className="inline-flex min-h-[44px] items-center rounded-xl border border-white/25 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
//                   >
//                     Explore Services
//                   </a>
//                 </div>
//               </div>

//               <div className="relative mx-auto block w-full max-w-xl lg:ml-auto">
//                 <div className="absolute -inset-3 rounded-[2rem] border border-white/10 bg-white/5" aria-hidden="true" />
//                 <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-2 shadow-lift backdrop-blur-sm">
//                   <img
//                     src={image}
//                     alt={alt}
//                     loading={heading === slides[0].heading ? 'eager' : 'lazy'}
//                     className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
//                   />
//                   <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-navy-800 shadow-card">
//                     <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
//                     Growth partner
//                   </div>
//                   <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 rounded-2xl bg-navy-950/85 p-4 text-left backdrop-blur-md">
//                     <div>
//                       <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">Digitech Tree</p>
//                       <p className="mt-1 font-heading text-sm font-bold text-white sm:text-base">{stat}</p>
//                     </div>
//                     <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
//                       <ArrowRight className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         />
//       </div>
//       <div className="h-16 sm:h-20" aria-hidden="true" />
//     </section>
//   );
// }




import {
  ArrowRight, BarChart3, Bot, Clapperboard, Database, Globe2, Layers, LayoutDashboard,
  MessageCircle, Palette, Settings2, Target, Users, Workflow, type LucideIcon,
} from 'lucide-react';
import Carousel from '../components/Carousel';
import { WHATSAPP_URL } from '../sections/Config';

type Slide = {
  eyebrow: string;
  heading: string;
  highlight: string;
  sub: string;
  cta: string;
  image: string;
  alt: string;
  chips: { label: string; Icon: LucideIcon }[];
};

const slides: Slide[] = [
  {
    eyebrow: 'Digital Growth Partner',
    heading: 'Build Your Digital Presence.',
    highlight: 'Generate More Business.',
    sub: 'Digital marketing, branding, websites, and business solutions that help you reach the right audience, attract customers, and grow your business.',
    cta: 'Get in Touch',
    image: 'https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Digital marketing team collaborating around a table with laptops',
    chips: [
      { label: 'Reach the Right Audience', Icon: Target },
      { label: 'Increase Enquiries', Icon: BarChart3 },
      { label: 'Build Brand Value', Icon: Users },
      { label: 'Strengthen Online Presence', Icon: Layers },
      { label: 'Drive Business Growth', Icon: Settings2 },
      { label: 'Automate Customer Engagement', Icon: Bot },
    ],
  },
  {
    eyebrow: 'Websites & Branding',
    heading: 'Websites and Brands',
    highlight: 'Built Around Your Business.',
    sub: 'Corporate sites, e-commerce platforms, landing pages, logos and brand identities that help customers find, trust and remember you.',
    cta: 'Discuss Your Project',
    image: 'https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Professionals working together on laptops in a modern office',
    chips: [
      { label: 'Website Design & Development', Icon: Globe2 },
      { label: 'UI/UX Design', Icon: LayoutDashboard },
      { label: 'Branding & Creative Design', Icon: Palette },
      { label: 'Content & Video Creation', Icon: Clapperboard },
    ],
  },
  {
    eyebrow: 'Automation & Lead Management',
    heading: 'Never Miss an Enquiry.',
    highlight: 'Follow Up Faster.',
    sub: 'WhatsApp Business automation and CRM integration that organize your leads, answer customers quickly and simplify everyday workflows.',
    cta: 'Talk to Our Team',
    image: 'https://images.pexels.com/photos/8837507/pexels-photo-8837507.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Team reviewing customer and campaign data on screen',
    chips: [
      { label: 'WhatsApp Business Automation', Icon: MessageCircle },
      { label: 'CRM & Business Automation', Icon: Database },
      { label: 'Lead Follow-ups', Icon: Target },
      { label: 'Workflow Automation', Icon: Workflow },
    ],
  },
];

export default function Hero({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #F97316 0, transparent 45%), radial-gradient(circle at 80% 70%, #F0B429 0, transparent 40%)',
        }}
      />
      <div className="container-x relative">
        <Carousel
          ariaLabel="iiiQBets highlights"
          className="py-14 sm:py-20 lg:py-24"
          slides={slides.map(({ eyebrow, heading, highlight, sub, cta, image, alt, chips }, index) => {
            const Heading = index === 0 ? 'h1' : 'h2';
            return (
              <div key={eyebrow} className="grid items-center gap-10 px-10 sm:px-14 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-20">
                <div className="text-center lg:text-left">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-100 sm:text-xs">
                    <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                    {eyebrow}
                  </p>
                  <Heading className="mt-5 font-heading text-3xl font-extrabold leading-[1.25] text-white text-balance sm:text-4xl lg:text-[3.15rem]">
                    {heading} <span className="text-brand-400">{highlight}</span>
                  </Heading>
                  <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg lg:mx-0">
                    {sub}
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <button
                      type="button"
                      onClick={onRequestCall}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-600"
                    >
                      {cta}
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

                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                  <div className="absolute -inset-3 rounded-[2rem] border border-white/10 bg-white/5" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-2 shadow-lift backdrop-blur-sm">
                    <img
                      src={image}
                      alt={alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
                    />
                    <ul className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2 rounded-2xl bg-navy-950/85 p-3 backdrop-blur-md">
                      {chips.slice(0, 4).map(({ label, Icon }) => (
                        <li
                          key={label}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white sm:text-xs"
                        >
                          <Icon className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        />
      </div>
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </section>
  );
}