import featurePlanning from "@/assets/feature-planning.jpg";
import featureNetwork from "@/assets/feature-network.jpg";
import featureTimetable from "@/assets/feature-timetable.jpg";
import featureScheduling from "@/assets/feature-scheduling.jpg";
import featureCrew from "@/assets/feature-crew.jpg";
import featureDispatch from "@/assets/feature-dispatch.jpg";
import featureConsole from "@/assets/feature-console.jpg";

const features = [
  {
    title: "Bus Service Planning and Operation Software",
    image: featurePlanning,
  },
  {
    title: "Network creation and visualization",
    image: featureNetwork,
  },
  {
    title: "Single depot multiple route frequency setting and timetable development",
    image: featureTimetable,
  },
  {
    title: "Single and Multiple route sequential and simultaneous scheduling",
    image: featureScheduling,
  },
  {
    title: "Crew Rostering",
    image: featureCrew,
  },
  {
    title: "Dispatch, Control and Surveillance System",
    image: featureDispatch,
  },
  {
    title: "Onboard driver console",
    image: featureConsole,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive suite of tools designed for modern bus transit operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
