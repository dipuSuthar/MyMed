"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faFlask,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 px-6 lg:px-16 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-white text-xl"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">MyMed</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the global supply chain in high-purity medical reagents
              and industrial chemical solutions since 2010. Excellence in every
              drop.
            </p>
            {/* Certifications Dummy Icons */}
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="border border-slate-700 p-1 rounded text-[10px] font-bold">
                ISO 9001
              </div>
              <div className="border border-slate-700 p-1 rounded text-[10px] font-bold">
                WHO-GMP
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Resources
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Safety Data Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Bulk Order Inquiry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Global Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Research Lab
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Compliance & Ethics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Global Headquarters
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-blue-500"
                />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                <span> 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                <span>contact@dummy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-slate-800 mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {["linkedin", "instagram", "facebook", "twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all group"
              >
                <Image
                  src={`/assets/icons/${social}.png`}
                  alt={social}
                  width={18}
                  height={18}
                  className="opacity-60 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} MyMed. Built for Portfolio Showcase.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FontAwesomeIcon icon={faGlobe} />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
