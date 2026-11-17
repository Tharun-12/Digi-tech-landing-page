import { Building2, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const industries = [
  'Real Estate & Property Development',
  'Health & Wellness',
  'Yoga & Fitness',
  'Retail & E-commerce',
  'Wholesale & Distribution',
  'Manufacturing & Industrial',
  'Education & Training',
  'Healthcare',
  'Food & Beverage',
  'Construction & Infrastructure',
  'Hospitality & Travel',
  'Electrical & Home Appliances',
  'Professional Services',
  'Technology & IT Services',
  'Beauty & Personal Care',
  'Fashion & Lifestyle',
  'Import & Export',
  'Logistics & Supply Chain',
];

export default function Industries() {
  return (
    <section id="industries" className="section-pad" aria-label="Industries we work with">
      <div className="container-x">
        <Reveal>
          <SectionHeading center eyebrow="::: Industries" title="Industries We Work With" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-navy-900/70 sm:text-base">
            Digital solutions tailored to businesses across different industries.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-navy-100/70 bg-white p-4 text-sm font-semibold text-navy-800 shadow-card"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                <Building2 className="h-4 w-4" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}