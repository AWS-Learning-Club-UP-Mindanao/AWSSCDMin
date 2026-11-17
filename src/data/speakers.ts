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
  bionote: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
  socials?: SpeakerSocial[];
}

// dummy data
export const speakers: Speaker[] = [
  {
    id: 'speaker1',
    name: 'Asi Guiang',
    role: 'Keynote Speaker',
    bionote: 'XYZ',
    image: { src: IB_Guiang, alt: 'Asi Guiang'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker2',
    name: 'Louigie Caminoy',
    role: 'Sponsor Talk',
    bionote: 'XYZ',
    image: { src: L_Caminoy, alt: 'Louigie Caminoy'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker3',
    name: 'Jodi Gabano',
    role: 'Tech Talk',
    bionote: 'XYZ',
    image: { src: J_Gabano, alt: 'Jodi Gabano'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker4',
    name: 'Trixie Nicole Organiza',
    role: 'Workshop',
    bionote: 'XYZ',
    image: { src: TN_Organiza, alt: 'Trixie Nicole Organiza'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker5',
    name: 'Brian Benedict De Castro',
    role: 'Workshop',
    bionote: 'XYZ',
    image: { src: BB_DeCastro, alt: 'Brian Benedict De Castro'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker6',
    name: 'Joe Hanna Cantero',
    role: 'Project Showcase & Builder Cards Playground Facilitator',
    bionote: 'XYZ',
    image: { src: JH_Cantero, alt: 'Joe Hanna Cantero'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker7',
    name: 'Ryan David Maquiling',
    role: 'Workshop',
    bionote: 'XYZ',
    image: { src: RD_Maquiling, alt: 'Ryan David Maquiling'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker8',
    name: 'Precious Jomuad',
    role: 'Capture The Flag',
    bionote: 'XYZ',
    image: { src: PM_Jomuad, alt: 'Precious Jomuad'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker9',
    name: 'Breindel Medina',
    role: 'Capture The Flag',
    bionote: 'XYZ',
    image: { src: B_Medina, alt: 'Breindel Medina'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker10',
    name: 'Nhyl Bryle Ibanez',
    role: 'Workshop',
    bionote: 'XYZ',
    image: { src: NB_Ibanez, alt: 'Nhyl Bryle Ibanez'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker11',
    name: 'Ace Kenneth Batacandulo',
    role: 'XYZ',
    bionote: 'XYZ',
    image: { src: AK_Batacandulo, alt: 'Ace Kenneth Batacandulo'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker12',
    name: 'Vince Austria',
    role: 'XYZ',
    bionote: 'XYZ',
    image: { src: V_Austria, alt: 'Vince Austria'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker13',
    name: 'Chantal Pino',
    role: 'XYZ',
    bionote: 'XYZ',
    image: { src: C_Pino, alt: 'Chantal Pino'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
  {
    id: 'speaker14',
    name: 'Mack Vinryl Combis',
    role: 'XYZ',
    bionote: 'XYZ',
    image: { src: MV_Combis, alt: 'Mack Vinryl Combis'},
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/'},
      { platform: 'github', url: 'https://www.github.com/'}
    ],
  },
];
