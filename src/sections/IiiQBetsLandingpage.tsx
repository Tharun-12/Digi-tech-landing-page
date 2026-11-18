// import { useState } from 'react';
// import {
//   ArrowRight, BarChart3, BedDouble, Bot, Factory, GraduationCap, Handshake, HardHat,
//   HeartPulse, Home, Layers, LayoutTemplate, Megaphone, Menu, MessageCircle, Monitor,
//   MoreHorizontal, PenTool, Phone, PlayCircle, PlusCircle, Search, Send, Settings,
//   ShoppingCart, Target, TrendingUp, Users, UtensilsCrossed, Warehouse, Database,
//   Dumbbell, X, type LucideIcon,
// } from 'lucide-react';

// /* ---------- config ---------- */
// const WHATSAPP_URL = 'https://wa.me/910000000000'; // TODO: your number
// const PHONE_URL = 'tel:+910000000000'; // TODO: your number

// const NAV = [
//   { label: 'Home', href: '#home' },
//   { label: 'Services', href: '#services' },
//   { label: 'Industries', href: '#industries' },
//   { label: 'About Us', href: '#about' },
// ];

// type Chip = { label: string; Icon: LucideIcon; pos: string };
// const CHIPS: Chip[] = [
//   { label: 'Reach the Right Audience', Icon: Target, pos: 'left-0 top-[4%]' },
//   { label: 'Increase Enquiries', Icon: BarChart3, pos: '-left-2 top-[27%]' },
//   { label: 'Build Brand Value', Icon: Users, pos: 'left-2 top-[50%]' },
//   { label: 'Strengthen Online Presence', Icon: Layers, pos: 'right-0 top-[4%]' },
//   { label: 'Drive Business Growth', Icon: TrendingUp, pos: 'right-0 top-[27%]' },
//   { label: 'Automate Customer Engagement', Icon: Settings, pos: '-right-2 top-[50%]' },
// ];

// const SERVICES: { title: string; desc: string; Icon: LucideIcon }[] = [
//   { title: 'Digital Marketing', desc: 'Strategy, campaigns and performance marketing.', Icon: Megaphone },
//   { title: 'SEO', desc: 'Improve search visibility and attract relevant traffic.', Icon: Search },
//   { title: 'Website Development', desc: 'Corporate, e-commerce, portals and custom web solutions.', Icon: Monitor },
//   { title: 'UI/UX Design', desc: 'User-focused, intuitive and engaging digital experiences.', Icon: LayoutTemplate },
//   { title: 'Branding & Creative Design', desc: 'Logo, brand identity and marketing collaterals.', Icon: PenTool },
//   { title: 'Content & Video Creation', desc: 'Social creatives, reels, videos and campaign content.', Icon: PlayCircle },
//   { title: 'Social Media Management', desc: 'End-to-end management across Instagram, Facebook, LinkedIn, YouTube and more.', Icon: Handshake },
//   { title: 'Paid Ads & Lead Generation', desc: 'Targeted campaigns on Google, Meta, LinkedIn and other platforms.', Icon: Target },
//   { title: 'WhatsApp Business Automation', desc: 'WhatsApp API setup, automated responses and lead follow-ups.', Icon: MessageCircle },
//   { title: 'CRM & Business Automation', desc: 'Lead management, customer engagement and workflow automation.', Icon: Database },
//   { title: 'Business Growth Solutions', desc: 'Market reach, customer acquisition and digital opportunities.', Icon: TrendingUp },
//   { title: 'End-to-End Digital Ecosystem', desc: 'Integrate marketing, digital presence and business tools for long-term growth.', Icon: Layers },
// ];

// const INDUSTRIES: { label: string; Icon: LucideIcon }[] = [
//   { label: 'Real Estate', Icon: Home },
//   { label: 'Health & Wellness', Icon: HeartPulse },
//   { label: 'Yoga & Fitness', Icon: Dumbbell },
//   { label: 'Retail & E-commerce', Icon: ShoppingCart },
//   { label: 'Wholesale & Distribution', Icon: Warehouse },
//   { label: 'Manufacturing', Icon: Factory },
//   { label: 'Education & Training', Icon: GraduationCap },
//   { label: 'Healthcare', Icon: PlusCircle },
//   { label: 'Food & Beverage', Icon: UtensilsCrossed },
//   { label: 'Construction & Infrastructure', Icon: HardHat },
//   { label: 'Hospitality & Travel', Icon: BedDouble },
//   { label: 'and More', Icon: MoreHorizontal },
// ];

// const TRUST: { label: string; Icon: LucideIcon }[] = [
//   { label: 'Strategic & Result-Oriented', Icon: Target },
//   { label: 'Creative + Technology Expertise', Icon: Layers },
//   { label: 'Industry-Focused Approach', Icon: Users },
//   { label: 'Measurable Growth', Icon: BarChart3 },
// ];

// /* ---------- small pieces ---------- */
// function Logo() {
//   return (
//     <a href="#home" className="flex items-center gap-3" aria-label="iiiQBets home">
//       <span className="text-3xl font-black leading-none tracking-tight text-[#12305E] sm:text-4xl">
//         <span className="italic text-[#F97316]">iii</span>QBets
//         <sup className="text-[9px] font-semibold">®</sup>
//       </span>
//       <span className="hidden h-8 w-px bg-slate-300 md:block" aria-hidden="true" />
//       <span className="hidden text-[13px] text-slate-600 md:block">Digital Marketing | Creative | Technology</span>
//     </a>
//   );
// }

// function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
//       <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
//     </svg>
//   );
// }

// function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="relative z-30 bg-white/80 backdrop-blur">
//       <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
//         <Logo />

//         <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
//           {NAV.map((n, i) => (
//             <a
//               key={n.label}
//               href={n.href}
//               className={`border-b-2 pb-1 text-[15px] font-medium transition hover:text-[#F97316] ${
//                 i === 0 ? 'border-[#F97316] text-[#12305E]' : 'border-transparent text-[#12305E]/90'
//               }`}
//             >
//               {n.label}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-3 md:flex">
//           <a
//             href={PHONE_URL}
//             className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-[#12305E] px-5 text-[15px] font-semibold text-[#12305E] transition hover:bg-[#12305E] hover:text-white"
//           >
//             <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
//           </a>
//           <a
//             href={WHATSAPP_URL}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#15803D] px-5 text-[15px] font-semibold text-white transition hover:bg-[#166534]"
//           >
//             <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
//           </a>
//         </div>

//         <button
//           type="button"
//           className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-[#12305E] lg:hidden"
//           aria-expanded={open}
//           aria-label={open ? 'Close menu' : 'Open menu'}
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-2 shadow-lg lg:hidden">
//           <nav className="flex flex-col" aria-label="Mobile">
//             {NAV.map((n) => (
//               <a
//                 key={n.label}
//                 href={n.href}
//                 onClick={() => setOpen(false)}
//                 className="min-h-[44px] border-b border-slate-100 py-3 font-medium text-[#12305E]"
//               >
//                 {n.label}
//               </a>
//             ))}
//           </nav>
//           <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
//             <a href={PHONE_URL} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border-2 border-[#12305E] text-sm font-semibold text-[#12305E]">
//               <Phone className="h-4 w-4" /> Call Us
//             </a>
//             <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#15803D] text-sm font-semibold text-white">
//               <WhatsAppIcon className="h-4 w-4" /> WhatsApp
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// /* Laptop + phone illustration */
// function HeroArt() {
//   const bars = [
//     { x: 150, h: 28 }, { x: 188, h: 50 }, { x: 226, h: 40 }, { x: 264, h: 74 },
//     { x: 302, h: 92 }, { x: 340, h: 120 }, { x: 378, h: 148 },
//   ];
//   return (
//     <svg viewBox="0 0 520 380" className="h-auto w-full" role="img" aria-label="Laptop and phone showing business growth chart">
//       <defs>
//         <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0" stopColor="#F4F2FF" /><stop offset="1" stopColor="#E3EBFF" />
//         </linearGradient>
//         <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0" stopColor="#3B82F6" /><stop offset="1" stopColor="#1D4ED8" />
//         </linearGradient>
//         <linearGradient id="arrow" x1="0" y1="1" x2="1" y2="0">
//           <stop offset="0" stopColor="#F59E0B" /><stop offset="1" stopColor="#EA580C" />
//         </linearGradient>
//         <linearGradient id="phone" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0" stopColor="#FFF7ED" /><stop offset="1" stopColor="#FDBA74" />
//         </linearGradient>
//         <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
//           <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#12305E" floodOpacity="0.25" />
//         </filter>
//       </defs>
//       <ellipse cx="270" cy="170" rx="210" ry="165" fill="#EEF0FF" />
//       <path d="M90 170 C130 40 300 10 400 70" fill="none" stroke="#F59E0B" strokeWidth="2" opacity=".7" />

//       {/* laptop */}
//       <g filter="url(#shadow)">
//         <rect x="88" y="62" width="330" height="214" rx="12" fill="#1E293B" />
//         <rect x="98" y="72" width="310" height="194" rx="6" fill="url(#screen)" />
//         {bars.map((b) => (
//           <rect key={b.x} x={b.x + 4} y={236 - b.h} width="26" height={b.h} rx="2" fill="url(#bar)" />
//         ))}
//         <line x1="136" y1="238" x2="396" y2="238" stroke="#94A3B8" strokeWidth="1.5" />
//         <path d="M130 222 C200 205 280 150 372 92" fill="none" stroke="url(#arrow)" strokeWidth="7" strokeLinecap="round" />
//         <path d="M352 84 L388 78 L376 112 Z" fill="#EA580C" />
//         <path d="M46 296 L460 296 L430 276 L76 276 Z" fill="#CBD5E1" />
//         <rect x="46" y="294" width="414" height="9" rx="4" fill="#94A3B8" />
//       </g>

//       {/* phone */}
//       <g filter="url(#shadow)">
//         <rect x="396" y="108" width="100" height="186" rx="18" fill="#0F172A" />
//         <rect x="402" y="114" width="88" height="174" rx="13" fill="url(#phone)" />
//         <path d="M426 190 l36 -22 v50 z" fill="#F97316" />
//         <rect x="418" y="186" width="14" height="22" rx="3" fill="#EA580C" />
//         <path d="M472 160 l8 -8 M476 176 h12 M470 146 v-8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
//       </g>
//     </svg>
//   );
// }

// function ChipCard({ label, Icon, className = '' }: { label: string; Icon: LucideIcon; className?: string }) {
//   return (
//     <div className={`flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(18,48,94,0.12)] sm:px-4 sm:py-2.5 ${className}`}>
//       <Icon className="h-6 w-6 shrink-0 text-[#F97316] sm:h-7 sm:w-7" strokeWidth={1.75} aria-hidden="true" />
//       <span className="text-[12px] font-semibold leading-tight text-[#12305E] sm:text-[13px]">{label}</span>
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <section id="home" aria-label="Hero" className="relative overflow-hidden bg-gradient-to-br from-white via-[#F5F6FF] to-[#EEF2FF]">
//       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" aria-hidden="true" />
//       <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:px-10 lg:pb-28 lg:pt-14">
//         {/* copy */}
//         <div className="text-center lg:text-left">
//           <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#12305E] sm:text-sm">
//             <span className="h-[3px] w-8 bg-[#F97316]" aria-hidden="true" />
//             Digital Growth Partner
//           </p>
//           <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-[#0F2347] sm:text-5xl xl:text-[3.4rem]">
//             Build Your Digital Presence.
//             <span className="relative mt-1 block text-[#F97316]">
//               Generate More Business.
//               <svg viewBox="0 0 400 12" preserveAspectRatio="none" className="absolute -bottom-1 left-0 hidden h-2.5 w-[88%] sm:block" aria-hidden="true">
//                 <path d="M2 8 C100 0 260 0 398 6" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
//               </svg>
//             </span>
//           </h1>
//           <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg lg:mx-0">
//             Digital marketing, branding, websites and business solutions that help you reach the right audience, attract customers and grow your business.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
//             <a
//               href="#contact"
//               className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 text-base font-bold text-white shadow-[0_10px_24px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 sm:w-auto"
//             >
//               <Send className="h-5 w-5" aria-hidden="true" /> Get in Touch
//             </a>
//             <a
//               href={WHATSAPP_URL}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-[#15803D] bg-white/60 px-8 text-base font-bold text-[#15803D] transition hover:bg-[#15803D] hover:text-white sm:w-auto"
//             >
//               <WhatsAppIcon className="h-6 w-6" /> WhatsApp Us
//             </a>
//           </div>
//         </div>

//         {/* art */}
//         <div>
//           {/* lg+: floating chips around art */}
//           <div className="relative mx-auto hidden aspect-[1.25/1] w-full max-w-[720px] lg:block">
//             <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-[46%]">
//               <HeroArt />
//             </div>
//             {CHIPS.map((c) => (
//               <ChipCard key={c.label} label={c.label} Icon={c.Icon} className={`absolute max-w-[190px] ${c.pos}`} />
//             ))}
//           </div>

//           {/* below lg: art then chip grid */}
//           <div className="lg:hidden">
//             <div className="mx-auto w-full max-w-md sm:max-w-lg">
//               <HeroArt />
//             </div>
//             <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3">
//               {CHIPS.map((c) => (
//                 <ChipCard key={c.label} label={c.label} Icon={c.Icon} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   return (
//     <section id="services" className="relative -mt-14 px-4 sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-[1400px] rounded-t-[2rem] bg-white/95 px-0 pt-2 sm:rounded-t-[3rem]">
//         <div className="flex items-center justify-center gap-4 pt-2">
//           <span className="hidden h-[3px] w-14 bg-[#F97316] sm:block" aria-hidden="true" />
//           <h2 className="text-3xl font-black tracking-tight text-[#0F2347] sm:text-4xl">Our Services</h2>
//           <span className="hidden h-[3px] w-14 bg-[#F97316] sm:block" aria-hidden="true" />
//         </div>
//         <p className="mt-2 text-center text-sm text-slate-700 sm:text-base">
//           End-to-end digital, creative and technology solutions for your business.
//         </p>

//         <div className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
//           {SERVICES.map(({ title, desc, Icon }) => (
//             <article
//               key={title}
//               className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_14px_rgba(18,48,94,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(18,48,94,0.14)]"
//             >
//               <div className="flex items-center gap-3">
//                 <Icon className="h-9 w-9 shrink-0 text-[#F97316]" strokeWidth={1.5} aria-hidden="true" />
//                 <h3 className="text-[15px] font-extrabold leading-tight text-[#0F2347]">{title}</h3>
//               </div>
//               <p className="mt-3 text-[13px] leading-snug text-slate-600">{desc}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Industries() {
//   return (
//     <section id="industries" className="px-4 pt-8 sm:px-6 lg:px-10" aria-label="Industries we work with">
//       <div className="mx-auto flex max-w-[1400px] flex-col gap-4 rounded-3xl bg-[#F1F4FB] p-4 sm:p-5 xl:flex-row xl:items-center">
//         <h2 className="flex shrink-0 items-center gap-3 px-1 text-2xl font-black leading-tight text-[#0F2347] xl:w-[190px]">
//           <span className="h-14 w-1 rounded bg-[#F97316]" aria-hidden="true" />
//           <span>Industries<br className="hidden xl:block" /> We Work With</span>
//         </h2>
//         <ul className="grid flex-1 grid-cols-3 gap-2 min-[480px]:grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
//           {INDUSTRIES.map(({ label, Icon }) => (
//             <li
//               key={label}
//               className="flex min-h-[92px] flex-col items-center justify-center gap-2 rounded-xl bg-white px-1.5 py-3 text-center shadow-[0_4px_12px_rgba(18,48,94,0.06)]"
//             >
//               <Icon className="h-7 w-7 text-[#F97316]" strokeWidth={1.5} aria-hidden="true" />
//               <span className="text-[11px] font-semibold leading-tight text-[#12305E]">{label}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// function TrustBar() {
//   return (
//     <section id="contact" aria-label="Why choose us" className="relative mt-10">
//       <div className="absolute inset-x-0 top-0 h-8 bg-[#F8FAFF]" aria-hidden="true" />
//       <div className="relative rounded-t-[50%_2rem] bg-gradient-to-b from-[#1B3F7A] to-[#0F2A57] px-4 pb-8 pt-12 sm:px-6 lg:px-10">
//         <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 xl:flex-row xl:justify-between">
//           <ul className="grid w-full grid-cols-1 gap-4 min-[520px]:grid-cols-2 xl:flex xl:w-auto xl:items-center xl:gap-0">
//             {TRUST.map(({ label, Icon }, i) => (
//               <li
//                 key={label}
//                 className={`flex items-center gap-3 text-sm font-medium text-white xl:px-6 ${
//                   i > 0 ? 'xl:border-l xl:border-white/25' : 'xl:pl-0'
//                 }`}
//               >
//                 <Icon className="h-9 w-9 shrink-0 text-white/90" strokeWidth={1.4} aria-hidden="true" />
//                 {label}
//               </li>
//             ))}
//           </ul>
//           <a
//             href={WHATSAPP_URL}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] px-8 text-lg font-bold text-white shadow-[0_10px_24px_rgba(249,115,22,0.4)] transition hover:-translate-y-0.5 sm:w-auto"
//           >
//             Talk to Our Team <ArrowRight className="h-5 w-5" aria-hidden="true" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- page ---------- */
// export default function IiiQBetsLanding() {
//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
//       {/* <Header /> */}
//       <main>
//         <Hero />
//         <Services />
//         <Industries />
//       </main>
//       <TrustBar />
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Send,
  Megaphone,
  Search,
  Monitor,
  MousePointer2,
  Video,
  Handshake,
  Target,
  TrendingUp,
  Layers,
  Users,
  Settings,
  ShoppingCart,
  Building2,
  Factory,
  GraduationCap,
  Plus,
  Utensils,
  HardHat,
  Bed,
  Ellipsis,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
  HeartPulse,
  Dumbbell,
  House,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ORANGE = "#ff7900";
const NAVY = "#071943";
const GREEN = "#008f26";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}[] = [
  {
    title: "Digital Marketing",
    description: "Strategy, campaigns and performance marketing.",
    icon: Megaphone,
  },
  {
    title: "SEO",
    description: "Improve search visibility and attract relevant traffic.",
    icon: Search,
  },
  {
    title: "Website Development",
    description: "Corporate, e-commerce, portals and custom web solutions.",
    icon: Monitor,
  },
  {
    title: "UI/UX Design",
    description: "User-focused, intuitive and engaging digital experiences.",
    icon: MousePointer2,
  },
  {
    title: "Branding & Creative Design",
    description: "Logo, brand identity and marketing collaterals.",
    icon: Users,
  },
  {
    title: "Content & Video Creation",
    description: "Social creatives, reels, videos and campaign content.",
    icon: Video,
  },
  {
    title: "Social Media Management",
    description: "End-to-end management across Instagram, Facebook, LinkedIn, YouTube and more.",
    icon: Handshake,
  },
  {
    title: "Paid Ads & Lead Generation",
    description: "Targeted campaigns on Google, Meta, LinkedIn and other platforms.",
    icon: Target,
  },
  {
    title: "WhatsApp Business Automation",
    description: "WhatsApp API setup, automated responses and lead follow-ups.",
    icon: MessageCircle,
    color: GREEN,
  },
  {
    title: "CRM & Business Automation",
    description: "Lead management, customer engagement and workflow automation.",
    icon: Monitor,
  },
  {
    title: "Business Growth Solutions",
    description: "Market reach, customer acquisition and digital opportunities.",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Digital Ecosystem",
    description: "Integrate marketing, digital presence and business tools for long-term growth.",
    icon: Layers,
  },
];

const industries: {
  title: string;
  icon: LucideIcon;
}[] = [
  { title: "Real Estate", icon: House },
  { title: "Health & Wellness", icon: HeartPulse },
  { title: "Yoga & Fitness", icon: Dumbbell },
  { title: "Retail & E-commerce", icon: ShoppingCart },
  { title: "Wholesale & Distribution", icon: Building2 },
  { title: "Manufacturing", icon: Factory },
  { title: "Education & Training", icon: GraduationCap },
  { title: "Healthcare", icon: Plus },
  { title: "Food & Beverage", icon: Utensils },
  { title: "Construction & Infrastructure", icon: HardHat },
  { title: "Hospitality & Travel", icon: Bed },
  { title: "and More", icon: Ellipsis },
];

const benefits: {
  title: string;
  icon: LucideIcon;
}[] = [
  { title: "Strategic & Result-Oriented", icon: Target },
  { title: "Creative + Technology Expertise", icon: Layers },
  { title: "Industry-Focused Approach", icon: Users },
  { title: "Measurable Growth", icon: ChartNoAxesColumnIncreasing },
];

function BrandLogo() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2">
      <div className="flex items-center">
        <span className="relative mr-1 flex items-center gap-[3px]">
          <span className="h-7 w-[7px] -skew-x-12 rounded-sm bg-[#ff7900]" />
          <span className="h-7 w-[7px] -skew-x-12 rounded-sm bg-[#ff7900]" />
          <span className="h-7 w-[7px] -skew-x-12 rounded-sm bg-[#ff7900]" />
        </span>
        <span className="text-[30px] font-black tracking-[-2px] text-[#092b68] sm:text-[34px]">
          QBets
          <sup className="ml-0.5 text-[9px]">®</sup>
        </span>
      </div>
    </a>
  );
}

function GrowthIllustration() {
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[680px] items-center justify-center sm:h-[360px] lg:h-[380px]">
      {/* Background decorative circles */}
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/80 bg-gradient-to-br from-orange-100/60 via-white to-blue-100/70 sm:h-[370px] sm:w-[370px]" />
      <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100 sm:h-[310px] sm:w-[310px]" />

      {/* Growth card */}
      <div className="relative z-10 mt-8 w-[76%] max-w-[470px]">
        {/* Laptop screen */}
        <div className="relative rounded-t-[17px] border-[8px] border-[#14243d] bg-white p-3 shadow-[0_20px_35px_rgba(20,45,85,0.22)] sm:border-[9px] sm:p-5">
          <div className="relative flex h-[145px] items-end justify-around overflow-hidden rounded-t-lg bg-gradient-to-br from-white to-[#edf4ff] px-4 pb-4 sm:h-[190px]">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-blue-200" />
            {[30, 48, 67, 88, 115].map((height, index) => (
              <div
                key={index}
                className="relative z-10 w-[10%] rounded-t-sm bg-gradient-to-t from-[#4286e9] to-[#75aafa]"
                style={{ height: `${height}px` }}
              />
            ))}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 450 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M25 158 C110 148 165 115 220 105 S335 55 405 20"
                stroke="#ff7900"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M376 22 L409 17 L399 50"
                stroke="#ff7900"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative -mx-[12%] h-[14px] rounded-b-[50%] bg-gradient-to-b from-[#b8c8db] via-[#647d9d] to-[#253b5b] shadow-lg sm:h-[18px]">
          <div className="absolute left-[40%] top-0 h-[4px] w-[20%] rounded-b-lg bg-[#d9e2ed]" />
        </div>

        {/* Phone */}
        <div className="absolute -right-[3%] -top-[4px] z-20 h-[160px] w-[72px] rotate-[7deg] rounded-[19px] border-[5px] border-[#111d2b] bg-white p-1.5 shadow-xl sm:-right-[5%] sm:h-[185px] sm:w-[86px]">
          <div className="flex h-full items-center justify-center rounded-[13px] bg-gradient-to-br from-white to-orange-100">
            <Megaphone className="h-12 w-12 text-[#ff7900] sm:h-14 sm:w-14" />
          </div>
          <div className="absolute left-1/2 top-1 h-1 w-6 -translate-x-1/2 rounded-full bg-[#17253a]" />
        </div>
      </div>

      {/* Floating information cards */}
      <div className="absolute left-0 top-[8%] z-20 hidden w-[185px] items-center gap-3 rounded-[20px] border border-white bg-white/95 px-4 py-3 shadow-[0_8px_20px_rgba(24,51,94,0.13)] sm:flex">
        <Target className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Reach the
          <br /> Right Audience
        </span>
      </div>

      <div className="absolute left-[-2%] top-[40%] z-20 hidden w-[165px] items-center gap-3 rounded-[18px] border border-white bg-white/95 px-4 py-3 shadow-lg sm:flex">
        <ChartNoAxesColumnIncreasing className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Increase
          <br /> Enquiries
        </span>
      </div>

      <div className="absolute bottom-[9%] left-[-3%] z-20 hidden w-[185px] items-center gap-3 rounded-[18px] border border-white bg-white/95 px-4 py-3 shadow-lg sm:flex">
        <Users className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Build
          <br /> Brand Value
        </span>
      </div>

      <div className="absolute right-0 top-[8%] z-20 hidden w-[195px] items-center gap-3 rounded-[18px] border border-white bg-white/95 px-4 py-3 shadow-lg sm:flex">
        <Layers className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Strengthen
          <br /> Online Presence
        </span>
      </div>

      <div className="absolute right-[-2%] top-[42%] z-20 hidden w-[190px] items-center gap-3 rounded-[18px] border border-white bg-white/95 px-4 py-3 shadow-lg sm:flex">
        <TrendingUp className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Drive
          <br /> Business Growth
        </span>
      </div>

      <div className="absolute bottom-[8%] right-[-2%] z-20 hidden w-[205px] items-center gap-3 rounded-[18px] border border-white bg-white/95 px-4 py-3 shadow-lg sm:flex">
        <Settings className="h-9 w-9 shrink-0 text-[#ff7900]" />
        <span className="text-[14px] font-bold leading-tight text-[#071943]">
          Automate
          <br /> Customer Engagement
        </span>
      </div>
    </div>
  );
}

export default function IIQBetsLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9fd] font-sans text-[#071943]">
      {/* HEADER */}
      {/* <header className="relative z-50 bg-white/90">
        <div className="mx-auto flex min-h-[66px] max-w-[1440px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
          <div className="flex items-center gap-5">
            <BrandLogo />
            <div className="hidden h-8 w-px bg-slate-400 lg:block" />
            <p className="hidden whitespace-nowrap text-[14px] font-medium text-[#071943] lg:block">
              Digital Marketing&nbsp; | &nbsp;Creative&nbsp; | &nbsp;Technology
            </p>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {["Home", "Services", "Industries", "About Us"].map(
              (item, index) => (
                <a
                  key={item}
                  href={
                    ["#home", "#services", "#industries", "#about"][index]
                  }
                  className={`relative py-2 text-[15px] font-semibold transition-colors hover:text-[#ff7900] ${
                    index === 0
                      ? "text-[#071943] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#ff7900]"
                      : "text-[#111b37]"
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 rounded-full border-[1.5px] border-[#071943] px-6 py-2 text-[15px] font-bold transition hover:bg-[#071943] hover:text-white"
            >
              <Phone size={17} fill="currentColor" />
              Call Us
            </a>
            <a
              href="https://wa.me/"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00a83b] to-[#008b24] px-6 py-2 text-[15px] font-bold text-white shadow-sm transition hover:scale-[1.03]"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-200 p-2 lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white p-5 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["Industries", "#industries"],
                ["About Us", "#about"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-100 py-2 font-semibold"
                >
                  {name}
                </a>
              ))}
              <a
                href="tel:+910000000000"
                className="flex items-center justify-center gap-2 rounded-full border border-[#071943] py-3 font-bold"
              >
                <Phone size={18} /> Call Us
              </a>
              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full bg-green-600 py-3 font-bold text-white"
              >
                <MessageCircle size={19} /> WhatsApp Us
              </a>
            </nav>
          </div>
        )}
      </header> */}

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#fffafa] via-[#f5f7ff] to-[#edf4ff]"
      >
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-3 px-5 pb-8 pt-10 md:px-10 lg:min-h-[340px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-5 lg:py-4">
          <div className="relative z-20">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-7 bg-[#ff7900]" />
              <span className="text-[12px] font-bold tracking-[0.22em] text-[#071943] sm:text-[14px]">
                DIGITAL GROWTH PARTNER
              </span>
            </div>

            <h1 className="max-w-[680px] text-[36px] font-extrabold leading-[1.08] tracking-[-1.8px] text-[#080f2d] sm:text-[46px] lg:text-[48px] xl:text-[50px]">
              Build Your Digital Presence.
              <span className="block text-[#ff5c00]">
                Generate More Business.
              </span>
            </h1>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.5] text-[#111827] sm:text-[18px]">
              Digital marketing, branding, websites and business solutions
              that help you reach the right audience, attract customers
              and grow your business.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff8500] to-[#ff4f00] px-7 py-3 text-[16px] font-bold text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-10 sm:text-[18px]"
              >
                <Send size={21} />
                Get in Touch
              </a>

              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-green-600 bg-white/80 px-6 py-3 text-[16px] font-bold text-green-700 transition hover:bg-green-600 hover:text-white sm:px-9 sm:text-[18px]"
              >
                <MessageCircle size={25} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative">
            <GrowthIllustration />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f9faff] px-4 py-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-5 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden h-[3px] w-16 bg-[#ff7900] sm:block" />
              <h2 className="text-[29px] font-extrabold tracking-[-1px] text-[#081b50] sm:text-[34px]">
                Our Services
              </h2>
              <span className="hidden h-[3px] w-16 bg-[#ff7900] sm:block" />
            </div>
            <p className="mt-1 text-[14px] text-[#071943] sm:text-[16px]">
              End-to-end digital, creative and technology solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex min-h-[118px] items-start gap-3 rounded-[15px] border border-[#d9deea] bg-white/70 px-4 py-3 shadow-[0_3px_8px_rgba(25,45,85,0.06)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-[0_9px_22px_rgba(25,45,85,0.12)] sm:min-h-[123px] sm:px-3"
                >
                  <div
                    className="mt-0.5 shrink-0"
                    style={{ color: service.color || ORANGE }}
                  >
                    <ServiceIcon
                      size={39}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-extrabold leading-[1.15] tracking-[-0.35px] text-[#071943] sm:text-[15px]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-[1.3] text-[#10182c] sm:text-[13px]">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="bg-[#f9faff] px-4 pb-5 pt-3 sm:px-7 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 rounded-[22px] bg-gradient-to-r from-[#edf1fa] to-[#eaf0fa] p-4 sm:p-5 lg:flex-row lg:items-center lg:gap-5 lg:px-7">
          <div className="flex shrink-0 items-center gap-3 lg:w-[205px]">
            <span className="h-[55px] w-[5px] rounded-full bg-[#ff7900]" />
            <h2 className="text-[25px] font-extrabold leading-[1.1] tracking-[-1px] text-[#071943] sm:text-[27px]">
              Industries
              <br />
              We Work With
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12">
            {industries.map((industry) => {
              const IndustryIcon = industry.icon;

              return (
                <a
                  href="#contact"
                  key={industry.title}
                  className="group flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[16px] bg-white/75 px-2 py-3 text-center shadow-[0_3px_8px_rgba(25,45,85,0.04)] transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <IndustryIcon
                    size={29}
                    strokeWidth={2}
                    className="text-[#ff7900] transition-transform group-hover:scale-110"
                  />
                  <span className="text-[11px] font-bold leading-[1.15] text-[#071943] sm:text-[12px]">
                    {industry.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM BRAND STRIP */}
      <section
        id="about"
        className="relative mt-0 overflow-hidden rounded-t-[45%_8%] bg-gradient-to-r from-[#153c70] via-[#082b5c] to-[#092957] px-4 pb-7 pt-10 text-white sm:rounded-t-[50%_12%] sm:px-7 sm:pt-10 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="grid w-full grid-cols-2 gap-y-5 lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <React.Fragment key={benefit.title}>
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <BenefitIcon
                      size={34}
                      strokeWidth={1.7}
                      className="shrink-0 text-white"
                    />
                    <span className="text-[12px] font-medium sm:text-[14px]">
                      {benefit.title}
                    </span>
                  </div>

                  {index !== benefits.length - 1 && (
                    <div className="hidden h-8 w-px bg-white/50 lg:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <a
            id="contact"
            href="mailto:info@iiiqbets.com"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff9000] to-[#ff5800] px-7 py-3.5 text-[16px] font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-orange-500/30 sm:px-9 sm:text-[18px]"
          >
            Talk to Our Team
            <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </main>
  );
}
