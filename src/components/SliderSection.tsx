import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const slides = [
  {
    image: slider1,
    title: "PUBBS Transit v2.0",
    description:
      "First software designed to build solutions synonymous to current manual practices of operation and management, with the advantages of artificial intelligence, information technology, and data visualization.",
  },
  {
    image: slider2,
    title: "PUBBS Transit v2.0",
    description:
      "Designed to control over speeding and bus bunching, improve fuel and fleet utilization, vacant seat reduction.",
  },
  {
    image: slider3,
    title: "PUBBS Transit v2.0",
    description:
      "Improved service reliability, comfort level, waiting time and eventually commuter satisfaction resulting in increased patronage in public transport.",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">{slides[currentSlide].title}</span>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="rounded-2xl shadow-medium w-full h-auto transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
