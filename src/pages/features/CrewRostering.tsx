import Header from "@/components/Header";
import Footer from "@/components/Footer";
import featureCrew from "@/assets/feature-crew.jpg";

const CrewRostering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero animate-fade-up">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
                Crew Rostering
              </h1>
              <div className="rounded-2xl overflow-hidden shadow-large mb-8">
                <img
                  src={featureCrew}
                  alt="Crew Rostering"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-card-foreground leading-relaxed text-center">
                Automated crew rostering and management system for optimal workforce allocation and
                compliance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CrewRostering;
