import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const phone = { display: "06 64 85 09 36", href: "tel:+33664850936" };
const email = { display: "e2te.1511@yahoo.fr", href: "mailto:e2te.1511@yahoo.fr" };

export default function Contact() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash === "#contact-form") {
      const el = document.getElementById("contact-form");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Demande de devis EEL");
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    );
    return `${email.href}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <AnimatedPage>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contactez-nous</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Parlons de votre projet
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Devis gratuit, dépannage ou simple question — on vous répond sous 48h.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <a
                href={phone.href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Téléphone</div>
                  <div className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                    {phone.display}
                  </div>
                </div>
              </a>

              <a
                href={email.href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                    {email.display}
                  </div>
                </div>
              </a>

              <div className="flex gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Île-de-France
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-4 py-2">
                  <Clock3 className="w-4 h-4 text-primary shrink-0" />
                  Réponse sous 48h
                </div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              id="contact-form"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="font-display text-xl font-bold text-foreground mb-5">Envoyer un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    placeholder="Nom et prénom"
                    required
                  />
                  <Input
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    placeholder="Téléphone"
                    required
                  />
                </div>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Votre email"
                  required
                />
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre projet..."
                  className="min-h-[130px]"
                  required
                />
                <Button type="submit" className="w-full gap-2 rounded-full font-semibold">
                  Envoyer <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
