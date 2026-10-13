import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Icon, { IconBadge } from "@/components/Icon";
import { brand, hero, stats, about, services, features, process, testimonials, faqs } from "@/data/site";

function Heading({ eyebrow, title, text, center }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-4 text-slate-600">{text}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700">
                <Icon name="star" className="h-3 w-3" /> {hero.badge}
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">{hero.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{hero.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary"><Icon name="calendar" className="h-4 w-4" /> Book appointment</a>
                <a href="#services" className="btn btn-outline">Explore services</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
                {hero.points.map((p) => <li key={p} className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-brand-600" />{p}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card p-6 text-center hover:!transform-none">
                  <div className="font-display text-4xl font-extrabold text-brand-600">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">About MyMed</p>
              <h2 className="section-title">{about.title}</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-600">{about.text.map((t) => <p key={t}>{t}</p>)}</div>
            </Reveal>
            <div className="space-y-4">
              {about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card flex gap-4 p-5">
                    <IconBadge name={v.icon} />
                    <div><h3 className="font-semibold text-ink">{v.title}</h3><p className="mt-1 text-sm text-slate-600">{v.text}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Heading center eyebrow="Our services" title="Complete care, all in one place" text="Comprehensive medical services delivered by qualified professionals." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 80}>
                  <article className="card h-full p-6">
                    <IconBadge name={s.icon} />
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <Heading eyebrow="Why choose us" title="Care that respects your time and trust" />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="flex gap-4">
                  <IconBadge name={f.icon} />
                  <div><h3 className="font-semibold text-ink">{f.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{f.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-brand-900 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 max-w-2xl">
              <p className="eyebrow !text-brand-100 mb-3">How it works</p>
              <h2 className="section-title !text-white">Four simple steps to better health</h2>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <div className="border-t border-brand-700 pt-5">
                    <div className="font-display text-sm font-bold text-brand-500">{p.step}</div>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
          <Heading center eyebrow="Patient stories" title="What our patients say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="card flex h-full flex-col p-6">
                  <Icon name="quote" className="h-5 w-5 text-brand-500" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{t.text}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">{t.name[0]}</span>
                    <span><span className="block text-sm font-semibold text-ink">{t.name}</span><span className="text-xs text-slate-500">{t.role}</span></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Heading center eyebrow="FAQ" title="Frequently asked questions" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <details className="card group p-5 hover:!transform-none">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      {f.q}<Icon name="plus" className="h-3.5 w-3.5 text-brand-600 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="section-title">Book your appointment today</h2>
              <p className="mt-4 text-slate-600">Tell us what you need and our care team will get back to you quickly.</p>
              <ul className="mt-8 space-y-5 text-sm">
                {[["phone", brand.phone], ["mail", brand.email], ["pin", brand.address], ["clock", brand.hours]].map(([i, t]) => (
                  <li key={t} className="flex items-center gap-4"><IconBadge name={i} /><span className="text-slate-700">{t}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. {brand.tagline}.</p>
          <p>For emergencies, call your local emergency number.</p>
        </div>
      </footer>
    </>
  );
}
