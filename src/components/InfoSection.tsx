import { Target, Database } from "lucide-react";

const InfoSection = () => {
  return (
    <section id="resources" className="py-20 bg-background animate-fade-up animation-delay-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bus Service Planning and Operation Software
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bus operators' profit and operation efficiency</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Comfort and convenience of public bus transport users</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Customizable as per regional and local context and goals</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Extensive Dataset Predictions
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Bus and crew schedules</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Fleet size and Service frequency</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Long and short term travel demand assessment in the most convenient and automated
                  manner
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
