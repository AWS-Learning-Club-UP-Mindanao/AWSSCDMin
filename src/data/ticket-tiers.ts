// TICKET SALES SETTINGS
// Change the values below, then redeploy the site.
//
// Turn the button on or off:
//   open: true   = people can buy tickets
//   open: false  = button is disabled and shows the closedLabel text
//
// Early bird or regular price:
//   phase: 'discount' = early bird. Button opens the discount form and shows discountPrice.
//   phase: 'regular'  = normal sales. Button opens the regular form and shows price.
//
// Change a link: paste the new Google Form URL in forms.

export const ticketSales: {
  open: boolean;
  phase: 'discount' | 'regular';
  forms: Record<'discount' | 'regular', string>;
  closedLabel: string;
} = {
  open: true,
  phase: 'regular',
  forms: {
    discount: 'https://forms.gle/g3JjdLLDZ2Mb1KsA8',
    regular: 'https://forms.gle/G1MnG7pjCiSUCbAz5',
  },
  closedLabel: 'Sold Out',
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
    discountPrice: 170,
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
    discountPrice: 246,
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
      { label: 'Early Slot Reservation for Workshops', included: true },
    ],
    price: 349,
    discountPrice: 297,
  },
];

export function getTicketFormUrl() {
  return ticketSales.forms[ticketSales.phase];
}

export function isDiscountActive(tier: TicketTier) {
  return ticketSales.phase === 'discount' && tier.discountPrice !== undefined;
}
