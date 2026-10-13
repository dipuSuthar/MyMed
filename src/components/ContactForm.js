"use client";
import { useState } from "react";
import Icon from "./Icon";
import { brand } from "@/data/site";

const departments = [
  "General Medicine",
  "Diagnostics & Lab",
  "Telemedicine",
  "Pharmacy",
  "Specialist Care",
  "Preventive Health",
];
const field =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    // const d = Object.fromEntries(new FormData(e.currentTarget));
    // const body = `Name: ${d.name}\nPhone: ${d.phone}\nDepartment: ${d.dept}\nPreferred date: ${d.date || "Any"}\n\n${d.message || ""}`;
    // window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Appointment request: " + d.dept)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form
      onSubmit={onSubmit}
      className="card space-y-4 p-6 md:p-8 hover:!transform-none"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Full name
          <input
            required
            name="name"
            className={`${field} mt-1.5`}
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className={`${field} mt-1.5`}
            placeholder="+91"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Department
          <select name="dept" className={`${field} mt-1.5`}>
            {departments.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink">
          Preferred date
          <input name="date" type="date" className={`${field} mt-1.5`} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        How can we help?
        <textarea
          name="message"
          rows={4}
          className={`${field} mt-1.5`}
          placeholder="Briefly describe your concern"
        />
      </label>
      <button
        type="submit"
        className="btn btn-primary w-full justify-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75"
        disabled={sent}
      >
        {sent ? "Submitted Successfully" : "Submit Application"}{" "}
        <Icon name="arrow" className="h-3.5 w-3.5" />
      </button>
      {sent && (
        <p role="status" className="text-center text-sm text-brand-700">
          Thank you! Your application has been successfully submitted, and we
          will confirm it shortly.
        </p>
      )}
    </form>
  );
}
