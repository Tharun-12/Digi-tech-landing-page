import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Mail,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Target,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    title: 'Digital Marketing Services',
    desc: 'Promoting brands to connect with potential customers using the internet and other forms of digital communication.',
    Icon: Megaphone,
  },
  {
    title: 'Search Engine Optimization (SEO)',
    desc: "Improve website's visibility in search engine results, attract more organic traffic, and enhance the overall online presence of your brand.",
    Icon: Search,
  },
  {
    title: 'Social Media Optimization (SMO)',
    desc: 'Promote your brand on digital platforms like Instagram, Facebook, LinkedIn, and others to increase your brand visibility and build brand loyalty.',
    Icon: Share2,
  },
  {
    title: 'Pay Per Click Management (PPC)',
    desc: 'Generating high-quality leads through optimized and strategic campaigns on Google, Facebook, and Instagram requires careful planning, effective execution.',
    Icon: Target,
  },
  {
    title: 'Email Marketing',
    desc: 'Communicate directly with audience, save valuable time through automated processes and boost your business with advanced email marketing.',
    Icon: Mail,
  },
  {
    title: 'Content Marketing',
    desc: 'Creating engaging and informative content is essential for connecting with potential customers and showcasing the value of your business.',
    Icon: PenLine,
  },
  {
    title: 'Graphic Design',
    desc: 'Recognize your brand with our innovative graphic design services; help you establish a memorable online presence and ensure that it stands out.',
    Icon: Palette,
  },
  {
    title: 'Website Design',
    desc: 'At Digitech Tree, we are not just a team of specialists; we are passionate architects of digital success. We take the time to understand your business.',
    Icon: BarChart3,
  },
  {
    title: 'Website Development',
    desc: 'Optimize your website performance with our tailor-made solutions. We create SEO-friendly websites and use the latest technologies to create quality websites.',
    Icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-navy-50/50">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            eyebrow="::: Our Services"
            title="What Services we provide for your Business"
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon }) => (
            <Reveal key={title} className="h-full">
              <article className="group flex h-[320px] flex-col rounded-2xl border border-navy-100/70 bg-white p-5 shadow-card transition hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-800 text-white transition group-hover:bg-brand-500">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="font-heading text-lg font-bold text-navy-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{desc}</p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-500 transition group-hover:gap-2"
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
