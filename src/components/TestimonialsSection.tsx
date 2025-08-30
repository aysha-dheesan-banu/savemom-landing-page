import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 secondary-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium mb-4 block">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            What people say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-xl soft-shadow hover:elegant-shadow smooth-transition animate-scale-in">
            <div className="text-center">
              <div className="text-primary font-bold text-lg mb-4">SUNRISE</div>
              
              <div className="relative mb-8">
                <Quote className="w-12 h-12 text-primary/20 absolute -top-6 left-1/2 transform -translate-x-1/2" />
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                  "With SaveMom, we've reduced complications during pregnancy by offering timely care and insights. 
                  It's an essential tool for modern maternal care."
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RM
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-lg">Dr. Rajiv Menon</h4>
                  <p className="text-gray-600">Director of Maternal Health Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;