// import { ArrowUpRight, Megaphone, Search, Share2, Target } from 'lucide-react';
// import Reveal from '../components/Reveal';

// const cards = [
//   { title: 'Digital Marketing', Icon: Megaphone },
//   { title: 'SEO Services', Icon: Search },
//   { title: 'SMO Services', Icon: Share2 },
//   { title: 'PPC Services', Icon: Target },
// ];

// export default function QuickLinks() {
//   return (
//     <section aria-label="Quick service links" className="relative z-10 -mt-14 sm:-mt-16">
//       <div className="container-x">
//         <Reveal>
//           <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
//             <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy-300">
//               ::: Digitech Tree
//             </p>
//             <h2 className="mx-auto mt-2 max-w-3xl text-center font-heading text-2xl font-extrabold text-navy-800 text-balance sm:text-3xl">
//               Result Driven Digital Marketing Company in Ghaziabad
//             </h2>
//             <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {cards.map(({ title, Icon }) => (
//                 <a
//                   key={title}
//                   href="#services"
//                   className="group rounded-2xl border border-navy-50 bg-navy-50/40 p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50/50 hover:shadow-card"
//                 >
//                   <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white transition group-hover:bg-brand-500">
//                     <Icon className="h-6 w-6" aria-hidden="true" />
//                   </span>
//                   <h3 className="mt-4 font-heading text-base font-bold text-navy-800">{title}</h3>
//                   <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
//                     Read more
//                     <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import { ArrowUpRight, Globe2, Megaphone, Palette, Search } from 'lucide-react';
import Reveal from '../components/Reveal';

const cards = [
  { title: 'Digital Marketing', Icon: Megaphone },
  { title: 'SEO & Search Visibility', Icon: Search },
  { title: 'Website Design & Development', Icon: Globe2 },
  { title: 'Branding & Creative Design', Icon: Palette },
];

export default function QuickLinks() {
  return (
    <section aria-label="Quick service links" className="relative z-10 -mt-14 sm:-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy-300">
              ::: iiiQBets
            </p>
            <h2 className="mx-auto mt-2 max-w-3xl text-center font-heading text-2xl font-extrabold text-navy-800 text-balance sm:text-3xl">
              Marketing, Creative &amp; Technology Solutions for Your Business
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map(({ title, Icon }) => (
                <a
                  key={title}
                  href="#services"
                  className="group rounded-2xl border border-navy-50 bg-navy-50/40 p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50/50 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white transition group-hover:bg-brand-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-navy-800">{title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}