import React from "react";

const visionPoints = [
  {
    number: "01",
    title: "Your Vision, Our Perspective",
    description:
      "Every business has a unique story and ambition. We take the time to understand yours before shaping ideas and strategies that reflect your goals.",
    keyword: "Understanding",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Team collaborating on business strategy",
  },
  {
    number: "02",
    title: "From Ideas to Meaningful Experiences",
    description:
      "We combine creative thinking, thoughtful design, and technology to transform business ideas into engaging digital experiences.",
    keyword: "Creativity",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    imageAlt: "Creative design workspace with digital tools",
  },
  {
    number: "03",
    title: "Strategy with Purpose",
    description:
      "Every concept, campaign, and digital solution is developed with a clear understanding of your audience, business objectives, and opportunities.",
    keyword: "Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Business analytics and strategy planning",
  },
  {
    number: "04",
    title: "More Than a Service, a Partnership",
    description:
      "We believe in building relationships through collaboration, transparency, and a shared commitment to your business's progress.",
    keyword: "Partnership",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "Partnership handshake and collaboration",
  },
];

const VisionApproach: React.FC = () => {
  return (
     <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E51A22]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-[#102B5C]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E51A22]">
              <span className="h-[2px] w-8 bg-[#E51A22]" />
              Our Philosophy
            </span>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#091C3E] sm:text-5xl lg:text-[58px]">
              We Understand Your Vision.
              <span className="mt-2 block text-[#E51A22]">
                We Bring Ideas to Life.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:ml-auto lg:pb-2">
            <p className="text-base leading-8 text-gray-500 sm:text-lg">
              Great digital experiences begin with understanding. We bring
              together ideas, strategy, creativity, and technology to create
              meaningful solutions that move businesses forward.
            </p>
          </div>
        </div>

        {/* Vision Points */}
        <div className="space-y-6 lg:space-y-8">
          {visionPoints.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#E51A22]/30 hover:shadow-xl hover:shadow-[#E51A22]/5"
              >
                <div
                  className={`grid items-stretch gap-0 lg:grid-cols-2 ${
                    isReversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[340px] lg:[direction:ltr]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102B5C]/70 via-[#102B5C]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#102B5C]/20" />

                    {/* Floating number badge */}
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-xl font-bold text-white backdrop-blur-md sm:left-6 sm:top-6">
                      {item.number}
                    </div>

                    {/* Keyword chip */}
                    <div className="absolute bottom-5 left-5 lg:hidden">
                      <span className="inline-block rounded-full bg-[#E51A22] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        {item.keyword}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 lg:[direction:ltr]">
                    <div className="mb-4 hidden items-center gap-4 lg:flex">
                      <span className="text-5xl font-light tracking-tight text-[#E51A22]">
                        {item.number}
                      </span>
                      <span className="h-px flex-1 bg-gray-200" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {item.keyword}
                      </span>
                    </div>

                    <h3 className="max-w-md text-xl font-bold leading-snug text-[#091C3E] transition-colors duration-300 group-hover:text-[#E51A22] sm:text-2xl lg:text-[26px]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#102B5C] transition-all duration-300 group-hover:border-[#E51A22] group-hover:bg-[#E51A22] group-hover:text-white">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 transition-colors duration-300 group-hover:text-[#102B5C]">
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm font-medium tracking-wide text-[#102B5C]">
            Understanding. Creativity. Strategy. Partnership.
          </p>

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E51A22]">
            Ideas Into Impact
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default VisionApproach;