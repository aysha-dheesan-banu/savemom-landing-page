import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-primary">AI-Powered </span>
            <span className="text-blue-600">1000-Day Care</span>
            <br />
            <span className="text-primary">Platform for </span>
            <span className="text-purple-600">Mothers and</span>
            <br />
            <span className="text-purple-600">Children..</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Savemom is an AI-powered virtual maternal care platform designed to seamlessly connect mothers, 
            doctors, nurses, and labs. It delivers personalized care throughout pregnancy and early childhood by 
            enabling real-time monitoring, early risk detection, and coordinated support across the healthcare ecosystem.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;