
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Palette,
//   PenTool,
//   Layers3,
//   Image,
//   Sparkles,
//   ArrowUpRight,
//   Fingerprint,
//   Shapes,
// } from "lucide-react";

// const brandServices = [
//   {
//     number: "01",
//     icon: Fingerprint,
//     title: "Brand Building",
//     description:
//       "Build a distinctive brand identity with a clear vision, positioning, personality, and consistent visual language.",
//   },
//   {
//     number: "02",
//     icon: PenTool,
//     title: "Logo Design",
//     description:
//       "Create memorable logos that capture your brand's personality and make a lasting impression.",
//   },
//   {
//     number: "03",
//     icon: Palette,
//     title: "Brand Kit",
//     description:
//       "Establish a cohesive identity with carefully selected colors, typography, guidelines, and design systems.",
//   },
//   {
//     number: "04",
//     icon: Layers3,
//     title: "Creative Assets",
//     description:
//       "Design branded marketing materials, social media creatives, business stationery, and digital assets.",
//   },
// ];

// const BrandIdentitySection: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden bg-white py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">

//         {/* Header */}
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end mb-20">

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#A52A2A] uppercase">
//               <span className="h-[2px] w-8 bg-[#A52A2A]" />
//               Brand Identity & Design
//             </span>

//             <h2 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#17243B] md:text-5xl lg:text-6xl">
//               Build a Brand That
//               <span className="text-[#A52A2A]"> Stands Apart.</span>
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="lg:pb-2"
//           >
//             <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
//               More than just a logo, we create meaningful brand identities
//               that communicate your vision, establish recognition, and
//               maintain consistency across every customer touchpoint.
//             </p>
//           </motion.div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">

//           {/* Visual Brand Showcase */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#F5F3F0] p-8 md:min-h-[480px] lg:col-span-5"
//           >
//             <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#A52A2A]/5 blur-3xl" />
//             <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#17243B]/10 blur-3xl" />

//             <div className="relative w-full max-w-sm">

//               {/* Brand Identity Sheet */}
//               <div className="rotate-[-5deg] bg-white p-7 shadow-xl md:p-9">
//                 <div className="mb-12 flex items-center justify-between">
//                   <span className="text-xs font-bold tracking-[0.3em] text-[#17243B]">
//                     BRAND IDENTITY
//                   </span>
//                   <Sparkles size={18} className="text-[#A52A2A]" />
//                 </div>

//                 <div className="mb-10 flex h-36 items-center justify-center border border-dashed border-gray-200">
//                   <div className="text-center">
//                     <div className="mb-2 text-5xl font-black tracking-tighter text-[#A52A2A]">
//                       Aa
//                     </div>
//                     <span className="text-[9px] tracking-[0.3em] text-gray-400">
//                       VISUAL IDENTITY
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mb-5 flex gap-3">
//                   <div className="h-12 flex-1 bg-[#17243B]" />
//                   <div className="h-12 flex-1 bg-[#A52A2A]" />
//                   <div className="h-12 flex-1 bg-[#D5BFA7]" />
//                   <div className="h-12 flex-1 bg-[#EAE6E1]" />
//                 </div>

//                 <div className="flex items-center justify-between border-t border-gray-100 pt-4">
//                   <span className="text-[10px] tracking-widest text-gray-400">
//                     COLORS · TYPE · DESIGN
//                   </span>
//                   <span className="text-xs font-bold text-[#17243B]">
//                     01 / 04
//                   </span>
//                 </div>
//               </div>

//               {/* Floating Brand Asset */}
//               <div className="absolute -right-3 -top-7 flex h-20 w-20 rotate-[10deg] items-center justify-center bg-[#A52A2A] text-white shadow-lg md:-right-8">
//                 <div className="text-center">
//                   <Shapes size={25} className="mx-auto mb-1" />
//                   <span className="text-[8px] font-bold tracking-widest">
//                     CREATE
//                   </span>
//                 </div>
//               </div>

//               <div className="absolute -bottom-9 -left-5 flex items-center gap-3 bg-white px-5 py-4 shadow-lg md:-left-10">
//                 <Palette size={21} className="text-[#A52A2A]" />
//                 <div>
//                   <p className="text-xs font-bold text-[#17243B]">
//                     Complete Brand Kit
//                   </p>
//                   <p className="text-[10px] text-gray-400">
//                     Everything in one identity
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Services List */}
//           <div className="lg:col-span-7">
//             <div className="border-t border-gray-200">
//               {brandServices.map((service, index) => {
//                 const Icon = service.icon;

//                 return (
//                   <motion.div
//                     key={service.number}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.5,
//                       delay: index * 0.1,
//                     }}
//                     className="group grid grid-cols-[45px_1fr_35px] gap-4 border-b border-gray-200 py-7 transition-all duration-300 hover:px-3 md:grid-cols-[55px_1fr_45px] md:gap-6"
//                   >
//                     <span className="pt-1 text-sm font-semibold text-gray-400">
//                       {service.number}
//                     </span>

//                     <div>
//                       <div className="mb-3 flex items-center gap-3">
//                         <Icon
//                           size={21}
//                           strokeWidth={1.7}
//                           className="text-[#A52A2A] transition-transform duration-300 group-hover:scale-110"
//                         />

//                         <h3 className="text-xl font-bold text-[#17243B] transition-colors group-hover:text-[#A52A2A] md:text-2xl">
//                           {service.title}
//                         </h3>
//                       </div>

//                       <p className="max-w-lg text-sm leading-7 text-gray-500 md:text-base">
//                         {service.description}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-center">
//                       <ArrowUpRight
//                         size={21}
//                         className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A52A2A]"
//                       />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Bottom CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
//             >
//               <p className="max-w-sm text-sm leading-6 text-gray-500">
//                 From the first sketch to a complete brand ecosystem, we
//                 bring every element together.
//               </p>

//               <a
//                 href="/contact"
//                 className="inline-flex w-fit items-center gap-3 bg-[#17243B] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#A52A2A]"
//               >
//                 Build Your Brand
//                 <ArrowUpRight size={18} />
//               </a>
//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BrandIdentitySection;



"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Layers3,
  FileText,
  Sparkles,
  ArrowUpRight,
  Fingerprint,
  Shapes,
} from "lucide-react";

const brandServices = [
  {
    number: "01",
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "A clear visual identity with consistent colors, typography and style that makes your business easy to recognize.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Logo Design",
    description:
      "Logos that reflect your business personality and work across print, web and social platforms.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Company Profiles & Brochures",
    description:
      "Professionally designed company profiles and brochures that present your business with confidence.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Marketing Collaterals",
    description:
      "Promotional materials, social media creatives and campaign assets that keep your brand consistent everywhere.",
  },
];

const BrandIdentitySection: React.FC<{ onRequestCall: () => void }> = ({ onRequestCall }) => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#EA580C]">
              <span className="h-[2px] w-8 bg-[#EA580C]" />
              Branding &amp; Creative Design
            </span>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#17243B] md:text-5xl lg:text-6xl">
              A Brand Your Customers
              <span className="text-[#EA580C]"> Remember.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              From logos and brand identity to brochures and promotional materials, we help your business look
              professional and consistent at every customer touchpoint.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Visual Brand Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#F5F3F0] p-8 md:min-h-[480px] lg:col-span-5"
          >
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#EA580C]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#17243B]/10 blur-3xl" />

            <div className="relative w-full max-w-sm">
              <div className="rotate-[-5deg] bg-white p-7 shadow-xl md:p-9">
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.3em] text-[#17243B]">BRAND IDENTITY</span>
                  <Sparkles size={18} className="text-[#EA580C]" />
                </div>

                <div className="mb-10 flex h-36 items-center justify-center border border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="mb-2 text-5xl font-black tracking-tighter text-[#EA580C]">Aa</div>
                    <span className="text-[9px] tracking-[0.3em] text-gray-400">VISUAL IDENTITY</span>
                  </div>
                </div>

                <div className="mb-5 flex gap-3">
                  <div className="h-12 flex-1 bg-[#17243B]" />
                  <div className="h-12 flex-1 bg-[#EA580C]" />
                  <div className="h-12 flex-1 bg-[#FDBA74]" />
                  <div className="h-12 flex-1 bg-[#EAE6E1]" />
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[10px] tracking-widest text-gray-400">COLORS · TYPE · DESIGN</span>
                  <span className="text-xs font-bold text-[#17243B]">01 / 04</span>
                </div>
              </div>

              <div className="absolute -right-3 -top-7 flex h-20 w-20 rotate-[10deg] items-center justify-center bg-[#EA580C] text-white shadow-lg md:-right-8">
                <div className="text-center">
                  <Shapes size={25} className="mx-auto mb-1" />
                  <span className="text-[8px] font-bold tracking-widest">CREATE</span>
                </div>
              </div>

              <div className="absolute -bottom-9 -left-5 flex items-center gap-3 bg-white px-5 py-4 shadow-lg md:-left-10">
                <Palette size={21} className="text-[#EA580C]" />
                <div>
                  <p className="text-xs font-bold text-[#17243B]">Creative Design</p>
                  <p className="text-[10px] text-gray-400">Logos, profiles &amp; collaterals</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services List */}
          <div className="lg:col-span-7">
            <div className="border-t border-gray-200">
              {brandServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group grid grid-cols-[45px_1fr_35px] gap-4 border-b border-gray-200 py-7 transition-all duration-300 hover:px-3 md:grid-cols-[55px_1fr_45px] md:gap-6"
                  >
                    <span className="pt-1 text-sm font-semibold text-gray-400">{service.number}</span>

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                          className="text-[#EA580C] transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="text-xl font-bold text-[#17243B] transition-colors group-hover:text-[#EA580C] md:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                      <p className="max-w-lg text-sm leading-7 text-gray-500 md:text-base">{service.description}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <ArrowUpRight
                        size={21}
                        className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EA580C]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-sm text-sm leading-6 text-gray-500">
                Tell us about your business and we will suggest the right creative approach.
              </p>

              <button
                type="button"
                onClick={onRequestCall}
                className="inline-flex w-fit min-h-[44px] items-center gap-3 bg-[#17243B] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#EA580C]"
              >
                Discuss Your Branding
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentitySection;