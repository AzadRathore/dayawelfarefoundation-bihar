import { Link } from "react-router-dom";
import { CheckCircle2, BookOpen, Briefcase, Stethoscope, Scale, Pill, GraduationCap, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import india from "@/assets/india.jpg";

const programs = [
  { icon: BookOpen, t: "Regular Courses", d: "Full-time on-campus undergraduate & postgraduate programs." },
  { icon: GraduationCap, t: "Distance / Online Programs", d: "Flexible learning from UGC-recognized universities." },
  { icon: Briefcase, t: "Professional Degrees", d: "MBA, B.Tech, LLB, Pharmacy and more." },
  { icon: CheckCircle2, t: "Skill-Based Courses", d: "Industry-aligned diplomas and certifications." },
];

const streams = [
  { icon: Scale, t: "Law" },
  { icon: BookOpen, t: "Education" },
  { icon: Briefcase, t: "Management" },
  { icon: GraduationCap, t: "Technical" },
  { icon: Stethoscope, t: "Medical" },
  { icon: Pill, t: "Pharmacy" },
];

const Domestic = () => (
  <Layout>
    <PageHeader title="Domestic Studies" subtitle="Admission support across India's top universities" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <img src={india} alt="Indian university campus" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-elegant w-full" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">India Admission Support</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We assist students with admissions in top universities across India — regular, distance, professional and skill-based programs across all major streams.
          </p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get Free Counseling</Link></Button>
        </div>
      </div>
    </section>
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">Programs We Cover</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <div key={p.t} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center mb-4"><p.icon className="h-6 w-6" /></div>
              <h3 className="font-semibold text-foreground mb-1">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">Streams Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {streams.map((s) => (
            <div key={s.t} className="bg-gradient-card rounded-xl p-5 border border-border text-center shadow-soft hover:shadow-elegant transition-all">
              <s.icon className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="font-semibold text-foreground">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Top India College Listings</h2>
              <p className="text-muted-foreground mb-6">
                For domestic students, we provide a curated list of India's leading universities across medicine, engineering, law and management. Click below to view the full India college list.
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3"><span className="mt-1 font-semibold">•</span> IIT Bombay</li>
                <li className="flex items-start gap-3"><span className="mt-1 font-semibold">•</span> AIIMS Delhi</li>
                <li className="flex items-start gap-3"><span className="mt-1 font-semibold">•</span> IIM Ahmedabad</li>
                <li className="flex items-start gap-3"><span className="mt-1 font-semibold">•</span> NLSIU Bangalore</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-background p-6 text-center shadow-soft">
              <div className="text-6xl mb-4">🇮🇳</div>
              <div className="text-xl font-semibold text-foreground mb-3">India College</div>
              <p className="text-sm text-muted-foreground mb-6">Explore top and affordable Indian universities with detailed notes.</p>
              <Button asChild variant="hero" className="w-full"><Link to="/foreign/india">View India Colleges</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <CreditCard className="h-12 w-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Bihar Student Credit Card Yojna</h2>
          <p className="text-primary-foreground/90 leading-relaxed">Complete assistance with application, documentation, loan guidance and course selection — helping students fund their education without financial stress.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-3">
          {["Application Process", "Documentation Support", "Loan Guidance", "Course Selection"].map((x) => (
            <div key={x} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" /> {x}</div>
          ))}
          <Button asChild variant="secondary" className="w-full mt-2"><Link to="/contact">Apply for Assistance</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Domestic;