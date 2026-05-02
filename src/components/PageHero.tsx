import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  icon?: ReactNode;
}

const PageHero = ({ title, subtitle, image, icon }: Props) => (
  <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
    <div className="relative container mx-auto px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {icon && (
          <div className="w-14 h-14 rounded-xl electric-gradient flex items-center justify-center mb-4 shadow-lg">
            {icon}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{title}</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
