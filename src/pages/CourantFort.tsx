import { Cable, CheckCircle, Bolt, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RealisationsSection from "@/components/RealisationsSection";
import fortImg from "@/assets/courant-fort.jpg";

// Ajoutez vos photos de chantier ici
// Exemple : import photo1 from "@/assets/realisations/courant-fort/photo1.jpg";
const realisations = [
  // { src: photo1, alt: "Tableau électrique neuf — Paris 11e" },
  // { src: photo2, alt: "Mise aux normes NF C 15-100 — Créteil" },
  // { src: photo3, alt: "Câblage chantier tertiaire — Ivry-sur-Seine" },
];

const CourantFort = () => (
  <AnimatedPage>
    <PageHero
      title="Courant Fort"
      subtitle="Installations de puissance, tableaux électriques et distribution d'énergie pour le résidentiel et le tertiaire."
      image={fortImg}
      icon={<Cable className="w-7 h-7 text-primary-foreground" />}
    />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Des installations de puissance fiables et sécurisées
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Le courant fort est au cœur de toute installation électrique. EEL conçoit et réalise des systèmes de distribution d'énergie conformes aux normes les plus strictes, pour les habitations comme pour les locaux professionnels. Chaque chantier est accompagné d'une attestation de conformité.
          </p>
        </ScrollReveal>

        <div className="space-y-6 mb-16">
          {[
            { icon: <Bolt className="w-6 h-6 text-primary" />, title: "Tableaux électriques", desc: "Conception, installation et mise en conformité de tableaux de distribution avec protections différentielles et disjoncteurs certifiés." },
            { icon: <Building2 className="w-6 h-6 text-primary" />, title: "Distribution d'énergie", desc: "Câblage, chemins de câbles et alimentation générale pour bâtiments neufs et rénovation — résidentiel et tertiaire." },
            { icon: <Cable className="w-6 h-6 text-primary" />, title: "Éclairage & prises", desc: "Installation complète d'éclairage intérieur et extérieur, prises de courant et circuits spécialisés (cuisine, salle de bain, etc.)." },
            { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Mise en conformité", desc: "Diagnostic, mise en conformité NF C 15-100 et obtention du Consuel pour vos installations existantes." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="p-8 rounded-2xl electric-gradient">
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Un projet de rénovation ou de mise en conformité ?
            </h3>
            <p className="text-white/80 text-sm mb-5">
              Demandez votre devis gratuit. Diagnostic offert et réponse sous 48h.
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

export default CourantFort;
