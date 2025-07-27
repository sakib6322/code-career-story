
import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import AddExperienceModal from "./AddExperienceModal";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Web Developer",
      company: "Markethia.com",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing and maintaining web applications with focus on WordPress development, custom themes, and plugin development for various client projects.",
      achievements: [
        "Built custom WordPress themes and plugins",
        "Developed responsive web applications",
        "Implemented modern web development practices"
      ]
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddExperience = (newExperience: any) => {
    setExperiences([newExperience, ...experiences]);
  };

  return (
    <>
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through innovative companies, building impactful solutions and growing technical expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-border"></div>
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full transform -translate-x-0.5"></div>
                
                <div className="bg-card border rounded-lg p-6 ml-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AddExperienceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddExperience}
      />
    </>
  );
};

export { Experience };
export default Experience;
