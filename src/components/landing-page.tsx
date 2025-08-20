import { Header } from "@/components/header";
import { RibbonHero } from "@/components/ribbon-hero";
import { Events } from "@/components/events";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <RibbonHero />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
