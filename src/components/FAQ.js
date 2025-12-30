"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    q: "What types of medical solutions do you offer?",
    a: "We provide a wide range of laboratory-grade chemicals, antiseptic solutions, and specialized reagents designed for clinical and industrial healthcare applications.",
  },
  {
    q: "How can I request a product quotation?",
    a: "Simply click the 'Get in Touch' button or visit our contact page. Our team typically responds with a detailed digital quote within 24 business hours.",
  },
  {
    q: "What are your standard shipping protocols?",
    a: "We utilize climate-controlled logistics to ensure all medical products maintain their integrity. Shipping times vary by region but generally range from 3-5 business days.",
  },
  {
    q: "Are Material Safety Data Sheets (MSDS) provided?",
    a: "Yes, full documentation including MSDS and Certificates of Analysis (CoA) are included with every shipment and can be accessed digitally through our portal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (number) => {
    setOpenIndex(openIndex === number ? null : number);
  };

  return (
    <section className="py-24 px-6 lg:px-16 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Support Center
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 mt-4">
            Everything you need to know about our medical products and delivery
            processes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? "bg-white border-blue-200 shadow-md"
                    : "bg-white/50 border-slate-200 hover:border-blue-300"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${
                      isOpen ? "text-blue-600" : "text-slate-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={isOpen ? faMinus : faPlus}
                      className="text-xs"
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
