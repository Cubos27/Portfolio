import { SkillsCard } from "./skillsComponents/skills-card";
import { Experience } from "./skillsComponents/experience";
import './css/mainPage.css'

const Skills = () => {


  return (
    <div className="container">
      <Experience />
      <SkillsCard />
    </div>
  );
};

export default Skills;
