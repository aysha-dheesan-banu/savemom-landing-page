import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">savemom</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary smooth-transition">Home</a>
            <a href="#features" className="text-foreground hover:text-primary smooth-transition">Features</a>
            <a href="#products" className="text-foreground hover:text-primary smooth-transition">Our Products</a>
            <a href="#faq" className="text-foreground hover:text-primary smooth-transition">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-primary smooth-transition">Contact us</a>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary smooth-transition py-2">Home</a>
              <a href="#features" className="text-foreground hover:text-primary smooth-transition py-2">Features</a>
              <a href="#products" className="text-foreground hover:text-primary smooth-transition py-2">Our Products</a>
              <a href="#faq" className="text-foreground hover:text-primary smooth-transition py-2">FAQ</a>
              <a href="#contact" className="text-foreground hover:text-primary smooth-transition py-2">Contact us</a>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-fit">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
