import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  image: string;
}

const ElectricCard = ({ title, description, icon, to, image }: Props) => (
  <Link to={to} className="block h-full">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="electric-border group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer h-full flex flex-col"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 h-48 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl electric-gradient flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

        {/* Bouton CTA */}
        <div className="mt-5 pt-4 border-t border-border">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
            En savoir plus <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default ElectricCard;
