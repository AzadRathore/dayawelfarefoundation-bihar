import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/domestic", label: "Domestic Studies" },
  { to: "/foreign", label: "Foreign Studies" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Daya Welfare Foundation" className="h-11 w-11 transition-transform group-hover:scale-110" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-bold text-primary text-base sm:text-lg">Daya Welfare</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5">Om Group of Education</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "text-primary bg-secondary" : "text-foreground/80 hover:text-primary hover:bg-secondary/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/contact"><GraduationCap className="h-4 w-4" /> Book Free Counseling</Link>
          </Button>
        </div>
        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium ${
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2" onClick={() => setOpen(false)}>
              <Link to="/contact">Book Free Counseling</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;