
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.",
      achievements: [
        "Built and deployed 5 major web applications",
        "Mentored 3 junior developers",
        "Reduced server costs by 30% through optimization"
      ]
    },
    {
      title: "Data Scientist",
      company: "DataViz Solutions",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed machine learning models for predictive analytics and created data visualization dashboards for C-suite executives.",
      achievements: [
        "Improved prediction accuracy by 25%",
        "Created 15+ interactive dashboards",
        "Automated reporting processes saving 20 hours/week"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: "Built responsive web interfaces and collaborated with UX team to improve user engagement and conversion rates.",
      achievements: [
        "Increased user engagement by 35%",
        "Implemented responsive design for mobile users",
        "Collaborated on complete UI/UX redesign"
      ]
    }
  ];

  return (
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
  );
};

export default Experience;
