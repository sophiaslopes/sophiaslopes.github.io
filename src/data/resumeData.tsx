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
  about: "Resolvo problemas e entrego soluções, visando qualidade e performance. Estou sempre em busca de oportunidades onde eu possa desenvolver e aplicar minhas habilidades. Gosto de tarefas difíceis e situações competitivas na qual eu consiga aplicar meu diferencial.",
  summary:`- Sou estudante de administração com objetivo de crescer no mercado profissional.
    - Possuo aproximadamente 7 anos de experiência comprovada em atendimento ao publico.
    - Facilidade em me adaptar a diferentes rotinas e ambientes.
    - Conhecimento em rotinas administrativas.
    - Habilidade em pacotes office.`,
  avatarUrl: 'https://avatars.githubusercontent.com/u/164687795?s=400&u=9309581b9cc158b02adef3d7e9bac1d43c82160e&v=4',
  personalWebsiteUrl: '',
  contact: contactData,
  education: educationData,
  work: workData,
  skills: skillsData,
  projects: projectsData
} as const;