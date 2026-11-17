import { ArrowUpRight, CalendarDays, MessageSquare, UserRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const news = [
  {
    date: '15 Nov',
    title: 'Top Digital Marketing Agency',
    excerpt:
      '"Digitech Tree is a top digital marketing agency based out of New Delhi, and as part of realizing its targets over the next few years, has been hiring fresh talent at a staggering pace…"',
  },
  {
    date: '12 Nov',
    title: 'Most Trusted Digital Marketing Company',
    excerpt:
      '"Digitech Tree, one of the most trusted digital marketing company in Ghaziabad, Delhi/NCR, released its Digital Report Card for 2025, revealing that it delivered a phenomenal growth of 119% in web traffic, on average, to its customers…"',
  },
  {
    date: '29 Oct',
    title: 'Digital Marketing Agency for the Real Estate Industry',
    excerpt:
      '"Delhi / NCR In their latest trends report for the Real Estate, Digitech Tree, the leading digital marketing agency for the Real Estate Industry, has analyzed Delhi/NCR online searches to help businesses understand changing consumer behaviour and position themselves for growth…"',
  },
];

export default function BlogNews() {
  return (
    <section className="section-pad" aria-label="Blog and news">
      <div className="container-x">
        <Reveal>
          <SectionHeading center eyebrow="::: From Our Desk" title="Latest Blog & News" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/70 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <img
                src="https://images.pexels.com/photos/8154578/pexels-photo-8154578.jpeg?auto=compress&cs=tinysrgb&w=940"
                alt="Team collaborating on an email marketing campaign"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-navy-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-brand-500" aria-hidden="true" />
                    08 Nov
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <UserRound className="h-4 w-4 text-brand-500" aria-hidden="true" />
                    Digitech Tree
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-brand-500" aria-hidden="true" />
                    7 comments
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy-800 sm:text-2xl">
                  Email Marketing Platforms for Small Businesses
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-900/70">
                  If we talk about the most effective way to engage your audience and strengthen
                  your brand, email marketing stands at the top of the list. It is one of the most
                  powerful and cost-efficient methods to attract both new and returning customers
                  to your brand's products and services.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-bold uppercase tracking-wide text-brand-500 transition hover:gap-2"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-1 gap-5 rounded-2xl border border-navy-100/70 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift sm:p-6"
                >
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-navy-800 text-center font-heading text-white">
                    <span>
                      <span className="block text-lg font-extrabold leading-none">
                        {item.date.split(' ')[0]}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-medium uppercase text-navy-200">
                        {item.date.split(' ')[1]}
                      </span>
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy-800 transition group-hover:text-brand-500 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
