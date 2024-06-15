import { contactData } from './contactData';
import { educationData } from './educationData';
import { workData } from './workData';
import { skillsData } from './skillsData';
import { projectsData } from './projectsData';

export const resumeData = {
  name: 'Sophia Lopes',
  initials: 'SL',
  location: 'Goiânia-GO, Brazil, BRT',
  locationLink: 'https://www.google.com/maps/place/Goi%C3%A2nia',
  about: "Not your regular 2024 spoiled snowflake, tech-stack, tutorial-based developer. I'm truly a highly motivated and enthusiastic Software/AQA Engineer in love with technology, delivery focused problem solver that's been into IT since childhood, college was really an experience and helped me expanding my view and knowing lots of different people and areas.",
  summary:`
    - Really understand IT, computing, and software development bases, how stuff works, network, computer architecture, logic, OS, programming layers and languages.
    - I've been in the endeavor to apply, learn and adapt Clean Code, Design Patterns and Agile methodologies and cope with the weirdly fast way our industry is growing and evolving
    - So, I do see me as a Senior Software Engineer, not tech-stack or framework limited, although my expertise is in .NET backend development and automation testing with a strong willingness to acquire deeper proficiency in diverse technologies and programming languages
    - Proven experience in automation, DevOps, and streamlining repetitive tasks through the implementation of automation solutions
    -As a quick learner, I always seek opportunities to further enhance technical skills and professional growth`,
  avatarUrl: '',
  personalWebsiteUrl: '',
  contact: contactData,
  education: educationData,
  work: workData,
  skills: skillsData,
  projects: projectsData
} as const;