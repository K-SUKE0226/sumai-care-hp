import Header from "@/components/Header";
import RealEstateHeroSection from "@/components/real-estate/RealEstateHeroSection";
import RealEstateChallengesSection from "@/components/real-estate/RealEstateChallengesSection";
import RealEstateServicesSection from "@/components/real-estate/RealEstateServicesSection";
import RealEstateCaseStudiesSection from "@/components/real-estate/RealEstateCaseStudiesSection";
import RealEstateGallerySection from "@/components/real-estate/RealEstateGallerySection";
import RealEstatePricingSection from "@/components/real-estate/RealEstatePricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RealEstateHeroSection />
        <RealEstateChallengesSection />
        <RealEstateServicesSection />
        <RealEstateCaseStudiesSection />
        <RealEstateGallerySection />
        <RealEstatePricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}