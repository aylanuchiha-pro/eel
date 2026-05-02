import { BatteryCharging, CheckCircle, Euro, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "@/components/AnimatedPage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RealisationsSection from "@/components/RealisationsSection";
import evImg from "@/assets/ev-charging.jpg";

// Ajoutez vos photos de chantier ici
// Exemple : import photo1 from "@/assets/realisations/bornes/photo1.jpg";
const realisations = [
  // { src: photo1, alt: "Installation borne de recharge — Vincennes" },
  // { src: photo2, alt: "Borne IRVE en copropriété — Paris 12e" },
  // { src: photo3, alt: "Tableau IRVE — Montreuil" },
];

const BornesRecharge = () => (
  <AnimatedPage>
    <PageHero
      title="Bornes de Recharge IRVE"
      subtitle="Installation certifiée de bornes pour véhicules électriques — particuliers et copropriétés."
      image={evImg}
      icon={<BatteryCharging className="w-7 h-7 text-primary-foreground" />}
    />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Rechargez chez vous, en toute sérénité
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            EEL est certifié IRVE (Infrastructure de Recharge pour Véhicules Électriques). Nous installons des bornes de recharge adaptées à votre véhicule et à votre installation électrique, en maison individuelle comme en copropriété. Chaque installation donne lieu à une attestation de bonne réalisation.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: <Zap className="w-6 h-6 text-primary" />, title: "Puissance adaptée", desc: "De 3,7 kW à 22 kW selon vos besoins, avec gestion intelligente de la charge." },
            { icon: <Euro className="w-6 h-6 text-primary" />, title: "Aides de l'État", desc: "Bénéficiez du crédit d'impôt, de la prime ADVENIR et du taux de TVA réduit à 5,5%." },
            { icon: <Shield className="w-6 h-6 text-primary" />, title: "Certification IRVE", desc: "Installation conforme aux normes par un électricien certifié, obligatoire au-delà de 3,7 kW." },
            { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Accompagnement complet", desc: "De l'étude de faisabilité à la mise en service, nous gérons tout pour vous." },
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
              Prêt à passer à l'électrique ?
            </h3>
            <p className="text-white/80 text-sm mb-5">
              Demandez votre devis gratuit et personnalisé. Réponse sous 48h.
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

export default BornesRecharge;
