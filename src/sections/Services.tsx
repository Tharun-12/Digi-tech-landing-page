// import {
//   ArrowUpRight, BarChart3, Boxes, Clapperboard, Database, Globe2, LayoutDashboard,
//   Megaphone, MessageCircle, Palette, Search, Share2, Target,
// } from 'lucide-react';
// import Reveal from '../components/Reveal';
// import SectionHeading from '../components/SectionHeading';

// const services = [
//   { title: 'Digital Marketing', desc: 'Strategy, digital campaigns, audience targeting, and marketing activities aligned with your business goals.', Icon: Megaphone },
//   { title: 'Search Engine Optimization (SEO)', desc: 'Improve search visibility, strengthen keyword rankings, and attract relevant organic traffic.', Icon: Search },
//   { title: 'Website Design & Development', desc: 'Corporate websites, e-commerce platforms, business portals, landing pages, and custom web solutions.', Icon: Globe2 },
//   { title: 'UI/UX Design', desc: 'User-focused website and application interfaces designed for better usability and customer experience.', Icon: LayoutDashboard },
//   { title: 'Branding & Creative Design', desc: 'Logo design, brand identity, company profiles, brochures, and marketing collaterals.', Icon: Palette },
//   { title: 'Content & Video Creation', desc: 'Social media creatives, reels, promotional videos, and campaign content for digital platforms.', Icon: Clapperboard },
//   { title: 'Social Media Management', desc: 'Content planning, publishing, and audience engagement across Instagram, Facebook, LinkedIn, YouTube, and other relevant platforms.', Icon: Share2 },
//   { title: 'Paid Advertising & Lead Generation', desc: 'Targeted campaigns across Google, Meta, LinkedIn, and other platforms to generate relevant business enquiries.', Icon: Target },
//   { title: 'WhatsApp Business Automation', desc: 'WhatsApp Business API integration, automated responses, enquiry management, and lead follow-ups.', Icon: MessageCircle },
//   { title: 'CRM & Business Automation', desc: 'Lead management, CRM integration, customer engagement, reporting, and workflow automation.', Icon: Database },
//   { title: 'Business Growth Solutions', desc: 'Marketing strategies and digital initiatives focused on customer acquisition, market reach, and business opportunities.', Icon: BarChart3 },
//   { title: 'End-to-End Digital Ecosystem', desc: 'Integrate marketing, websites, digital presence, customer engagement, and business tools into a connected ecosystem.', Icon: Boxes },
// ];

// export default function Services({ onRequestCall }: { onRequestCall: () => void }) {
//   return (
//     <section id="services" className="section-pad bg-navy-50/50">
//       <div className="container-x">
//         <Reveal>
//           <SectionHeading
//             center
//             eyebrow="::: Our Services"
//             title="End-to-End Digital, Creative & Technology Solutions for Your Business"
//           />
//         </Reveal>

//         <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map(({ title, desc, Icon }) => (
//             <Reveal key={title} className="h-full">
//               <article className="group flex h-full min-h-[260px] flex-col rounded-2xl border border-navy-100/70 bg-white p-5 shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
//                 <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-800 text-white transition group-hover:bg-brand-500">
//                   <Icon className="h-6 w-6" aria-hidden="true" />
//                 </span>
//                 <div className="mt-4 flex flex-1 flex-col">
//                   <h3 className="font-heading text-lg font-bold text-navy-800">{title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{desc}</p>
//                   <button
//                     type="button"
//                     onClick={onRequestCall}
//                     className="mt-auto inline-flex min-h-[44px] items-center gap-1 pt-3 text-sm font-semibold text-brand-500 transition group-hover:gap-2"
//                   >
//                     Enquire now
//                     <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
//                   </button>
//                 </div>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Database, Handshake, Layers, LayoutTemplate, Megaphone, MessageCircle,
  Monitor, PenTool, PlayCircle, Search, Target, TrendingUp, type LucideIcon,
} from 'lucide-react';

const SERVICES: { title: string; desc: string; Icon: LucideIcon }[] = [
  { title: 'Digital Marketing', desc: 'Strategy, campaigns and performance marketing.', Icon: Megaphone },
  { title: 'SEO', desc: 'Improve search visibility and attract relevant traffic.', Icon: Search },
  { title: 'Website Development', desc: 'Corporate, e-commerce, portals and custom web solutions.', Icon: Monitor },
  { title: 'UI/UX Design', desc: 'User-focused, intuitive and engaging digital experiences.', Icon: LayoutTemplate },
  { title: 'Branding & Creative Design', desc: 'Logo, brand identity and marketing collaterals.', Icon: PenTool },
  { title: 'Content & Video Creation', desc: 'Social creatives, reels, videos and campaign content.', Icon: PlayCircle },
  { title: 'Social Media Management', desc: 'End-to-end management across Instagram, Facebook, LinkedIn, YouTube and more.', Icon: Handshake },
  { title: 'Paid Ads & Lead Generation', desc: 'Targeted campaigns on Google, Meta, LinkedIn and other platforms.', Icon: Target },
  { title: 'WhatsApp Business Automation', desc: 'WhatsApp API setup, automated responses and lead follow-ups.', Icon: MessageCircle },
  { title: 'CRM & Business Automation', desc: 'Lead management, customer engagement and workflow automation.', Icon: Database },
  { title: 'Business Growth Solutions', desc: 'Market reach, customer acquisition and digital opportunities.', Icon: TrendingUp },
  { title: 'End-to-End Digital Ecosystem', desc: 'Integrate marketing, digital presence and business tools for long-term growth.', Icon: Layers },
];

export default function Services() {
  return (
    // FIX: Added scroll-mt-32 and adjusted padding (pt-10) so the title clears the header
    <section id="services" className="relative -mt-14 scroll-mt-[88px] px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-center gap-4 pt-2">
          <span className="hidden h-[3px] w-14 bg-[#E51A22] sm:block" aria-hidden="true" />
          <h2 className="text-3xl font-black tracking-tight text-[#091C3E] sm:text-4xl">Our Services</h2>
          <span className="hidden h-[3px] w-14 bg-[#E51A22] sm:block" aria-hidden="true" />
        </div>
        <p className="mt-2 text-center text-sm text-slate-700 sm:text-base">
          End-to-end digital, creative and technology solutions for your business.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_4px_14px_rgba(16,43,92,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,43,92,0.14)]"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-9 w-9 shrink-0 text-[#E51A22]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-[15px] font-extrabold leading-tight text-[#091C3E]">{title}</h3>
              </div>
              <p className="mt-3 text-[13px] leading-snug text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}