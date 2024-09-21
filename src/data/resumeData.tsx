import { contactData } from './contactData';
import { Educação  } from './educationData';
import { workData } from './workData';
import { skillsData } from './skillsData';
import { projectsData } from './projectsData';

export const resumeData = {
  name: 'Sophia Lopes',
  initials: 'SL',
  location: 'Goiânia-GO, Brazil, BRT',
  locationLink: 'https://www.google.com/maps/place/Goi%C3%A2nia',
  about: "Resolvo problemas e entrego soluções. Durante minha evolução profissional, desenvolvi habilidades que me beneficiaram em minha visão dinâmica e ágil ao entregar resultados. Visando sempre a qualidade e satisfação, busco uma oportunidade onde eu possa aplicar meu diferencial.",
  summary:`- Sou uma profissional com foco em performance.
    - Possuo aproximadamente 7 anos de experiência comprovada em atendimento ao público.
    - Tenho como característica a facilidade em me adaptar a diferentes rotinas e ambientes.
    - Durante a minha trajetória, adquiri conhecimento em rotinas administrativas e operacionais.
    - Sempre fascinada nos estudos e avanços da área tecnológica.`,
  avatarUrl: 'https://avatars.githubusercontent.com/u/164687795?s=400&u=9309581b9cc158b02adef3d7e9bac1d43c82160e&v=4',
  personalWebsiteUrl: '',
  contact: contactData,
  education: Educação ,
  work: workData,
  skills: skillsData,
  projects: projectsData
} as const;