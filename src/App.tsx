import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import BornesRecharge from "./pages/BornesRecharge";
import CourantFort from "./pages/CourantFort";
import CourantFaible from "./pages/CourantFaible";
import AvisCertificats from "./pages/AvisCertificats";
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/bornes-recharge" element={<BornesRecharge />} />
        <Route path="/courant-fort" element={<CourantFort />} />
        <Route path="/courant-faible" element={<CourantFaible />} />
        <Route path="/avis" element={<AvisCertificats />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mentions-legales" element={<MentionsLegales/>}/>
</Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
