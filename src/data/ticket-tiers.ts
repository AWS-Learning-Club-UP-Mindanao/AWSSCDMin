
// replace with the real Google Form links.
export const ticketForms = {
  regular: '#tickets', // regular gform
  discount: '#tickets', // discount gform
};

export interface TicketTier {
  id: 'lite' | 'regular' | 'pro';
  name: string;
  description: string;
  benefits: { label: string; included: boolean }[];
  price: number;           
  discountPrice?: number;
}

export const ticketTiers: TicketTier[] = [
  {
    id: 'lite',
    name: 'Lite Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Lanyard + ID', included: true },
      { label: 'Lunch', included: true },
      { label: 'Snacks', included: true },
      { label: 'Sticker Sheet', included: true },
    ],
    price: 199,
  },
  {
    id: 'regular',
    name: 'Regular Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Lanyard + ID', included: true },
      { label: 'Lunch', included: true },
      { label: 'Snacks', included: true },
      { label: 'Sticker Sheet', included: true },
      { label: 'AWS Keychain', included: true },
    ],
    price: 289,
  },
  {
    id: 'pro',
    name: 'Pro Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Lanyard + ID', included: true },
      { label: 'Lunch', included: true },
      { label: 'Snacks', included: true },
      { label: 'Sticker Sheet', included: true },
      { label: 'Clicker Keychain', included: true },
      { label: 'Early slot for Workshops', included: true },
    ],
    price: 349,
  },
];

export function getTicketFormUrl(tier: TicketTier) {
  return tier.discountPrice !== undefined ? ticketForms.discount : ticketForms.regular;
}
