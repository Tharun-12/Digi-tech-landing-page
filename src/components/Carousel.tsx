import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Carousel({
  slides,
  autoplayMs = 6000,
  className = '',
  ariaLabel,
}: {
  slides: React.ReactNode[];
  autoplayMs?: number;
  className?: string;
  ariaLabel: string;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [paused, count, autoplayMs]);

  const goTo = (i: number) => setCurrent((i + count) % count);

  const onTouchStart = (e: React.TouchEvent) => {
    (e.currentTarget as HTMLElement).dataset.startX = String(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const el = e.currentTarget as HTMLElement;
    const startX = Number(el.dataset.startX || '0');
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 48) goTo(current + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={i === current ? 'block' : 'hidden'}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${count}`}
            aria-hidden={i !== current}
          >
            {slide}
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-navy-800 shadow-card transition hover:scale-105 hover:bg-white sm:-left-2 sm:h-11 sm:w-11"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-navy-800 shadow-card transition hover:scale-105 hover:bg-white sm:-right-2 sm:h-11 sm:w-11"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-brand-500' : 'w-2.5 bg-navy-200 hover:bg-navy-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
