import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Process from "@/components/site/Process";
import Gallery from "@/components/site/Gallery";
import PartnerBanner from "@/components/site/PartnerBanner";
import ContactSection from "@/components/site/ContactSection";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <PartnerBanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}