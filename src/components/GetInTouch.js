"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <section className="relative py-24 px-6 lg:px-16 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-blue-600">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl">
        <h2 className="text-white text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to Elevate Your <br className="hidden md:block" />
          <span className="text-cyan-300">Medical Standards?</span>
        </h2>

        <p className="text-blue-50 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Whether you need bulk medical supplies or custom chemical
          formulations, our team of experts is ready to assist you with
          industry-leading precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 transition-all flex items-center gap-3"
          >
            Contact Us Now
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <div className="flex items-center gap-8 text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-cyan-300 w-4 h-4"
              />
              <span>12345678</span>
            </div>
          </div>
        </div>

        {/* Floating Support Tag */}
        <div className="mt-12 inline-block bg-blue-700/50 border border-white/10 px-6 py-2 rounded-full">
          <p className="text-blue-100 text-sm">
            🚀 Average response time:{" "}
            <span className="text-white font-bold text-base">
              Under 24 hours
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
