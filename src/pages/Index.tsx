import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, BatteryCharging, Cable, Wifi, ArrowRight, Shield, CheckCircle, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import ScrollReveal from "@/components/ScrollReveal";
import ElectricCard from "@/components/ElectricCard";
import heroImg from "@/assets/hero-electrical.jpg";
import renovImg from "@/assets/renovation-electrique.jpg";
import evImg from "@/assets/ev-charging.jpg";
import fortImg from "@/assets/courant-fort.jpg";
import faibleImg from "@/assets/courant-faible.jpg";

const stats = [
  { value: "15+", label: "Ans d'expérience", icon: <Clock className="w-5 h-5 text-accent" /> },
  { value: "500+", label: "Projets réalisés", icon: <CheckCircle className="w-5 h-5 text-accent" /> },
  { value: "100%", label: "Travaux garantis", icon: <Shield className="w-5 h-5 text-accent" /> },
  { value: "48h", label: "Devis rapide", icon: <Zap className="w-5 h-5 text-accent" /> },
];

/* Variantes pour les grilles en stagger */
const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  /* L'image monte légèrement en parallaxe pendant le scroll */
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <AnimatedPage>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col overflow-hidden">
        <motion.img
          src={heroImg}
          alt="EEL Expertise Électrique en Île-de-France"
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[115%] -top-[5%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/40" />

        {/* ── Mobile ── */}
        <div className="lg:hidden relative flex-1 flex flex-col px-5 pt-24 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center gap-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
              <Zap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="text-xs font-medium text-white/90">Certifié Qualifelec &amp; IRVE</span>
            </div>

            <h1 className="font-display text-3xl font-bold text-white leading-[1.1]">
              Votre expert en
              <br />
              <span className="text-gradient">électricité</span>
              <br />
              en Île-de-France
            </h1>

            <p className="text-sm text-white/75 leading-relaxed">
              Installation, rénovation et mise en conformité — EEL accompagne les particuliers et professionnels depuis plus de 15 ans.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/25 text-sm"
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33664850936"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> 06 64 85 09 36
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 gap-2.5 mt-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                {stat.icon}
                <div>
                  <div className="font-display text-lg font-bold text-white leading-none">{stat.value}</div>
                  <div className="text-[11px] text-white/60 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden lg:flex flex-1 items-center">
          <div className="relative w-full container mx-auto px-8 py-36">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white/90">Certifié Qualifelec &amp; IRVE</span>
                </div>

                <h1 className="font-display text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
                  Votre expert en
                  <br />
                  <span className="text-gradient">électricité</span>
                  <br />
                </h1>

                <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
                  Installation, rénovation et mise en conformité — EEL accompagne les particuliers et professionnels depuis plus de 15 ans avec des garanties de qualité reconnues.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact#contact-form"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/25"
                  >
                    Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+33664850936"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                  >
                    <Phone className="w-4 h-4" /> 06 64 85 09 36
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-5"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-7"
                  >
                    {stat.icon}
                    <div className="font-display text-4xl font-bold text-white mt-4">{stat.value}</div>
                    <div className="text-sm text-white/60 mt-1.5">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cœur de métier ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal from="left">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Notre ADN</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
                Votre partenaire de confiance en électricité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Depuis plus de 15 ans, EEL accompagne les particuliers et les professionnels dans tous leurs projets électriques. De la rénovation complète à la mise en conformité, notre équipe certifiée garantit des installations sûres et conformes à la réglementation en vigueur.
              </p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
                className="flex flex-col gap-4"
              >
                {["Rénovation électrique complète", "Mise en conformité NF C 15-100", "Dépannage rapide & fiable"].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>

            <ScrollReveal from="right" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={renovImg} alt="Rénovation électrique" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Spécialités ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-secondary/70">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Nos Spécialités
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Des solutions complètes pour chaque besoin électrique, réalisées par des techniciens certifiés.
            </p>
          </ScrollReveal>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-8 items-stretch"
          >
            {[
              { title: "Bornes de Recharge IRVE", description: "Installation de bornes certifiées pour véhicules électriques, avec accompagnement pour les aides de l'État.", icon: <BatteryCharging className="w-6 h-6 text-primary-foreground" />, to: "/bornes-recharge", image: evImg },
              { title: "Courant Fort", description: "Tableaux électriques, distribution d'énergie et installations de puissance pour bâtiments résidentiels et tertiaires.", icon: <Cable className="w-6 h-6 text-primary-foreground" />, to: "/courant-fort", image: fortImg },
              { title: "Courant Faible", description: "Réseaux RJ45, domotique, alarmes et contrôle d'accès pour votre confort et votre sécurité.", icon: <Wifi className="w-6 h-6 text-primary-foreground" />, to: "/courant-faible", image: faibleImg },
            ].map((card, i) => (
              <motion.div key={i} variants={gridItem} className="h-full">
                <ElectricCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Pourquoi EEL ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pourquoi nous</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Pourquoi choisir EEL ?
            </h2>
          </ScrollReveal>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-8 items-stretch"
          >
            {[
              { icon: <Shield className="w-7 h-7 text-primary" />, title: "Certifications reconnues", desc: "Qualifelec et IRVE — gage de qualité, de compétence et de conformité pour tous vos travaux électriques." },
              { icon: <Clock className="w-7 h-7 text-primary" />, title: "Réactivité", desc: "Intervention rapide, devis personnalisé sous 48h et respect des délais annoncés sur chaque chantier." },
              { icon: <CheckCircle className="w-7 h-7 text-primary" />, title: "Travaux garantis", desc: "Nos installations sont conformes aux normes en vigueur et font l'objet d'attestations de bonne réalisation." },
            ].map((item, i) => (
              <motion.div key={i} variants={gridItem} className="h-full">
                <div className="h-full text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Un projet électrique ?
            </h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto leading-relaxed">
              Contactez-nous pour un devis gratuit et personnalisé. Réponse garantie sous 48h.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/20"
              >
                Devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33664850936"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> 06 64 85 09 36
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Index;
