import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-hero animate-fade-up">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={heroImage}
              alt="PUBBS Transit Bus Planning Software"
              className="rounded-2xl shadow-large w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full">
              <span className="text-secondary-foreground font-semibold">PUBBS Transit v2.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Integrated Planning and Operation Software for Bus Transit Operators
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Watch More Videos
              </Button>
              <Button size="lg" variant="outline">
                Request for Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
