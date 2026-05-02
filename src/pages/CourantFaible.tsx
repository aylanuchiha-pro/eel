import { Wifi, Network, ShieldCheck, Home, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RealisationsSection from "@/components/RealisationsSection";
import faibleImg from "@/assets/courant-faible.jpg";

// Ajoutez vos photos de chantier ici
// Exemple : import photo1 from "@/assets/realisations/courant-faible/photo1.jpg";
const realisations = [
  // { src: photo1, alt: "Câblage réseau RJ45 — Saint-Mandé" },
  // { src: photo2, alt: "Installation domotique — Vincennes" },
  // { src: photo3, alt: "Système alarme & contrôle d'accès — Paris 12e" },
];

const CourantFaible = () => (
  <AnimatedPage>
    <PageHero
      title="Courant Faible"
      subtitle="Réseaux informatiques, domotique, alarmes et contrôle d'accès pour des bâtiments intelligents et sécurisés."
      image={faibleImg}
      icon={<Wifi className="w-7 h-7 text-primary-foreground" />}
    />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Connectez et sécurisez vos espaces
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Le courant faible englobe toutes les installations liées à la communication, la sécurité et l'automatisation. EEL déploie des solutions modernes pour rendre vos bâtiments plus intelligents et plus sûrs, avec un suivi complet de chaque chantier.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: <Network className="w-6 h-6 text-primary" />, title: "Réseaux RJ45 / Fibre", desc: "Câblage structuré, baies de brassage et réseaux haut débit pour entreprises et particuliers." },
            { icon: <Home className="w-6 h-6 text-primary" />, title: "Domotique", desc: "Automatisation de l'éclairage, des volets, du chauffage et pilotage à distance depuis votre smartphone." },
            { icon: <Camera className="w-6 h-6 text-primary" />, title: "Vidéosurveillance", desc: "Installation de systèmes de caméras IP et analogiques avec accès à distance sécurisé." },
            { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Alarmes & Contrôle d'accès", desc: "Systèmes d'alarme intrusion, détection incendie et contrôle d'accès par badge ou biométrie." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="p-8 rounded-2xl electric-gradient">
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Un projet réseau, domotique ou sécurité ?
            </h3>
            <p className="text-white/80 text-sm mb-5">
              Contactez-nous pour étudier ensemble la solution adaptée à vos besoins et votre budget.
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm hover:shadow-lg transition-shadow"
            >
              Demander un devis
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <RealisationsSection photos={realisations} />
  </AnimatedPage>
);

export default CourantFaible;
