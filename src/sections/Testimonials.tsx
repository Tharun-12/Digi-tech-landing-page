// import { BadgeCheck, Quote, Star, ThumbsUp, UserRound } from 'lucide-react';
// import Carousel from '../components/Carousel';
// import Reveal from '../components/Reveal';
// import SectionHeading from '../components/SectionHeading';

// const testimonials = [
//   {
//     quote:
//       'Jai has been great to work with! He is easy to contact, is always very timely & professional! I have used him for several dealing with website development, SEO and SMO services. I recommend his company if you are looking for someone to design a good website and Digital Marketing for you as well manage it on the back end and do a good.',
//     name: 'SUMIT',
//     company: 'Tech Access',
//   },
//   {
//     quote:
//       "I was searching for a reliable Digital Marketing agency to complete my new business website. My earlier experience with a Digital agency in India was extremely bitter. But Digitech Tree and Sam reversed all that bitter experience with their great and friendly service. Now they're working on my SEO since 5 months. Great Guys!",
//     name: 'SCOTT',
//     company: 'Arizan',
//   },
// ];

// function TestimonialCard({
//   quote,
//   name,
//   company,
// }: {
//   quote: string;
//   name: string;
//   company: string;
// }) {
//   return (
//     <figure className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border border-navy-100/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift sm:p-8">
//       <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-brand-400 to-gold" aria-hidden="true" />
//       <div className="flex items-center justify-between gap-4">
//         <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-500">
//           <Quote className="h-6 w-6" aria-hidden="true" />
//         </span>
//         <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
//           ))}
//         </span>
//       </div>
//       <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-900/80 sm:text-base">
//         “{quote}”
//       </blockquote>
//       <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-navy-50 pt-5">
//         <div className="flex items-center gap-3">
//           <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-navy-800 text-white">
//             <UserRound className="h-5 w-5" />
//           </span>
//           <span>
//             <span className="flex items-center gap-1 font-heading text-sm font-bold text-navy-800">
//               {name}
//               <BadgeCheck className="h-4 w-4 text-brand-500" aria-label="Verified client" />
//             </span>
//             <span className="block text-xs font-medium text-navy-600">{company}</span>
//           </span>
//         </div>
//         <span className="hidden items-center gap-1 text-xs font-semibold text-emerald-700 sm:inline-flex">
//           <ThumbsUp className="h-4 w-4" aria-hidden="true" />
//           Verified review
//         </span>
//       </figcaption>
//     </figure>
//   );
// }

// export default function Testimonials() {
//   return (
//     <section className="section-pad bg-navy-50/50" aria-label="Testimonials">
//       <div className="container-x">
//         <Reveal>
//           <SectionHeading
//             center
//             eyebrow="::: Our Testimonials"
//             title="What They're Talking About Company"
//           />
//           <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-navy-900/70 sm:text-base">
//             Real partnerships. Real growth. See why businesses choose Digitech Tree for websites,
//             SEO and digital marketing that keeps moving forward.
//           </p>
//         </Reveal>

//         <Reveal delay={120}>
//           <div className="mx-auto mt-10 max-w-6xl">
//             <Carousel
//               ariaLabel="Client testimonials"
//               autoplayMs={7000}
//               slides={[
//                 <div key="desktop-pair" className="grid gap-6 sm:grid-cols-2">
//                   {testimonials.map((testimonial) => (
//                     <TestimonialCard key={testimonial.name} {...testimonial} />
//                   ))}
//                 </div>,
//                 ...testimonials.map((testimonial) => (
//                   <div key={testimonial.name} className="mx-auto max-w-2xl">
//                     <TestimonialCard {...testimonial} />
//                   </div>
//                 )),
//               ]}
//             />
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import { BarChart3, Handshake, Headphones, Lightbulb, Quote } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

// NOTE: no client reviews were supplied, so this section describes what clients can expect.
// When you have real, approved testimonials, swap this array for { quote, name, company } cards.
const commitments = [
  {
    title: 'A plan built around you',
    text: 'A practical marketing plan shaped around your business and your audience, not a one-size-fits-all package.',
    Icon: Lightbulb,
  },
  {
    title: 'One connected team',
    text: 'Marketing, creative and technology handled together, so your brand, website and campaigns stay consistent.',
    Icon: Handshake,
  },
  {
    title: 'Clear reporting',
    text: 'Measurable marketing activities with reporting that shows what is working and what to improve next.',
    Icon: BarChart3,
  },
  {
    title: 'Ongoing support',
    text: 'Dedicated execution and continued support after launch, so you always know who to talk to.',
    Icon: Headphones,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-navy-50/50" aria-label="What to expect">
      <div className="container-x">
        <Reveal>
          <SectionHeading center eyebrow="::: Our Commitment" title="What You Can Expect When You Work With Us" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-navy-900/70 sm:text-base">
            Whether you need a new website, a marketing plan or WhatsApp automation, this is how we approach
            every engagement.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2">
          {commitments.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-brand-400 to-gold" aria-hidden="true" />
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <Quote className="h-6 w-6 text-navy-100" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/80 sm:text-base">{text}</p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}