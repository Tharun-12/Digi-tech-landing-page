// import { Building2, CheckCircle2 } from 'lucide-react';
// import Reveal from '../components/Reveal';
// import SectionHeading from '../components/SectionHeading';

// const industries = [
//   'Real Estate & Property Development',
//   'Health & Wellness',
//   'Yoga & Fitness',
//   'Retail & E-commerce',
//   'Wholesale & Distribution',
//   'Manufacturing & Industrial',
//   'Education & Training',
//   'Healthcare',
//   'Food & Beverage',
//   'Construction & Infrastructure',
//   'Hospitality & Travel',
//   'Electrical & Home Appliances',
//   'Professional Services',
//   'Technology & IT Services',
//   'Beauty & Personal Care',
//   'Fashion & Lifestyle',
//   'Import & Export',
//   'Logistics & Supply Chain',
// ];

// export default function Industries() {
//   return (
//     <section id="industries" className="section-pad" aria-label="Industries we work with">
//       <div className="container-x">
//         <Reveal>
//           <SectionHeading center eyebrow="::: Industries" title="Industries We Work With" />
//           <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-navy-900/70 sm:text-base">
//             Digital solutions tailored to businesses across different industries.
//           </p>
//         </Reveal>

//         <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {industries.map((item) => (
//             <li
//               key={item}
//               className="flex items-center gap-3 rounded-2xl border border-navy-100/70 bg-white p-4 text-sm font-semibold text-navy-800 shadow-card"
//             >
//               <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
//                 <Building2 className="h-4 w-4" aria-hidden="true" />
//               </span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

import {
  BedDouble, Dumbbell, Factory, GraduationCap, HardHat, HeartPulse, Home,
  MoreHorizontal, PlusCircle, ShoppingCart, UtensilsCrossed, Warehouse, type LucideIcon,
} from 'lucide-react';

const INDUSTRIES: { label: string; Icon: LucideIcon }[] = [
  { label: 'Real Estate', Icon: Home },
  { label: 'Health & Wellness', Icon: HeartPulse },
  { label: 'Yoga & Fitness', Icon: Dumbbell },
  { label: 'Retail & E-commerce', Icon: ShoppingCart },
  { label: 'Wholesale & Distribution', Icon: Warehouse },
  { label: 'Manufacturing', Icon: Factory },
  { label: 'Education & Training', Icon: GraduationCap },
  { label: 'Healthcare', Icon: PlusCircle },
  { label: 'Food & Beverage', Icon: UtensilsCrossed },
  { label: 'Construction & Infrastructure', Icon: HardHat },
  { label: 'Hospitality & Travel', Icon: BedDouble },
  { label: 'and More', Icon: MoreHorizontal },
];

export default function Industries() {
  return (
    // FIX: Added scroll-mt-32 here as well
    <section id="industries" className="scroll-mt-[88px] px-4 pt-8 sm:px-6 lg:px-10" aria-label="Industries we work with">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 rounded-3xl bg-[#F1F4FB]/70 p-4 sm:p-5 xl:flex-row xl:items-center">
        <h2 className="flex shrink-0 items-center gap-3 px-1 text-2xl font-black leading-tight text-[#091C3E] xl:w-[190px]">
          <span className="h-14 w-1 rounded bg-[#E51A22]" aria-hidden="true" />
          <span>Industries<br className="hidden xl:block" /> We Work With</span>
        </h2>
        <ul className="grid flex-1 grid-cols-3 gap-2 min-[480px]:grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
          {INDUSTRIES.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex min-h-[92px] flex-col items-center justify-center gap-2 rounded-xl bg-white/80 px-1.5 py-3 text-center shadow-[0_4px_12px_rgba(16,43,92,0.06)]"
            >
              <Icon className="h-7 w-7 text-[#E51A22]" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[11px] font-semibold leading-tight text-[#102B5C]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}