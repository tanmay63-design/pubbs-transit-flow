import { Link } from "react-router-dom";
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
    link: "/software",
  },
  {
    title: "Network creation and visualization",
    image: featureNetwork,
    link: "/features/network",
  },
  {
    title: "Single depot multiple route frequency setting and timetable development",
    image: featureTimetable,
    link: "/features/frequency-settings",
  },
  {
    title: "Single and Multiple route sequential and simultaneous scheduling",
    image: featureScheduling,
    link: "/features/scheduling",
  },
  {
    title: "Crew Rostering",
    image: featureCrew,
    link: "/features/crew-rostering",
  },
  {
    title: "Dispatch, Control and Surveillance System",
    image: featureDispatch,
    link: "/features/control-system",
  },
  {
    title: "Onboard driver console",
    image: featureConsole,
    link: "/features/driver-console",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30 animate-fade-up animation-delay-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive suite of tools designed for modern bus transit operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              to={feature.link}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
