import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero animate-fade-up">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                Video Resources
              </h1>
              <p className="text-card-foreground leading-relaxed">
                Watch tutorials, demonstrations, and presentations about PUBBS Transit features and
                capabilities.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
