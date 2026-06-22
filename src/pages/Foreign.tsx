import { Link } from "react-router-dom";
import { Plane, Stethoscope, CheckCircle2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import abroad from "@/assets/abroad.jpg";

const countries = [
  { c: "Canada", f: "🇨🇦", slug: "canada" },
  { c: "Australia", f: "🇦🇺", slug: "australia" },
  { c: "UK", f: "🇬🇧", slug: "uk" },
  { c: "Germany", f: "🇩🇪", slug: "germany" },
  { c: "USA", f: "🇺🇸", slug: "usa" },
  { c: "UAE", f: "🇦🇪", slug: "uae" },
  { c: "Uzbekistan", f: "🇺🇿", slug: "uzbekistan" },
  { c: "Kyrgyzstan", f: "🇰🇬", slug: "kyrgyzstan" },
  { c: "Georgia", f: "🇬🇪", slug: "georgia" },
  { c: "Russia", f: "🇷🇺", slug: "russia" },
];

const programs = ["MBBS / MD (India & Abroad)", "BDS", "BAMS", "BVSc", "Pharmacy", "Nursing"];

const Foreign = () => (
  <Layout>
    <PageHeader title="Foreign Studies" subtitle="Admission support in 10+ countries with end-to-end visa assistance" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Plane className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Study Abroad Support</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We help students secure admissions in top global destinations — covering university selection, applications, scholarships, visa processing and pre-departure orientation.
          </p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Talk to a Counselor</Link></Button>
        </div>
        <img src={abroad} alt="Study abroad concept" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-elegant w-full" />
      </div>
    </section>
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Globe2 className="h-10 w-10 text-primary mx-auto mb-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Top Countries We Cover</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {countries.map((c) => (
            <Link
              key={c.c}
              to={`/foreign/${c.slug}`}
              className="bg-card rounded-xl p-5 border border-border text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-2">{c.f}</div>
              <div className="font-semibold text-foreground">{c.c}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-14 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Stethoscope className="h-12 w-12 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Medical & Professional Programs</h2>
              <p className="text-primary-foreground/90 mb-2">Admission possible even at qualifying NEET score.</p>
              <p className="text-primary-foreground/85 text-sm">Affordable fees, WHO/NMC recognized universities, English-medium curriculum.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {programs.map((p) => (
                <div key={p} className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-4 text-center font-semibold border border-white/20 text-sm">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">What's Included</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {["University Shortlisting", "Application Filing", "SOP & LOR Support", "Scholarship Guidance", "Visa Documentation", "Interview Preparation", "Forex & Travel Help", "Pre-Departure Briefing"].map((x) => (
            <div key={x} className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> <span className="font-medium text-foreground">{x}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Foreign;