
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-1 pt-16">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage src="/lovable-uploads/3233ce0f-5e74-43aa-a684-0b5525c2bfb1.png" alt="Nure-E-Alam Siddiqy" />
              <AvatarFallback>NES</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Nure-E-Alam Siddiqy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Mathematics Student & Aspiring Developer at Kishoreganj University, passionate about web development and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToProjects} size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/sakib6322" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://wa.me/8801319186322" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.21-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.96.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                  </svg>
                </a>
              </Button>
                
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground">Building modern web applications with React, Node.js, and cloud technologies.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p className="text-muted-foreground">Analyzing complex datasets and building predictive models with Python and ML.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">Creating intuitive and beautiful user experiences with modern design principles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
