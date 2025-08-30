import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 secondary-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you would like to discuss anything related to payment, account, licensing, 
                partnerships, or have pre-sales questions, you're at the right place.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-foreground">Email</p>
                    <p className="text-muted-foreground">hello@savemom.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-foreground">Phone</p>
                    <p className="text-muted-foreground">8095207092</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl soft-shadow animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Enter your message" rows={4} />
                </div>
                
                <Button variant="hero" className="w-full">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;