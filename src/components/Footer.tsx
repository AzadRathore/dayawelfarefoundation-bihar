import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg mb-3">
          <GraduationCap className="h-6 w-6" /> Daya Welfare Foundation
        </div>
        <p className="text-sm text-primary-foreground/80 leading-relaxed">
          Trusted admission consultancy helping students achieve academic goals in India and abroad.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
          <li><Link to="/domestic" className="hover:text-white transition-colors">Domestic Studies</Link></li>
          <li><Link to="/foreign" className="hover:text-white transition-colors">Foreign Studies</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Programs</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li>MBBS / MD Abroad</li>
          <li>Engineering & Tech</li>
          <li>Management (MBA/BBA)</li>
          <li>Bihar Student Credit Card</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 7564814816 / 7564818166</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> omeducation1001@gmail.com</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Kacheri Station Road, Chapra, Bihar – 841301</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15 py-5 text-center text-sm text-primary-foreground/70">
      © {new Date().getFullYear()} Daya Welfare Foundation. All rights reserved.
    </div>
  </footer>
);

export default Footer;