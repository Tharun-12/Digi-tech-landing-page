import { ArrowDown, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Workshops',
    items: ['Business Analysis', 'Campaign Objective', 'Preparing Proposal', 'Deciding Deliverables'],
  },
  {
    num: '02',
    title: 'Planning',
    items: ['Industry Research', 'Competitor Research', 'Selecting Marketing Channels', 'Strategy Development'],
  },
  {
    num: '03',
    title: 'A/B Testing',
    items: ['Experimenting with Ads', 'Experimenting with Content', 'Testing SEO Techniques', 'Analyzing Audience Behavior'],
  },
  {
    num: '04',
    title: 'Execution',
    items: ['Creating Campaign', 'Content Production', 'Strategy Optimization', 'Analysis'],
  },
];

export default function Process() {
  return (
    <section className="section-pad" aria-label="Our process">
      <div className="container-x">
        <Reveal>
          <SectionHeading center eyebrow="::: How We Work" title="Our Digital Marketing Process" />
        </Reveal>

        <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <li key={step.num} className="relative">
              <Reveal delay={i * 120} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-navy-100/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 font-heading text-lg font-extrabold text-white">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-navy-800">{step.title}</h3>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-dashed border-navy-200 pt-5 text-sm text-navy-900/75">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {i < steps.length - 1 && (
                  <>
                    <ArrowRight
                      className="absolute -right-[1.15rem] top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-500 lg:block"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="absolute left-1/2 -bottom-8 h-6 w-6 -translate-x-1/2 text-brand-500 lg:hidden"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
