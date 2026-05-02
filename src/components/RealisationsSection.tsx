import { ImageIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Photo {
  src: string;
  alt: string;
}

interface Props {
  photos: Photo[];
}

const RealisationsSection = ({ photos }: Props) => {
  if (photos.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/70">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Chantiers</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">
            Nos Réalisations
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Quelques exemples de chantiers réalisés par notre équipe.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border group">
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <ImageIcon className="w-10 h-10 opacity-30" />
                    <span className="text-xs opacity-50">Photo à venir</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsSection;
