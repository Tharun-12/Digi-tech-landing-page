// import { useState } from 'react';
// import Reveal from '../components/Reveal';
// import SectionHeading from '../components/SectionHeading';

// const tabs = [
//   {
//     id: 'mission',
//     label: 'Mission',
//     body: "Client satisfaction is our core value at Digitech Tree. Understanding the client needs, and consistently delivering on promises are essential components of ensuring client satisfaction. No matter how big or small a work is, it will be delivered with the highest quality. By emphasizing the importance of client satisfaction, Digitech Tree is likely to build a positive reputation in the market, which can lead to repeat business and referrals.",
//   },
//   {
//     id: 'vision',
//     label: 'Vision',
//     body: 'To be a Digital Marketing Company, Deliver transformational growth through Digital Excellence for 1000 customers by 2028.',
//   },
//   {
//     id: 'values',
//     label: 'Values',
//     body: 'Digitech Tree is built on a foundation of open and honest communication. We believe that honesty is the only way to ensure success for our clients and ourselves is to operate in a fully transparent manner. We encourage clients to share ideas and feedback that can make us a better, stronger, more able company.',
//   },
// ];

// export default function WhoWeAre() {
//   const [active, setActive] = useState('mission');

//   return (
//     <section id="about" className="section-pad">
//       <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
//           <div className="relative">
//             <img
//               src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=940"
//               alt="Digitech Tree team planning digital marketing strategies"
//               loading="lazy"
//               className="w-full rounded-2xl object-cover shadow-card aspect-[4/3]"
//             />
//             <img
//               src="https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=940"
//               alt="Specialists working on digital advertising campaigns"
//               loading="lazy"
//               className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-2xl border-8 border-white object-cover shadow-lift aspect-[4/3] sm:block"
//             />
//             <div className="absolute -top-5 -left-3 rounded-2xl bg-brand-500 px-5 py-4 text-white shadow-lift sm:-left-6">
//               <p className="font-heading text-2xl font-extrabold leading-none">500+</p>
//               <p className="mt-1 text-xs font-medium text-white/90">Happy Customers</p>
//             </div>
//           </div>
//         </Reveal>

//         <Reveal>
//           <SectionHeading eyebrow="::: Who We Are" title="Digitech Tree — Your Digital Partner" />
//           <p className="mt-6 leading-relaxed text-navy-900/80">
//             Digitech Tree is one of the leading Digital Marketing company in Delhi/NCR. We help
//             businesses to achieving their desired results which stand out in the crowd of millions
//             with our comprehensive digital marketing services. We utilize our digital marketing
//             skills and world-class knowledge to help businesses reach their full online potential
//             and ensure steady growth. For this, there is a team of 'self-confessed' and highly
//             dedicated digital marketing experts.
//           </p>

//           <div role="tablist" aria-label="Mission, vision and values" className="mt-8 flex gap-2">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 role="tab"
//                 type="button"
//                 aria-selected={active === tab.id}
//                 aria-controls={`panel-${tab.id}`}
//                 id={`tab-${tab.id}`}
//                 onClick={() => setActive(tab.id)}
//                 className={`min-h-[44px] flex-1 rounded-xl px-4 py-2.5 font-heading text-sm font-bold transition ${
//                   active === tab.id
//                     ? 'bg-navy-800 text-white shadow-card'
//                     : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               role="tabpanel"
//               id={`panel-${tab.id}`}
//               aria-labelledby={`tab-${tab.id}`}
//               hidden={active !== tab.id}
//               className="mt-4 rounded-2xl border border-navy-50 bg-navy-50/40 p-5 text-sm leading-relaxed text-navy-900/80"
//             >
//               {tab.body}
//             </div>
//           ))}
//         </Reveal>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const tabs = [
  {
    id: 'strategy',
    label: 'Strategy',
    body: 'We start by understanding your business, your customers and your goals. From there we build a practical, customized marketing plan shaped around your audience, so every activity has a clear purpose.',
  },
  {
    id: 'creativity',
    label: 'Creativity',
    body: 'From logos and brand identities to social creatives, reels and promotional videos, our creative team gives your business a consistent look and voice across every customer touchpoint.',
  },
  {
    id: 'technology',
    label: 'Technology',
    body: 'Websites, e-commerce platforms, WhatsApp Business automation and CRM integration help you capture enquiries, follow up faster and manage customer relationships without the manual work.',
  },
];

export default function WhoWeAre() {
  const [active, setActive] = useState('strategy');

  return (
    <section id="about" className="section-pad">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Team planning digital marketing strategy"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-card aspect-[4/3]"
            />
            <img
              src="https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Specialists working on laptops in an office"
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-2xl border-8 border-white object-cover shadow-lift aspect-[4/3] sm:block"
            />
            <div className="absolute -top-5 -left-3 rounded-2xl bg-brand-500 px-5 py-4 text-white shadow-lift sm:-left-6">
              <p className="font-heading text-lg font-extrabold leading-tight">Marketing</p>
              <p className="font-heading text-lg font-extrabold leading-tight">Creative</p>
              <p className="font-heading text-lg font-extrabold leading-tight">Technology</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
  
    {/* Eyebrow */}
  <p className="text-xs sm:text-sm font-semibold tracking-[0.2em]  text-brand-500">
    ::: About iiiQbets
  </p>

  {/* Title */}
  <h1 className="mt-3 font-heading font-extrabold text-balance leading-tight text-3xl sm:text-4xl lg:text-[2.75rem] text-navy-800">
    Strategy, Creativity &amp; Technology Under One Roof
  </h1>

          <p className="mt-6 leading-relaxed text-navy-900/80">
            iiiQBets is a digital growth partner for businesses that want to improve visibility, connect with
            the right customers and create new opportunities. From branding and digital marketing to websites
            and automation, our team brings everything together so your marketing, creative and technology
            work as one connected system.
          </p>

          <div role="tablist" aria-label="Strategy, creativity and technology" className="mt-8 flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={active === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`min-h-[44px] flex-1 rounded-xl px-4 py-2.5 font-heading text-sm font-bold transition ${
                  active === tab.id
                    ? 'bg-navy-800 text-white shadow-card'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={active !== tab.id}
              className="mt-4 rounded-2xl border border-navy-50 bg-navy-50/40 p-5 text-sm leading-relaxed text-navy-900/80"
            >
              {tab.body}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}