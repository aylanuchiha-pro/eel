import { Award, ShieldCheck, BadgeCheck, FileText, ExternalLink, CheckCircle } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import ScrollReveal from "@/components/ScrollReveal";

// --- Remplacez pdfUrl par le chemin vers vos fichiers PDF (ex: "/pdf/qualifelec.pdf") ---
const certifications = [
  {
    name: "Qualifelec",
    desc: "Qualification professionnelle pour les travaux d'installations électriques en bâtiment.",
    icon: <Award className="w-7 h-7 text-primary" />,
    pdfUrl: "#",
  },
  {
    name: "IRVE",
    desc: "Certification obligatoire pour l'installation de bornes de recharge pour véhicules électriques.",
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    pdfUrl: "#",
  },
  
];

// --- Ajoutez vos attestations de bonne réalisation ici ---
// Exemple : { chantier: "Installation tableau électrique", lieu: "Paris 12e", date: "Mars 2024", pdfUrl: "/pdf/attestation-paris12.pdf" }
const attestations: { chantier: string; lieu: string; date: string; pdfUrl: string }[] = [
  { chantier: "Installation bornes de recharge", lieu: "Montrouge", date: "2022", pdfUrl: "/pdf/40_bornes.pdf" },
  { chantier: "Chantier CNAM", lieu: "Saint Denis", date: "2024", pdfUrl: "/pdf/CNAM.pdf" },
  { chantier: "Chantier centre médical", lieu: "Mesnil le roi", date: "2023", pdfUrl: "/pdf/Mesnil.pdf" },
];

const AvisCertificats = () => (
  <AnimatedPage>
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* En-tête */}
        <ScrollReveal className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos garanties</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Certifications & Attestations
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Retrouvez nos qualifications professionnelles et nos attestations de bonne réalisation remises à la fin de chaque chantier.
          </p>
        </ScrollReveal>

        {/* ── Certifications ───────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="font-display text-xl font-bold text-foreground mb-5">Certifications</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3 mb-14">
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-foreground">{cert.name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{cert.desc}</div>
                </div>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Voir
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Attestations de bonne réalisation ────────────────── */}
        <ScrollReveal>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">Attestations de bonne réalisation</h2>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            À la fin de chaque chantier, EEL reçoit une attestation certifiant la conformité des travaux aux normes en vigueur (NF C 15-100), le respect des délais et la bonne exécution de l'installation.
          </p>
        </ScrollReveal>

        {attestations.length === 0 ? (
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center py-14 rounded-2xl border border-dashed border-border bg-secondary/30 text-center">
              <CheckCircle className="w-10 h-10 text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground text-sm">Les attestations seront ajoutées ici prochainement.</p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="flex flex-col gap-3">
            {attestations.map((att, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-foreground">{att.chantier}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{att.lieu} — {att.date}</div>
                  </div>
                  <a
                    href={att.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Voir
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  </AnimatedPage>
);

export default AvisCertificats;
