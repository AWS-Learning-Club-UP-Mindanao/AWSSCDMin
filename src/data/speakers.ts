export type SocialPlatform = 'linkedin' | 'github' | 'facebook';

export interface SpeakerSocial {
  platform: SocialPlatform;
  url: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  /** Left out until the approved photo arrives; the card shows a placeholder instead. */
  image?: {
    src: string;
    alt: string;
  };
  socials: SpeakerSocial[];
}

// dummy data
export const speakers: Speaker[] = [
  {
    id: 'smirksalot',
    name: 'Mr. Smirksalot',
    role: 'Community Lead',
    organization: 'AWS SBG CatAlunan Grande',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'github', url: 'https://github.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
  {
    id: 'kitty-minaj',
    name: 'Kitty Minaj',
    role: 'Singer/Songwriter',
    organization: 'Maga Believer',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
  {
    id: 'kitten-heart',
    name: 'Kitten Heart',
    role: 'Community Lead',
    organization: 'AWS SBG CatAlunan Pequeno',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'github', url: 'https://github.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
  {
    id: 'kitten-heart-2',
    name: 'Kitten Heart',
    role: 'Community Lead',
    organization: 'AWS SBG CatAlunan Pequeno',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'github', url: 'https://github.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
  {
    id: 'kitty-minaj-2',
    name: 'Kitty Minaj',
    role: 'Singer/Songwriter',
    organization: 'Maga Believer',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
  {
    id: 'smirksalot-2',
    name: 'Mr. Smirksalot',
    role: 'Community Lead',
    organization: 'AWS SBG CatAlunan Grande',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'github', url: 'https://github.com/' },
      { platform: 'facebook', url: 'https://www.facebook.com/' },
    ],
  },
];
