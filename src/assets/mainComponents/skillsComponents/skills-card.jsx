import '../css/skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";

export const SkillsCard = () => {
  const skills = [
    { name: 'HTML5', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS3', level: 85, icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: 90, icon: <FaJs /> },
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'Python', level: 70, icon: <FaPython /> },
    { name: 'Java', level: 45, icon: <FaJava /> },
    { name: 'C', level: 65, icon: <SiC /> }
  ];

  return (
    <div className="skills-container">
      <h2 className="title skills-header">My Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">

            <div className="skill-info">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>

            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
