import V_Austria from "../assets/speakers/Austria.jpg"
import AK_Batacandulo from "../assets/speakers/Batacandulo.jpg"
import B_Medina from "../assets/speakers/Medina.jpg"
import C_Pino from "../assets/speakers/Pino.jpeg"
import NB_Ibanez from "../assets/speakers/Ibañez.jpg"
import BB_DeCastro from "../assets/speakers/De_Castro.jpeg"
import L_Caminoy from "../assets/speakers/Caminoy.jpg"
import TN_Organiza from "../assets/speakers/Organiza.jpg"
import MV_Combis from "../assets/speakers/Combis.jpg"
import IB_Guiang from "../assets/speakers/Isaeus_B_Guiang.png"
import J_Gabano from "../assets/speakers/Gabano.jpg"
import JH_Cantero from "../assets/speakers/Cantero.jpeg"
import PM_Jomuad from "../assets/speakers/Jomuad.jpg"
import RD_Maquiling from "../assets/speakers/Maquiling.jpg"

export type SocialPlatform = 'linkedin' | 'facebook' | 'github' | 'instagram';

export interface SpeakerSocial {
  platform: SocialPlatform;
  url: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  bionote: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
  socials?: SpeakerSocial[];
}

// dummy data
export const speakers: Speaker[] = ([
  {
    id: 'speaker1',
    name: 'Asi Guiang',
    role: 'AWS UG Leader and Community Builder | ERP & AI Solutions Architect',
    organization: 'AWSUG | Appficiency',
    bionote: 'Asi Guiang is a Magna Cum Laude graduate of the Polytechnic University of the Philippines, a DOST Merit Scholar, and an AWS Community Builder. A former Regional Captain and pioneering student leader of AWS Student User Groups Philippines (formerly AWS Cloud Clubs), Asi now helps lead AWS User Groups Philippines and works as a Cloud, ERP, and AI Solutions Architect. Asi also mentors learners preparing for AWS certifications and high-impact hackathons, and speaks publicly as an advocate for Filipino IT talent.',
    image: { src: IB_Guiang, alt: 'Asi Guiang'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/isaeus-guiang/' },
      { platform: 'facebook', url: 'https://www.facebook.com/isaeus2003' },
    ],
  },
  {
    id: 'speaker2',
    name: 'Louigie Caminoy',
    role: 'Co-Founder & CTO | AI Engineer',
    organization: 'iSkolar | Tutorials Dojo',
    bionote: 'Louigie Caminoy is a multidisciplinary technopreneur and AI Engineer with a strong interest in AI and Blockchain. He is the Co-Founder and Chief Technology Officer of iSkolar, where he oversees product development and technical strategy. He also gained industry experience as a Software Engineer at Tutorials Dojo, contributing to mobile applications that reached #1 on the App Store.\n\n' + 'Currently pursuing a BS in Computer Science at the University of Makati, Louigie also serves as the AI Lead of AWS Learning Club - Heron. He strives to transform ambitious ideas into practical solutions while inspiring the next generation of builders. He believes the future belongs to those who build it.',
    image: { src: L_Caminoy, alt: 'Louigie Caminoy'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/louigiecaminoy/' },
      { platform: 'facebook', url: 'https://facebook.com/louigie.caminoy' },
    ],
  },
  {
    id: 'speaker3',
    name: 'Jodi Gabano',
    role: 'Cloud & AI Consultant | User Group Lead',
    organization: 'Tutorials Dojo | AWS User Group Davao',
    bionote: 'Jodi Gabano is a 4th Year BS Computer Science student at UP Mindanao, Cloud & AI Consultant at Tutorials Dojo, an AWS Community Builder, and an AWS User Group Davao Lead. She is also placed 1st Runner-Up at the GCash ImaGnation 2025 Hackathon. She is passionate about cloud computing, blending creativity and tech, and developer technologies, with a focus on helping others learn and apply emerging technologies through practical, hands-on experiences. Through her professional and community work, Jodi helps make cloud and AI technologies more accessible to developers and students.',
    image: { src: J_Gabano, alt: 'Jodi Gabano'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/jodi-gabano/' },
      { platform: 'facebook', url: 'https://www.facebook.com/Jodi.Gabano/' },
    ],
  },
  {
    id: 'speaker4',
    name: 'Trixie Nicole Organiza',
    role: 'Former Cloud Engineer | AWS User Group Davao Core Team',
    organization: 'AWS User Group Davao | SPACE Cybersecurity Group Davao',
    bionote: 'Trixie is a core team member of AWS User Group Davao and a former Cloud Engineer at Elevate, where she explored innovative solutions powered by cloud technologies. She has contributed to community-led initiatives and sandbox projects focused on leveraging cloud technologies to create value for the community and experiment with proof-of-concept solutions. She is also an officer of SPACE – Cybersecurity Group Davao, where she helps facilitate monthly meetups and support training initiatives that equip students with foundational cybersecurity knowledge and skills.\n\n' + 'Additionally, she gained hands-on experience as a Security Development Intern at Symph, where she explored practices for testing and securing web applications. Driven by curiosity, Trixie enjoys discovering how different technologies work together to create meaningful innovations. A visual learner at heart, she is passionate about continuous learning and thrives in environments where she can collaborate with like-minded builders and contribute to vibrant tech communities.',
    image: { src: TN_Organiza, alt: 'Trixie Nicole Organiza'},
    socials: [
      { platform: 'linkedin', url: 'http://www.linkedin.com/in/trxncl' },
      { platform: 'facebook', url: 'https://www.facebook.com/trickseekneecoal' },
    ],
  },
  {
    id: 'speaker5',
    name: 'Brian Benedict De Castro',
    role: 'Data Analyst | Data Analytics Head',
    organization: 'AWS-SBG UP Mindanao',
    bionote: 'Benz is a Data Analyst and the Data Analytics head at AWS-SBG UPMin. With his strong background in data engineering fundamentals, statistical analysis, exploratory data analysis (EDA), and machine learning, he leads initiatives to empower students with cloud-native analytics. He focuses on leveraging the AWS Data Analytics tools to build scalable data pipelines and drive community-led projects.',
    image: { src: BB_DeCastro, alt: 'Brian Benedict De Castro'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/brianbdecastro/' },
      { platform: 'facebook', url: 'https://www.facebook.com/brian.benedict.982' },
    ],
  },
  {
    id: 'speaker6',
    name: 'Joe Hanna Cantero',
    role: 'UP Mindanao SPARCS President',
    organization: 'UP Mindanao SPARCS',
    bionote: 'Joe Cantero is a third-year Bachelor of Science in Computer Science (BSCS) student at the University of the Philippines Mindanao and the current President of the Society of Programmers and Refined Computer Scientists (SPARCS). Passionate about technology, software development, and collaborative learning, she is actively involved in initiatives that promote technical growth, innovation, and community engagement. She also participates in volunteer work and student-led activities that encourage collaboration, knowledge-sharing, and personal growth.',
    image: { src: JH_Cantero, alt: 'Joe Hanna Cantero'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/joecantero/?isSelfProfile=true' },
      { platform: 'facebook', url: 'https://www.facebook.com/joehanna.cantero.12/' },
    ],
  },
  {
    id: 'speaker7',
    name: 'Ryan David Maquiling',
    role: ' Student Developer | Data Analytics Department Co-Head',
    organization: 'AWS-SBG UP Mindanao',
    bionote: 'Ryan David C. Maquiling is a 2nd-year Computer Science student at UP Mindanao and a SUBAY 2026 Hackathon placer. Focusing on Computer Vision and Data Analytics, Ryan builds data-driven, cloud-ready applications while empowering fellow student developers in the tech community.',
    image: { src: RD_Maquiling, alt: 'Ryan David Maquiling'},
    socials: [
      { platform: 'linkedin', url: 'http://www.linkedin.com/in/ryan-maquiling-5274173b2' },
      { platform: 'facebook', url: 'https://www.facebook.com/RyanDavidMaquiling' },
    ],
  },
  {
    id: 'speaker8',
    name: 'Precious Jomuad',
    role: 'GDG Programs Lead',
    organization: 'Google Developer Group Davao',
    bionote: "Precious is a fourth-year BS Computer Science student at UP Mindanao, currently Programs Lead at Google Developer Group Davao and formerly Security Lead of the AWS Student Builder Group UP Mindanao security committee. She likes software that leaves the screen and lands in someone's actual work, which is why her interests lie in health, building tools that people use. Security comes from the same place: it is easier to care about a system once you know who depends on it. The rest of her time goes to web development and to getting other students to build things.",
    image: { src: PM_Jomuad, alt: 'Precious Jomuad'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/preciousmae/' },
      { platform: 'facebook', url: 'https://www.facebook.com/prcs.gorgggg' },
    ],
  },
  {
    id: 'speaker9',
    name: 'Breindel Medina',
    role: 'Software Engineer',
    organization: 'AWS-SBG UP Mindanao',
    bionote: 'Breindel Medina is a second-year Computer Science student at the University of the Philippines - Mindanao with a deep interest in cloud technology and modern software solutions. As a student leader within the AWS Cloud Club, he is dedicated to exploring new tools and fostering a culture of curiosity and technical growth among his peers. Driven by a passion for solving problems and trying new things, Breindel is constantly looking for ways to turn his technical interests into hands-on projects that solve real-world problems.',
    image: { src: B_Medina, alt: 'Breindel Medina'},
    socials: [
      { platform: 'linkedin', url: 'http://www.linkedin.com/in/breindel-medina' },
      { platform: 'facebook', url: 'https://www.facebook.com/breindel.medina/' },
    ],
  },
  {
    id: 'speaker10',
    name: 'Nhyl Bryle Ibanez',
    role: 'Platform Engineer',
    organization: 'Confide',
    bionote: 'Nhyl Bryle Ibañez is a Platform Engineer at Confide specializing in cloud infrastructure and security. He is an AWS Community Builder under the Cloud Operations track and leads the AWS User Group Davao. ',
    image: { src: NB_Ibanez, alt: 'Nhyl Bryle Ibanez'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/nbryleibanez/' },
      { platform: 'facebook', url: 'https://facebook.com/nhylbryle' },
    ],
  },
  {
    id: 'speaker11',
    name: 'Chantal Pino',
    role: 'Co-Founder / Operations and Product Lead',
    organization: 'Inventiv',
    bionote: 'Chantal Pino is a technology professional with over five years of experience in software development, currently specializing in operations management, product development, and community building. With a background in full-stack development, software engineering, and open-source technologies, she has transitioned from hands-on technical work into leading cross-functional teams and overseeing business and product operations.\n\n' + 'At Inventiv, Chantal leads initiatives in operational efficiency, product execution, team development, and organizational growth, helping bridge the gap between technical development and business strategy. Beyond her professional role, she is an active advocate for strengthening the local technology and startup ecosystem. She contributes to community-driven initiatives, including hackathons, technology conferences, and developer events that create opportunities for collaboration, innovation, and emerging talent.\n\n' + 'Through her work, Chantal is passionate about making technology more accessible, empowering aspiring developers, and fostering a more collaborative and inclusive tech community.',
    image: { src: C_Pino, alt: 'Chantal Pino'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/chantal-pino/' },
      { platform: 'facebook', url: 'https://www.facebook.com/chantal.pino.2025' },
    ],
  },
  {
    id: 'speaker12',
    name: 'Mack Vinryl Combis',
    role: 'Cadet Full Stack Developer',
    organization: 'Inventiv',
    bionote: 'Mack Vinryl M. Combis is a fresh IT graduate who brings a designer’s touch to the world of tech. After years immersed in graphic design, they made the leap into technology, building skills in full stack development and cybersecurity. Right now, they’re deep into cybersecurity coursework while being a cadet full stack developer at Inventiv, turning curiosity into hands-on know-how. Off the clock, Mack enjoys life to the fullest, and you’ll often find them grinding in their favorite video games.',
    image: { src: MV_Combis, alt: 'Mack Vinryl Combis'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/mack-vinryl-combis-794abb360?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      { platform: 'facebook', url: 'https://www.facebook.com/kinjouu/' },
    ],
  },
] satisfies Speaker[]).sort((a, b) => a.name.localeCompare(b.name));
