
// replace with the real Google Form links.
export const ticketForms = {
  regular: '#tickets', // regular gform
  discount: '#tickets', // discount gform
};

export interface TicketTier {
  id: 'regular' | 'pro' | 'vip';
  name: string;
  description: string;
  benefits: { label: string; included: boolean }[];
  price: number;           
  discountPrice?: number;
}

// dummy data
export const ticketTiers: TicketTier[] = [
  {
    id: 'regular',
    name: 'Regular Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Item 1', included: true },
      { label: 'Item 2', included: true },
      { label: 'Item 3', included: true },
      { label: 'Item 4', included: false },
      { label: 'Item 5', included: false },
      { label: 'Item 6', included: false },
    ],
    price: 4500,
  },
  {
    id: 'pro',
    name: 'Pro Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Item 1', included: true },
      { label: 'Item 2', included: true },
      { label: 'Item 3', included: true },
      { label: 'Item 4', included: true },
      { label: 'Item 5', included: false },
      { label: 'Item 6', included: false },
    ],
    price: 4500,
    discountPrice: 4500,
  },
  {
    id: 'vip',
    name: 'VIP Pass',
    description: 'This ticket tier is non-refundable, and all sales are final. For tier inclusions and full policy details, see the link.',
    benefits: [
      { label: 'Item 1', included: true },
      { label: 'Item 2', included: true },
      { label: 'Item 3', included: true },
      { label: 'Item 4', included: true },
      { label: 'Item 5', included: true },
      { label: 'Item 6', included: true },
    ],
    price: 4500,
  },
];

export function getTicketFormUrl(tier: TicketTier) {
  return tier.discountPrice !== undefined ? ticketForms.discount : ticketForms.regular;
}
