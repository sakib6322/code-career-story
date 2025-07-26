
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Sakib Ahasan
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
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
