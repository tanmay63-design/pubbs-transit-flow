import Header from "@/components/Header";
import Footer from "@/components/Footer";
import softwareHero from "@/assets/software-hero.jpg";
import { CheckCircle, Map, Calendar, BarChart3, MonitorPlay, AlertTriangle } from "lucide-react";

const Software = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Optimal Frequency Determination",
      description:
        "Manual and AI-powered genetic algorithm-based frequency setting with instant cost calculations. Adjust frequencies to your preference and see real-time impact on operations.",
    },
    {
      icon: Map,
      title: "Interactive Map Visualization",
      description:
        "Build routes and stops through intuitive click-and-drag on actual maps. Search any location, plot stops along corridors, and visualize your entire network with reusable stop data.",
    },
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description:
        "Generate bus and crew schedules automatically for single or multiple routes. Sequential or simultaneous scheduling options adapt to your operational needs.",
    },
    {
      icon: MonitorPlay,
      title: "Real-Time Monitoring",
      description:
        "Track live bus locations, speeds, and progress. Monitor scheduled vs. actual arrivals with space-time graphs to visualize and prevent bus bunching instantly.",
    },
    {
      icon: CheckCircle,
      title: "Driver Console Integration",
      description:
        "Automatic location updates from drivers with SOS alert capabilities. Real-time communication between operators and drivers for enhanced safety and coordination.",
    },
    {
      icon: AlertTriangle,
      title: "Smart Delay Management",
      description:
        "Automatic delay detection with intelligent schedule adjustments. Prevent bus bunching by sending hold alerts to drivers at control points, improving service reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero animate-fade-up">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center">
              Bus Service Planning and Operation Software
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={softwareHero}
                  alt="PUBBS Transit Software Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-card-foreground leading-relaxed">
                  PUBBS Transit v.2.0 is developed as a web application based on the Python Flask
                  web framework. The application allows for saving the user's data in the database,
                  which can be fetched by the user whenever required. This enables seamless
                  continuation of the data entry process.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  The user can keep track of the data entered through the sidebar panel, also helps
                  in navigation. The application also allows the downloading of tabular data in CSV
                  format so that the user can use their preferred spreadsheet software to store,
                  process and generate reports using the data. The software also allows direct csv
                  file input for data entry if required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 animate-fade-up animation-delay-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Comprehensive Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-card-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Software;
