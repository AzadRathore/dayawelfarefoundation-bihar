import { Link } from "react-router-dom";
import { GraduationCap, Compass, School, FileCheck, Plane, Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const services = [
  { icon: GraduationCap, t: "Admission Counseling", d: "Personalized career guidance based on student goals." },
  { icon: Compass, t: "Career Guidance", d: "Helping students choose the right path forward." },
  { icon: School, t: "University Selection", d: "Best-fit colleges in India & abroad based on profile." },
  { icon: FileCheck, t: "Documentation Support", d: "Complete paperwork handling — applications, SOPs, LORs." },
  { icon: Plane, t: "Visa Processing", d: "End-to-end visa assistance for all destinations." },
  { icon: Award, t: "Scholarship Assistance", d: "Identifying & applying for scholarships to reduce financial burden." },
  { icon: MessageSquare, t: "Interview Preparation", d: "Mock interviews & expert guidance for university & visa interviews." },
];

const Services = () => (
  <Layout>
    <PageHeader title="Our Services" subtitle="End-to-end support from counseling to admission" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.t} className="group relative bg-gradient-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="absolute top-4 right-5 text-5xl font-bold text-primary/10">0{i + 1}</div>
              <div className="h-14 w-14 rounded-xl bg-gradient-hero text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need help choosing the right service?</h2>
        <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">Schedule a free counseling session and our experts will guide you.</p>
        <Button asChild size="xl" variant="secondary"><Link to="/contact">Book Free Counseling</Link></Button>
      </div>
    </section>
  </Layout>
);

export default Services;