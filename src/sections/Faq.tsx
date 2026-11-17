import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const faqs = [
  {
    q: 'What does a Digital Marketing Agency Do?',
    a: 'A digital marketing agency helps businesses promote their products, services, or brand online using a variety of strategies and tools. These agencies specialize in creating and implementing marketing campaigns to increase visibility, drive traffic, and generate leads or sales. They drive result oriented marketing strategies for clients by focusing on delivering ROI using their digital skills and technologies.',
  },
  {
    q: 'How do you help to solve my Marketing Problem?',
    a: 'We start with a deep-dive audit of your current online presence, competitors and audience. Based on the findings, we build a tailored strategy across SEO, paid ads, social media and content — then measure, test and optimize every month until the numbers move in the right direction.',
  },
  {
    q: 'How much do you charge for Digital Marketing?',
    a: 'Pricing depends on your goals, market competition and the channels involved. We offer flexible monthly packages for SEO, SMO, PPC and website development — after a free consultation we recommend the most cost-effective plan for your budget.',
  },
  {
    q: 'Would my business get benefit from Digital Marketing?',
    a: 'Yes. Whether you run a local clinic, a real estate firm or an e-commerce store, digital marketing brings your business in front of people actively searching for your services. Our clients typically see more qualified enquiries, better brand recall and steady revenue growth.',
  },
  {
    q: 'How can start Digital Marketing service?',
    a: 'Simply call us, WhatsApp us or fill any form on this page. We schedule a free strategy call, understand your business, and share a proposal with deliverables and timelines. Onboarding usually takes less than a week.',
  },
  {
    q: 'Why choose Digitech Tree as your Digital Marketing Agency?',
    a: '10+ years of experience, 600+ completed projects and 500+ happy clients across Delhi/NCR. We combine transparent communication, proven strategies and 24/7 availability — you always know exactly where your budget goes and what results it delivers.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad" aria-label="Frequently asked questions">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="::: FAQ's" title="Frequently Ask Questions" />

          <div className="mt-8 space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen ? 'border-brand-200 bg-brand-50/40 shadow-card' : 'border-navy-100/70 bg-white'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-sm font-bold text-navy-800 sm:text-base"
                    >
                      {faq.q}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-navy-900/75">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <img
            src="https://images.pexels.com/photos/5668776/pexels-photo-5668776.jpeg?auto=compress&cs=tinysrgb&w=940"
            alt="Consultant answering client questions during a strategy session"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy-800 px-6 py-5 text-white shadow-lift sm:left-10">
            <p className="font-heading text-2xl font-extrabold">Still have questions?</p>
            <p className="mt-1 text-sm text-navy-100">
              Call us at{' '}
              <a href="tel:+919717212955" className="font-bold text-gold underline-offset-4 hover:underline">
                +91-9717212955
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
