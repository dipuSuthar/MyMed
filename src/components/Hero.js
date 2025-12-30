"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShieldHalved, // Use this for "Safe & Certified"
  faMicroscope,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32 px-6 lg:px-16">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6">
            {/* <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" /> */}
            {/* <span className="text-blue-700 text-sm font-bold uppercase tracking-wider">
              ISO 90 Certified
            </span> 
          </div> */}

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Chemical Solutions <br />
            <span className="text-blue-600">Redefining Excellence</span>
          </h1>

          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            Engineered for precision. Trusted by leading medical and industrial
            labs worldwide to deliver safety, stability, and innovation in every
            drop.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-3"
            >
              Get Started
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/products"
              className="px-8 py-4 text-slate-700 font-semibold hover:text-blue-600 transition-colors"
            >
              View Catalog
            </Link>
          </div>

          {/* Mini Trust Stats */}
          {/* Mini Trust Stats */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              {/* Swapped faShieldMedical for faShieldHalved */}
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-blue-600 h-5 w-5"
              />
              <span className="text-slate-600 text-sm font-medium">
                Safe & Certified
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faMicroscope}
                className="text-blue-600 h-5 w-5"
              />
              <span className="text-slate-600 text-sm font-medium">
                Lab Tested
              </span>
            </div>
          </div>
        </div>

        {/* Right Image with Modern Floating Effect */}
        <div className="flex-1 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />

          <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <Image
              src="/assets/hero/banner.png"
              alt="Medical laboratory equipment"
              width={600}
              height={500}
              className="rounded-[2rem] object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Card Element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-bounce-slow">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-xl">99%</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-tighter">
                Purity Rate
              </p>
              <p className="text-xs text-slate-500">Guaranteed quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
