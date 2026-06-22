import { Link } from "react-router-dom";
import { CheckCircle2, GraduationCap, Globe2, FileCheck, Plane, Award, Users, ChevronRight, Stethoscope, BookOpen, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import hero from "@/assets/hero.jpg";
import india from "@/assets/india.jpg";
import abroad from "@/assets/abroad.jpg";

const highlights = [
  "Free Career Guidance",
  "100% Guidance Support",
  "Admission in India & Abroad",
  "Trusted by Students & Parents",
];

const courses = ["BBA", "BCA", "MBA", "B.Tech", "Diploma", "Agriculture", "B.Sc Nursing", "GNM", "MBBS", "BDS", "BHMS", "BUMS", "BPT", "LLB", "BA LLB", "B.Pharmacy"];

const countries = ["Canada", "Australia", "UK", "Germany", "USA", "UAE", "Uzbekistan", "Kyrgyzstan", "Georgia", "Russia"];

const steps = [
  { n: "01", t: "Free Counseling", d: "Personalized 1:1 session to understand your goals." },
  { n: "02", t: "Course & Country Selection", d: "Find the perfect program and destination." },
  { n: "03", t: "Documentation Support", d: "Complete handling of all paperwork." },
  { n: "04", t: "Application & Admission", d: "We secure your seat in top institutions." },
  { n: "05", t: "Visa & Final Assistance", d: "End-to-end visa and pre-departure guidance." },
];

const why = [
  { icon: Award, t: "100% Guidance Support" },
  { icon: Users, t: "Experienced Counselors" },
  { icon: CheckCircle2, t: "Trusted Admission Experts" },
  { icon: FileCheck, t: "Transparent Process" },
  { icon: GraduationCap, t: "End-to-End Support" },
  { icon: Globe2, t: "India + Abroad Expertise" },
];

const Index = () => (
  <Layout>
    {/* HERO */}
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-5">
            <CreditCard className="h-4 w-4" /> Bihar Student Credit Card Yojna Available
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Start Your <span className="text-primary">Global Education</span> Journey with Trusted Admission Experts
          </h1>
          <p className="text-lg text-muted-foreground mb-7 leading-relaxed">
            Get expert guidance for Study Abroad & Higher Education in India with 100% support at every step.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Apply Now</Link></Button>
            <Button asChild variant="outline" size="xl"><Link to="/contact">Book Free Counseling</Link></Button>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl blur-2xl opacity-25" />
          <img src={hero} alt="Students starting their global education journey" width={1536} height={1024} className="relative rounded-3xl shadow-elegant w-full" />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-elegant hidden md:flex items-center gap-3 animate-float">
            <div className="h-12 w-12 rounded-xl bg-gradient-hero flex items-center justify-center text-white"><Globe2 className="h-6 w-6" /></div>
            <div>
              <div className="font-bold text-primary">10+ Countries</div>
              <div className="text-xs text-muted-foreground">Admission Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* COURSES */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">All Courses Available</h2>
          <p className="text-muted-foreground">We guide students across all streams – Medical, Engineering, Management, Law & more.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {courses.map((c) => (
            <span key={c} className="px-5 py-2.5 rounded-full bg-gradient-card border border-border text-foreground font-medium shadow-soft hover:shadow-elegant hover:-translate-y-0.5 hover:text-primary transition-all">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* INDIA + ABROAD */}
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {[
          { img: india, title: "India Admission Support", icon: BookOpen, desc: "Top universities across India: Regular, Distance / Online, Professional & Skill-based programs.", to: "/domestic", tags: ["Law", "Education", "Management", "Medical", "Pharmacy"] },
          { img: abroad, title: "Study Abroad Support", icon: Plane, desc: "Admissions across 10+ countries with end-to-end visa & documentation assistance.", to: "/foreign", tags: countries.slice(0, 6) },
        ].map((card) => (
          <div key={card.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all">
            <div className="relative overflow-hidden">
              <img src={card.img} alt={card.title} loading="lazy" width={1280} height={800} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <card.icon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{card.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {card.tags.map((t) => <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-primary font-medium">{t}</span>)}
              </div>
              <Button asChild variant="outline"><Link to={card.to}>Learn More <ChevronRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* MEDICAL */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-14 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Stethoscope className="h-12 w-12 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Medical & Professional Study Abroad</h2>
              <p className="text-primary-foreground/85 text-lg">MBBS / MD, BDS, BAMS, BVSc, Pharmacy & Nursing — admission possible even at qualifying NEET score.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["MBBS / MD", "BDS", "BAMS", "BVSc", "Pharmacy", "Nursing"].map((p) => (
                <div key={p} className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-4 text-center font-semibold border border-white/20">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose Daya Welfare Foundation</h2>
          <p className="text-muted-foreground">Trusted by hundreds of students for transparent, end-to-end admission support.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w) => (
            <div key={w.t} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center mb-4">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{w.t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Admission Process</h2>
          <p className="text-muted-foreground">A simple 5-step journey from counseling to admission.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-gradient-card rounded-xl p-6 border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="text-4xl font-bold text-primary/15 mb-2">{s.n}</div>
              <h3 className="font-semibold text-foreground mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">Limited Seats Available — Book Your Free Counseling Session Today.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="xl" variant="secondary"><Link to="/contact">Book Free Counseling</Link></Button>
          <Button asChild size="xl" variant="outlineHero"><Link to="/contact">Apply Now</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;