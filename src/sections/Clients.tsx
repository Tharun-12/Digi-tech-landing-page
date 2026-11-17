import Reveal from '../components/Reveal';

const clients = [
  'Eldeco', 'M3M', 'Express Enclave', '3Rth', 'Brio Touch', 'Creotek',
  'Moti Mahal', 'Odeon', 'GDF', 'Express Builders', 'Godrej Properties', 'Irish',
  'Aayushman Clinic', 'Tech Explica', 'Fortis', 'ATS', 'DLF', 'Gulshan Homz',
  'L&T Realty', 'Mahagun', 'Omaxe', 'Shapoorji Pallonji', 'Sobha Realty', 'T&T',
];

function LogoChip({ name }: { name: string }) {
  const gold = name === 'Odeon';
  return (
    <span
      className={`mx-3 inline-flex shrink-0 items-center rounded-xl border px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider whitespace-nowrap ${
        gold
          ? 'border-gold/40 bg-gold/10 text-gold'
          : 'border-white/10 bg-white/5 text-navy-100'
      }`}
    >
      {name}
    </span>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
        }}
      >
        {doubled.map((name, i) => (
          <LogoChip key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative overflow-hidden" aria-label="Our clients">
      <img
        src="https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/90" aria-hidden="true" />
      <div className="container-x relative section-pad">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            ::: Our Clients
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Who we work with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-navy-100">
            These are our happy, satisfied &amp; thrilled clients. Wanna be happy? Choose Us!
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 space-y-2">
            <MarqueeRow items={clients.slice(0, 12)} />
            <MarqueeRow items={clients.slice(12)} reverse />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
