
import { useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import AdminPanel from "@/components/AdminPanel";
import AddSkillModal from "@/components/AddSkillModal";
import AddExperienceModal from "@/components/AddExperienceModal";
import AddProjectModal from "@/components/AddProjectModal";

const Index = () => {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <AdminPanel
        onAddSkill={() => setIsSkillModalOpen(true)}
        onAddExperience={() => setIsExperienceModalOpen(true)}
        onAddProject={() => setIsProjectModalOpen(true)}
      />
    </div>
  );
};

export default Index;
