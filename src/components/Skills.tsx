
import { Code, Database, Brain, Palette, Cloud, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5/CSS3"]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Data Science",
      icon: Brain,
      skills: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Photoshop", "User Research", "Wireframing", "Prototyping"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"]
    },
    {
      title: "Analytics",
      icon: BarChart,
      skills: ["Google Analytics", "Tableau", "Power BI", "SQL", "Data Visualization", "A/B Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, data science, and user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
