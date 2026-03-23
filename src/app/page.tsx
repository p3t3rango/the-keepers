import DotNav from "@/components/DotNav";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import LogoHero from "@/components/LogoHero";
import HeroSection from "@/components/HeroSection";
import GenesisSection from "@/components/GenesisSection";
import HistorySection from "@/components/HistorySection";
import TenetsSection from "@/components/TenetsSection";
import HiveSection from "@/components/HiveSection";
import MethodSection from "@/components/MethodSection";
import RitualsSection from "@/components/RitualsSection";
import LibrarySection from "@/components/LibrarySection";
import RolesSection from "@/components/RolesSection";
import AccordSection from "@/components/AccordSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DotNav />
      <TopNav />
      <MobileNav />
      <BackToTop />
      <ScrollReveal />

      <main>
        <LogoHero />
        <HeroSection />
        <GenesisSection />
        <HistorySection />
        <TenetsSection />
        <HiveSection />
        <MethodSection />
        <RitualsSection />
        <LibrarySection />
        <RolesSection />
        <AccordSection />
        <JoinSection />
      </main>

      <Footer />
    </>
  );
}
