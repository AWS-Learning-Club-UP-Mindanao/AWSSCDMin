// Contact details for the closing CTA.
export const contactEmail = "awscc.upmindanao@gmail.com";

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/awscc.up",
    icon: "/assets/icons/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/awscc_upmin/",
    icon: "/assets/icons/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/awscc-upmin",
    icon: "/assets/icons/linkedin.svg",
  },
];

// Venue details for the location section. The name and the description are the design frame's
// copy. The map is the Google Maps Static API when GOOGLE_MAPS_API_KEY is set at build time, and
// falls back to the exported image so a keyless build still renders. mapUrl overrides the default
// Google Maps link for the venue.
export const venue = {
  name: "Bapa Benny Auditorium, Ateneo de Davao University, Davao City, Philippines",
  address: "",
  description:
    "Lorem ipsum dolor sit amet consectetur. Ut auctor velit elit commodo ac fames. Consectetur vel nunc quisque tincidunt odio malesuada aliquam sagittis dignissim. Nec gravida suspendisse maecenas nibh hendrerit. Tellus est tincidunt aliquam fermentum etiam vitae eget tristique orci. Egestas enim mauris felis blandit mollis molestie. Tristique feugiat tortor pellentesque egestas semper neque hendrerit",
  mapQuery: "Bapa Benny Auditorium, Ateneo de Davao University, Davao City",
  // Emilio Jacinto St. campus. Wikipedia gives 7°4′20″N 125°36′47″E and a coordinate lookup
  // 7.0731, 125.6128, hence the shared values below.
  mapCenter: { lat: 7.0711276, lng: 125.61342 },
  mapZoom: 16,
		mapId: "DEMO_MAP_ID", // swap for a JavaScript Vector map ID from your project
  mapFallbackSrc: "/assets/maps/venue-map.png",
  mapUrl: "",
  mapLabel: "Open the venue location in Google Maps (opens in a new tab)",
};
