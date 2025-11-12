import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import benefit1 from "@/assets/benefit-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";
import benefit4 from "@/assets/benefit-4.jpg";
import benefit5 from "@/assets/benefit-5.jpg";
import benefit6 from "@/assets/benefit-6.jpg";

const WhySection = () => {
  const benefits = [
    "Software designed to reduce the operation cost of all buses for each trip for each route from each terminal while improving passenger comfort.",
    "System is flexible to work on various levels of ITS infrastructure (On board driver console, CCTV cameras within buses and bus stops and APC modules within buses).",
    "Software and training will be provided free of cost. Maintenance/hosting/subscription cost is insignificant compared to savings achieved in bus operations.",
  ];

  const carouselBenefits = [
    {
      image: benefit1,
      text: "Real time prediction of travel demand and travel time along a bus route at different time periods for each day.",
    },
    {
      image: benefit2,
      text: "Real time bus dispatch and control system for operators at terminals",
    },
    {
      image: benefit3,
      text: "Real time information on bus location, passenger load inside vehicles, level of crowding for the operators",
    },
    {
      image: benefit4,
      text: "Automatic generation of bus and crew schedule",
    },
    {
      image: benefit5,
      text: "Real time information on current route conditions, expected time of arrival at bus stops, delay and other emergency information for bus drivers through an on-board driver console",
    },
    {
      image: benefit6,
      text: "On-board surveillance system with panic button to transmit emergency information to the control room",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero animate-fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why PUBBS Transit v2.0?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Carousel */}
          <div className="relative px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselBenefits.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                      <div className="w-full h-64 mb-4 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={`Benefit ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        Major Benefits:
                      </h3>
                      <p className="text-card-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          {/* Right side - Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border flex gap-4 items-start"
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-card-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
