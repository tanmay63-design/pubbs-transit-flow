import { CheckCircle } from "lucide-react";

const WhySection = () => {
  const benefits = [
    "Software designed to reduce the operation cost of all buses for each trip for each route from each terminal while improving passenger comfort.",
    "System is flexible to work on various levels of ITS infrastructure (On board driver console, CCTV cameras within buses and bus stops and APC modules within buses).",
    "Software and training will be provided free of cost. Maintenance/hosting/subscription cost is insignificant compared to savings achieved in bus operations.",
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why PUBBS Transit v2.0?
            </h2>
          </div>

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
