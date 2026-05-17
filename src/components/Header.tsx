import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { label: "Bornes de Recharge IRVE", path: "/bornes-recharge" },
    { label: "Courant Fort", path: "/courant-fort" },
    { label: "Courant Faible", path: "/courant-faible" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const hasDarkHero = ["/", "/bornes-recharge", "/courant-fort", "/courant-faible"].includes(location.pathname);
  const isOpaque = scrolled || !hasDarkHero;

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      isOpaque
        ? active
          ? "text-primary"
          : "text-muted-foreground hover:text-primary"
        : active
        ? "text-accent"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpaque ? "glass-strong shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 overflow-hidden">
            <img src="/logo.png" alt="EEL" className="h-16 w-auto -mt-2" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass(isActive("/"))}>Accueil</Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 ${navLinkClass(
                ["/bornes-recharge", "/courant-fort", "/courant-faible"].includes(location.pathname)
              )} cursor-pointer`}
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 glass-strong rounded-xl p-2 shadow-xl"
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                        isActive(s.path) ? "text-primary bg-primary/5" : "text-foreground"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/avis" className={navLinkClass(isActive("/avis"))}>Attestations</Link>
          <Link to="/contact" className={navLinkClass(isActive("/contact"))}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full electric-gradient text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-shadow"
          >
            <Zap className="w-4 h-4" /> Devis gratuit
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isOpaque ? "hover:bg-secondary" : "hover:bg-white/10"}`}
          >
            {mobileOpen
              ? <X className={`w-5 h-5 ${isOpaque ? "text-foreground" : "text-white"}`} />
              : <Menu className={`w-5 h-5 ${isOpaque ? "text-foreground" : "text-white"}`} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              <Link to="/" className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium text-foreground">Accueil</Link>
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium pl-8 text-foreground">
                  {s.label}
                </Link>
              ))}
              <Link to="/avis" className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium text-foreground">Attestations</Link>
              <Link to="/contact" className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium text-foreground">Contact</Link>
              <Link to="/contact" className="mt-2 px-5 py-3 rounded-full electric-gradient text-white text-sm font-semibold text-center">
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
