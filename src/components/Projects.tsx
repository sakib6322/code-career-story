
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddProjectModal from "./AddProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "MK Hasan LLC",
      description: "Professional business website built with modern web technologies and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["WordPress", "Custom Theme", "PHP", "CSS3", "JavaScript"],
      demoUrl: "https://mkhasansllc.com/",
      githubUrl: "#"
    },
    {
      title: "Rayhan Redwan Amazon",
      description: "E-commerce focused website with Amazon integration and modern user interface.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Next.js", "Tailwind CSS", "Amazon API"],
      demoUrl: "https://rayhan-redwan-amazon.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Raihan Unfolds Visions",
      description: "Creative portfolio website showcasing innovative design and development skills.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "CSS3", "Animation"],
      demoUrl: "https://raihan-unfolds-visions-x3aw.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive dashboard for analyzing e-commerce metrics with real-time data visualization and predictive analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "PostgreSQL", "D3.js", "AWS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management application with AI-driven priority suggestions and automated workflow optimization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn with 95% accuracy, helping businesses retain customers proactively.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with real-time messaging, file sharing, and video call integration for teams.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "WebRTC"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "Comprehensive personal finance management app with budgeting, expense tracking, and investment portfolio analysis.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "Chart.js", "MySQL", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Data Visualization",
      description: "Interactive weather data visualization platform showing climate patterns and predictions using historical data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["D3.js", "Python", "FastAPI", "PostgreSQL", "Leaflet"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddProject = (newProject: any) => {
    const projectWithDefaults = {
      ...newProject,
      image: newProject.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      demoUrl: newProject.demoUrl || "#",
      githubUrl: newProject.githubUrl || "#"
    };
    setProjects([projectWithDefaults, ...projects]);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, data science, and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProject}
      />
    </>
  );
};

export { Projects };
export default Projects;
