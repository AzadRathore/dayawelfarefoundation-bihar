import { Target, Heart, Shield, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const values = [
  { icon: Heart, t: "Student-First Approach", d: "Every decision is centered on what's best for the student." },
  { icon: Shield, t: "Transparent Process", d: "Honest, clear communication at every step." },
  { icon: Sparkles, t: "Trusted Partnerships", d: "Direct tie-ups with leading universities globally." },
  { icon: Target, t: "End-to-End Guidance", d: "From counseling to visa to pre-departure support." },
];

const About = () => (
  <Layout>
    <PageHeader title="About Us" subtitle="Trusted admission consultancy under Om Group of Education" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-soft animate-fade-in">
          <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            <strong>Daya Welfare Foundation</strong>, operated under <strong>Om Group of Education</strong>, is a trusted
            admission consultancy dedicated to helping students achieve their academic goals in India and abroad.
          </p>
          <p className="text-foreground/75 leading-relaxed">
            Our mission is to simplify education access and help students build successful careers globally — through
            transparent processes, trusted university partnerships, and unwavering end-to-end guidance.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.t} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{v.t}</h3>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
          <p className="text-foreground/75 leading-relaxed">To simplify education access and empower every student with the right guidance, regardless of background or budget.</p>
        </div>
        <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
          <p className="text-foreground/75 leading-relaxed">To become India's most trusted admission consultancy bridging students to global academic opportunities.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;