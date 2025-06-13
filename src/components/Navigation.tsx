
import { useState } from "react";
import { Menu, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b md:block hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            
            <div className="flex space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t md:hidden block">
        <div className="flex justify-around items-center py-2 px-4">
          <button 
            onClick={() => scrollToSection("home")}
            className="flex flex-col items-center py-2 px-3 text-xs text-foreground hover:text-primary transition-colors"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">🏠</div>
            Home
          </button>
          <button 
            onClick={() => scrollToSection("skills")}
            className="flex flex-col items-center py-2 px-3 text-xs text-foreground hover:text-primary transition-colors"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">⚡</div>
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("experience")}
            className="flex flex-col items-center py-2 px-3 text-xs text-foreground hover:text-primary transition-colors"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">💼</div>
            Work
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="flex flex-col items-center py-2 px-3 text-xs text-foreground hover:text-primary transition-colors"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">🚀</div>
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex flex-col items-center py-2 px-3 text-xs text-foreground hover:text-primary transition-colors"
          >
            <div className="w-6 h-6 mb-1 flex items-center justify-center">📧</div>
            Contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
