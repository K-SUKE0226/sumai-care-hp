import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultationSection from "@/components/ConsultationSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import ComplianceSection from "@/components/ComplianceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ConsultationSection />
        <ServicesSection />
        <BeforeAfterSection />
        <FeaturesSection />
        <GallerySection />
        <ComplianceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
