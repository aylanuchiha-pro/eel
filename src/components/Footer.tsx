import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3 overflow-hidden h-10">
            <img src="/logo.png" alt="EEL" className="h-16 w-auto -mt-2" />
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Equipement Electrique Lounici — Votre partenaire de confiance pour tous vos projets électriques.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-sm md:text-base">Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/bornes-recharge" className="hover:opacity-100 transition-opacity">Bornes de Recharge</Link>
            <Link to="/courant-fort" className="hover:opacity-100 transition-opacity">Courant Fort</Link>
            <Link to="/courant-faible" className="hover:opacity-100 transition-opacity">Courant Faible</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-sm md:text-base">Entreprise</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Accueil</Link>
            <Link to="/avis" className="hover:opacity-100 transition-opacity">Attestations</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display font-semibold mb-3 text-sm md:text-base">Contact</h4>
          <div className="flex flex-col gap-2.5 text-sm opacity-70">
            <a href="tel:+33664850936" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Phone className="w-4 h-4" /> 06 64 85 09 36</a>
            <a href="mailto:eel_lounici@outlook.fr" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="w-4 h-4" /> eel_lounici@outlook.fr</a>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Île-de-France</div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-sm opacity-50 space-y-2">
        <div>© {new Date().getFullYear()} EEL — Equipement Electrique Lounici. Tous droits réservés.</div>
        <div className="flex flex-wrap justify-center gap-4">
          <span>SIRET : 79432765000022</span>
          <Link to="/mentions-legales" className="hover:opacity-100 transition-opacity underline underline-offset-2">Mentions légales</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
