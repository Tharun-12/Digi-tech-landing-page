// import { CheckCircle2 } from 'lucide-react';
// import Reveal from '../components/Reveal';
// import SectionHeading from '../components/SectionHeading';

// const points = [
//   'Proven Track Record',
//   'Transparent Communication',
//   'Creative and Stunning Designs',
//   'Provide voice to make your brand shine',
//   'Mobile & SEO friendly website',
//   'Responsive Design',
//   'Customization and Personalization Solutions',
//   'Timely Delivery',
//   'Cost-Effective Solutions',
//   'We educate to our clients',
//   '24/7 Availability',
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="section-pad bg-navy-50/50" aria-label="Why choose us">
//       <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <Reveal>
//           <SectionHeading
//             eyebrow="::: Why Choose Us"
//             title="Why Digitech Tree is the best Digital Marketing Company for your business"
//           />
//           <p className="mt-6 leading-relaxed text-navy-900/80">
//             We live DIGITAL, we breathe DIGITAL and crazy about everything that is 'DIGITAL'. We
//             promise customers a vision to stay ahead while assuring them market growth. Our
//             goal-oriented approach focused on generating genuine leads, optimizing conversion, and
//             increasing search visibility is in line with best practices in the industry. These
//             strategies are not only attracting potential customers but also ensuring that
//             businesses can capitalize on those opportunities for sustained growth. We offer
//             high-quality services at affordable prices and use latest trends and techniques.
//           </p>

//           <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
//             {points.map((point) => (
//               <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-navy-900/85">
//                 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </Reveal>

//         <Reveal delay={120} className="relative">
//           <span
//             aria-hidden="true"
//             className="absolute left-0 top-0 hidden h-full w-10 items-center justify-center rounded-l-2xl bg-navy-800 font-heading text-[11px] font-bold uppercase tracking-[0.35em] text-white lg:flex"
//             style={{ writingMode: 'vertical-rl' }}
//           >
//             Why Choose Us
//           </span>
//           <img
//             src="https://images.pexels.com/photos/8837507/pexels-photo-8837507.jpeg?auto=compress&cs=tinysrgb&w=940"
//             alt="Marketing strategists reviewing campaign performance data"
//             loading="lazy"
//             className="ml-0 aspect-[4/5] w-full rounded-2xl object-cover shadow-lift lg:ml-12"
//           />
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import { CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const points = [
  'Customized strategies for your business',
  'Integrated marketing and technology expertise',
  'Industry-focused solutions',
  'Dedicated execution and ongoing support',
  'Measurable marketing activities and reporting',
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy-50/50" aria-label="Why iiiQBets">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="::: Why iiiQBets" title="Why iiiQBets? Strategy, Creativity & Technology Under One Roof." />
          <p className="mt-6 leading-relaxed text-navy-900/80">
            Instead of managing separate agencies for marketing, design and technology, you work with one team
            that connects them. That means a consistent brand, a website built to capture enquiries, and
            marketing activity you can actually track.
          </p>

          <ul className="mt-8 grid gap-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-navy-900/85 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-10 items-center justify-center rounded-l-2xl bg-navy-800 font-heading text-[11px] font-bold uppercase tracking-[0.35em] text-white lg:flex"
            style={{ writingMode: 'vertical-rl' }}
          >
            Why iiiQBets
          </span>
          <img
            src="https://images.pexels.com/photos/8837507/pexels-photo-8837507.jpeg?auto=compress&cs=tinysrgb&w=940"
            alt="Team reviewing marketing performance reports"
            loading="lazy"
            className="ml-0 aspect-[4/5] w-full rounded-2xl object-cover shadow-lift lg:ml-12"
          />
        </Reveal>
      </div>
    </section>
  );
}