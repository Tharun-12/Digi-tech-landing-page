import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { value: 600, suffix: '+', label: 'Projects Completed' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 4, suffix: '+', label: 'Rating' },
];

export default function Stats() {
  return (
    <section className="section-pad" aria-label="Company statistics">
      <div className="container-x">
        <Reveal>
          <SectionHeading center eyebrow="::: Track Record" title="Numbers Do Speak a Lot…" />
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-navy-900/75">
            Digitech Tree is one of India's best digital marketing service provider company. Having
            10+ years of experience proves that we have a professional and great handling team who
            has nailed the power of discovering, planning, and executing. With the experience of
            working for over 200 companies worldwide, we have achieved the confidence to take care
            of marketing strategies for your company. Working on social media or PPC management,
            web designing services.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-2xl border border-navy-100/70 bg-navy-50/40 p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <p className="font-heading text-3xl font-extrabold text-navy-800 sm:text-4xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-navy-600">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
