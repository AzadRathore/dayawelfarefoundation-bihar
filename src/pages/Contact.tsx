import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast({ title: "Success!", description: data.message || "We'll get back to you within 24 hours." });
        setForm({ name: "", email: "", phone: "", course: "", message: "" }); // Reset form
      } else {
        toast({ title: "Error", description: data.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to send. Please try again." });
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageHeader title="Contact Us" subtitle="Book your free counseling session today" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: Phone, t: "Phone", l: "7564814816 / 7564818166", h: "tel:7564814816" },
              { icon: Mail, t: "Email", l: "omeducation1001@gmail.com", h: "mailto:omeducation1001@gmail.com" },
              { icon: MapPin, t: "Office", l: "Kacheri Station Road, Chapra, Bihar – 841301" },
              { icon: Clock, t: "Hours", l: "Mon – Sat: 9:00 AM – 7:00 PM" },
            ].map((c) => {
              const Inner = (
                <div className="bg-gradient-card rounded-xl p-5 border border-border shadow-soft hover:shadow-elegant transition-all flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center shrink-0"><c.icon className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.t}</div>
                    <div className="font-semibold text-foreground mt-1">{c.l}</div>
                  </div>
                </div>
              );
              return c.h ? <a key={c.t} href={c.h}>{Inner}</a> : <div key={c.t}>{Inner}</div>;
            })}
          </div>
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 md:p-8 shadow-elegant">
            <h2 className="text-2xl font-bold text-foreground mb-1">Book Free Counseling</h2>
            <p className="text-muted-foreground mb-6 text-sm">Fill in your details and our expert will reach out shortly.</p>
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="course">Course / Country of Interest</Label>
                <Input id="course" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} placeholder="e.g. MBBS in Russia" className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={loading}>
                  <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Enquiry"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Kacheri+Station+Road+Chapra+Bihar+841301&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;