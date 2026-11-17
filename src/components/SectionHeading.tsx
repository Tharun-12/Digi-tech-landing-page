export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p
        className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-brand-500 ${
          center ? 'text-center' : ''
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading font-extrabold text-balance leading-tight text-3xl sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      <span className={`mt-5 block h-1.5 w-16 rounded-full bg-brand-500 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
