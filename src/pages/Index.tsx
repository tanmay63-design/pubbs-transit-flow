import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SliderSection from "@/components/SliderSection";
import InfoSection from "@/components/InfoSection";
import Features from "@/components/Features";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SliderSection />
        <InfoSection />
        <Features />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
