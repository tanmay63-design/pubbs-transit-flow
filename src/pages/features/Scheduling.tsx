import Header from "@/components/Header";
import Footer from "@/components/Footer";
import featureScheduling from "@/assets/feature-scheduling.jpg";

const Scheduling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero animate-fade-up">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
                Bus Scheduling
              </h1>
              <div className="rounded-2xl overflow-hidden shadow-large mb-8">
                <img
                  src={featureScheduling}
                  alt="Bus Scheduling"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-card-foreground leading-relaxed text-center">
                Single and multiple route sequential and simultaneous scheduling for efficient fleet
                management and operations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Scheduling;
