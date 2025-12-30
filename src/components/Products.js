"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const product_List = [
    {
      id: 1,
      name: "Advanced Antiseptic",
      category: "Sanitization",
      desc: "Hospital-grade chemical solution tailored for sterile industrial environments.",
      image: "/assets/products/product_1.png",
    },
    {
      id: 2,
      name: "Bio-Clear Formula",
      category: "Laboratory",
      desc: "Reliable and safe formulation for diverse clinical research applications.",
      image: "/assets/products/product_2.png",
    },
    {
      id: 3,
      name: "Rapid-Fix Solution",
      category: "Emergency",
      desc: "Innovative product redefining performance standards in fast-paced care.",
      image: "/assets/products/product_3.png",
    },
    {
      id: 4,
      name: "PureGuard Shield",
      category: "Protection",
      desc: "Trusted by healthcare professionals for over a decade for superior safety.",
      image: "/assets/products/product_4.png",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              Our Inventory
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Premium Medical Products
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg">
            High-performance medical solutions engineered for precision and
            safety in every clinical setting.
          </p>
        </div>

        {/* Scrollable container */}
        <div className="relative group">
          <div
            id="productScroll"
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 no-scrollbar pb-8"
          >
            {product_List.map((item) => (
              <article
                key={item.id}
                className="min-w-[85%] md:min-w-[350px] snap-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group/card"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover/card:gap-3 transition-all">
                    View Specifications{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Modern Floating Navigation */}
          <div className="flex justify-center md:justify-end gap-4 mt-8">
            <button
              onClick={() =>
                document
                  .getElementById("productScroll")
                  ?.scrollBy({ left: -380, behavior: "smooth" })
              }
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("productScroll")
                  ?.scrollBy({ left: 380, behavior: "smooth" })
              }
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
