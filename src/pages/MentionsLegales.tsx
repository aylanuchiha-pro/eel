import AnimatedPage from "@/components/AnimatedPage";
import ScrollReveal from "@/components/ScrollReveal";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <ScrollReveal>
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  </ScrollReveal>
);

const MentionsLegales = () => (
  <AnimatedPage>
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">

        <div className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Mentions légales</h1>
          <p className="text-muted-foreground text-sm">Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.</p>
        </div>

        <Section title="Éditeur du site">
          <p><span className="font-medium text-foreground">Raison sociale :</span> EEL — Equipement Electrique Lounici</p>
          <p><span className="font-medium text-foreground">Forme juridique :</span> SARL</p>
          <p><span className="font-medium text-foreground">SIRET :</span> 79432765000022</p>
          <p><span className="font-medium text-foreground">SIREN :</span> 794327650</p>
          <p><span className="font-medium text-foreground">Adresse du siège :</span> 9 allée de la maison blanche, 93320, Les pavillons sous bois</p>
          <p><span className="font-medium text-foreground">Téléphone :</span> 06 64 85 09 36</p>
          <p><span className="font-medium text-foreground">Email :</span> e2te.1511@yahoo.fr</p>
          <p><span className="font-medium text-foreground">Numéro TVA intracommunautaire :</span> FR64794327650</p>
        </Section>

        <Section title="Directeur de la publication">
          <p>Lounici Mustapha</p>
        </Section>

        <Section title="Hébergement">
          <p><span className="font-medium text-foreground">Hébergeur :</span> Vercel Inc.</p>
          <p><span className="font-medium text-foreground">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
          <p><span className="font-medium text-foreground">Site web :</span> vercel.com</p>
        </Section>

        <Section title="Assurance professionnelle">
          <p><span className="font-medium text-foreground">Assureur :</span> SMA BTP</p>
          {/*
          <p><span className="font-medium text-foreground">Numéro de contrat :</span> [NUMÉRO DE CONTRAT]</p>
          */}
          <p><span className="font-medium text-foreground">Couverture géographique :</span> France</p>
        </Section>

	{/*
        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive d'EEL — Equipement Electrique Lounici et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
          </p>
        </Section>
        */}

        <Section title="Données personnelles">
          <p>
            Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : e2te.1511@yahoo.fr.
          </p>
        </Section>

        <Section title="Cookies">
          <p>Ce site n'utilise pas de cookies de suivi ou publicitaires.</p>
        </Section>

      </div>
    </section>
  </AnimatedPage>
);

export default MentionsLegales;
