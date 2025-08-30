import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-card-foreground">Savemom</span>
            </div>
            <p className="text-muted-foreground">
              Empowering every mother's wellness journey with comprehensive health tracking and community support.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Features</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Health Articles</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Community Forum</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@savemom.app</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-SAVEMOM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Savemom. All rights reserved. Made with ❤️ for mothers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;