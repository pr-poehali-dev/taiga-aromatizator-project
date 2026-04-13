import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/taiga/Navbar";
import { HeroSection } from "@/components/taiga/HeroSection";
import { AboutCatalogSection } from "@/components/taiga/AboutCatalogSection";
import { PurchaseContactsFooter } from "@/components/taiga/PurchaseContactsFooter";

const Index = () => {
  useReveal();

  return (
    <div className="grain">
      <Navbar />
      <HeroSection />
      <AboutCatalogSection />
      <PurchaseContactsFooter />
    </div>
  );
};

export default Index;
