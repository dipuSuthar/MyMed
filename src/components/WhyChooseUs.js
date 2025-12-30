"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faHistory,
  faAward,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Medical Team",
      desc: "Our specialists bring decades of collective wisdom from top-tier global institutions.",
      icon: faUserDoctor,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "15+ Years of Trust",
      desc: "A proven history of delivering pharmaceutical excellence and reliable lab solutions.",
      icon: faHistory,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Unmatched Track Record",
      desc: "Maintaining 99.9% purity standards across all medical grade chemical distributions.",
      icon: faAward,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Advanced Research",
      desc: "Supporting high-level clinical trials with industry-standard target formulations.",
      icon: faGraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Enhanced Image with Decorative Elements */}
        {/* Removed fixed order for mobile to keep text first, or keep order-2 for image bottom */}
        <div className="w-full lg:flex-1 relative order-2 lg:order-1 group">
          {/* Decorative Ring - Hidden on smallest mobile if causing horizontal scroll */}
          <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-[2.5rem] animate-[spin_20s_linear_infinite] pointer-events-none hidden sm:block" />

          {/* Image Container: Uses aspect ratio instead of fixed width */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-square w-full">
            <Image
              src="/assets/whyChooseUs/why-choose-us.png"
              alt="Our medical professional team"
              fill // Use fill instead of fixed width/height
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Experience Badge - Responsive text size */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-white/20">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 leading-none">
                15+
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-tighter">
                Years Exp.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Modern Grid Cards */}
        <div className="w-full lg:flex-1 order-1 lg:order-2">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Our Competitive Edge
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Why Industry Leaders Trust Us
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We don't just supply chemicals; we provide the foundation for
              medical breakthroughs through rigorous quality control and
              professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`${reason.bg} ${reason.color} w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-colors group-hover:bg-blue-600 group-hover:text-white`}
                >
                  <FontAwesomeIcon
                    icon={reason.icon}
                    className="text-lg sm:text-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
