"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { brand, nav } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "border-b border-slate-200 bg-white/90 backdrop-blur" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white"><Icon name="heartpulse" className="h-4 w-4" /></span>
          {brand.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {nav.map((n) => <li key={n.href}><a href={n.href} className="text-slate-600 transition hover:text-brand-700">{n.label}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-primary hidden !py-2.5 md:inline-flex">Book appointment</a>
        <button className="p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 px-6 pb-5 md:hidden">
          {nav.map((n) => <li key={n.href}><a onClick={() => setOpen(false)} href={n.href} className="block py-2 font-medium text-slate-700">{n.label}</a></li>)}
          <li><a onClick={() => setOpen(false)} href="#contact" className="btn btn-primary mt-2 w-full justify-center">Book appointment</a></li>
        </ul>
      )}
    </header>
  );
}
