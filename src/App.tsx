import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Appartement from "./pages/Appartement";
import Emplacement from "./pages/Emplacement";
import Reserver from "./pages/Reserver";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import LodgifyTest from "./pages/LodgifyTest";
import Confirmation from "./pages/Confirmation";
import Calendrier from "./pages/Calendrier";

const App = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/emplacement" element={<Emplacement />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
                  <Route path="/lodgify-test" element={<LodgifyTest />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
